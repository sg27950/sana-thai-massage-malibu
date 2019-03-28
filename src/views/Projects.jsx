import React from 'react';
import PropTypes from 'prop-types';
import { Divider, DividerMiddle } from '../elements/Dividers';
import Content from '../elements/Content';
import Inner from '../elements/Inner';
import { UpDown, UpDownWide } from '../styles/animations';
import { colors } from '../../tailwind';
import SVG from '../components/SVG';

const Projects = ({ children, offset }) => (
  <>
    <DividerMiddle
      // bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      bg="linear-gradient(90deg, #D76F24 0%,#C24936 20%,#CE5173 40%,#9E4566 60%, #3C3952 100%)"
      speed={-0.2}
      offset={`${offset}.1`}
      factor={2}
    />
    <Content speed={0.4} offset={`${offset}.2`} factor={2}>
      <Inner>{children}</Inner>
    </Content>
  </>
);

export default Projects;

Projects.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
