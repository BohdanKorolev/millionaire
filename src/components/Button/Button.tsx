import React from 'react';

interface IButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
