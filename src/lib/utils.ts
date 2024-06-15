import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isEmailValid = (email: string): boolean => {
  // Hardcoded email validation
  if (email.trim() === 'incorrect@email.com') return false;
  // Implement email validation logic here (e.g., regular expressions)
  return email.includes('@') && email.length > 5;
};

export const isPasswordValid = (
  password: string,
): {
  toShort: boolean;
  isInvalid: boolean;
} => ({
  // Hardcoded email validation
  isInvalid: password.trim() === 'incorrect-password',
  // Implement password validation logic here (e.g., minimum length, complexity)
  toShort: password.length < 8,
});

export const isOtpValid = (otp: string): boolean => {
  // Implement OTP validation logic here (e.g., length, match server-sent code)
  return otp.length === 6;
};

export const simulateApiCall = () => {
  return new Promise((resolve) => setTimeout(resolve, 2000));
};
