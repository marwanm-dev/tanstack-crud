import { useState, useEffect } from "react";
import type { Post } from "../../../types/Post";
import toast from "react-hot-toast";

type Props = {
  onSubmit: (post: Omit<Post, "id">) => void;
  initialData?: Post;
};

export default function PostForm({ onSubmit, initialData }: Props) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [body, setBody] = useState(initialData?.body || "");

  useEffect(() => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      handleInput(textarea as HTMLTextAreaElement);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();
    if (!trimmedTitle || !trimmedBody) {
      toast.error("Title and Body cannot be empty.");
      return;
    }

    onSubmit({ title: trimmedTitle, body: trimmedBody });
    setTitle("");
    setBody("");
  };

  const handleInput = (el: HTMLTextAreaElement) => {
    const maxHeight = 400;
    el.style.height = "auto";
    const newHeight = el.scrollHeight;

    if (newHeight > maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
    } else {
      el.style.height = `${newHeight}px`;
      el.style.overflowY = "hidden";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        className="border w-full p-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        autoFocus
      />
      <textarea
        className="border w-full p-2 resize-none overflow-hidden"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value.slice(0, 300))}
        onInput={(e) => handleInput(e.currentTarget)}
        style={{ maxHeight: "400px" }}
        required
      />
      <p className="text-sm text-gray-500 text-right">{body.length}/500</p>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
}
