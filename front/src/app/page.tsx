import PageLayout from "@components/ui/PageLayout";
import { PAGE_TITLES } from "./constants";
import Avatar from "@components/ui/Avatar";



export function generateMetadata() {
  return {title: PAGE_TITLES.home};
}



export default function ExplorePage() {
  return(
    <PageLayout title={PAGE_TITLES.home}>


<div className="rounded-2xl bg-gray-900  p-4 space-y-3">
  <div className="flex items-center justify-between">
    <h3 className="font-semibold">پیشرفت این هفته</h3>
    <span className="text-sm text-blue-400">+۱۰٪</span>
  </div>

  <p className="text-sm text-zinc-300">
    این هفته ۳ تسک از مسیر Frontend و ۲ تسک از مسیر Python رو کامل کردی.
  </p>

  <button className="text-sm text-blue-400 font-medium">
    دیدن آمار کامل
  </button>
</div>

<div className="rounded-xl bg-gray-900  p-4 space-y-2">
  <h3 className="font-semibold">تسک‌های امروز</h3>

  <ul className="text-sm text-zinc-300 space-y-1">
    <li>✓ تمرین React Hooks</li>
    <li>⏳ مطالعه Promise‌ها</li>
    <li>⏳ حل یک مسئله الگوریتمی</li>
  </ul>

  <button className="text-sm text-blue-400 font-medium mt-2">
    مدیریت تسک‌ها
  </button>
</div>


      <div className="bg-gray-900 p-4 flex flex-col gap-3 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-11 h-11" />
            <div className="flex items-center gap-1">
              <span className="font-bold">سجاد زارعی </span>
              <span className="text-gray-300 text-sm">یادگیری جدید رو شروع کرد.</span>
            </div>
          </div>

    <span className="text-xs text-zinc-500">۴ دقیقه قبل</span>
        </div>
      </div>

      <div className="rounded-2xl bg-gray-900  p-4 space-y-2">
  <div className="flex items-center justify-between">
    <h3 className="font-semibold">گروه: جاوااسکریپت روزانه</h3>
    <span className="text-xs text-zinc-500">۴ دقیقه قبل</span>
  </div>

  <p className="text-sm text-zinc-300">
    امروز تمرین جدید اضافه شد: ساخت یک Countdown Timer با setInterval.
  </p>

  <button className="text-blue-400 text-sm font-medium">مشاهده پست</button>
</div>
<div className="rounded-2xl bg-gray-900  p-4 space-y-2">
  <h3 className="font-semibold">چالش: ۳۰ روز کدنویسی</h3>

  <p className="text-sm text-zinc-300">
    روز هشتم فعال شد: کار با Map و Set در جاوااسکریپت.
  </p>

  <div className="flex items-center text-xs text-zinc-500">
    <span>۳ نفر تسک امروز رو ثبت کردند</span>
  </div>

  <button className="text-sm text-blue-400 font-medium">رفتن به چالش</button>
</div>
<div className="rounded-2xl bg-gray-900  p-4 space-y-3">
  <div className="flex items-center gap-2">
    <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-11 h-11" />
    <div>
      <h4 className="font-semibold">مهدی رضایی</h4>
      <p className="text-xs text-zinc-500">۵ ساعت قبل</p>
    </div>
  </div>

  <p className="text-sm text-zinc-300">
    امروز پروژه Todo App رو با React تموم کردم!
  </p>

  <button className="text-blue-400 text-sm font-medium">مشاهده پست</button>
</div>

    </PageLayout>
  );
}
