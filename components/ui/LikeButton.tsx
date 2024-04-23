import { useState } from "react";
import { AngleUp } from "../icons/AngleUp";
import { Onest } from "next/font/google";
import { motion } from "framer-motion";
const onest = Onest({ subsets: ["latin"] });
export default function LikeButton({ postLikes }: { postLikes: number }) {
  const [isEnable, setIsEnable] = useState(true);
  const [likes, setLikes] = useState(postLikes);
  const handleLikes = () => {
    setLikes((prev) => (isEnable ? prev + 1 : prev - 1));
    setIsEnable((prev) => !prev);
  };
  const rotateVariants = {
    initial: {
      rotate: 0,
    },
    rotated: {
      rotate: 180,
    },
  };
  return (
    <div>
      <button
        type="button"
        className="border border-grays-200 rounded-sm  min-w-10"
        onClick={handleLikes}
      >
        <div className="flex border-b-2 border-grays-200 py-1.5 justify-center ">
          <motion.span
            animate={isEnable ? "initial" : "rotated"}
            variants={rotateVariants}
          >
            <AngleUp color={isEnable ? "fill-link-400" : "fill-grays-700"} />
          </motion.span>
        </div>
        <div
          className={`content-center py-1 font-semibold text-xl ${onest.className}`}
        >
          {likes}
        </div>
      </button>
    </div>
  );
}
