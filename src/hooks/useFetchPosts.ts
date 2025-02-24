import axios from "axios";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal, timeout: 3000 }
        );
        setData(response.data);
      } catch (error) {
        setError((error as Error).message);
      }

      setLoading(false);
    }

    fetchPosts();

    // return () => {
    //   controller.abort("Operation canceled by the user.");
    // };
  }, []);

  return {
    data,
    loading,
    error,
  };
};
