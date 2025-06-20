import React, { useEffect, useState } from "react";
import "./App.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import bannerImg from "./assets/banneerrr.jpg";
import businessImg from "./assets/business cards template examples.png";
import stickerpartyImg from "./assets/stickerparty.png";
import templateericImg from "./assets/template ericcc a5.jpg";
import blogImg1 from "./assets/Van Design.jpg";
import dkpImg1 from "./assets/dkpflyer.jpg";
import cakepopImg1 from "./assets/cakepops flyers.jpg";
import koriImg1 from "./assets/koriflyer111.png";

const text = "Hello, I'm Shay-Lynn!";

const projects = [
  {
    id: "banner",
    title: "Business Banner",
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
    stack: ["InDesign", "Print", "Photoshop"],
    liveLink: "#",
  },
  {
    id: "sticker-party",
    title: "Sticker Party Collection",
    imgSrc: stickerpartyImg,
    description: "Colorful sticker pack for events and fun branding",
    stack: ["Illustrator", "Die-cut", "Photoshop"],
    liveLink: "#",
  },
  {
    id: "template-eric",
    title: "The Scan Doctor A5 Flyer",
    imgSrc: templateericImg,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout", "Illustrator"],
    liveLink: "#",
  },
  {
    id: "template-dkp",
    title: "DKP Electric A5 Flyer",
    imgSrc: dkpImg1,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout", "Illustrator"],
    liveLink: "#",
  },
  {
    id: "Cakepops",
    title: "Cakepop A5 Flyer",
    imgSrc: cakepopImg1,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout", "Illustrator"],
    liveLink: "#",
  },
  {
    id: "template-kori",
    title: "Cori Photography A5 Flyer",
    imgSrc: koriImg1,
    description: "A5 layout template for editorial or print",
    stack: ["Photoshop", "Layout", "Illustrator"],
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
    link: "https://medium.com/@shaylynndudhia.official/turning-heads-on-the-move-the-critical-role-of-vehicle-wraps-in-business-growth-811bd378664b",
    imgSrc: blogImg1,
  },
];

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [setShowProjects] = useState(false); // fixed here
  const [columns, setColumns] = useState(4);
  const [expandedImg, setExpandedImg] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);

  const openImage = (src) => {
    setImgLoading(true);
    setExpandedImg(src);
  };

  const closeImage = () => {
    setExpandedImg(null);
    setImgLoading(false);
  };

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Typing animation for headline text
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

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
      {!isTouchDevice && (
        <div
          className="blob-cursor"
          style={{
            position: "fixed",
            top: cursorPos.y,
            left: cursorPos.x,
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 0, 150, 0.6)",
            border: "2px solid #fff", // white outline
            boxShadow: "0 0 20px rgba(255, 0, 150, 0.7)",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            transition: "top 0.05s ease, left 0.05s ease",
            zIndex: 9999,
            mixBlendMode: "screen",
          }}
        ></div>
      )}

      {/* Main Content */}
      <div
        className="app"
        style={{
          transition: "opacity 1s ease",

          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <div className="announcement-banner">
          <div className="announcement-text">
            <span>
              🎉 Portfolio updated! Check out my latest projects below🎉 &nbsp;
              &nbsp; 
            </span>
          </div>
        </div>

        <h1 className="headline">
          {displayedText}
          <span className="blinking-cursor"></span>
        </h1>
        <p className="subtitle">A DIGITAL DESIGN & WEB DEVELOPMENT GRADUATE.</p>

        <button className="scroll-down-btn" onClick={scrollDown}>
          About me & My work
        </button>

        <div className="social-icons">
          <a
            href="http://www.linkedin.com/in/shay-lynn-dudhia"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ShayLynnjpg"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="about-section">
        <h2 className="section-title">👋 About Me</h2>
        <p className="about-text">
          Hey I'm <strong>Shay-Lynn</strong>, nice to meet you! I’m a designer
          with a background in education, passionate about creating playful,
          accessible learning experiences for children. With 1.5 years of hands
          on experience supporting young learners, including those with special
          needs, I understand how to design content that’s clear, engaging, and
          truly learner-centered.
          <br />
          <br />
          My design approach is rooted in storytelling, bold visuals, and
          thoughtful layouts—whether it's branding, UI, or print.
          <br />
          <br />
          <em>Fun fact:</em> I design best when I’ve got House Music playing and
          coffee in hand. ☕ I also take on part-time freelance work under the
          name
          <strong> Finchie Design.</strong>
        </p>

        <a
          href="/Shay-Lynn Dudhia - LXD _UI&UX - CV.pdf"
          download
          className="download-cv-btn"
        >
          📄 Download My CV
        </a>
      </div>

      <section className="skills-section">
        <style>{`
    .skills-section {
      padding: 2rem;
      max-width: 700px;
      margin: 0 auto;
      background: rgba(128, 128, 128, 0.15); /* grey with opacity */
      border-radius: 12px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: white;
    }

    .section-title {
      text-align: center;
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    .skill-bar-wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .skill {
      display: flex;
      flex-direction: column;
    }

    .skill-name {
      font-size: 0.95rem;
      margin-bottom: 0.3rem;
      font-weight: 500;
    }

    .bar-container {
      background: rgba(255, 255, 255, 0.1);
      height: 25px;
      border-radius: 20px;
      position: relative;
      overflow: hidden;
    }

    .bar {
      height: 100%;
      border-radius: 20px;
      transition: width 0.6s ease;
    }

    .percentage-label {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.85rem;
      font-weight: 600;
      color: white;
      text-shadow: 0 0 2px rgba(0,0,0,0.7);
    }

    @media (max-width: 500px) {
      .skills-section {
        padding: 1.5rem;
      }
      .section-title {
        font-size: 1.4rem;
      }
      .skill-name {
        font-size: 0.85rem;
      }
    }
  `}</style>

        <h2 className="section-title">💡 My Skillset</h2>

        <div className="skill-bar-wrapper">
          {[
            { name: "UI Design", value: 70, color: "#9b59b6" },
            { name: "Prototyping", value: 75, color: "#2ecc71" },
            { name: "Graphic Design", value: 80, color: "#f39c12" },
            { name: "UX Design", value: 85, color: "#3498db" },
            { name: "Wireframing", value: 65, color: "#e74c3c" },
            { name: "Adobe Creative Suite", value: 90, color: "#1abc9c" },
            { name: "HTML & CSS", value: 60, color: "#e91e63" },
          ].map(({ name, value, color }) => (
            <div key={name} className="skill">
              <div className="skill-name">{name}</div>
              <div className="bar-container">
                <div
                  className="bar"
                  style={{ width: `${value}%`, backgroundColor: color }}
                ></div>
                <span className="percentage-label">{value}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="visual-divider"></div>
      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="projects-header">#projects</h2>
        <p style={{ textAlign: "center", marginTop: "1rem", color: "#ccc" }}>
          Click the picture to have a better view :)
        </p>
        <div
          className="projects-container"
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.imgSrc}
                alt={project.title}
                loading="lazy"
                className="project-img"
                onClick={() => openImage(project.imgSrc)}
                style={{ cursor: "pointer" }}
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

        {expandedImg && (
          <div className="modal" onClick={closeImage}>
            {imgLoading && <div className="spinner">Loading...</div>}
            <img
              src={expandedImg}
              alt="Expanded project"
              className="modal-img"
              style={{ display: imgLoading ? "none" : "block" }}
              onLoad={() => setImgLoading(false)}
            />
          </div>
        )}
      </section>

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
        <a
          href="https://medium.com/@shaylynndudhia.official/case-study-write-up-595c6a480cea"
          download
          className="download-cv-btn"
        >
          Case study & Prototype
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

        {/* Interactive Prototype Section */}
        <div className={`laptop-section ${showLaptop ? "visible" : ""}`}>
          <h2 className="section-title">💻 Interactive Prototype Preview</h2>
          <p className="prototype-description">
            Explore my recent UI/UX prototype below!
          </p>
          <p>
            <strong>SOLfinance</strong> is a budgeting and money management app
            designed specifically for university students. It helps users
            securely link their bank accounts and track spending in real-time.
          </p>
          <p>
            🔗 The app offers seamless bank account integration to keep finances
            up to date automatically.
          </p>
          <p>
            📊 Automated budgeting and personalized spending insights help
            students understand where their money goes.
          </p>
          <p>
            🎯 Goal setting and visual tracking features motivate users to save
            for their priorities.
          </p>
          <p>
            📱 The student-friendly, mobile-first interface makes managing
            finances simple and intuitive.
          </p>
          <a
            href="https://www.figma.com/proto/q52seAqWYpQviFGiBc54Fu/SOLfinance"
            target="_blank"
            rel="noopener noreferrer"
            className="download-cv-btn"
          >
            Full Screen Prototype
          </a>

          <div
            className="prototype-embed"
            style={{
              marginTop: "24px",
              maxWidth: "900px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <iframe
              src="https://embed.figma.com/proto/q52seAqWYpQviFGiBc54Fu/SOLfinance?node-id=1-3397&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share&hide-ui=1"
              title="SOLfinance Prototype"
              width="100%"
              height="600"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
              allowFullScreen
            ></iframe>
          </div>
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
                  Read More on Medium &rarr;
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
              "The design (A5 Flyer - The Scan Doctor) was as professional as it
              gets, everyone who saw the work put in had only positive things to
              say, and found it hard to believe I could get such value for
              money, in the long run and in my opinion if you invest in quality
              and professional style business documents potential clients will
              look at you in a much more serious way. Use finchiesignes they are
              second to none for great customer service!"
            </p>
            <p className="testimonial-author">— Eric, The Scan Doctor</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section">
          <h2 className="section-title">📫 Contact Me</h2>
          <form
            className="contact-form"
            action="https://formspree.io/f/mrbqneza" // ✅ Make sure this is your actual Form ID
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
