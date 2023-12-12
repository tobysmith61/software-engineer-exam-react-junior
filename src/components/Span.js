import React, { useState } from 'react';

const Span = () => {
  const [text, setText] = useState('hello');

  const handleClick = () => {
    // Update the text when the span is clicked
    setText('world');
  };

  return <span onClick={handleClick}>{text}</span>;
};

export default Span;
