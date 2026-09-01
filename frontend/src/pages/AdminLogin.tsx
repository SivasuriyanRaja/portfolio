import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../lib/api';

const AdminLogin = () => {
  const [secret, setSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(api.admin.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('adminToken', data.token);
        toast.success('Login successful');
        navigate('/admin/dashboard');
      } else {
        toast.error('Invalid admin secret');
      }
    } catch (error) {
      toast.error('Connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
        <div className="flex flex-col items-center mb-8 text-cream">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <Lock className="text-primary" size={32} />
          </div>
          <h2 className="text-3xl font-bold font-heading">ADMIN LOGIN</h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Admin Secret</label>
            <input 
              type="password" 
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              required 
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-primary transition-colors text-center tracking-[0.5em]"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading || !secret}
            className="w-full bg-primary text-black font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 size={20} className="animate-spin" /> : 'Enter Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
