import React, { useState } from 'react';
import { Link } from '../../types/Link';
import { Section } from '../../types/Section';
import './projects-list.scss';

export type ProjectsProps = {
  list: Section[]
};

export const Projects = (props: ProjectsProps) => {
  const [listIndex, setListIndex] = useState(0);

  const links = props.list
    .map((item, index) => Object.assign(item, { index }))
    .reduce((result, item) => {
      result.push(...item.links.map(link => Object.assign(link, { index: item.index })));
      return result;
    }, Array<Link & { index: number; }>());

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
        {links.map(link => (
          <li key={link.name} className={ listIndex === link.index ? '' : 'hide' }>
            <a href={link.url} description={link.name}>
              <i className={link.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
