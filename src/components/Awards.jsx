import { FiStar } from 'react-icons/fi';

/**
 * @param {{ awards: { name: string }[] }} props
 */
const Awards = ({ awards }) => {
  return (
    <section id="awards" className="section">
      <div className="container">
        <div className="section-header">
          <FiStar />
          <div>
            <p className="eyebrow">Honors & Awards</p>
            <h2>Recognition</h2>
          </div>
        </div>
        <div className="award-row">
          {awards.map((award) => (
            <div key={award.name} className="award-card">
              <FiStar />
              <p>{award.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
