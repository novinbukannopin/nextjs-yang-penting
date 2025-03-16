import { Post } from "@/types/post";
import { Title } from "@/component/atoms/title";

async function getDetailPost(slug: string): Promise<Post> {
  const response = await fetch(`http://localhost:3001/posts/?slug=${slug}`);
  const [post] = await response.json();
  return post;
}

export default async function DetailPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getDetailPost(slug);

  return (
    <>
      <Title>Detail Post Page</Title>
      <h2>{post.title}</h2>
      <article>{post.content}</article>
    </>
  );
}
