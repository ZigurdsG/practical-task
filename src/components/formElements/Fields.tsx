import Input from './Input';

interface FieldProps {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { email: string; password: string };
  formdata: { email: string; password: string };
}

export default function Fields({
  changeHandler,
  errors,
  formdata,
}: FieldProps): React.JSX.Element {
  const { email, password } = formdata;

  return (
    <>
      <Input
        error={errors.email}
        label='Email Address:'
        name='email'
        onChange={changeHandler}
        setFocus={email.length < 1 || errors.email.length > 0}
        type='email'
        value={email}
      />
      <Input
        error={errors.password}
        label='Password:'
        name='password'
        onChange={changeHandler}
        setFocus={errors.email.length === 0 && errors.password.length > 0}
        type='password'
        value={password}
      />
    </>
  );
}
