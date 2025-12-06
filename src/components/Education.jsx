import { FiBookOpen } from 'react-icons/fi';

/**
 * @param {{ education: { institution: string; degree: string; duration: string; details: string[] }[] }} props
 */
const Education = ({ education }) => {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <FiBookOpen />
          <div>
            <p className="eyebrow">Education</p>
            <h2>Academic Timeline</h2>
          </div>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article key={item.institution} className="timeline-card">
              <div className="timeline-point" />
              <div className="timeline-content">
                <div className="timeline-meta">
                  <h3>{item.degree}</h3>
                  <p className="company">{item.institution}</p>
                  <p className="duration">{item.duration}</p>
                </div>
                <ul>
                  {item.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
