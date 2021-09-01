import React, { useState } from 'react';
import { Section } from '../../types/Section';
import './projects-list.scss';

export type ProjectsProps = {
  list: Section[]
};

export const Projects = (props: ProjectsProps) => {
  const [listIndex, setListIndex] = useState(0);

  return (
    <div className="projects-list">
      <ul className="tabs">
        {props.list.map((section, index) => (
          <li key={section.name}>
            <a 
              href="#"
              onClick={() => setListIndex(index)}
              className={index === listIndex ? 'selected' : ''}>
              {section.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="links">
        {props.list[listIndex].links.map(link => (
          <li key={link.name}>
            <a href={link.url} description={link.name}>
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
