import React, {useEffect,useState} from 'react';
import axios from 'axios';
export default function Jobs(){
  const [jobs,setJobs] = useState([]);
  useEffect(()=>{
    const fetch = async ()=>{
      const token = localStorage.getItem('token');
      const res = await axios.get((process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/jobs', {
        headers: { Authorization: token ? `Bearer ${token}` : '' }
      });
      setJobs(res.data);
    }
    fetch();
  },[]);
  return <div>
    <h1 className="text-xl font-bold mb-2">Open Jobs</h1>
    <ul>
      {jobs.map(j=> <li key={j._id} className="border p-2 mb-2">
        <h2 className="font-semibold">{j.title}</h2>
        <p>{j.description}</p>
      </li>)}
    </ul>
  </div>
}
