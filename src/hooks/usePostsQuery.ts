import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type { Post } from "../types/Post";
import { fetchPosts } from "../features/posts/postsAPI";

export const usePostsQuery = (): UseQueryResult<Post[], AxiosError> =>
  useQuery<Post[], AxiosError>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000 * 60,
  });
