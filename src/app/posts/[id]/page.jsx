import { sql } from "@vercel/postgres";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { handleSaveComment } from "@/app/actions";

export default async function PostPage({ params }) {
  const data = await sql`SELECT post.* FROM posts WHERE posts.id = ${params.id};`;
  const post = data.rows[0];
  const commentdata = await sql`SELECT comments.* FROM comments WHERE post_id = ${params.id};`;
  const comments = commentdata.rows;

  async function handleCommentForm(formData) {
     "use server" 
    handleSaveComment(formData, params.id);
  }

  return (
    <div style={pageStyle}>
      <Header />
      <h1 style={titleStyle}>Post {post.id}</h1>
      <h2 style={subtitleStyle}>{post.title}</h2>
      <p style={contentStyle}>{post.content}</p>
      <form onSubmit={handleCommentForm} style={formStyle}>
        <label htmlFor="username" style={labelStyle}>Username</label>
        <input id="username" name="username" type="text" style={inputStyle} />
        <label htmlFor="content" style={labelStyle}>Content</label>
        <textarea id="content" name="content" style={textareaStyle} />
        <button type="submit" style={buttonStyle}>Save</button>
      </form>
      <ul style={commentListStyle}>
        {comments.map((comment) => (
          <li key={comment.id} style={commentItemStyle}>
            {comment.username}: {comment.content}
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

// Styles
const pageStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#000", // Dark background color
  color: "#00ffff", // Cyan text color
};

const titleStyle = {
  fontSize: "24px",
};

const subtitleStyle = {
  fontSize: "20px",
};

const contentStyle = {
  fontSize: "16px",
};

const formStyle = {
  margin: "20px 0",
};

const labelStyle = {
  fontSize: "16px",
  marginRight: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #00ffff", // Cyan border
  backgroundColor: "#fff", // White background color
  color: "#000", // Black text color
  fontFamily: "Verdana, Geneva, sans-serif", // 90s style font
};

const textareaStyle = {
  width: "100%",
  height: "150px",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #00ffff", // Cyan border
  backgroundColor: "#fff", // White background color
  color: "#000", // Black text color
  fontFamily: "Verdana, Geneva, sans-serif", // 90s style font
  resize: "vertical",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#00ffff", // Cyan background color
  color: "#000", // Black text color
  fontSize: "16px",
  cursor: "pointer",
  fontFamily: "Verdana, Geneva, sans-serif", // 90s style font
};

const commentListStyle = {
  listStyleType: "none",
  padding: 0,
  margin: "20px 0",
};

const commentItemStyle = {
  marginBottom: "10px",
};
