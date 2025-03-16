import Link from "next/link";
import { Post } from "@/types/post";
import { Title } from "@/component/atoms/title";
import Image from "next/image";

async function getPosts(): Promise<Post[]> {
  const response = await fetch("http://localhost:3001/posts");
  return await response.json();
}

export default async function PostPage() {
  const data = await getPosts();

  return (
    <>
      <Title>Post Page</Title>

      <Image
        src={"/imageeee.webp"}
        alt={"Gambar Apa yaaa"}
        width={300}
        height={300}
        loading={"eager"}
        placeholder={"blur"}
        blurDataURL={
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEDBBEhMQX/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGREAAwADAAAAAAAAAAAAAAAAAAEDAhIz/9oADAMBAAIRAxEAPwCHXfXlv2zGKCtQihERGOmDgL66+XfL66iIhQ54j6JbH//Z"
        }
      />

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
