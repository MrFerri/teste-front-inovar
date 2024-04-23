import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function usePosts() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [posts, setPosts] = useState([]);
  const urlParams = `?${params.toString()}`|| ''
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${urlParams}`)
      .then((res) => setPosts(res.data));
  }, [urlParams]);

  return { posts };
}
