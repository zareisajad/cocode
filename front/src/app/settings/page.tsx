import { PAGE_TITLES } from "@/app/constants";
import PageLayout from "@components/ui/PageLayout";

export function generateMetadata() {
  return { title: PAGE_TITLES.settings };
}

export default function SettingsPage() {
  return ( 
  <PageLayout title={PAGE_TITLES.settings}>
      <div className=""></div>
  </PageLayout>
  );
} 

