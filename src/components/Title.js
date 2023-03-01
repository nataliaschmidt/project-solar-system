import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

// FALTA VERIFICAR O PROPTYPES DE HEADLINE

Title.defaultProps = {
  headline: [],
};

Title.propTypes = {
  headline: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    imagem: PropTypes.string,
  })),
};

export default Title;
