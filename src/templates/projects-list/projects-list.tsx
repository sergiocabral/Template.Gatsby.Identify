import React, { useState } from 'react';
import parse from 'html-react-parser';
import * as FreeRegularSvgIcons from '@fortawesome/free-regular-svg-icons';
import * as FreeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FreeBrandsSvgIcons from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../types/Link';
import { Section } from '../../types/Section';
import './projects-list.scss';

const icons = {};
Object.keys(FreeRegularSvgIcons).map(icon => icons[iconName('far' + icon)] = FreeRegularSvgIcons[icon]);
Object.keys(FreeSolidSvgIcons).map(icon => icons[iconName('fas' + icon)] = FreeSolidSvgIcons[icon]);
Object.keys(FreeBrandsSvgIcons).map(icon => icons[iconName('fab' + icon)] = FreeBrandsSvgIcons[icon]);

function iconName(iconName: string) {
  return iconName.replace(/\W/g, '').toLowerCase();
}

export type ProjectsProps = {
  list: Section[]
};

export const Projects = (props: ProjectsProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  return (
    <div className="projects-list" style={ { display: props.list.length ? 'inherit' : 'none' } }>
      <ul className="tabs">
        {props.list.map((section, index) => (
          <li key={section.name}>
            <a 
              href="#"
              onClick={(event) => { setCurrentSectionIndex(index); event.preventDefault(); }}
              className={index === currentSectionIndex ? 'selected' : ''}>
              {section.name}
            </a>
          </li>
        ))}
      </ul>
      {props.list.map((section, sectionIndex) => 
        <div className={ 'section ' + (currentSectionIndex === sectionIndex ? '' : 'hide') }>
          <div className="title hide"><h3>{section.name}</h3></div>
          {Array.isArray(section.content)
            ? <ul className='links '>
                {section.content.map(link => (
                  <li key={link.name}>
                    <a href={link.url} target="_blank" description={link.name}>
                      <FontAwesomeIcon icon={icons[iconName(link.icon)]}/>
                    </a>
                  </li>
                ))}
              </ul>
            : <div className='html'>
                {parse(section.content)}
              </div>
          }
        </div>
      )}
    </div>
  )
}
