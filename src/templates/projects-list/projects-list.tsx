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
        {props.list.map((section, sectionIndex) => 
          <li key={section.name}>
            <a 
              href="#"
              onClick={(event) => { setCurrentSectionIndex(sectionIndex); event?.preventDefault(); }}
              className={sectionIndex === currentSectionIndex ? 'selected' : ''}
              description={section.description}>
              {section.name}
            </a>
          </li>
        )}
      </ul>
      {props.list.map((section, sectionIndex) => 
        <div key={section.name + sectionIndex} className={ 'section ' + (currentSectionIndex === sectionIndex ? '' : 'hide') }>
          <div className="title hide"><h3>
            {section.name}
            {section.name.replace(/[\w\s]+/g, '').length === 0 ? ' — ' : ' '}
            {section.description}
          </h3></div>
          {Array.isArray(section.content)
            ? <ul className='links'>
                {section.content.map((link, linkIndex) => (
                  <li key={section.name + sectionIndex + linkIndex}>
                    <a href={link.url} target="_blank" description={link.name}>
                      <span><FontAwesomeIcon icon={icons[iconName(link.icon)]}/></span>
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
