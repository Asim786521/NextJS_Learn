"use server";

import Card from "../components/Card";
import Layout from "../components/Layout";
 
 

export default async function Post() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`);
  const posts = await data.json();


  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} id={post.id} title={post.title} description={post.body} />
        ))}
      </div>
    </Layout>
  );
}
