/**
 * Simple footer with current year.
 */
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Diwakar S. All rights reserved.</p>
        <p>Built with React.js & Vite.</p>
      </div>
    </footer>
  );
};

export default Footer;
