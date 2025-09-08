import api from "./api";
import type { IPost } from "../@types/Post";

interface GetAllPostsResponse {
  success: boolean;
  data?: IPost[];
  err?: string;
}

interface GetPostByIdResponse {
  success: boolean;
  data?: IPost;
  err?: string;
}

// Posts API calls
export const getAllPosts = async (): Promise<GetAllPostsResponse> => {
  const response = await api.get("/posts");
  return response.data;
};

export const getPostById = async (id: string): Promise<GetPostByIdResponse> => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
