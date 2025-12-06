import { FiMapPin, FiDownload, FiMail } from 'react-icons/fi';

/**
 * @param {{ profile: { name: string; tagline: string; heroIntro: string; targetRoles: string[]; resumeLink: string; location: string; email: string }, onContactClick: () => void }} props
 */
const Hero = ({ profile, onContactClick }) => {
  return (
    <section id="home" className="section hero-section">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Data & AI Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="tagline">{profile.tagline}</p>
          <p className="hero-summary">{profile.heroIntro}</p>
          <ul className="role-pills">
            {profile.targetRoles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="btn" href={profile.resumeLink} target="_blank" rel="noreferrer">
              <FiDownload />
              View Resume
            </a>
            <button className="btn btn-secondary" onClick={onContactClick}>
              <FiMail />
              Contact
            </button>
          </div>
          <div className="hero-meta">
            <span>
              <FiMapPin /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
        <div className="hero-card">
          <p>Focused On</p>
          <h3>Data Engineering + AI innovation</h3>
          <p>
            Shipping enterprise-grade solutions with Azure, PySpark, Power BI, and Generative AI
            experimentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
