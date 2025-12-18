import ExploreChallenges from "./ExploreChallenges";
import ExploreGroups from "./ExploreGroups";
import ExploreTopics from "./ExploreTopics";
import ExploreUsers from "./ExploreUsers";


interface ExploreSearchProps {
  data: any[];
  query: string;
}

export default function ExploreResults({ data, query }: ExploreSearchProps) {
  // if (!data.length) {
  //  return <div className="">بدون نتیجه</div>
  //}
  return(
    <div>
      <ExploreTopics />
      <ExploreUsers />
      <ExploreGroups />
      <ExploreChallenges />

   </div>

  );
}
 
