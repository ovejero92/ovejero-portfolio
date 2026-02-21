
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  variant = 'primary', 
  children, 
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  size = 'md',
}: ButtonProps) {
  const baseStyles = `btn ${variant} ${size} ${className}`;
  
  return (
    <button
      className={baseStyles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}