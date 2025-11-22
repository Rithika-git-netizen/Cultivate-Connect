import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; 
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true); 
  const [loading, setLoading] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault(); 
    setLoading(true);

    try {
      let result;
      if (!isLogin) {
        // SIGN UP
        result = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName }, 
          },
        });
      } else {
        // LOG IN
        result = await supabase.auth.signInWithPassword({ email, password });
      }

      if (result.error) throw result.error;

      if (!isLogin) {
         alert("Account created! You can now log in.");
         setIsLogin(true); 
      } else {
         navigate('/advisor'); 
      }

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex justify-center items-center py-12 px-4 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
      
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-b from-green-100/80 to-white p-8 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-green-600 text-3xl mx-auto mb-4 shadow-sm">
            <i className="fa-solid fa-seedling"></i>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            {isLogin ? 'Welcome Back' : 'Join Us'}
          </h2>
          <p className="text-gray-500 mt-2 text-sm font-medium">Join the farming revolution</p>
        </div>

        {/* Toggle Switch */}
        <div className="px-8 pb-6">
          <div className="flex bg-gray-100 p-1 rounded-lg shadow-inner">
            <button 
              onClick={() => setIsLogin(true)} 
              className={`w-1/2 py-2.5 rounded-md font-bold text-sm transition-all duration-300 ${
                isLogin 
                  ? 'bg-white text-gray-800 shadow-sm border border-gray-200' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Login
            </button>

            <button 
              onClick={() => setIsLogin(false)} 
              className={`w-1/2 py-2.5 rounded-md font-bold text-sm transition-all duration-300 ${
                !isLogin 
                  ? 'bg-white text-green-700 shadow-sm border border-green-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className="px-8 pb-10">
          <form onSubmit={handleAuth} className="space-y-5">
            
            {!isLogin && (
              <div className="animate-fade-in">
                <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your name" 
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition text-sm placeholder-gray-400" 
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="farmer@example.com" 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition text-sm placeholder-gray-400" 
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 ml-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••" 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition text-sm" 
              />
            </div>

            <button 
              disabled={loading}
              className={`w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-lg shadow-lg transition text-base mt-4 transform hover:-translate-y-0.5 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Processing...' : (isLogin ? 'Login' : 'Create Account')}
            </button>

            {isLogin && (
              <p className="text-center text-xs text-gray-500 mt-6">
                Forgot password? <span className="text-green-600 font-bold cursor-pointer hover:underline">Reset here</span>
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;