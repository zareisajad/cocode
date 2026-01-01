
import PageLayout from "@components/ui/PageLayout";
import { PAGE_TITLES } from "../constants";
import { ExploreSearch } from "./_components/ExploreSearch";
import ExploreResults from "./_components/ExploreResults";

export function generateMetadata() {
  return { title: PAGE_TITLES.explore };
}

interface ExplorePageProps {
  searchParams: { q?: string};
}

export default function ExplorePage({ searchParams }: ExplorePageProps) {
  const query = searchParams.q ?? "";
  // const data = TODO => fetch data here
  // TODO => pass data={data} to ExploreResults

  return (
    <PageLayout title={PAGE_TITLES.explore}>
      <ExploreSearch initialQuery={query} />    
      <ExploreResults query={query} />
    </PageLayout>
  );
} 
