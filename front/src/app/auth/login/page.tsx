
"use client";

import { useAuth } from "@context/AuthContext";
import Link from "next/link";

export default function LoginForm() {
  const { setAccessToken } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // important to store HttpOnly cookie
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();
      console.log(data);

      setAccessToken(data.access);
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">    
      <div className="w-full max-w-md px-8">
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <input name="email" className='border p-3 mb-2' placeholder="ایمیل" />
          <input name="password" className='border p-3 mb-2' type="password" placeholder="رمزعبور" />
          <button type="submit" className='bg-blue-500 text-white border-none mt-2 py-2'>ورود به سیستم</button>
        </form>
        <div className="flex flex-col">
          <Link href={'/forgot-password'} className='text-center mt-4 text-gray-500'>فراموشی رمز</Link>
          <Link href={'/auth/register'} className='mt-4 text-center text-blue-600'>ایجاد حساب جدید</Link>
        </div>
      </div>
    </div>
  );
}
