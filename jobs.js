const express = require('express');
const auth = require('../middleware/auth');
const Job = require('../models/Job');
const router = express.Router();

router.post('/', auth, async (req,res)=>{
  if(req.user.role!=='admin') return res.status(403).send('Forbidden');
  const job = new Job({...req.body, createdBy:req.user.id});
  await job.save();
  res.json(job);
});

router.get('/', auth, async (req,res)=>{
  const jobs = await Job.find().sort({createdAt:-1});
  res.json(jobs);
});

router.get('/:id', auth, async (req,res)=>{
  const job = await Job.findById(req.params.id);
  res.json(job);
});

router.put('/:id', auth, async (req,res)=>{
  if(req.user.role!=='admin') return res.status(403).send('Forbidden');
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(job);
});

router.delete('/:id', auth, async (req,res)=>{
  if(req.user.role!=='admin') return res.status(403).send('Forbidden');
  await Job.findByIdAndDelete(req.params.id);
  res.json({msg:'deleted'});
});

module.exports = router;
