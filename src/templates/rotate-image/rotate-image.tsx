import * as React from 'react'
import './rotate-image.scss';

export type RotateImageProps = {
  widthAndHeight: number | string,
  primary: string,
  secondary: string,
  cycleInSeconds: number
};

export const RotateImage = (props: RotateImageProps) => {
  return (
    <div className="rotate-image">
      <div className="primary" style={ {
        width: props.widthAndHeight,
        height: props.widthAndHeight,
        backgroundImage: `url(${props.primary})`,
        animation: `spinner ${props.cycleInSeconds}s linear infinite`
      } }>
        <div className="secondary" style={ { 
          width: props.widthAndHeight,
          height: props.widthAndHeight,
          backgroundImage: `url(${props.secondary})`,
          animation: `hide ${props.cycleInSeconds}s linear infinite`
        } }>
        </div>
      </div>
    </div>
  )
}
