import React from 'react';

const JoeCard = ({ joe }) => {
  return (
    <div className="joe-card">
      <h3>{joe.name}</h3>
      <p>Codename: {joe.codename}</p>
      <p>Specialty: {joe.specialty}</p>
    </div>
  );
};

export default JoeCard;
