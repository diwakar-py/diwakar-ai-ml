import { FiUser } from 'react-icons/fi';

/**
 * @param {{ summary: string[]; infoHighlights: { label: string; value: string }[] }} props
 */
const About = ({ summary, infoHighlights }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <FiUser />
          <div>
            <p className="eyebrow">About</p>
            <h2>Meet Diwakar</h2>
          </div>
        </div>
        <div className="about-content">
          {summary.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="info-grid">
          {infoHighlights.map((item) => (
            <div key={item.label} className="info-card">
              <p className="label">{item.label}</p>
              <p className="value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
