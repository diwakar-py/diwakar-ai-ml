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

        <div className="contact-layout">
          <div className="contact-summary">
            <p>
              Looking to accelerate data platforms or explore AI/ML ideas? Reach out and
              I will respond with the same urgency I bring to shipping production systems.
            </p>
            <div className="contact-detail">
              <FiMail />
              <div>
                <p className="label">Email</p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>
            <div className="contact-detail">
              <FiLinkedin />
              <div>
                <p className="label">LinkedIn</p>
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
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your data or AI challenge..."
                required
              />
            </label>
            {status && <p className="form-status">{status}</p>}
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
