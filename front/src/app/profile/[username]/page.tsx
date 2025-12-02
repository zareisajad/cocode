'use client';

import { useParams } from 'next/navigation';
import { MainButton } from '@components/ui/MainButton';
import { Github, Globe, Instagram } from '@/app/components/ui/icons';
import Avatar from '@components/ui/Avatar';
import Badge from '@/app/components/ui/Badge';


export default function ProfilePage() {
const params = useParams();
const { username } = params;

return (

<div className="mx-auto max-w-4xl px-4 py-10 flex flex-col gap-10">


  <section className="pb-10 border-b border-gray-700">

    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">


      <div className="flex items-center gap-6">



        <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-36 h-36" >
            <Badge text="champion" />
        </Avatar>



        <div className="flex flex-col justify-center gap-1">
          <h2 className="text-2xl font-bold mb-2">سجاد زارعی</h2>
          <span className="">۳۲ روز</span>
          <p className=" text-sm mt-1">
            در حال یادگیری: پایتون
          </p>
        </div>
      </div>

     
      <div className="flex flex-col items-center gap-5 w-full md:w-auto">


    
        <div className="flex justify-around w-full md:w-64 text-center">

          <div>
            <span className="font-bold block">12</span>
            <span className="text-xs text-gray-400">دوست</span>
          </div>

          <div>
            <span className="font-bold  block">42</span>
            <span className="text-xs text-gray-400">مهارت</span>
          </div>

          <div>
            <span className="font-bold block">2</span>
            <span className="text-xs text-gray-400">گروه</span>
          </div>

        </div>

        <MainButton>درخواست دوستی</MainButton>
      </div>

    </div>


        <div className="md:flex-row mt-7  flex flex-col justify-between w-full flex-wrap gap-4">

            <div className="text-gray-300">
                        سجاد، برنامه‌نویس وب، در حال یادگیری حوزه امنیت و شبکه
            </div>

            <div className="flex items-center gap-3">
                <a href="https://instagram.com"><Instagram /></a>
                <a href="https://Github.com"><Github /></a>
                <a href="https://sajadzarei.com"><Globe /></a>
            </div>
        </div>


  </section>

</div>
);
}
