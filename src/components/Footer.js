import { Link } from "react-router-dom";
import "../css/footer.css";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-name">Urban Fit & Co.</h2>
          <p className="footer-slogan">Feel your style</p>
        </div>
        <div className="footer-menu">
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>
        <div className="footer-support">
          <h3 className="footer-title">Support</h3>
          <ul className="footer-list">
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-media">
          <h3 className="footer-title">Follow Us</h3>
          <div className="footer-social">
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaFacebookSquare size={20} /></a>
            <a href="#"><FaLinkedin size={20} /></a>
          </div>
        </div>
        <div className="footer-copy">
          <p> &copy; <span>2026</span> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
