import * as React from 'react'
import {Helmet} from 'react-helmet';
import Profile from '../templates/profile/profile';
import data from '../data/website.json';
import imgFavicon from '../images/favicon.png';
import imgOpenGraph from '../images/opengraph.png';
import imgProfilePrimary from '../images/profile-primary.jpg';
import imgProfileSecondary from '../images/profile-secondary.jpg';

const regexMultipleSlash = /(?<!:)\/+/g;

const Page = () => {
  return (
    <main>
      <Helmet>
        <title>{ data.profile.title }</title>

        <meta charSet="UTF-8" />

        <meta property="og:locale" content={ data.config.locale } />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ data.profile.name } />
        <meta property="og:description" content={ data.profile.description } />
        <meta property="og:url" content={ data.profile.url } />
        <meta property="og:site_name" content={ data.profile.title } />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content={ `${data.profile.url}/${imgOpenGraph}`.replace(regexMultipleSlash, '/') } />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={ data.profile.name } />
        <meta name="twitter:description" content={ data.profile.description } />

        <link rel="shortcut icon" href={imgFavicon} />

      </Helmet>
      <Profile 
        name={data.profile.name} 
        description={data.profile.description}
        imageWidthAndHeight="10em"
        imageCycleInSeconds={data.config.cycleInSeconds}
        imagePrimary={imgProfilePrimary}
        imageSecondary={imgProfileSecondary}
      />
    </main>
  )
}

export default Page
