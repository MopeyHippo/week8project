const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ color: '#00ffff', textAlign: 'center', margin: 0 }}>&copy; Connor James Lansdown aka Mopey Hippo 2024</p>
    </footer>
  );
};

const footerStyle = {
  borderTop: '1px solid #fff',
  padding: '1rem',
  backgroundColor: '#000',
};
export default Footer;