import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import Header from "@/components/header";

export default async function Home(searchParams) {
  const result = await sql`SELECT posts.title, posts.content, posts.id FROM posts`;
  console.log(result.rows);
  const posts = await result.rows;
  if (searchParams.sort === "desc") {
    posts.reverse();
  }
  return (
    <>
      <Header />

      <main>
        <h1> Posts Page</h1>

        <div>
          <h1>Posts</h1>
          <ul>
            {posts.map((post) => (<>
              <li key={post.id}>
              <a href={`/posts/${post.id}`}>{post.title}{post.content} </a>
              </li>
            </>
          ))}
          </ul>
        </div>
      </main>
    </>
  );
}
