import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Trash2, Edit2, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { api } from '../lib/api';

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
  createdAt: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'messages'>('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const navigate = useNavigate();

  const token = localStorage.getItem('adminToken');

  useEffect(() => {
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchData();
  }, [token, activeTab]);

  const fetchData = async () => {
    try {
      const endpoint = activeTab === 'projects' ? api.admin.projects : api.admin.messages;
      const res = await fetch(endpoint, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      if (res.status === 401 || res.status === 403) {
        handleLogout();
        return;
      }

      const data = await res.json();
      if (activeTab === 'projects') setProjects(data);
      else setMessages(data);
    } catch (error) {
      toast.error(`Failed to fetch ${activeTab}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const deleteProject = async (id: string) => {
    if(!window.confirm('Are you sure?')) return;
    try {
      const res = await fetch(`${api.admin.projects}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        toast.success('Project deleted');
        fetchData();
      }
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  const updateMessageStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`${api.admin.messages}/${id}`, {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        toast.success('Status updated');
        fetchData();
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-cream">
      {/* Top Nav */}
      <nav className="bg-black border-b border-white/10 p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-heading text-primary">ADMIN DASHBOARD</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 hover:text-primary transition-colors text-sm uppercase tracking-widest">
          <LogOut size={18} /> Logout
        </button>
      </nav>

      <div className="container mx-auto p-6 md:p-12">
        {/* Tabs */}
        <div className="flex space-x-4 mb-12 border-b border-white/10 pb-4">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-2 uppercase tracking-widest text-sm font-bold rounded-full transition-colors ${activeTab === 'projects' ? 'bg-primary text-black' : 'hover:bg-white/5'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`px-6 py-2 uppercase tracking-widest text-sm font-bold rounded-full transition-colors ${activeTab === 'messages' ? 'bg-primary text-black' : 'hover:bg-white/5'}`}
          >
            Messages
          </button>
        </div>

        {/* Content */}
        {activeTab === 'projects' ? (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-heading">Manage Projects</h2>
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg flex items-center gap-2 text-sm uppercase tracking-widest transition-colors border border-white/10">
                <Plus size={16} /> Add Project
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.length === 0 ? (
                <p className="text-white/50">No projects found. Add one to get started.</p>
              ) : projects.map(p => (
                <div key={p._id} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                  <div className="w-full h-40 bg-black/50 rounded-xl mb-4 overflow-hidden border border-white/5">
                    <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{p.title}</h3>
                  <div className="flex gap-2 mt-4 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-black/80 backdrop-blur rounded-full text-white hover:text-primary"><Edit2 size={16}/></button>
                    <button onClick={() => deleteProject(p._id)} className="p-2 bg-black/80 backdrop-blur rounded-full text-white hover:text-red-500"><Trash2 size={16}/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-heading mb-8">Contact Messages</h2>
            <div className="space-y-4">
              {messages.length === 0 ? (
                <p className="text-white/50">No messages yet.</p>
              ) : messages.map(m => (
                <div key={m._id} className={`bg-white/5 border ${m.status === 'unread' ? 'border-primary/50 bg-primary/5' : 'border-white/10'} rounded-2xl p-6 flex flex-col md:flex-row gap-6 justify-between items-start`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-xl">{m.subject}</h3>
                      <span className={`text-xs uppercase tracking-widest px-3 py-1 rounded-full ${m.status==='unread'?'bg-primary/20 text-primary': 'bg-white/10 text-white/50'}`}>
                        {m.status}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 mb-4">From: {m.name} ({m.email}) • {new Date(m.createdAt).toLocaleDateString()}</p>
                    <p className="text-cream/90">{m.message}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    {m.status === 'unread' && (
                      <button onClick={() => updateMessageStatus(m._id, 'read')} className="p-2 hover:bg-white/10 rounded-lg text-primary" title="Mark Read">
                        <CheckCircle size={20} />
                      </button>
                    )}
                    {m.status !== 'replied' && (
                      <button onClick={() => updateMessageStatus(m._id, 'replied')} className="p-2 hover:bg-white/10 rounded-lg text-green-500" title="Mark Replied">
                        <CheckCircle size={20} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
