import { Plus } from "../icons/Plus";

export default function AddPostButton() {
  return (
    <button className="items-center px-2 gap-x-2 border border-link-500  inline-flex bg-link-400  rounded-sm text-xs font-semibold text-white">
      <span className="py-2 pr-2 border-r-2 border-link-500">
        <Plus />
      </span>
      Add Post
    </button>
  );
}
