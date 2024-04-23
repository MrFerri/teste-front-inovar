"use client";
import { useParams } from "@/hooks/useParams";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlass } from "../icons/MagnifyingGlass";

export default function PrimaryInput() {
  const { searchParams, handleParams } = useParams("search");
  const handleSearch = useDebouncedCallback(handleParams, 300);

  return (
    <div className="relative text-grays-600 text-sm">
      <span className="absolute top-1/3 ml-2">
        <MagnifyingGlass />
      </span>
      <input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("search")?.toString()}
        className="max-w-60 p-2 pl-6 rounded-sm bg-grays-100"
      ></input>
    </div>
  );
}
