
import PageLayout from "@components/ui/PageLayout";
import { PAGE_TITLES } from "../constants";
import TopicsSection from "@components/Topics";
import UsersSection from "@components/Users";
import GroupsSection from "@components/Groups";
import ChallengesSection from "@components/Challenges";

export function generateMetadata() {
  return { title: PAGE_TITLES.explore };
}

export default function ExplorePage() {
  return (
    <PageLayout title={PAGE_TITLES.explore}>
    <TopicsSection />
    <UsersSection />
    <GroupsSection />
    <ChallengesSection />
    </PageLayout>
  );
}
