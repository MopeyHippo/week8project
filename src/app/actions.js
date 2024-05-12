"use server";
import { sql } from "@vercel/postgres";
export async function handleSavePost(formData) {
  console.log("Saving post to the database...");

  // get the form data from the formData object next provdides
  const title = formData.get("title");
  const content = formData.get("content");

  // insert the data into postgres
  await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;
  console.log("Post saved!");
}
export async function handleSaveComment(formData, id) {
  console.log("Saving post to the database...");

  // get the form data from the formData object next provdides
  const username = formData.get("username");
  const content = formData.get("content");
  const postid = id

  // insert the data into postgres
  await sql`INSERT INTO comments (username, content, post_id) VALUES (${username}, ${content}, ${postid})`;
  console.log("Post saved!");
}
export async function getPosts(id) {
const response = await sql`SELECT * FROM posts WHERE posts.id = ${id};`;
return  response.rows[0];
}