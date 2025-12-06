import { FiAward, FiExternalLink } from 'react-icons/fi';

/**
 * @param {{ certifications: { name: string; issuer: string; issued: string; expires?: string; credentialId?: string; skill?: string; highlight?: boolean }[] }} props
 */
const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <FiAward />
          <div>
            <p className="eyebrow">Certifications</p>
            <h2>Validated Expertise</h2>
          </div>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article
              key={`${cert.name}-${cert.issuer}`}
              className={`cert-card ${cert.highlight ? 'featured' : ''}`}
            >
              {cert.highlight && <span className="badge">Featured</span>}
              <h3>{cert.name}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="duration">
                Issued {cert.issued}
                {cert.expires ? ` • Expires ${cert.expires}` : ''}
              </p>
              {cert.skill && <p className="detail">Focus: {cert.skill}</p>}
              {cert.credentialId && (
                <p className="detail">Credential ID: {cert.credentialId}</p>
              )}
              <button className="btn ghost">
                <FiExternalLink />
                View Credential
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
