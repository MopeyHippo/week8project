import Image from "next/image";
import Link from "next/link"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
   
   <Header />

   <h1> Welcome to the home page !</h1>
   <p>This is a personal blog site, for myself, to talk about film,tv and games, what i thinks great and what i thinks terrible
    all opionions are my own, but the beauty of this site, is if you dont agree. 
    please leave a comment and let me know why im right or wrong.
   </p>

   <Footer />
   </div>
  );
}
