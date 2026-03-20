function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2026 My App. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  backgroundColor: "#f1f1f1",
  position: "relative",
  bottom: 0,
  width: "100%",
};

export default Footer;