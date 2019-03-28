import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '../elements/Dividers';
import Content from '../elements/Content';
import Inner from '../elements/Inner';

import { colors } from '../../tailwind';

const About = ({ children, offset }) => (
  <>
    <Divider
      bg="linear-gradient(90deg, #3C3952  0%,#9E4566 20%,#CE5173 40%, #C24936 60%, #D76F24 100%)"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
    />

    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
);

export default About;

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
