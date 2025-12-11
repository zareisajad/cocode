import PageLayout from "@components/ui/PageLayout";
import { EyeIcon } from "../components/ui/icons";
import { PAGE_TITLES } from "../constants";



export function generateMetadata() {
  return {title: PAGE_TITLES.notifications};
}


export default function NotificationsPage() {
  return (
    <PageLayout title={PAGE_TITLES.notifications}>
      <div className="flex justify-between items-center bg-gray-900 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2"><span>12</span> <span>خوانده نشده</span></div>
        </div>
        <span className="cursor-pointer text-blue-600">خواندن همه</span>
      </div>
      <div className="flex flex-col gap-5" >
        <div className="flex justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2" >
            <span className="text-gray-500 text-sm ">۱۴۰۴-۰۹-۱۲</span>
            <p className="m-0 text-sm"> امروز بیشتر از ۴۰٪ کاربرها امتیاز گرفتی!</p>
          </div>
          <EyeIcon className="cursor-pointer" />
        </div>
        <div className="flex justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2" >
            <span className="text-gray-500 text-sm ">۱۴۰۴-۰۹-۱۲</span>
            <p className="m-0 text-gray-500 text-sm"> امروز بیشتر از ۴۰٪ کاربرها امتیاز گرفتی!</p>
          </div>
          <EyeIcon className="cursor-pointer text-gray-500" />
        </div>
        <div className="flex justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-2" >
            <span className="text-gray-500 text-sm ">۱۴۰۴-۰۹-۱۲</span>
            <p className="m-0 text-sm text-gray-500"> امروز بیشتر از ۴۰٪ کاربرها امتیاز گرفتی!</p>
          </div>
          <EyeIcon className="cursor-pointer text-gray-500" />
        </div>




      </div>
    </PageLayout>
  );
} 
