import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobe, FaClock, FaLockOpen } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const latestIssueArticles = [
    "Climate Change Mitigation Strategies in Urban Areas",
    "Sustainable Agriculture Practices in Developing Nations",
    "Renewable Energy Innovations: A Global Perspective",
    "Biodiversity Conservation in the Anthropocene",
    "Circular Economy Models for Sustainable Development"
  ];

  const features = [
    { icon: <FaGlobe />, title: "Global Reach", text: "Our journal is read by researchers and policymakers in over 120 countries worldwide." },
    { icon: <FaClock />, title: "Rapid Publication", text: "Average time from submission to first decision: 4 weeks." },
    { icon: <FaLockOpen />, title: "Open Access", text: "All articles are freely available to read, download, and share." }
  ];

  const announcements = [
    { title: "Call for Papers: Special Issue on Sustainable Cities", text: "Submission deadline: October 31, 2023" },
    { title: "New Indexing: Now indexed in Scopus", text: "We're proud to announce our inclusion in Scopus database." }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h2>Advancing Scientific Knowledge for a Sustainable Future</h2>
          <p>A peer-reviewed, open-access journal publishing high-quality research across all scientific disciplines with a focus on global sustainability challenges.</p>
          <Link to="/submission" className="btn">Submit Your Research</Link>
        </div>
      </section>

      <section className="latest-issue">
        <div className="container">
          <h2>Latest Issue</h2>
          <div className="issue-container">
            <div className="issue-cover">
              <img src="https://via.placeholder.com/300x400" alt="Journal Cover" />
              <Link to="#" className="btn">View Full Issue</Link>
            </div>
            <div className="issue-contents">
              <h3>Volume 7, Issue 2 (2023)</h3>
              <ul>
                {latestIssueArticles.map((article, index) => (
                  <li key={index}><Link to="#">{article}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="announcements">
        <div className="container">
          <h2>Announcements</h2>
          <div className="announcements-container">
            {announcements.map((announcement, index) => (
              <div className="announcement-card" key={index}>
                <h3>{announcement.title}</h3>
                <p>{announcement.text}</p>
                <Link to="#" className="btn-small">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;