"use client";
import { usePosts } from "@/hooks/usePosts";
import { Post } from "@/types/post.interface";
import PostCard from "./PostCard";
import LoadMoreButton from "./ui/LoadMoreButton";
import dynamic from "next/dynamic";

const PostNotFound = dynamic(() => import("@/components/PostNotFound"), {
  ssr: false,
});

export default function PostList() {
  const { posts } = usePosts();

  return (
    <div className="my-10 space-y-10 w-full max-w-[40rem] px-2 md:px-0">
      {posts.length > 0 ? (
        <>
          {posts.map((post: Post) => (
            <PostCard key={post.created_at + Math.random()} post={post} />
          ))}
          {posts.length % 6 === 0 && <LoadMoreButton />}
        </>
      ) : (
        <PostNotFound />
      )}
    </div>
  );
}
