import Avatar from "@components/ui/Avatar";
import PageLayout from "@components/ui/PageLayout";
import { PAGE_TITLES } from "../constants";
import Link from "next/link";

export function generateMetadata() {
  return {title: PAGE_TITLES.leaderboard};
}

export default function LeaderboardPage() {

  return(
  <PageLayout title={PAGE_TITLES.explore}>

      <div className="flex justify-between bg-gray-900 rounded-3xl border-1 border-yellow-400 p-5 items-center w-full gap-3">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold rank-number text-yellow-400">1</h2>
          <Link className="flex gap-5 items-center" href={"/profile/sajad/"}>
            <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-15 h-15"/>
            <span className="text-lg font-bold">سجاد زارعی</span>
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-1 items-center rank-number text-gray-300"><span>1200</span><span>XP</span></div>
      </div>

     <div className="flex justify-between bg-gray-900 rounded-3xl border-1 border-gray-400 p-5 items-center w-full gap-3">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold rank-number text-gray-400">2</h2>
          <Link className="flex gap-5 items-center" href={"/profile/sajad/"}>
            <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-15 h-15"/>
            <span className="text-lg font-bold">سجاد زارعی</span>
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-1 items-center rank-number text-gray-300"><span>980</span><span>XP</span></div>
      </div>

      <div className="flex justify-between bg-gray-900 rounded-3xl border-1 border-yellow-700 p-5 items-center w-full gap-3">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold rank-number text-yellow-700">3</h2>
          <Link className="flex gap-5 items-center" href={"/profile/sajad/"}>
            <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-15 h-15"/>
            <span className="text-lg font-bold">سجاد زارعی</span>
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-1 items-center rank-number text-gray-300"><span>567</span><span>XP</span></div>
      </div>

     <div className="flex justify-between bg-gray-900 rounded-3xl border-1 border-gray-900 p-5 items-center w-full gap-3">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold rank-number text-gray-300">4</h2>
          <Link className="flex gap-5 items-center" href={"/profile/sajad/"}>
            <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-15 h-15"/>
            <span className="text-lg font-bold">سجاد زارعی</span>
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-1 items-center rank-number text-gray-300"><span>337</span><span>XP</span></div>
      </div>

     <div className="flex justify-between bg-gray-900 rounded-3xl border-1 border-gray-900 p-5 items-center w-full gap-3">
        <div className="flex items-center gap-5">
          <h2 className="text-3xl font-bold rank-number text-gray-300">5</h2>
          <Link className="flex gap-5 items-center" href={"/profile/sajad/"}>
            <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-15 h-15"/>
            <span className="text-lg font-bold">سجاد زارعی</span>
          </Link>
        </div>
        <div className="flex flex-row-reverse gap-1 items-center rank-number text-gray-300"><span>312</span><span>XP</span></div>
      </div>

  </PageLayout>
  );
} 
