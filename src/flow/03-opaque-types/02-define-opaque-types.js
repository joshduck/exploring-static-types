// @flow

const EMAIL_REGEX = /.+@.+/;

export opaque type Email: string = string;

export default function createEmail(input: string): Email {
  if (EMAIL_REGEX.test(input)) {
    return input;
  } else {
    throw new Error("Invalid email!");
  }
}
