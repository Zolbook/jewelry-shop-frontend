
import React from 'react';
import './index.css'; 

export default function Footer({ notes }) {
  return (
    <div className="footer">
      <ul className="flex gap-x-5 items-center">
        {notes.map((note, index) => (
          <li key={index} className="list-none inline-flex p-5">{note}</li> 
        ))}
      </ul>
    </div>
  );
} 

