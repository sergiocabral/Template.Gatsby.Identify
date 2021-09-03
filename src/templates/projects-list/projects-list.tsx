import React, { useState } from 'react';
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
  const [listIndex, setListIndex] = useState(0);

  const links = props.list
    .map((item, index) => Object.assign(item, { index }))
    .reduce((result, item) => {
      result.push(...item.links.map(link => Object.assign(link, { index: item.index })));
      return result;
    }, Array<Link & { index: number; }>());

    return (
    <div className="projects-list" style={ { display: links.length ? 'inherit' : 'none' } }>
      <ul className="tabs">
        {props.list.map((section, index) => (
          <li key={section.name}>
            <a 
              href="#"
              onClick={(event) => { event.preventDefault(); setListIndex(index); }}
              className={index === listIndex ? 'selected' : ''}>
              {section.name}
            </a>
          </li>
        ))}
      </ul>
      <ul className="links">
        {links.map(link => (
          <li key={link.name} className={ listIndex === link.index ? '' : 'hide' }>
            <a href={link.url} target="_blank" description={link.name}>
              <FontAwesomeIcon icon={icons[iconName(link.icon)]}/>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
