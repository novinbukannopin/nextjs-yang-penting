import Link from "next/link";
import { Post } from "@/types/post";
import { Title } from "@/component/atoms/title";

async function getPosts(): Promise<Post[]> {
  const response = await fetch("http://localhost:3001/posts");
  return await response.json();
}

export default async function PostPage() {
  const data = await getPosts();

  return (
    <>
      <Title>Post Page</Title>

      {data.map((post: Post) => (
        <div
          key={post.id}
          className={"bg-slate-100 shadow-md rounded-lg p-4 my-4"}
        >
          <Link
            href={`/posts/${post.slug}`}
            className={"text-xl font-semibold text-blue-600 hover:underline"}
          >
            {post.title}
          </Link>
          <p className={"text-gray-700 mt-2"}>{post.content}</p>
        </div>
      ))}
    </>
  );
}
