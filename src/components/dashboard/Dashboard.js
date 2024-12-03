import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminDashboard from './ApplicantDashboard';
import ReviewerDashboard from './ReviewerDashboard';
import ApplicantDashboard from './ApplicantDashboard';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Redirect to login
        window.location.href = '/login';
        return;
      }
      try {
        const res = await axios.get('/api/auth/user', {
          headers: { 'x-auth-token': token },
        });
        setUser(res.data);
      } catch (err) {
        console.error(err.response.data);
        window.location.href = '/login';
      }
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'reviewer':
      return <ReviewerDashboard />;
    case 'form_creator':
      return <FormCreatorDashboard />;
    case 'applicant':
      return <ApplicantDashboard />;
    default:
      return <div>Unauthorized</div>;
  }
};

export default Dashboard;
