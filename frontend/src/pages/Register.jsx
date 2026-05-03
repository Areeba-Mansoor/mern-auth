import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
export default function Register() {
 const { register } = useAuth();
 const navigate = useNavigate();
 const [form, setForm] = useState({ name:'', email:'', password:'' });
 const [error, setError] = useState('');
 const [loading, setLoading] = useState(false);
 const handleChange = (e) =>
 setForm({ ...form, [e.target.name]: e.target.value });
 const handleSubmit = async (e) => {
 e.preventDefault();
 setError(''); setLoading(true);
 try {
 await register(form);
 navigate('/dashboard');
 } catch (err) {
 setError(err.response?.data?.msg || 'Something went wrong');
 } finally { setLoading(false); }
 };
 return (
 <div style={s.container}>
 <div style={s.card}>
 <h2 style={s.title}>Create account</h2>
 <p style={s.sub}>Register to get started</p>
 {error && <p style={s.error}>{error}</p>}
 <form onSubmit={handleSubmit} style={s.form}>
 <div style={s.field}>
 <label style={s.label}>Name</label>
 <input type='text' name='name' placeholder='Your full name'
 value={form.name} onChange={handleChange} required style={s.input}/>
 </div>
 <div style={s.field}>
 <label style={s.label}>Email</label>
 <input type='email' name='email' placeholder='you@example.com'
 value={form.email} onChange={handleChange} required style={s.input}/>
 </div>
 <div style={s.field}>
 <label style={s.label}>Password</label>
 <input type='password' name='password' placeholder='........'
 value={form.password} onChange={handleChange} required style={s.input}/>
 </div>
 <button type='submit' disabled={loading} style={s.btn}>
 {loading ? 'Creating account...' : 'Register'}
 </button>
 </form>
 <p style={s.footer}>Already have an account?{' '}
 <Link to='/login' style={s.link}>Login here</Link></p>
 </div>
 </div>
 );
}
const s = {
 container:{minHeight:'100vh',display:'flex',alignItems:'center',
 justifyContent:'center',backgroundColor:'#f5f5f5'},
 card:{background:'#fff',padding:'2rem',borderRadius:'12px',
 boxShadow:'0 2px 16px rgba(0,0,0,0.08)',width:'100%',maxWidth:'400px'},
 title:{fontSize:'22px',fontWeight:'500',marginBottom:'4px'},
 sub:{fontSize:'14px',color:'#888',marginBottom:'1.5rem'},
 error:{backgroundColor:'#fff0f0',color:'#cc0000',padding:'10px 14px',
 borderRadius:'8px',fontSize:'13px',marginBottom:'1rem'},
 form:{display:'flex',flexDirection:'column',gap:'1rem'},
 field:{display:'flex',flexDirection:'column',gap:'6px'},
 label:{fontSize:'13px',fontWeight:'500',color:'#444'},
 input:{padding:'10px 12px',borderRadius:'8px',border:'1px solid #ddd',
 fontSize:'14px',outline:'none'},
 btn:{marginTop:'0.5rem',padding:'11px',borderRadius:'8px',border:'none',
 backgroundColor:'#4F46E5',color:'#fff',fontSize:'14px',
 fontWeight:'500',cursor:'pointer'},
 footer:{marginTop:'1.5rem',textAlign:'center',fontSize:'13px',color:'#888'},
  link:{color:'#4F46E5',textDecoration:'none',fontWeight:'500'},
};