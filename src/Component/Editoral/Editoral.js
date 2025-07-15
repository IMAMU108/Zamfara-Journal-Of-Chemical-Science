import React from 'react';
import PageHeader from '../Common/PageHeader/PageHeader';
import './Editoral.css';

const Editorial = () => {
  const editorInChief = {
    name: "Dr. Jane Smith",
    affiliation: "Professor of Environmental Science, University of Sustainability, USA",
    bio: "Dr. Smith has over 20 years of experience in sustainability research, with particular expertise in climate change adaptation strategies. She has published over 100 peer-reviewed articles and served on numerous international scientific committees.",
    email: "j.smith@ijsgs.org"
  };

  const associateEditors = [
    {
      name: "Dr. Ahmed Khan",
      affiliation: "Department of Renewable Energy, Green Tech University, UAE",
      email: "a.khan@ijsgs.org"
    },
    {
      name: "Dr. Maria Gonzalez",
      affiliation: "Institute of Sustainable Agriculture, University of Madrid, Spain",
      email: "m.gonzalez@ijsgs.org"
    },
    {
      name: "Dr. Wei Zhang",
      affiliation: "School of Environmental Policy, Beijing University, China",
      email: "w.zhang@ijsgs.org"
    },
    {
      name: "Dr. Fatoumata Diallo",
      affiliation: "African Center for Sustainability Studies, University of Dakar, Senegal",
      email: "f.diallo@ijsgs.org"
    }
  ];

  const advisoryBoard = [
    { name: "Prof. David Wilson", affiliation: "University of Oxford, UK" },
    { name: "Prof. Yuki Tanaka", affiliation: "Tokyo Institute of Technology, Japan" },
    { name: "Prof. Carlos Mendez", affiliation: "University of São Paulo, Brazil" },
    { name: "Prof. Amina Jafri", affiliation: "University of Cape Town, South Africa" },
    { name: "Prof. Lars Nielsen", affiliation: "Technical University of Denmark, Denmark" }
  ];

  return (
    <>
      <PageHeader title="Editorial Board" subtitle="Meet our team of distinguished editors" />
      
      <section className="editorial-board">
        <div className="container">
          <div className="board-section">
            <h3>Editor-in-Chief</h3>
            <div className="editor-card">
              <div className="editor-photo">
                <img src="https://via.placeholder.com/150" alt={editorInChief.name} />
              </div>
              <div className="editor-info">
                <h4>{editorInChief.name}</h4>
                <p className="affiliation">{editorInChief.affiliation}</p>
                <p className="bio">{editorInChief.bio}</p>
                <p className="email">Email: {editorInChief.email}</p>
              </div>
            </div>
          </div>
          
          <div className="board-section">
            <h3>Associate Editors</h3>
            <div className="editors-grid">
              {associateEditors.map((editor, index) => (
                <div className="editor-card" key={index}>
                  <div className="editor-photo">
                    <img src="https://via.placeholder.com/150" alt={editor.name} />
                  </div>
                  <div className="editor-info">
                    <h4>{editor.name}</h4>
                    <p className="affiliation">{editor.affiliation}</p>
                    <p className="email">Email: {editor.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="board-section">
            <h3>Editorial Advisory Board</h3>
            <div className="advisors-list">
              {advisoryBoard.map((advisor, index) => (
                <div className="advisor" key={index}>
                  <h4>{advisor.name}</h4>
                  <p>{advisor.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Editorial;