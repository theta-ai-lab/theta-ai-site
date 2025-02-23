import pantosPhoto from '../data/team_photos/pantos_photo_1.png';
import tagarisPhoto from '../data/team_photos/tagaris_photo_2.png';
import tasakosPhoto from '../data/team_photos/tasakos_photo.jpg';

export const teamData = [
  {
    id: 1,
    name: "Thanos Pantos",
    title: "Senior Data Scientist",
    education: "MSc in Data Science & Machine Learning \n(NTUA, 2022)",
    photo: pantosPhoto,
    bio: `Currently a Senior Data Scientist - NLP Engineer at Elsevier, where he develops scalable NLP tools for scientific research. He has over eight years of professional experience in the banking, shipping, and market research sectors.
He also serves as an instructor at Code.Hub, having trained more than 60 professionals in Python, data science, and machine learning for partners such as Pfizer and NBG.`,
    linkedin: "https://www.linkedin.com/in/thanos-pantos-2080117b/",
  },
  {
    id: 2,
    name: "Thanos Tagaris",
    title: "Senior Machine Learning Engineer",
    education: "PhD in Deep Learning \n(NTUA, 2020)",
    photo: tagarisPhoto, // Update with your actual image path
    bio: `Thanos has over 5 years of professional experience working for various firms, most recently Netcompany/EUIPO and Deeplab/Taboola.
Additionally, he has multiple years of research experience during his PhD and post-doc in various research areas (neural network interpretability, computer vision, timeseries forecasting, etc.).
Finally, he has 7 years of teaching experience as an ML instructor at Code.Hub and a Lecturer at ATH/TECH college.`,
    linkedin: "https://www.linkedin.com/in/thanos-tagaris-91b1401a1/", // Add LinkedIn URL if available
  },
  {
    id: 3,
    name: "Thanos Tasakos",
    title: "Senior Machine Learning Engineer",
    education: "Phd in Deep Reinforcement Learning \n(NTUA-present)",
    photo: tasakosPhoto,
    bio: `With over 5 years of professional experience, Thanos has worked most notably as a Senior Machine Learning Engineer for Netcompany/EUIPO.
He has also contributed to various EU research projects, including H2020.
Additionally, Thanos has over 4 years of teaching experience as a Machine Learning Instructor at Code.Hub.`,
    linkedin: "https://www.linkedin.com/in/thanos-tasakos-09382613a/", // Add LinkedIn URL if available
  },
];
