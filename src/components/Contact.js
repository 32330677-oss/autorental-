import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('We will get back to you soon !');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="">Select a subject</option>
                <option value="car-rental">Car Rental </option>
                <option value="car-parts">Auto Parts </option>
                <option value="support"> Support</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-card">
            <h3>Get in Touch</h3>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <span>info@autorental.com</span>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <span>+961 76789034</span>
              </div>
              <div className="contact-item">
                <strong>Address:</strong>
                <span>Saida,Lebanon</span>
              </div>
              <div className="contact-item">
                <strong>Working Hours:</strong>
                <span>Mon-Sun: 7:00 AM- 6:00 PM</span>
              </div>
              <div className="contact-item">
                <strong>Emergency:</strong>
                <span>24/7 Assistance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;