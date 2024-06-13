import React from 'react';
import styles from "./Job.module.css"

const JobCard = (props) => {
  const {
    id,
    link,
    locations,
    department,
    experience,
    company,
    salary,
    role,
    batch,
    title
  } = props.job;

  return (
    <div className={`${styles.jobcard}`}>
      <h2>{title}</h2>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Location:</strong> {locations.join(', ')}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Salary:</strong> {salary} LPA</p>
      <p><strong>Eligible Batches:</strong> {batch.join(', ')}</p>
      <div className="text-center">
        <a href={link} className='btn btn-sm btn-primary text-center' target="_blank" rel="noopener noreferrer">Apply Now</a>
      </div>
    </div>
  );
};

export default JobCard;
