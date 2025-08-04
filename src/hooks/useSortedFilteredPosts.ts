import { useMemo } from "react";
import { useAppSelector } from "./useAppSelector";

export const useSortedFilteredPosts = (
  searchQuery: string,
  sortBy: "title" | "id",
) => {
  const posts = useAppSelector((state) => state.posts.posts);

  return useMemo(() => {
    let result = [...posts];
    const q = searchQuery.toLowerCase();

    if (searchQuery)
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.body.toLowerCase().includes(q),
      );

    if (sortBy === "title")
      result.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === "id") result.sort((a, b) => a.id - b.id);

    return result;
  }, [posts, searchQuery, sortBy]);
};
