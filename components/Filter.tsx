"use client";
import { useState } from "react";
import { Bars } from "./icons/Bars";
import { PriorityTypes } from "@/types/priority.interface";
import { useParams } from "@/hooks/useParams";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prev) => !prev);
  const { searchParams, handleParams } = useParams("order");
  const type = searchParams.get("order")?.toString() || "";

  const handlePriority = (value: string) => {
    handleParams(value);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center relative">
      <button
        className="flex border border-grays-200 p-1.5 w-full h-full rounded-sm"
        onClick={handleOpen}
      >
        <Bars />
      </button>
      {isOpen && (
        <div className="absolute top-full text-sm w-40 py-2 px-3 rounded z-50 border text-left bg-white mt-2 ">
          <span className="text-2xs font-bold">ORDER BY</span>
          <ul className="space-y-2 cursor-pointer">
            <ListItem
              type={type}
              priority={PriorityTypes.LIKES_DESC}
              handlePriority={handlePriority}
            >
              More likes
            </ListItem>
            <ListItem
              type={type}
              priority={PriorityTypes.LIKES_ASC}
              handlePriority={handlePriority}
            >
              Less likes
            </ListItem>

            <ListItem
              type={type}
              priority={PriorityTypes.DATE_DESC}
              handlePriority={handlePriority}
            >
              Most recent
            </ListItem>

            <ListItem
              type={type}
              priority={PriorityTypes.DATE_ASC}
              handlePriority={handlePriority}
            >
              Least recent
            </ListItem>

            <ListItem
              type={type}
              priority={PriorityTypes.COMMENT_DESC}
              handlePriority={handlePriority}
            >
              More comments
            </ListItem>

            <ListItem
              type={type}
              priority={PriorityTypes.COMMENT_ASC}
              handlePriority={handlePriority}
            >
              Less comments
            </ListItem>
          </ul>
        </div>
      )}
    </div>
  );
}

function ListItem({
  type,
  priority,
  handlePriority,
  children,
}: {
  type: PriorityTypes | string;
  priority: PriorityTypes;
  children: React.ReactNode;
  handlePriority: Function;
}) {
  return (
    <li
      className={
        type === priority ? "border-l-4 border-red-600 pl-2 rounded" : ""
      }
      onClick={() => handlePriority(priority)}
    >
      {children}
    </li>
  );
}
