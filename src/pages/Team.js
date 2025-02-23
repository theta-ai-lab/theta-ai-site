import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Team.css';
import { teamData } from '../data/Team'; // Adjust the path as needed

function Team() {
  return (
    <section className="team-page">
      <h1>Meet Our Team</h1>
      <div className="team-container">
        {teamData.map((member) => (
          <article key={member.id} className="team-card">
            <LazyLoadImage
              src={member.photo}
              alt={member.name}
              className="team-photo"
              effect="blur"
              width={160}
              height={160}
            />
            <h2>{member.name}</h2>
            <div className="team-info">
              <h3>{member.title}</h3>
              <p className="education">{member.education}</p> {/* Render education below the title */}
              <p>{member.bio}</p>
            </div>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${member.name}'s LinkedIn profile`}
            >
              <FaLinkedin className="inline-block" />
              Connect
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
