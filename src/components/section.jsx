import React from 'react';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      {children}
    </React.Fragment>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
