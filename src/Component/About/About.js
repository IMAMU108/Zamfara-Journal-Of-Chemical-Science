import React from 'react';
import PageHeader from '../Common/PageHeader/PageHeader';
import './About.css';

const About = () => {
  const scopeItems = [
    "Climate change mitigation and adaptation",
    "Renewable energy technologies",
    "Sustainable agriculture and food systems",
    "Biodiversity conservation",
    "Circular economy and sustainable production",
    "Environmental policy and governance",
    "Sustainable urban development",
    "Social dimensions of sustainability"
  ];

  return (
    <div className="about">
      <PageHeader title="About the Journal" subtitle="Learn about our mission, scope, and history" />
      
      <section className="about-content">
        <div className="container">
          <article className="about-article">
            <h3>Our Mission</h3>
            <p>The International Journal of Science for Global Sustainability (IJSGS) is dedicated to advancing scientific knowledge that contributes to solving global sustainability challenges. We aim to provide a platform for researchers worldwide to share innovative solutions that address the interconnected issues of environmental protection, social equity, and economic development.</p>
          </article>
          
          <article className="about-article">
            <h3>Journal Scope</h3>
            <p>IJSGS publishes original research articles, reviews, and case studies across all scientific disciplines with a focus on sustainability. Our scope includes but is not limited to:</p>
            <ul className="scope-list">
              {scopeItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
          
          <article className="about-article">
            <h3>Publication Ethics</h3>
            <p>IJSGS adheres to the highest standards of publication ethics. We follow the guidelines set by the Committee on Publication Ethics (COPE) and ensure that all published articles meet rigorous ethical standards. All submissions are screened for plagiarism and undergo a double-blind peer review process.</p>
          </article>
          
          <article className="about-article">
            <h3>Open Access Policy</h3>
            <p>IJSGS is an open-access journal, meaning all content is freely available without charge to users or their institutions. Users are allowed to read, download, copy, distribute, print, search, or link to the full texts of the articles without asking prior permission from the publisher or the author, provided proper attribution is given.</p>
          </article>
          
          <article className="about-article">
            <h3>History</h3>
            <p>Founded in 2015, IJSGS began as a small initiative by a group of sustainability scientists who recognized the need for an interdisciplinary platform focused on global sustainability challenges. Over the years, the journal has grown significantly in reputation and reach, now publishing quarterly issues with contributions from researchers in over 60 countries.</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;