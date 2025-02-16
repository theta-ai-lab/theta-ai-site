import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Team.css';

const teamMembers = [
  {
    name: "Alice Smith",
    photo: "/team/alice-smith.jpg", // Update with actual image path
    bio: "CEO with over 10 years of experience in AI leadership",
    linkedin: "https://linkedin.com/in/alicesmith",
  },
  {
    name: "Bob Johnson",
    photo: "/team/bob-johnson.jpg",
    bio: "Lead Data Scientist specializing in deep learning",
    linkedin: "https://linkedin.com/in/bobjohnson",
  },
  {
    name: "Carol Davis",
    photo: "/team/carol-davis.jpg",
    bio: "Head of Engineering with a passion for scalable systems",
    linkedin: "https://linkedin.com/in/caroldavis",
  },
  {
    name: "David Lee",
    photo: "/team/david-lee.jpg",
    bio: "Creative Director driving innovation in tech design",
    linkedin: "https://linkedin.com/in/davidlee",
  },
];

function Team() {
  return (
    <section className="team-page">
      <h1>Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <article key={index} className="team-card">
            <LazyLoadImage
              src={member.photo}
              alt={member.name}
              className="team-photo"
              effect="blur"
              width={160}
              height={160}
            />
            <h2>{member.name}</h2>
            <p>{member.bio}</p>
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
