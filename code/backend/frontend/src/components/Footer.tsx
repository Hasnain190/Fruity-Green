import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <footer>
  <div className="footer-container">
    <div className="footer-section">
      <h3>About Us</h3>
      <p>Learn more about our juice bar and what we have to offer.</p>
      <a href="#">Read more</a>
    </div>
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Need to get in touch? Find our contact information here.</p>
      <a href="#">Contact</a>
    </div>
    <div className="footer-section">
      <h3>Follow Us</h3>
      <p>Stay updated with our latest news and promotions.</p>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
  <div className="copyright">
    <p>Copyright ©2022 My Juice Bar</p>
  </div>
</footer>

  )
}
