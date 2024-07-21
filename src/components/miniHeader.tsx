import React from 'react';

const LoginSignupheader= () => {
  return (
    <nav className="hidden w-full h-8 md:flex sticky top-0 z-50 bg-green-600 items-center justify-end pr-4 space-x-6">
      <a href="/login" className="text-white hover:text-black hover:underline text-xl font-bold">Login</a>
      <a href="/register" className="text-white hover:text-black hover:underline text-xl font-bold">Sign Up</a>
    </nav>
  );
}

export default LoginSignupheader;
