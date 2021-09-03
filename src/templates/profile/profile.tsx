import * as React from 'react'
import './profile.scss';
import {RotateImage} from '../rotate-image/rotate-image';
import {Projects} from '../projects-list/projects-list';
import { Section } from '../../types/Section';

export type ProfileProps = {
    name: string,
    description: string,
    imageWidthAndHeight: number | string,
    imageCycleInSeconds: number
    imagePrimary: string,
    imageSecondary: string,
    maxWidth: number,
    maxHeight: number,
    sections: Section[]
};

export const Profile = (props: ProfileProps) => {
  return (
    <div className="profile">
      <div className="content" style={ { maxWidth: props.maxWidth } }>
        <div className="card" style={ { maxHeight: props.maxHeight } }>
          <RotateImage
            widthAndHeight={props.imageWidthAndHeight}
            cycleInSeconds={props.imageCycleInSeconds}
            primary={props.imagePrimary}
            secondary={props.imageSecondary}
          />
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
          <Projects
            list={props.sections}
          />
        </div>
      </div>
    </div>
  )
}
