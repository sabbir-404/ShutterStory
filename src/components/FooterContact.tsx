export default function FooterContact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="contact-card">
          <h3>Book a shoot or say hi</h3>
          <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
          <p>Instagram: <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener">@yourhandle</a></p>
        </div>

        <p className="copyright">© <span>{year}</span> Sabbir Islam Alvi — All rights reserved.</p>
      </div>
    </footer>
  );
}
