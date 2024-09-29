// pages/post/[id].js

import Layout from "../../components/Layout";

export default async function PostDetail({ params }: any) {
  const post = await getPost(params.id);

  if (!post) return <p>Loading...</p>;

  return (
    <Layout>
      <div className="container mx-auto p-6" >
        <h1 className="text-3xl font-bold text-dark text- mb-4">{post.title}</h1>
        <h2>author is :{post.author}</h2>
        <p>{post.content}</p>
      </div>
    </Layout>
  );
}

async function getPost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${id}`);
  return res.json();
}
