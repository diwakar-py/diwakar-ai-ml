import { FiBriefcase } from 'react-icons/fi';

/**
 * @param {{ experience: { company: string; role: string; duration: string; location: string; highlights: string[]; tags: string[] }[] }} props
 */
const Experience = ({ experience }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <FiBriefcase />
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Professional Journey</h2>
          </div>
        </div>

        <div className="timeline">
          {experience.map((role) => (
            <article key={role.company} className="timeline-card">
              <div className="timeline-point" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <h3>{role.role}</h3>
                  <p className="company">
                    {role.company} • {role.location}
                  </p>
                  <p className="duration">{role.duration}</p>
                </div>
                <ul>
                  {role.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {role.tags.map((tag) => (
                    <span key={tag} className="chip mini">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
