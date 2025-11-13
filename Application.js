const mongoose = require('mongoose');
const ApplicationSchema = new mongoose.Schema({
  applicant: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  job: {type: mongoose.Schema.Types.ObjectId, ref:'Job'},
  resumeUrl: String,
  parsed: Object,
  score: Number,
  status: {type:String, enum:['Submitted','Shortlisted','Rejected','Hired'], default:'Submitted'}
}, {timestamps:true});
module.exports = mongoose.model('Application', ApplicationSchema);
