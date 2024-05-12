import { sql } from "@vercel/postgres";

import { handleSaveComment } from "@/app/actions";
export default async function PostPage({ params }) {
  const data = await sql`SELECT * FROM posts WHERE posts.id = ${params.id};`;
  const post = data.rows[0]
  const commentdata = await sql`SELECT * FROM comments WHERE post_id = ${params.id};`;
  const comments = commentdata.rows
console.log(post)
  async function handleCommentForm(formData) {
"use server"
    handleSaveComment(formData, params.id);
  }

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <form action={handleCommentForm}>
        <label htmlFor="username">username</label>
        <input id="username" name="username" type="text" />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" />
        <button type="submit">Save</button>
      </form>
    <ul>
    {comments.map((comment) => (<>
              
              <li key={comment.id}>{comment.username}{comment.content}</li>
            </>
          ))}
    </ul>
    </div>
  );
}
