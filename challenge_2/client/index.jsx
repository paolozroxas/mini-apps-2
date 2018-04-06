import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

//formInfo is an array whose index is the form number
//for each form number, there is a form id, form title, and array of fields
//each field is an object with an id, text, and initial value
var formMeta = [
  {
    formIdx: 0,
    formId: 'userInfo',
    title: 'User Information',
    fields: [
      { id: 'firstName', text: 'First Name:', value: '' },
      { id: 'lastName', text: 'Last Name:', value: '' },
      { id: 'email', text: 'Email:', value: '' },
      { id: 'password', text: 'Password:', value: '' },
      { id: 'retypePassword', text: 'Retype Password:', value: '' }
    ]
  },
  {
    formIdx: 1,
    formId: 'shipping',
    title: 'Shipping',
    fields: [
      { id: 'line1', text: 'Line 1:', value: '' },
      { id: 'line2', text: 'Line 2:', value: '' },
      { id: 'city', text: 'City:', value: '' },
      { id: 'state', text: 'State:', value: '' },
      { id: 'zipCode', text: 'Zip Code:', value: 0 }
    ]
  },
  {
    formIdx: 2,
    formId: 'payment',
    title: 'Payment',
    fields: [
      { id: 'cardNumber', text: 'Card Number:', value: 0 },
      { id: 'expiryDate', text: 'Expiry Date:', value: '' },
      { id: 'cvv', text: 'CVV:', value: 0 },
      { id: 'billingZipCode', text: 'Billing Zip Code:', value: 0 }
    ]
  }
];

ReactDOM.render(<App formMeta={formMeta}/>, document.getElementById('main'));
