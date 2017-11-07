// @flow

type Pizza = { 
  name: string,
  size: 'small' | 'medium' | 'large' 
};

type Order = { 
  item: Array<Pizza>, 
  total: number, 
  address?: { 
    street: string, 
    postcode: string 
  } 
}