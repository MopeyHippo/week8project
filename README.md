import Image from "next/image";
import Link from "next/link"
import {sql} from "@vercel/postgres"


export default  async function tv() {
  const tvposts = await sql`SELECT * FROM posts`
  return (
  
  
        <>
          {tvposts.rows.map((post) => (
            <div key={post.title}>
              <p>{post.name}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </>
      );
    }


import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import Header from "@/components/header";

export default async function Home() {
  const result = await sql`SELECT posts.title, posts.content, posts.id FROM posts`;
  console.log(result.rows);
  const posts = await result.rows;

  return (
    <>
      <Header />

      <main>
        <h1> Posts Page</h1>

        <div>
          <h1>Posts</h1>
          <ul>
            {posts.map((post) => (<>
              <a href={`/posts/${post.id}`}>  </a>
              <li key={post.id}>{post.title}{post.content}</li>
            </>
          ))}
          </ul>
        </div>
      </main>
    </>
  );
}