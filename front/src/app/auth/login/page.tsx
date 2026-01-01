
"use client";

import { login } from "@lib/auth";
import { useAuth } from "@context/AuthContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/app/components/ui/Input";
import { MainButton } from "@/app/components/ui/MainButton";

export default function LoginForm() {
  const { authLogin } = useAuth();

  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const data = await login(email, password);
      await authLogin(data.access);
      router.replace(next);

    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">    
      <div className="w-full max-w-md px-8">
        <h2 className="text-center text-xl mb-5 text-blue-400 font-bold">  ورود به کوکد</h2>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="ایمیل"  />
          <Input type="password" name="password" placeholder="رمز عبور"  />
          <MainButton className="mt-3 p-4" type="submit">ورود</MainButton>
        </form>
        <div className="flex flex-col">
          <Link href={'/forgot-password'} className='text-center mt-4 text-gray-500'>فراموشی رمز</Link>
          <Link href={'/auth/register'} className='mt-4 text-center text-blue-600'>ایجاد حساب جدید</Link>
        </div>
      </div>
    </div>
  );
}
