import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';

const ImageBackground = styled('div')`
  background-image: url('/images/alex-loup-leaves.jpg');
`;

const Hero = () => {
  return (
    <ImageBackground>
      <h1>Frontend Masters + Gatsby &hearts;</h1>
      <p>
        Hello World <Link to="/about">Learn about me &rarr;</Link>
      </p>
    </ImageBackground>
  );
};

export default Hero;
