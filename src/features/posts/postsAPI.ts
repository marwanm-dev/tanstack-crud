import axios from "../../lib/axiosInstance";
import type { Post } from "../../types/Post";

const BASE_URL = "/posts";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get(BASE_URL);
  return res.data;
};
