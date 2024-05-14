import Link from "next/link";
import { sql } from "@vercel/postgres";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { unstable_noStore } from "next/cache";

export default async function Home({ searchParams }) {
unstable_noStore()

  const result = await sql`SELECT posts.* FROM posts`;
  const posts = result.rows;
  console.log(result)

  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <>
      <Header />
      <main style={mainStyle}>
        <h1 style={pageTitleStyle}>Posts Page</h1>
        <div style={postContainerStyle}>
          <h2 style={postTitleStyle}>Posts</h2>
          <ul style={postListStyle}>
            {posts.map((post) => (
              <li key={post.id} style={postItemStyle}>
                <Link href={`/posts/${post.id}`}>
                  <span style={postTitleStyle}>
                    {post.title}
                    

                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Home component styles
const mainStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#000", // Dark background color
};

const pageTitleStyle = {
  fontSize: "24px",
  color: "#00ffff",
};

const postContainerStyle = {
  margin: "20px 0",
};

const postTitleStyle = {
  fontSize: "20px",
  color: "#00ffff",
  marginBottom: "10px",
};

const postListStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 0,
};

const postItemStyle = {
  marginBottom: "20px",
};

const postContentStyle = {
  color: "#fff",
  fontSize: "16px",
};
