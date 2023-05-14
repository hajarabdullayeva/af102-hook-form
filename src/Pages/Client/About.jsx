import React from 'react'
import {Helmet} from "react-helmet";


const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>This is About Page</div>

    </div>
  )
}

export default About