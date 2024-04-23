import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function usePosts() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const [posts, setPosts] = useState([]);
  const urlParams = `?${params.toString()}`|| ''
  useEffect(() => {
    axios
      .get(`${pathname}/api/posts/${urlParams}`)
      .then((res) => setPosts(res.data));
  }, [urlParams, pathname]);

  return { posts };
}
