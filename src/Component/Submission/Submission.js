import React from 'react';
import PageHeader from '../Common/PageHeader/PageHeader';

const Submission = () => {
  const preparationItems = [
    "Manuscripts should be written in clear, concise English",
    "Use 12-point Times New Roman font with 1.5 line spacing",
    "All pages should be numbered consecutively",
    "Manuscripts should not exceed 8,000 words (excluding references)",
    "Follow the IJSGS reference style",
    "Include an abstract of 150-200 words",
    "Provide 4-6 keywords"
  ];

  const articleTypes = [
    { title: "Research Articles", description: "Original research presenting significant findings (5,000-8,000 words)" },
    { title: "Review Articles", description: "Comprehensive reviews of current research (6,000-10,000 words)" },
    { title: "Case Studies", description: "In-depth analysis of specific sustainability projects (3,000-5,000 words)" },
    { title: "Short Communications", description: "Brief reports of preliminary findings (2,000-3,000 words)" }
  ];

  const submissionProcess = [
    "Prepare your manuscript according to our guidelines",
    "Register for an account on our online submission system",
    "Log in and submit your manuscript",
    "Complete all required metadata fields",
    "Upload all files (main manuscript, figures, supplementary materials)",
    "Submit your manuscript for review"
  ];

  const reviewProcess = [
    "Initial editorial screening (1-2 weeks)",
    "Assignment to associate editor (1 week)",
    "Peer review by 2-3 experts (4-6 weeks)",
    "Editorial decision based on reviews",
    "Revision period if required (4-8 weeks)",
    "Final acceptance and publication"
  ];

  const ethicalGuidelines = [
    "Original work that has not been published elsewhere",
    "Proper attribution of all sources",
    "Disclosure of any conflicts of interest",
    "Approval for any studies involving human or animal subjects",
    "Authorship limited to those who made significant contributions"
  ];

  return (
    <>
      <PageHeader title="Submission Guidelines" subtitle="How to submit your manuscript" />
      
      <section className="submission-guidelines">
        <div className="container">
          <article>
            <h3>Manuscript Preparation</h3>
            <p>Before submitting your manuscript, please ensure it adheres to the following guidelines:</p>
            <ul>
              {preparationItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </article>
          
          <article>
            <h3>Article Types</h3>
            <p>IJSGS accepts the following types of submissions:</p>
            <div className="article-types">
              {articleTypes.map((type, index) => (
                <div className="type-card" key={index}>
                  <h4>{type.title}</h4>
                  <p>{type.description}</p>
                </div>
              ))}
            </div>
          </article>
          
          <article>
            <h3>Submission Process</h3>
            <ol>
              {submissionProcess.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p>You will receive an email confirmation upon successful submission.</p>
          </article>
          
          <article>
            <h3>Peer Review Process</h3>
            <p>All submissions undergo a rigorous double-blind peer review process:</p>
            <ul>
              {reviewProcess.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <p>The average time from submission to first decision is 6 weeks.</p>
          </article>
          
          <article>
            <h3>Ethical Guidelines</h3>
            <p>Authors must adhere to the following ethical standards:</p>
            <ul>
              {ethicalGuidelines.map((guideline, index) => (
                <li key={index}>{guideline}</li>
              ))}
            </ul>
            <p>Plagiarism, data fabrication, and other unethical practices will result in immediate rejection and may lead to sanctions.</p>
          </article>
          
          <div className="submission-button">
            <a href="#" className="btn">Submit Your Manuscript</a>
            <p>Or download our <a href="#">complete author guidelines</a> (PDF)</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Submission;