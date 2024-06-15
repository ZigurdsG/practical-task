import { useState } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import type { FormData } from '@/lib/types';
import { isEmailValid, isPasswordValid, simulateApiCall } from '@/lib/utils';

import { OtpButtons, ResetButton } from '@/components/formElements/Buttons';
import Fields from '@/components/formElements/Fields';
import OtpInput from '@/components/formElements/OtpInput';
import UnderlineLink from '@/components/links/UnderlineLink';

import { FormMode } from '@/constant';
import { message } from '@/constant/errors';

import Container from './Container';

export default function RegistrationForm() {
  const [formMode, setFormMOde] = useState<
    (typeof FormMode)[keyof typeof FormMode]
  >(FormMode.Login);
  const [isLoading, setIsLoading] = useState<true | false>(false);
  const [isFinished, setIsFinished] = useState<true | false>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    otp: '',
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
      handleLoginClick();
    }
  };

  const handleLoginClick = () => {
    // incorrect@email.com
    const isValidEmail = isEmailValid(formData.email);
    // incorrect-password
    const checkedPass = isPasswordValid(formData.password);

    if (isValidEmail && !checkedPass.toShort && !checkedPass.isInvalid) {
      setIsLoading(true);
      simulateApiCall().then(() => {
        setIsLoading(false);
        setFormMOde(FormMode.Otp);
        setFormData({ email: '', password: '' });
        setErrorMessage({ email: '', password: '' });
      });
      return;
    }

    setErrorMessage((prev) => ({
      ...prev,
      email: isValidEmail ? '' : message.invalidEmail,
      password: checkedPass.toShort
        ? message.toShortPassword
        : checkedPass.isInvalid
          ? message.invalidPassword
          : '',
    }));
  };

  const handleOtpSubmit = () => {
    setIsFinished(true);
  };

  const handleResetClick = () => {
    setFormData({ email: '', password: '' });
    setErrorMessage({ email: '', password: '', otp: '' });
    setFormMOde(FormMode.Login);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <Container formMode={formMode}>
        <>
          <div className='flex h-10 place-content-center text-5xl leading-none text-neutral-400'>
            <ImSpinner2 className='animate-spin' />
          </div>
          <ResetButton handleResetClick={handleResetClick}>Cancel</ResetButton>
        </>
      </Container>
    );
  }

  if (isFinished) {
    return (
      <Container formMode={formMode}>
        <h3 className='text-center text-neutral-600'>Success!</h3>
        <div className='text-right'>
          <UnderlineLink href='/'>Go to Home page</UnderlineLink>
        </div>
      </Container>
    );
  }

  return (
    <Container formMode={formMode} handleKeyDown={handleKeyDown}>
      {formMode === FormMode.Otp ? (
        <OtpInput
          error={errorMessage.otp}
          setFocus={false}
          onChange={handleInputChange}
        />
      ) : (
        <Fields
          changeHandler={handleInputChange}
          errors={errorMessage}
          formdata={formData}
        />
      )}
      <OtpButtons
        formData={formData}
        formMode={formMode}
        isLoading={isLoading}
        handleOtpSubmit={handleOtpSubmit}
        handleSubmitClick={handleLoginClick}
        handleResetClick={handleResetClick}
      >
        <div className='self-center mr-auto'>
          <UnderlineLink href='/'>Go to Registration page</UnderlineLink>
        </div>
      </OtpButtons>
    </Container>
  );
}
