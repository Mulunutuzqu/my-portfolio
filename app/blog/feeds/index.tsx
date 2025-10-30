import { fetchAllPages } from "@/lib/notion";
import FeedList from "./feed-list";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export default async function Feeds() {
  const posts = await fetchAllPages();

  // Format dates on the server to avoid hydration errors
  const postsWithFormattedDates = posts.results.map((post: any) => ({
    ...post,
    formattedDate: dayjs.utc(post.properties.Date.created_time).format("DD MMM YYYY "),
  }));

  return (
    <>
      <FeedList posts={postsWithFormattedDates} />
    </>
  );
}
