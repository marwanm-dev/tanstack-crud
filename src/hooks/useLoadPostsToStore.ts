import { useEffect } from "react";
import { usePostsQuery } from "./usePostsQuery";
import { useAppDispatch } from "./useAppDispatch";
import { setPosts } from "../features/posts/postsSlice";

export const useLoadPostsToRedux = () => {
  const dispatch = useAppDispatch();
  const { data, isSuccess, ...rest } = usePostsQuery();

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setPosts(data));
    }
  }, [isSuccess, data, dispatch]);

  return { data, isSuccess, ...rest };
};
