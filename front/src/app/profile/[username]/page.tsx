import { PAGE_TITLES } from "@/app/constants";
import ClientProfile from "./ClientProfile";
import PageLayout from "@components/ui/PageLayout";

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const username = resolvedParams.username;

  return {
    title: `${username} | ${PAGE_TITLES.profile}`,
  };
}


export default async function ProfilePage({ params }: { params: { username: string } }) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { username } = resolvedParams;

  return (
    <PageLayout title={PAGE_TITLES.profile}>
      <ClientProfile username={username} />
    </PageLayout>
  );
}
