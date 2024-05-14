import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#000', color: '#00ffff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Header />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to the home page!</h1>
        <p>This is a personal blog site, for myself, to talk about film, TV, and games. What I think is great and what I think is terrible. All opinions are my own, but the beauty of this site is if you dont agree, please leave a comment and let me know why I am right or wrong.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image src="/blue-dwarf-150.jpg" alt="Blue Dwarf Logo" width={200} height={100} />
      </div>
      <Footer />
    </div>
  );
}
