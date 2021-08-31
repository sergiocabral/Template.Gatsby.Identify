import * as React from 'react'
import {Helmet} from 'react-helmet';
import Profile from '../templates/profile/profile';
import data from '../data/website.json';
import favicon from '../images/favicon.png';
import opengraph from '../images/opengraph.png';

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
        <meta property="og:image" content={ `${data.profile.url}/${opengraph}`.replace(regexMultipleSlash, '/') } />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={ data.profile.name } />
        <meta name="twitter:description" content={ data.profile.description } />

        <link rel="shortcut icon" href={favicon} />

      </Helmet>
      <Profile name={ data.profile.name } />
    </main>
  )
}

export default Page
