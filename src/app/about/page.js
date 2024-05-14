import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#000', color: '#00ffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Header />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>About Me Page</h1>
        <p>Hello, Names Connor, I am currently studying a full stack Developer course at the wonderful TechEducators UK. Its a pretty awesome course and should you ever find your way to this site, check them out <a href="https://techeducators.co.uk/" style={{ color: '#00ffff' }}>here</a>. Anyway, I am 30 years old at the time of making this and just finishing week 8 of a 12-week course.</p>
      </div>
      <Footer />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <Image src="/blue-dwarf-150.jpg" alt="Blue Dwarf Logo" width={200} height={100} />
      </div>
    </div>
  );
}