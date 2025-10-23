export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container split about-wrap">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello — I&apos;m <strong>Sabbir Islam Alvi</strong>. I make photographs that tell stories.
            I shoot weddings, travel and commissioned portrait sessions. Based in [Your City].
          </p>
          <p>Available for commissions worldwide — <a href="#contact">get in touch</a>.</p>

          <div className="socials">
            <a className="social-link" href="https://instagram.com/yourhandle" target="_blank" rel="noopener">
              {/* inline svg kept as in your HTML */}
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.7A3.3 3.3 0 1 0 15.3 12 3.3 3.3 0 0 0 12 8.7zM18.4 6.1a.9.9 0 1 1-.9-.9.9.9 0 0 1 .9.9z"/></svg>
              <span>@yourhandle</span>
            </a>

            <a className="social-link" href="https://facebook.com/yourhandle" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7H8.2v-2.9h2.3V9.2c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .07 2 .07v2.2h-1.1c-1.08 0-1.4.68-1.4 1.38v1.66h2.4l-.38 2.9h-2v7A10 10 0 0 0 22 12z"/></svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        <div className="about-image round" style={{ backgroundImage: "url('/assets/about.jpg')" }} aria-hidden="true" />
      </div>
    </section>
  );
}
