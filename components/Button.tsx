import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick: any;
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className='
        rounded-md
        w-full
        bg-red-600
        py-3
        text-white
        mt-10
        hover:bg-red-700
        transition
      '
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;