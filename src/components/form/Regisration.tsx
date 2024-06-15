import { useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import type { FormData } from '@/lib/types';
import { isEmailValid, isPasswordValid, simulateApiCall } from '@/lib/utils';

import Buttons, { ResetButton } from '@/components/formElements/Buttons';
import Fields from '@/components/formElements/Fields';
import UnderlineLink from '@/components/links/UnderlineLink';

import { FormMode } from '@/constant';
import { message } from '@/constant/errors';

import Container from './Container';

export default function RegistrationForm() {
  const formMode = FormMode.Register;
  const [isRegistered, setIsRegistered] = useState<true | false>(false);
  const [isLoading, setIsLoading] = useState<true | false>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLFormElement>) => {
    if (evt.key === 'Enter') {
      handleRegisterClick();
    }
  };

  const handleRegisterClick = () => {
    const isValidEmail = isEmailValid(formData.email);
    const isValidPassword = isPasswordValid(formData.password);

    if (isValidEmail && isValidPassword) {
      setIsLoading(true);
      simulateApiCall().then(() => {
        setIsLoading(false);
        setFormData({ email: '', password: '' });
        setErrorMessage({ email: '', password: '' });
        setIsRegistered(true);
      });
      return;
    }

    setErrorMessage((prev) => ({
      ...prev,
      email: isValidEmail ? '' : message.invalidEmail,
      password: isValidPassword ? '' : message.invalidPassword,
    }));
  };

  const handleResetClick = () => {
    setFormData({ email: '', password: '' });
    setErrorMessage({ email: '', password: '', otp: '' });
    setIsLoading(false);
  };

  if (isRegistered) {
    return (
      <Container formMode={FormMode.Register}>
        <h3 className='text-center text-neutral-600'>
          Registration successful!
        </h3>
        <div className='text-right'>
          <UnderlineLink href='/login'>Go to Login page</UnderlineLink>
        </div>
      </Container>
    );
  }

  return (
    <Container formMode={FormMode.Register} handleKeyDown={handleKeyDown}>
      {isLoading ? (
        <>
          <div className='flex h-10 place-content-center text-5xl leading-none text-neutral-400'>
            <ImSpinner2 className='animate-spin' />
          </div>
          <ResetButton handleResetClick={handleResetClick}>Cancel</ResetButton>
        </>
      ) : (
        <>
          <Fields
            changeHandler={handleInputChange}
            errors={errorMessage}
            formdata={formData}
          />
          <Buttons
            formData={formData}
            formMode={formMode}
            isLoading={isLoading}
            handleSubmitClick={handleRegisterClick}
            handleResetClick={handleResetClick}
          >
            <div className='self-center mr-auto'>
              <UnderlineLink href='/login'>Go to Login page</UnderlineLink>
            </div>
          </Buttons>
        </>
      )}
    </Container>
  );
}
