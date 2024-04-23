import dynamic from "next/dynamic";

const PostLoading = dynamic(() => import("@/components/PostLoading"));
const PostList = dynamic(() => import("@/components/PostList"), {
  ssr: false,
  loading: () => <PostLoading />,
});
export default function Home() {
  return (
    <main className="flex justify-center">
      <PostList />
    </main>
  );
}
