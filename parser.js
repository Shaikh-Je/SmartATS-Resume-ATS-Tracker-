const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/parse', async (req,res)=>{
  // Expect { text } or { resumeUrl } in body. This is a minimal example showing how you'd call OpenAI.
  const body = req.body;
  if(!process.env.OPENAI_API_KEY) return res.status(500).json({msg:'OPENAI_API_KEY not set'});
  try{
    const prompt = `Extract name, skills, experience, education from resume text:\n${body.text || ''}`;
    const r = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini', messages:[{role:'user', content: prompt}], max_tokens:500
    }, { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` } });
    return res.json({parsed: r.data});
  }catch(e){ return res.status(500).json({msg: e.message}) }
});

module.exports = router;
