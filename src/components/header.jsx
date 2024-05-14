import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>MyTwoCentz</h1>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <Link href="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/about" style={linkStyle}>
              About Me
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/posts" style={linkStyle}>
              Posts
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/addnewpost" style={linkStyle}>
              Add New Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#000', // Dark background color
  color: '#00ffff', // Cyan text color
  padding: '1rem',
  borderBottom: '1px solid #00ffff', // Cyan border bottom
};

const titleStyle = {
  fontSize: '24px',
  fontFamily: 'Verdana, Geneva, sans-serif', // 90s style font
};

const navStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  marginRight: '1rem',
};

const linkStyle = {
  color: '#00ffff', // Cyan link color
  textDecoration: 'none',
  fontFamily: 'Verdana, Geneva, sans-serif', // 90s style font
};

export default Header;