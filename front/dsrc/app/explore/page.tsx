
import PageLayout from "@components/ui/PageLayout";
import { PAGE_TITLES } from "../constants";
import Topics from "../components/Topics";
import Users from "../components/Users";
import Groups from "../components/Groups";
import Challenges from "../components/Challenges";

export function generateMetadata() {
  return { title: PAGE_TITLES.explore };
}

export default function ExplorePage() {
  return (
    <PageLayout title={PAGE_TITLES.explore}>
      <Topics /> 
      <Users />
      <Groups />
      <Challenges />
    </PageLayout>
  );
}

