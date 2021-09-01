import * as React from 'react'
import { Project } from '../../types/Project';
import './projects-list.scss';

export type ProjectsProps = {
  list: Project[]
};

export const Projects = (props: ProjectsProps) => {
  return (
    <div className="projects-list">
      <ul>
        {props.list.map(project => (
          <li>
            <a href="#">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
