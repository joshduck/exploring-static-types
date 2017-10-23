// @flow

import { getEmail } from './07-opaque-types';
import type { Email } from './07-opaque-types';

const input = 'hello@example.com';
const email = getEmail(input);
// const fake: Email = 'fake@hello.com';

console.log('Email is ' + email); // Can use typed value as a string.