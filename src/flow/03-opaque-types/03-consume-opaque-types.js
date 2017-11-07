// @flow

import createEmail from "./02-define-opaque-types";
import type { Email } from "./02-define-opaque-types";

function sendEmail(address: Email) {
  /* ... */
}

const email: Email = createEmail("hello@example.com");
sendEmail(email);

const unchecked: Email = "unchecked@example.com";
sendEmail("unchecked@example.com");
