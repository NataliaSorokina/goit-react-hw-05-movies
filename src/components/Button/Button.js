import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

function Button({ onClick }) {
  return (
    <Btn type="button" onClick={onClick}>
      Load more
    </Btn>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
};
