import { Post } from "@/types/post.interface";
import LikeButton from "./ui/LikeButton";
import { intlFormatDistance } from "date-fns";
import Category from "./ui/Category";
import Image from "next/image";
import { Comment } from "./icons/Comment";
import { Circle } from "./icons/Circle";
import Separator from "./ui/Separator";
import { motion } from "framer-motion";

interface PostProps {
  post: Post;
}

export default function PostCard({ post }: PostProps) {
  function timeAgo(postTime: string) {
    const time = intlFormatDistance(parseInt(postTime), Date.now(), {
      locale: "en",
    });
    return time;
  }

  const myPost = post.author === "Nobtaka Nukui";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0.5,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
      className="flex gap-5 "
    >
      <LikeButton postLikes={parseInt(post.likes)} />
      <div className="flex-row">
        <div className="flex pb-1">
          <span className="text-grays-300 font-semibold text-2xs align-top leading-none">
            {post.url.toUpperCase()}
          </span>
        </div>
        <div className="flex pb-3">
          <a
            href={`https://${post.url}`}
            rel="noreferrer"
            target="_blank"
            className="flex"
          >
            <h1 className="text-grays-700 text-xl font-normal leading-none  ">
              {post.title}
            </h1>
          </a>
        </div>
        <div className="flex">
          <div className="flex h-full flex-wrap items-center gap-2">
            <Category value={post.category} />
            <Separator />

            <div className="relative w-5 h-5 rounded ">
              <Image
                className="rounded-sm"
                src={post.url_photo}
                alt="Profile image"
                fill
                sizes="2vw"
              />
            </div>
            <p className="text-link-400 underline text-xs underline-offset-2 font-semibold">
              {post.author}
            </p>

            <div className="h-full text-grays-600 text-2xs underline-offset-2 content-center ">
              {timeAgo(post.created_at)}
            </div>
            <Circle />

            <div className="flex text-link-400 underline text-2xs underline-offset-2">
              <Comment />
              <span className="pl-1">{post.comments} Comments</span>
            </div>
            {myPost && (
              <div className="flex  text-link-400 underline text-2xs underline-offset-2">
                <span className="pl-1">Edit</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
