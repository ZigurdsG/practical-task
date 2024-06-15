import { FormMode } from '@/constant';

interface ContainerProps {
  children: React.ReactNode;
  formMode: (typeof FormMode)[keyof typeof FormMode];
  handleKeyDown?: (evt: React.KeyboardEvent<HTMLFormElement>) => void;
}

export default function Container({
  children,
  formMode,
  handleKeyDown,
}: ContainerProps): React.JSX.Element {
  return (
    <div className='border border-gray-300 card mx-auto p-6 rounded-lg shadow-md'>
      <form
        className='flex flex-col justify-between min-h-72'
        onKeyDown={handleKeyDown}
      >
        <label className='text-center text-2xl font-medium mb-4'>
          {formMode}
        </label>
        {children}
      </form>
    </div>
  );
}
