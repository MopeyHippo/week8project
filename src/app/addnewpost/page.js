"use client";
import { handleSavePost } from "../actions";
import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import { useRef } from "react";

export default function NewPostPage() {
  const ref = useRef(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await handleSavePost;
        ref.current?.reset();
      }}
    >
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" />
      <button type="submit">Save</button>
    </form>
  );
}
