import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-1">
        <a href="" className="linkedin">
          LinkedIn
        </a>
        <a href="" className="insta">
          Instagram
        </a>
        <a href="" className="mail">
          EMail
        </a>
      </div>
      <div className="hero-2">
        <h1>Creative & Minimal</h1>
        <h2>IT AGENCY.<span className="it"></span></h2>
        <p>
          We provide tailored IT solutions that elevate your business,
          streamline operations, and enhance user experience. Our comprehensive
          approach encompasses web development, app design, UI/UX design, and
          strategic consulting to ensure your success.
        </p>
        <button className="hero-2-btn">Contact Us<span className="hero-2-btn-span"></span></button>
      </div>
      <div className="hero-3">z</div>
    </section>
  );
};

export default Hero;
