import * as React from 'react'
import './rotate-image.scss';

type Props = {
  widthAndHeight: number | string,
  primary: string,
  secondary: string,
  cycleInSeconds: number
};

const Template = (props: Props) => {
  return (
    <div className="rotate-image" style={ {
      width: props.widthAndHeight,
      height: props.widthAndHeight,
      backgroundImage: `url(${props.secondary})`,
      animation: `spinner ${props.cycleInSeconds}s linear infinite`
    } }>
      <div className="inner" style={ { 
        width: props.widthAndHeight,
        height: props.widthAndHeight,
        backgroundImage: `url(${props.primary})`,
        animation: `hide ${props.cycleInSeconds}s linear infinite`
      } }>
      </div>
    </div>
  )
}

export default Template;