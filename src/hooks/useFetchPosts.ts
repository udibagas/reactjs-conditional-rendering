import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const ignore = useRef(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        setError((error as Error).message);
      }

      setLoading(false);
    }

    if (!ignore.current) {
      fetchPosts();
      ignore.current = true;
    }
  }, []);

  return { data, loading, error };
};
