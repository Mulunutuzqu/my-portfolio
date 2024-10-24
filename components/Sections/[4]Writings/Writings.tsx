import { fetchBitePages } from "@/lib/notion";
import WritingsList from "./WritingsList";

export default async function Writings() {
  const posts = await fetchBitePages();

  return <WritingsList posts={posts.results} />;
}
