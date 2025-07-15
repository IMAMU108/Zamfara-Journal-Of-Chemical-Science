import React, { useState } from 'react';
import PageHeader from '../Common/PageHeader/PageHeader';
import { FaSearch, FaAngleRight } from 'react-icons/fa';

const Archives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const years = [
    {
      year: 2023,
      issues: [
        {
          volume: "Volume 7, Issue 2",
          date: "June 2023",
          articles: [
            "Climate Change Mitigation Strategies in Urban Areas",
            "Sustainable Agriculture Practices in Developing Nations",
            "Renewable Energy Innovations: A Global Perspective"
          ]
        },
        {
          volume: "Volume 7, Issue 1",
          date: "March 2023",
          articles: [
            "Carbon Capture Technologies: Recent Advances",
            "Water Conservation in Arid Regions",
            "Sustainable Urban Transport Systems"
          ]
        }
      ]
    },
    {
      year: 2022,
      issues: [
        {
          volume: "Volume 6, Issue 4",
          date: "December 2022",
          articles: [
            "Biodiversity Conservation Strategies",
            "Green Building Technologies",
            "Sustainable Waste Management"
          ]
        },
        {
          volume: "Volume 6, Issue 3",
          date: "September 2022",
          articles: [
            "Circular Economy Models",
            "Sustainable Fisheries Management",
            "Climate Policy Analysis"
          ]
        },
        {
          volume: "Volume 6, Issue 2",
          date: "June 2022",
          articles: [
            "Renewable Energy Storage Solutions",
            "Sustainable Forest Management",
            "Eco-friendly Materials"
          ]
        },
        {
          volume: "Volume 6, Issue 1",
          date: "March 2022",
          articles: [
            "Urban Sustainability Indicators",
            "Sustainable Tourism Practices",
            "Green Chemistry Applications"
          ]
        }
      ]
    }
  ];

  const filterIssues = (issue) => {
    if (!searchTerm) return true;
    const searchText = searchTerm.toLowerCase();
    return (
      issue.volume.toLowerCase().includes(searchText) ||
      issue.date.toLowerCase().includes(searchText) ||
      issue.articles.some(article => article.toLowerCase().includes(searchText))
    );
  };

  return (
    <>
      <PageHeader title="Journal Archives" subtitle="Browse our collection of published issues" />
      
      <section className="archives">
        <div className="container">
          <div className="search-options">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>FaSearch</button>
            </div>
            <div className="filter-options">
              <select>
                <option>Filter by Year</option>
                {years.map((yearData, index) => (
                  <option key={index}>{yearData.year}</option>
                ))}
              </select>
              <select>
                <option>Filter by Volume</option>
                {years.flatMap(yearData => 
                  yearData.issues.map((issue, i) => (
                    <option key={`${yearData.year}-${i}`}>{issue.volume}</option>
                  ))
                )}
              </select>
              <select>
                <option>Filter by Topic</option>
                <option>Climate Change</option>
                <option>Renewable Energy</option>
                <option>Sustainable Agriculture</option>
                <option>Biodiversity</option>
                <option>Circular Economy</option>
              </select>
            </div>
          </div>
          
          {years.map((yearData, yearIndex) => (
            <div className="archive-years" key={yearIndex}>
              <h3>{yearData.year}</h3>
              {yearData.issues.filter(filterIssues).map((issue, issueIndex) => (
                <div className="issue" key={issueIndex}>
                  <div className="issue-info">
                    <h4>{issue.volume}</h4>
                    <p>{issue.date}</p>
                    <a href="#" className="btn-small">View Issue</a>
                  </div>
                  <div className="issue-articles">
                    <ul>
                      {issue.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <a href="#">{article}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
          
          <div className="pagination">
            <a href="#" className="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            {/* <a href="#"><FaAngleRight /></a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Archives;