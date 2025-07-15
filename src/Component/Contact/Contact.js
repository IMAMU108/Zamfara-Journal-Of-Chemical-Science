import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader/PageHeader';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! We will get back to you soon.`);
    setFormData({
      name: '',
      email: '',
      subject: 'general',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: (
        <>
          <p>General inquiries: <a href="mailto:info@ijsgs.org">info@ijsgs.org</a></p>
          <p>Editorial office: <a href="mailto:editor@ijsgs.org">editor@ijsgs.org</a></p>
          <p>Technical support: <a href="mailto:support@ijsgs.org">support@ijsgs.org</a></p>
        </>
      )
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: (
        <>
          <p>Editorial office: +1 (123) 456-7890</p>
          <p>Monday-Friday, 9:00 AM - 5:00 PM EST</p>
        </>
      )
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Mailing Address",
      content: (
        <address>
          International Journal of Science for Global Sustainability<br />
          P.O. Box 12345<br />
          Science Park, NY 10001<br />
          United States
        </address>
      )
    }
  ];

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Get in touch with the editorial team" />
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div className="contact-card" key={index}>
                <div className="contact-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                {method.content}
              </div>
            ))}
          </div>
          
          <div className="contact-form-section">
            <h3>Send Us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
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
                >
                  <option value="general">General Inquiry</option>
                  <option value="submission">Submission Question</option>
                  <option value="review">Review Process</option>
                  <option value="technical">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
          
          <div className="editorial-office-hours">
            <h3>Editorial Office Hours</h3>
            <p>The editorial office is open Monday through Friday from 9:00 AM to 5:00 PM Eastern Standard Time (EST). We strive to respond to all inquiries within 2 business days.</p>
            <p>For urgent matters related to submissions already under review, please include your manuscript ID in the subject line of your email.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;