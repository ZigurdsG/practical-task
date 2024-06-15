import { useEffect } from 'react';

interface InputProps {
  error: string;
  label: string;
  name: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setFocus?: boolean;
  value?: string;
}

export default function Input({
  error,
  label,
  name,
  onChange,
  setFocus,
  type,
  value,
}: InputProps): React.JSX.Element {
  useEffect(() => {
    if (setFocus) {
      const input = document.getElementById(name);
      if (input) {
        input.focus();
      }
    }
  }, [name, setFocus]);

  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium mb-2'>
        {label}
      </label>
      <input
        autoFocus={setFocus}
        className={`shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-sky-500 focus:border-sky-500 ${
          error ? 'border-red-500' : ''
        }`}
        id={name}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      {error ? (
        <span className='text-red-500 text-xs'>{error}</span>
      ) : (
        <span className='text-xs'>&nbsp;</span>
      )}
    </div>
  );
}
