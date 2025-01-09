import { fetchAllPages } from "@/lib/notion";
import FeedList from "./feed-list";

export default async function Feeds() {
  const posts = await fetchAllPages();

  return (
    <>
      <FeedList posts={posts.results} />
    </>
  );
}
