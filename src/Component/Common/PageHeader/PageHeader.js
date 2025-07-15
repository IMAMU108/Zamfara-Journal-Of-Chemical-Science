import React from 'react';
import './PageHeader.css';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="page-header">
      <div className="container">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;