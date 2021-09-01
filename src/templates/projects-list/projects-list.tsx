import * as React from 'react'
import { Section } from '../../types/Section';
import './projects-list.scss';

export type ProjectsProps = {
  list: Section[]
};

export const Projects = (props: ProjectsProps) => {
  return (
    <div className="projects-list">
      <ul className="tabs">
        {props.list.map(section => (
          <li key={section.name}>
            <a href="#">
              {section.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="links">
        {props.list[0].links.map(link => (
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
