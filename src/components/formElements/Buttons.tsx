import type { FormData } from '@/lib/types';

import Button from '@/components/buttons/Button';

import { FormMode } from '@/constant';

interface ButtonProps {
  children?: React.ReactNode;
  formData: FormData;
  formMode: (typeof FormMode)[keyof typeof FormMode];
  isLoading: boolean;
  handleSubmitClick: () => void;
  handleResetClick: () => void;
}
export default function Buttons({
  children,
  formData,
  formMode,
  handleSubmitClick,
  handleResetClick,
  isLoading,
}: ButtonProps): React.JSX.Element {
  return (
    <div className='flex flex-wrap gap-2 place-content-end'>
      {children}
      {isLoading ? (
        <Button onClick={handleResetClick} type='reset' variant='outline'>
          Cancel
        </Button>
      ) : formMode === FormMode.Register ? (
        <>
          <Button
            disabled={formData.email.length < 2 || formData.password.length < 2}
            onClick={handleSubmitClick}
            type='button'
            variant='primary'
          >
            Register
          </Button>
          <Button onClick={handleResetClick} type='reset' variant='outline'>
            Reset
          </Button>
        </>
      ) : (
        <>
          <Button
            disabled={formData.email.length < 2 || formData.password.length < 2}
            onClick={handleSubmitClick}
            type='button'
            variant='primary'
          >
            Login
          </Button>
          <Button onClick={handleResetClick} type='reset' variant='outline'>
            Cancel
          </Button>
        </>
      )}
    </div>
  );
}

interface ResetButtonProps {
  children?: React.ReactNode;
  handleResetClick: () => void;
}
export function ResetButton({
  children,
  handleResetClick,
}: ResetButtonProps): React.JSX.Element {
  return (
    <div className='flex flex-wrap gap-2 place-content-end'>
      <Button onClick={handleResetClick} type='reset' variant='outline'>
        {children}
      </Button>
    </div>
  );
}

interface OtpButtonProps {
  children?: React.ReactNode;
  formData: FormData;
  formMode: (typeof FormMode)[keyof typeof FormMode];
  isLoading: boolean;
  handleOtpSubmit: () => void;
  handleSubmitClick: () => void;
  handleResetClick: () => void;
}

export function OtpButtons({
  children,
  formData,
  formMode,
  handleOtpSubmit,
  handleSubmitClick,
  handleResetClick,
  isLoading,
}: OtpButtonProps): React.JSX.Element {
  return (
    <div className='flex flex-wrap gap-2 place-content-end'>
      {children}
      {isLoading ? (
        <Button onClick={handleResetClick} type='reset' variant='outline'>
          Cancel
        </Button>
      ) : formMode === FormMode.Login ? (
        <>
          <Button
            disabled={formData.email.length < 2 || formData.password.length < 2}
            onClick={handleSubmitClick}
            type='button'
            variant='primary'
          >
            Login
          </Button>
        </>
      ) : (
        // Otp
        <>
          <Button
            disabled={
              !formData.otp ? true : formData?.otp.length < 6 ? true : false
            }
            onClick={handleOtpSubmit}
            type='button'
            variant='primary'
          >
            Submit
          </Button>
        </>
      )}
      {!isLoading && (
        <Button onClick={handleResetClick} type='reset' variant='outline'>
          Cancel
        </Button>
      )}
    </div>
  );
}
