const express = require('express');
const auth = require('../middleware/auth');
const multer = require('multer');
const path = require('path');
const Application = require('../models/Application');
const Job = require('../models/Job');
const User = require('../models/User');
const router = express.Router();
const UP = path.join(__dirname,'../../uploads');
const storage = multer.diskStorage({
  destination: (req,file,cb)=> cb(null, UP),
  filename: (req,file,cb)=> cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({storage});

router.post('/:jobId/apply', auth, upload.single('resume'), async (req,res)=>{
  try{
    const job = await Job.findById(req.params.jobId);
    if(!job) return res.status(404).send('Job not found');
    const resumeUrl = `/uploads/${req.file.filename}`;
    // Call parser microservice to parse resume and compute score (simplified: store metadata)
    const parsed = {filename: req.file.filename};
    const score = Math.floor(Math.random()*41)+60; // placeholder score 60-100
    const application = new Application({
      applicant: req.user.id, job: job._id, resumeUrl, parsed, score
    });
    await application.save();
    // TODO: send email (left as exercise; nodemailer config in .env)
    res.json(application);
  }catch(e){ res.status(500).json({msg:e.message}) }
});

router.get('/', auth, async (req,res)=>{
  const q = req.user.role === 'admin' ? {} : {applicant: req.user.id};
  const apps = await Application.find(q).populate('job').populate('applicant','name email');
  res.json(apps);
});

router.get('/:id', auth, async (req,res)=>{
  const app = await Application.findById(req.params.id).populate('job').populate('applicant','name email');
  res.json(app);
});

router.patch('/:id/status', auth, async (req,res)=>{
  if(req.user.role!=='admin') return res.status(403).send('Forbidden');
  const {status} = req.body;
  const app = await Application.findByIdAndUpdate(req.params.id, {status}, {new:true});
  res.json(app);
});

module.exports = router;
