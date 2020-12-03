
import React from 'react';
const Marker = (props) => {
    const { color, name } = props;
    return (
      <div
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;