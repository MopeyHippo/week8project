import Link from 'next/link';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>MyTwoCentz</h1>
      <nav>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/about">
              About Me
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/posts">
              Posts
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/addnewpost">
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  borderBottom: '1px solid black', 
};

const titleStyle = {
  fontSize: '24px', 
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

export default Header;