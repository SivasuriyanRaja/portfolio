const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const api = {
  projects: `${API_BASE}/api/projects`,
  contact: `${API_BASE}/api/contact`,
  admin: {
    login: `${API_BASE}/api/admin/login`,
    projects: `${API_BASE}/api/admin/projects`,
    messages: `${API_BASE}/api/admin/messages`,
  }
};
