import React from 'react'
import {useState} from 'react'

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

  return (
    <div 
    className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-500 p-4'>AuthPage
    <div className='w-full max-w-md'>
        <h2 className='text-center text-3xl font-extrabold text-white mb-8'>
            {isLogin ? "Sign in to Spark Passion": "Create a Spark Passion Account"}

        </h2>
        <div className='bg-white p-8 shadow-xl rounded-lg'>
            {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
    </div>
    </div>
  )
};

export default AuthPage;