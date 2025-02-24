// import axios from "axios";
// import { useEffect, useState } from "react";
import useFetchPosts from "../hooks/useFetchPosts";


export default function PostList() {
  // const [posts, setPosts] = useState<Post[]>([])
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState('')

  const { data, loading, error } = useFetchPosts()
  const posts = data ?? []


  // useEffect(() => {
  //   const controller = new AbortController()

  // fetch('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Error fetching data')
  //     }

  //     return response.json()

  //   })
  //   .then((data: Post[]) => {
  //     setPosts(data)
  //   })
  //   .catch((error) => {
  //     setError(error.message)
  //   })
  //   .finally(() => {
  //     setLoading(false)
  //   })

  // axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal })
  //   .then(response => {
  //     setPosts(response.data)
  //   }).catch((error) => {
  //     setError(error.message)
  //   }).finally(() => {
  //     setLoading(false)
  //   })

  // async function fetchPosts() {
  //   try {
  //     const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { signal: controller.signal, timeout: 3000 })
  //     setPosts(response.data)
  //   } catch (error) {
  //     setError((error as Error).message)
  //   }

  //   setLoading(false)
  // }

  // fetchPosts()

  // return () => {
  //   controller.abort('Operation canceled by the user.')
  // }
  // }, [])

  if (error) {
    return <div className="text-center mt-4">{error}</div>
  }

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>
  }

  return (
    <div className="w-2/3 m-auto mt-4">
      <h1>Post List</h1>
      {posts.map(post => {
        return (
          <div key={post.id} className="border border-slate-300 p-4 my-4 rounded-lg shadow">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  );
}