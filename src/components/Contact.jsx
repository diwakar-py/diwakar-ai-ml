import { useState } from 'react';
import { FiMail, FiLinkedin } from 'react-icons/fi';

const initialForm = { name: '', email: '', message: '' };

/**
 * @param {{ contact: { email: string; linkedin: string } }} props
 */
const Contact = ({ contact }) => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields before sending.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus('Enter a valid email address.');
      return;
    }
    console.log('Contact form submission:', formData);
    setStatus('Message ready! I will reach out soon.');
    setFormData(initialForm);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <FiMail />
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let’s Connect</h2>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <FiMail />
            <div>
              <p>Email</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
          <div className="contact-card">
            <FiLinkedin />
            <div>
              <p>LinkedIn</p>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                {contact.linkedin}
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </label>
          {status && <p className="form-status">{status}</p>}
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
