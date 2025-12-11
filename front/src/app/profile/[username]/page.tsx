import { PAGE_TITLES } from "@/app/constants";
import ClientProfile from "./ClientProfile";
import PageLayout from "@components/ui/PageLayout";

export function generateMetadata() {
  return { title: PAGE_TITLES.profile };
}

export default function ProfilePage() {
  
  return <PageLayout title={PAGE_TITLES.profile}><ClientProfile /></PageLayout>;
} 

