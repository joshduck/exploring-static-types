// @flow

const isValidEmail = (input) => true;

export opaque type Email: string = string;

export function getEmail(input: string): Email {
  if (isValidEmail(input)) {
    return input;
  } else {
    throw new Error('Invalid email');
  }
}