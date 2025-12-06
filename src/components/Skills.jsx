import { useMemo, useState } from 'react';
import { FiLayers } from 'react-icons/fi';

/**
 * @param {{ skills: { filters: { label: string; value: string }[]; groups: { name: string; items: { name: string; filters?: string[] }[] }[] } }} props
 */
const Skills = ({ skills }) => {
  const [activeFilter, setActiveFilter] = useState(skills.filters[0].value);

  const visibleGroups = useMemo(() => {
    return skills.groups
      .map((group) => {
        const items =
          activeFilter === 'all'
            ? group.items
            : group.items.filter((item) => item.filters?.includes(activeFilter));
        return { ...group, items };
      })
      .filter((group) => group.items.length > 0);
  }, [skills.groups, activeFilter]);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <FiLayers />
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Tech Stack Arsenal</h2>
          </div>
        </div>

        <div className="skill-filters">
          {skills.filters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-chip ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="skill-groups">
          {visibleGroups.map((group) => (
            <div key={group.name} className="skill-group">
              <h3>{group.name}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span key={item.name} className="chip">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
