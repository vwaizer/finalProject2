import React, { useState } from 'react';

const useHoverButton = (props) => {
  const { initialColor, hoverColor, transition } = props;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    {console.log(isHovered)}
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    {console.log(isHovered)}
  };
  const buttonStyled = {
    button: isHovered ? hoverColor : initialColor,
    transition: transition,
  };
  return [buttonStyled, handleMouseEnter, handleMouseLeave ];
};

export default useHoverButton;
