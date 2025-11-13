const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  department: String,
  experienceLevel: String,
  location: String,
  salaryRange: String,
  createdBy: {type: mongoose.Schema.Types.ObjectId, ref:'User'}
}, {timestamps:true});
module.exports = mongoose.model('Job', JobSchema);
