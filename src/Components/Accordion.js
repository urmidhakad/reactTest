import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="accordion-symbol">{isActive ? '-' : '+'}</div>
        <div>{title}</div>  
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      <hr></hr>
    </div>
  );
};

export default Accordion;