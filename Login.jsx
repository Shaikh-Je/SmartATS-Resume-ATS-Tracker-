import React,{useState} from 'react';
import axios from 'axios';
export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const submit=async(e)=>{
    e.preventDefault();
    const res = await axios.post((process.env.REACT_APP_API_URL || 'http://localhost:5000') + '/api/auth/login', {email,password});
    localStorage.setItem('token', res.data.token);
    alert('Logged in');
  }
  return <form onSubmit={submit} className="max-w-md">
    <h2 className="text-lg font-semibold mb-2">Login</h2>
    <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="block mb-2 p-2 border" />
    <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="block mb-2 p-2 border" />
    <button className="p-2 bg-slate-800 text-white">Login</button>
  </form>
}
