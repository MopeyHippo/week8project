"use client";
import { handleSavePost } from "../actions";
// import Image from "next/image";
// import Link from "next/link";
// import { sql } from "@vercel/postgres";
import { useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NewPostPage({ params}) {
  const ref = useRef(null);

  return (
    <>
      <Header />
      <form
        ref={ref}
        action={async (formData) => {
          handleSavePost(formData, params.id);
          ref.current?.reset();
        }}
        style={formStyle}
      >
        <label htmlFor="title" style={labelStyle}>
          Title
        </label>
        <input id="title" name="title" type="text" style={inputStyle} />
        <label htmlFor="content" style={labelStyle}>
          Content
        </label>
        <textarea id="content" name="content" style={textareaStyle} />
        <button type="submit" style={buttonStyle}>
          Save
        </button>
      </form>
      <Footer />
    </>
  );
}

// Styles
const formStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#000", // Dark background color
};

const labelStyle = {
  fontSize: "16px",
  color: "#00ffff", // Cyan text color
  marginRight: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #00ffff", // Cyan border
  backgroundColor: "#000", // Dark background color
  color: "#fff", // White text color
};

const textareaStyle = {
  width: "100%",
  height: "150px",
  padding: "10px",
  marginBottom: "20px",
  borderRadius: "5px",
  border: "1px solid #00ffff", // Cyan border
  backgroundColor: "#000", // Dark background color
  color: "#fff", // White text color
  resize: "vertical",
};

const buttonStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#00ffff", // Cyan background color
  color: "#000", // Black text color
  fontSize: "18px",
  cursor: "pointer",
};
