// import axios from "axios";
// import { useEffect, useState } from "react";
import useFetchPosts from "../hooks/useFetchPosts";


export default function PostList() {
  const { data: posts, loading, error } = useFetchPosts()

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