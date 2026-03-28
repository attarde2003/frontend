import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const slides = [
    "/images/grain1.png",
    "/images/grain3.png",
    "/images/grain4.png",
  ];

  const [index, setIndex] = useState(0);

  // ✅ FIXED: added dependency
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container-fluid p-0">

      {/* 🔥 Banner */}
      <div className="position-relative">
        <img
          src={slides[index]}
          className="w-100"
          style={{ height: "80vh", objectFit: "cover" }}
          alt="banner"
        />

        <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
          <h5>BUY AND SELL</h5>
          <h1 className="fw-bold">AGRICULTURE PRODUCT</h1>

          <div className="mt-3">
            {/* ✅ FIXED: valid links */}
            <a href="https://facebook.com" className="btn btn-outline-light me-2">Facebook</a>
            <a href="https://twitter.com" className="btn btn-outline-light me-2">Twitter</a>
            <a href="https://instagram.com" className="btn btn-outline-light">Instagram</a>
          </div>
        </div>

        <button className="btn btn-dark position-absolute top-50 start-0" onClick={prevSlide}>❮</button>
        <button className="btn btn-dark position-absolute top-50 end-0" onClick={nextSlide}>❯</button>
      </div>

      {/* Caption */}
      <div className="text-center bg-light py-4">
        <h3 className="fw-bold">BUY AND SELL YOUR GRAIN</h3>
      </div>

      {/* About Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            <h2 className="fw-bold">Welcome to Krishi-Market</h2>
            <p className="text-muted">
              Buy and sell your agriculture produce online without middlemen.
              Connect directly with buyers and maximize your profit.
            </p>
          </div>

          <div className="col-md-6">
            <div className="card p-3 mb-3 shadow-sm">
              <h5>SELL AGRI PRODUCT</h5>
              <p className="text-muted">Sell without mediator</p>
            </div>

            <div className="card p-3 mb-3 shadow-sm">
              <h5>BUY AGRI PRODUCT</h5>
              <p className="text-muted">Buy directly from farmers</p>
            </div>

            <div className="card p-3 shadow-sm">
              <h5>ANYTIME & ANYWHERE</h5>
              <p className="text-muted">24/7 market access</p>
            </div>
          </div>

        </div>
      </div>

      {/* Feedback */}
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">OUR INSPIRATION</h2>

        <div className="row">
          {[
            { name: "Rahul Attarde", place: "Asoda, Jalgaon", img: "/images/rahul.jpg" },
            { name: "Ritesh Bhatkar", place: "Bhusawal, Jalgaon", img: "/images/ritesh.jpg" },
            { name: "Kaushik Dhangar", place: "Paldhi, Jalgaon", img: "/images/kaushik.jpg" },
          ].map((p, i) => (
            <div className="col-md-4" key={i}>
              <div className="card p-3 shadow-sm h-100">
                <p className="text-muted">
                  This platform helps farmers connect directly with buyers and
                  improve their income.
                </p>

                <div className="d-flex align-items-center mt-3">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="mb-0">{p.name}</h6>
                    <small className="text-muted">{p.place}</small>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;