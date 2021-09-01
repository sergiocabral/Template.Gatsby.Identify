import * as React from 'react'
import './profile.scss';
import RotateImage from '../rotate-image/rotate-image';

type Props = {
    name: string,
    description: string,
    imageWidthAndHeight: number | string,
    imageCycleInSeconds: number
    imagePrimary: string,
    imageSecondary: string,
};

const Template = (props: Props) => {
  return (
    <div className="profile">
      <div className="content">
        <div className="card">
          <RotateImage
            widthAndHeight={props.imageWidthAndHeight}
            cycleInSeconds={props.imageCycleInSeconds}
            primary={props.imagePrimary}
            secondary={props.imageSecondary}
          />
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
        </div>
      </div>
    </div>
  )
}

export default Template;