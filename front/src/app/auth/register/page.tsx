"use client";

import { useAuth } from "@context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "@lib/auth";
import { MainButton } from "@/app/components/ui/MainButton";
import { Input } from "@/app/components/ui/Input";

export default function RegisterForm() {
  const { authLogin } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const data = await register(email, password);
      await authLogin(data.access);
      router.replace("/");

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">    
      <div className="w-full max-w-md px-8">
        <h2 className="text-center text-xl mb-5 text-blue-400 font-bold">ثبت نام در کوکد</h2>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <Input type="email" name="email" placeholder="ایمیل"  />
          <Input type="password" name="password" placeholder="رمز عبور"  />
          <MainButton className="mt-3 p-4" type="submit">ثبت نام</MainButton>
        </form>
        <div className="flex flex-col">
        </div>
      </div>
    </div>
  );
}
