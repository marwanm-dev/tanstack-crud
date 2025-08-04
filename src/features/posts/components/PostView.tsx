import { type ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "../../../components/Modal";
import { Table } from "../../../components/Table";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useLoadPostsToRedux } from "../../../hooks/useLoadPostsToStore";
import { useSortedFilteredPosts } from "../../../hooks/useSortedFilteredPosts";
import {
  addPost,
  deletePost,
  updatePost,
  type sortByType,
} from "../postsSlice";
import PostForm from "./PostForm";

interface Post {
  id: number;
  title: string;
  body: string;
}

const columns: ColumnDef<Post>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "title", header: "Title" },
  { accessorKey: "body", header: "Body" },
];

export default function PostsView() {
  const { isLoading, isError } = useLoadPostsToRedux();

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<sortByType>("title");

  const posts = useSortedFilteredPosts(searchQuery, sortBy);

  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleSubmit = (postData: Omit<Post, "id">) => {
    if (selectedPost) dispatch(updatePost({ ...selectedPost, ...postData }));
    else dispatch(addPost(postData));
    if (selectedPost) toast.success("Post edited!");
    else toast.success("Post added!");
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const handleEdit = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedPost(null);
    setIsModalOpen(true);
  };

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts.</p>;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleAdd}
        >
          Add New Post
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title or body"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as sortByType)}
          className="border p-2 rounded"
        >
          <option value="id">Sort by ID</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      <Table<Post>
        data={posts}
        columns={columns}
        onEdit={handleEdit}
        onDelete={(id) => {
          if (confirm("Are you sure you want to delete this post?"))
            dispatch(deletePost(id));
        }}
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <PostForm
            initialData={selectedPost ?? undefined}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </div>
  );
}
