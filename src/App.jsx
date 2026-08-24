import "./App.css";

const products = [
  {
    title: "Precision Machined Components",
    image: "/products/product1.jpg",
  },
  {
    title: "CNC Machined Components",
    image: "/products/product2.jpg",
  },
  {
    title: "Precision Turned Components",
    image: "/products/product3.jpg",
  },
];

function App() {
  const scrollToInquiry = () => {
    const inquirySection = document.getElementById("inquiry");

    if (inquirySection) {
      inquirySection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your inquiry has been submitted.");

    event.target.reset();
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <div className="logo">
            <span>VENUS</span>
            <small>TURNTECHNIQUES</small>
          </div>

          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#inquiry">Inquiry</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="nav-button" onClick={scrollToInquiry}>
            Send Inquiry
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content container">
          <div className="hero-badge">
            PRECISION ENGINEERING • NAGPUR
          </div>

          <h1>
            Precision Components
            <br />
            <span>Built for Performance.</span>
          </h1>

          <p>
            Manufacturer of auto components and precision machine
            components, with CNC machining services.
          </p>

          <div className="hero-buttons">
            <button onClick={scrollToInquiry}>
              Send an Inquiry →
            </button>

            <a href="#products">Explore Products</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="container about-grid">
          <div>
            <span className="section-label">ABOUT US</span>

            <h2>
              Precision manufacturing
              <br />
              you can rely on.
            </h2>
          </div>

          <div className="about-text">
            <p>
              Venus Turntechniques is a manufacturer based in
              Nagpur, Maharashtra, specializing in auto components
              and precision machine components.
            </p>

            <p>
              We are also engaged in offering CNC machining
              services to meet precision manufacturing requirements.
            </p>

            <div className="stats">
              <div>
                <strong>15+</strong>
                <span>Years on IndiaMART</span>
              </div>

              <div>
                <strong>2017</strong>
                <span>GST Registration</span>
              </div>

              <div>
                <strong>Nagpur</strong>
                <span>Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">OUR PRODUCTS</span>

              <h2>
                Precision components
                <br />
                for demanding applications.
              </h2>
            </div>

            <p>
              Explore our range of precision manufacturing
              components and CNC machined solutions.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product-card" key={product.title}>
                <div className="product-number">
                  0{index + 1}
                </div>

                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <div className="product-info">
                  <h3>{product.title}</h3>

                  <button onClick={scrollToInquiry}>
                    Send Inquiry →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="capabilities section">
        <div className="container">
          <span className="section-label">
            OUR CAPABILITIES
          </span>

          <h2>
            Manufacturing focused
            <br />
            on precision.
          </h2>

          <div className="capability-grid">
            <div className="capability">
              <span>01</span>

              <h3>Precision Machining</h3>

              <p>
                Manufacturing of precision machine components
                for industrial requirements.
              </p>
            </div>

            <div className="capability">
              <span>02</span>

              <h3>Automotive Components</h3>

              <p>
                Manufacturing components for automotive
                applications.
              </p>
            </div>

            <div className="capability">
              <span>03</span>

              <h3>Precision Turning</h3>

              <p>
                Precision turned components manufactured
                according to customer requirements.
              </p>
            </div>

            <div className="capability">
              <span>04</span>

              <h3>CNC Machining</h3>

              <p>
                CNC machining services for accurate and
                consistent component production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section id="inquiry" className="inquiry section">
        <div className="container inquiry-grid">
          <div className="inquiry-intro">
            <span className="section-label">
              PRODUCT INQUIRY
            </span>

            <h2>
              Tell us what
              <br />
              you need.
            </h2>

            <p>
              Share your product requirement with us.
              Our team will get in touch with you.
            </p>

            <div className="inquiry-note">
              <span>✓</span>
              Precision manufacturing requirements
            </div>

            <div className="inquiry-note">
              <span>✓</span>
              Automotive components
            </div>

            <div className="inquiry-note">
              <span>✓</span>
              CNC machining requirements
            </div>
          </div>

          <form
            className="inquiry-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="+91"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Country *</label>

                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Location *</label>

              <input
                type="text"
                name="location"
                placeholder="City / Location"
                required
              />
            </div>

            <div className="form-group">
              <label>Product Required *</label>

              <select
                name="product"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a product
                </option>

                <option value="Precision Machined Components">
                  Precision Machined Components
                </option>

                <option value="CNC Machined Components">
                  CNC Machined Components
                </option>

                <option value="Precision Turned Components">
                  Precision Turned Components
                </option>

                <option value="Automotive Components">
                  Automotive Components
                </option>

                <option value="Other Requirement">
                  Other Requirement
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Product Requirement *</label>

              <textarea
                name="requirement"
                rows="5"
                placeholder="Tell us about your requirement..."
                required
              ></textarea>
            </div>

            <button
              className="submit-button"
              type="submit"
            >
              Submit Inquiry →
            </button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact section">
        <div className="container contact-content">
          <div>
            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's discuss
              <br />
              your requirement.
            </h2>
          </div>

          <div className="contact-details">
            <div>
              <span>LOCATION</span>

              <p>
                Nagpur, Maharashtra
                <br />
                India
              </p>
            </div>

            <div>
              <span>CONTACT PERSON</span>

              <p>
                S. Bhoyar
                <br />
                Owner
              </p>
            </div>

            <button onClick={scrollToInquiry}>
              Send Product Inquiry →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="logo">
            <span>VENUS</span>
            <small>TURNTECHNIQUES</small>
          </div>

          <p>
            Manufacturer of Auto Components & Precision Machine
            Components
          </p>

          <span>© 2026 Venus Turntechniques</span>
        </div>
      </footer>
    </div>
  );
}

export default App;