import * as React from 'react'
import './profile.scss';

type Props = {
    name: string
};

const Template = (props: Props) => {
  return (
    <div className="profile">
      <div className="content">
        <div className="card">
          <h1>{props.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default Template;