// @flow

import type { Email } from './07-opaque-types';

type Pizza = { /* ... */ };

type Order = { 
  item: Array<Pizza>, 
  total: number, 
  email: Email,
  address?: { 
    street: string, 
    postcode: string 
  } 
}