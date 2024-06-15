interface InputProps {
  setFocus: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
export default function OtpInpu({
  error,
  onChange,
  setFocus,
}: InputProps): React.JSX.Element {
  return (
    <div className='mb-4'>
      <label htmlFor='otp' className='block text-sm font-medium mb-2'>
        OTP Code:
      </label>
      <input
        autoFocus={setFocus}
        className='shadow-sm rounded-md w-full px-3 py-2 focus:outline-none focus:ring-sky-500 focus:border-sky-500'
        id='otp'
        name='otp'
        type='text'
        onChange={onChange}
      />
      {error ? (
        <span className='text-red-500 text-xs'>{error}</span>
      ) : (
        <span className='text-xs'>&nbsp;</span>
      )}
    </div>
  );
}
