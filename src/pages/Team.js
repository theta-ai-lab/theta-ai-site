import React from 'react';
import './Team.css'; // Optional: for Team-specific styling

const teamMembers = [
  {
    name: "Alice Smith",
    photo: "https://via.placeholder.com/150",
    bio: "Alice is our CEO with over 10 years of experience in AI leadership.",
    linkedin: "https://www.linkedin.com/in/alicesmith",
  },
  {
    name: "Bob Johnson",
    photo: "https://via.placeholder.com/150",
    bio: "Bob is our Lead Data Scientist, passionate about deep learning.",
    linkedin: "https://www.linkedin.com/in/bobjohnson",
  },
  {
    name: "Carol Williams",
    photo: "https://via.placeholder.com/150",
    bio: "Carol leads our product strategy and innovation in ML applications.",
    linkedin: "https://www.linkedin.com/in/carolwilliams",
  },
  {
    name: "David Brown",
    photo: "https://via.placeholder.com/150",
    bio: "David is our Chief Technology Officer with a keen eye on scalable systems.",
    linkedin: "https://www.linkedin.com/in/davidbrown",
  },
];

function Team() {
  return (
    <div className="team-page">
      <h1>Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h2>{member.name}</h2>
            <p>{member.bio}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
