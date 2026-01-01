import { PAGE_TITLES } from "@/app/constants";
import PageLayout from "@components/ui/PageLayout";

export function generateMetadata() {
  return { title: PAGE_TITLES.create };
}

export default function SettingsPage() {
  return ( 
  <PageLayout title={PAGE_TITLES.create}>
      <div className=""></div>
  </PageLayout>
  );
} 

