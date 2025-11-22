import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import CropAdvisor from './pages/CropAdvisor';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-green-700">Checking Login Status...</div>;
  }

  return (
    <Router>
      <div className="bg-[#fdfbf7] min-h-screen text-gray-800 font-sans">
        <Navbar session={session} />
        
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* SECURITY RULE 1: If logged in, going to /login redirects to /advisor */}
            <Route 
              path="/login" 
              element={!session ? <Login /> : <Navigate to="/advisor" />} 
            />

            {/* SECURITY RULE 2: PROTECTED ROUTE. Only allow CropAdvisor if session exists */}
            <Route 
              path="/advisor" 
              element={session ? <CropAdvisor session={session} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;