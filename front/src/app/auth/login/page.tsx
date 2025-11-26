"use client";

import { useState } from "react";
import Link from "next/link";


export default function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // try {
    //   const res = await apiFetch('/auth/login/', {
    //     method: 'POST',
    //     body: {email, password} as any,
    //   })
    //   auth?.login()
    //   router.replace(nextUrl)

    // } catch (err) {
    //   alert("Login failed: " + (err instanceof Error ? err.message : "Unknown error"));
    // } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">    
      <div className="w-full max-w-md px-8">
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input
            className='border p-3  mb-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل"
          />
          <input
            className='border p-3  mb-2'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="رمزعبور"
          />
          <button type="submit" className='bg-blue-500 text-white border-none mt-2  py-2'>ورود به سیستم</button>
        </form>
        <div className="flex flex-col">
          <Link href={'/forgot-password'} className='text-center mt-4 text-gray-500'>فراموشی رمز</Link>
          <Link href={'/auth/register'} className='mt-4 text-center text-blue-600'>ایجاد حساب جدید</Link>
        </div>
      </div>
    </div>
  );
}
