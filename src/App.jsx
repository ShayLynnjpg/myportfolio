import React, { useEffect, useState } from "react";
import "./App.css";
import { FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";
import bannerImg from "./assets/banneerrr.jpg";
import businessImg from "./assets/business cards template examples.png";
import stickerpartyImg from "./assets/stickerparty.png";
import templateericImg from "./assets/template ericcc a5.jpg";
import laptopFrameImg from "./assets/Laptop Frame.png";
import blogImg1 from "./assets/Van Design.jpg";
const text = "Hello, I'm Shay-Lynn...";

const projects = [
  {
    id: "banner",
    title: "Portfolio Banner",
    imgSrc: bannerImg,
    description: "Modern digital design banner for personal branding",
    stack: ["Photoshop", "Illustrator"],
    liveLink: "#",
  },
  {
    id: "business-cards",
    title: "Business Cards Design",
    imgSrc: businessImg,
    description: "Clean and professional business card template",
    stack: ["InDesign", "Print"],
    liveLink: "#",
  },
  {
    id: "sticker-party",
    title: "Sticker Party Collection",
    imgSrc: stickerpartyImg,
    description: "Colorful sticker pack for events and fun branding",
    stack: ["Illustrator", "Die-cut"],
    liveLink: "#",
  },
  {
    id: "template-eric",
    title: "Template Eric A5",
    imgSrc: templateericImg,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout"],
    liveLink: "#",
  },

  {
    id: "template-eric",
    title: "Template Eric A5",
    imgSrc: templateericImg,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout"],
    liveLink: "#",
  },

  {
    id: "template-eric",
    title: "Template Eric A5",
    imgSrc: templateericImg,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout"],
    liveLink: "#",
  },

  {
    id: "template-eric",
    title: "Template Eric A5",
    imgSrc: templateericImg,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout"],
    liveLink: "#",
  },

  {
    id: "template-eric",
    title: "Template Eric A5",
    imgSrc: templateericImg,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout"],
    liveLink: "#",
  },
];

const blogPosts = [
  {
    id: "post-1",
    title:
      "Turning Heads on the Move: The Critical Role of Vehicle Wraps in Business Growth",
    excerpt:
      "Exploring why vehicle wrap artwork is an essential investment for modern businesses",
    link: "#",
    imgSrc: blogImg1,
  },
];

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showProjects, setShowProjects] = useState(false); // controls project grid slide-up
  const [columns, setColumns] = useState(4);

  

  // Animate loading progress 0 to 100 in ~2.5s
  useEffect(() => {
    let start = 0;
    if (loading) {
      const interval = setInterval(() => {
        start += 2;
        if (start > 100) start = 100;
        setProgress(start);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [loading]);

  // After loading, show content
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Typing animation for headline text
  useEffect(() => {
    if (!loading && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, loading]);

  // Track cursor
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Responsive columns update
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 600) setColumns(1);
      else if (width < 900) setColumns(2);
      else if (width < 1200) setColumns(3);
      else setColumns(4);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Scroll down and show projects grid with slide up
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
    setShowProjects(true);
  };

  // Show projects when user scrolls manually past first viewport
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowProjects(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [showLaptop, setShowLaptop] = useState(false);

  // Show laptop on scroll (e.g. after projects show)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowLaptop(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //----------------------------------RETURN--------------------------------------------//

  return (
    <>
      {/* Background Shapes */}
      <div className="background-shapes">
        <div className="shape circle"></div>
        <div className="shape square"></div>
        <div className="shape triangle"></div>
        <div className="shape diamond"></div>
      </div>

      {/* Blob Cursor */}
      <div
        className="blob-cursor"
        style={{
          position: "fixed",
          top: cursorPos.y,
          left: cursorPos.x,
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(255, 0, 150, 0.3)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: "top 0.1s ease, left 0.1s ease",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      ></div>

      {/* Loading Screen */}
      <div
        className="loading-page"
        style={{
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? "auto" : "none",
          transition: "opacity 1s ease",
          position: loading ? "fixed" : "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#121212",
        }}
      >
        <div className="blob">
          <span className="progress-text">{progress}%</span>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="app"
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 1s ease",
          pointerEvents: showContent ? "auto" : "none",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <div className="announcement-banner">
          <div className="announcement-text">
            <span>
              🎉 Portfolio updated! Check out my latest projects below ↓ &nbsp;
              • &nbsp; 🎨 Designs for print, web, and motion graphics &nbsp; •
              &nbsp; 🖥️ My other new website Finchie Design is now live —
              Explore our latest creative work and services! - Find out me on
              Instagram too at @FinchieDesigns
            </span>
          </div>
        </div>

        <h1 className="headline">
          {displayedText}
          <span className="blinking-cursor"></span>
        </h1>
        <p className="subtitle">A DIGITAL DESIGN & WEB DEVELOPMENT GRADUATE</p>

        <button className="scroll-down-btn" onClick={scrollDown}>
          About me & Portfolio
        </button>

        <div className="social-icons">
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
          >
            <FaGithub />
          </a>
          <a
            href="https://behance.net/your-behance"
            target="_blank"
            rel="noopener noreferrer"
            className="icon behance"
          >
            <FaBehance />
          </a>
        </div>

        
      </div>

      <div className="about-section">
        <h2 className="section-title">👋 About Me</h2>
        <p className="about-text">
          I’m <strong>Shay-Lynn</strong>, a passionate digital design and web
          development graduate with a flair for creating visually engaging and
          user-friendly experiences.
          <br />
          <br />
          My design approach is rooted in storytelling, bold visuals, and
          thoughtful layouts—whether it's branding, UI, or print.
          <br />
          <br />
          <em>Fun fact:</em> I design best when I’ve got House Music playing and
          coffee in hand. ☕
        </p>
        <a href="/cv.pdf" download className="download-cv-btn">
          📄 Download My CV
        </a>
      </div>

      {/* Projects Section */}
      <h2 className="projects-header">#projects</h2>
      <div
        className="projects-container"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.imgSrc}
              alt={project.title}
              className="project-img"
            />
            <div className="project-tags">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Interactive Prototype Section */}
      <div className={`laptop-section ${showLaptop ? "visible" : ""}`}>
        <h2 className="section-title">💻 Interactive Prototype Preview</h2>
        <p className="prototype-description">
          Explore my recent UI/UX prototype below!
        </p>
        <p>
          This upload system offers a safe, accessible platform for children
          with autism and ADHD to share creative projects, stories, and
          achievements. It also includes a homework tracker dashboard to help
          children and caregivers manage assignments and deadlines effectively.
          Additionally, the system provides scheduling support and sensory play
          tips—all designed to support development and enhance communication in
          one user-friendly place.
        </p>
        <a href="/cv.pdf" download className="download-cv-btn">
          View More
        </a>
        <div className="prototype-embed">
          <iframe
            src="https://embed.figma.com/proto/chsNROdrYPO2sRmDl3mLkg/FinchNest?node-id=37-396&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A268&embed-host=share&hide-ui=1"
            title="FinchNest Prototype"
            width="100%"
            height="600"
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Blog Section */}
        <section className="blog-section">
          <h2 className="section-title">📝 Blogs</h2>
          <div className="blog-posts-container">
            {blogPosts.map((post) => (
              <div className="blog-post-card" key={post.id}>
                <img
                  src={post.imgSrc}
                  alt={post.title}
                  className="blog-post-img"
                />
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="read-more-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More &rarr;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2 className="section-title">💬 Testimonials</h2>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Shay-Lynn brought such creativity to our project! Professional,
              quick, and so easy to work with."
            </p>
            <p className="testimonial-author">— Alex M., Creative Director</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section">
          <h2 className="section-title">📫 Contact Me</h2>
          <form
            className="contact-form"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="scroll-down-btn">
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <p>
            &copy; {new Date().getFullYear()} Shay-Lynn Dudhia | Designed &
            Coded with Love.
          </p>
        </footer>
      </div>
    </>
  );
}
