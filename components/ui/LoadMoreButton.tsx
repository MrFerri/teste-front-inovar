import { useParams } from "@/hooks/useParams";
import Rotate from "../icons/Rotate";

export default function LoadMoreButton() {
  const { searchParams, handleParams } = useParams("page");
  const page = searchParams.get("page") || "1";

  return (
    <button
      onClick={() => handleParams((parseInt(page) + 1).toString())}
      className="flex w-full items-center gap-x-2 rounded-sm bg-grays-100 transition-colors duration-500 ease-in-out text-link-400 hover:bg-red-200 text-sm justify-center py-4"
    >
      <Rotate />
      Load more
    </button>
  );
}
