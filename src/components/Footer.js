import { Link } from "react-router-dom";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">

        <div className="row">

          <div className="col-md-4 mb-1">
            <div className="d-flex align-items-center mb-2">
              <img src="/images/logo.png" alt="logo" className="footer-logo" />
              {/* ✅ FIXED: added heading text */}
              <h5 className="fw-bold mb-0">Farm Market</h5>
            </div>
            <p className="footer-text">
              Connecting farmers directly with markets for better pricing and transparency.
            </p>
          </div>

          <div className="col-md-4 mb-1">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/markets" className="footer-link">Markets</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-1">
            <h5 className="fw-bold">Contact</h5>
            <p className="footer-text">📞 +91 7028030218</p>
            <p className="footer-text">✉️ support@ra.com</p>
          </div>

        </div>

        <hr />

        <div className="text-center footer-text">
          © {new Date().getFullYear()} Farm Market | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;