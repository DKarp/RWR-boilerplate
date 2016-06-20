import { mapValues, entries } from 'lodash';

const parseMessages = (messages) => (
  mapValues(messages, (message) => message.join(', ') )
);

export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }
};

export const parseFormErrors = (response) => ({
  ...parseMessages(response.form_errors)
});

export const appendCSRFtoken = (formData) => {
  const CSRFparam = document.querySelector('meta[name="csrf-param"]').content;
  const CSRFtoken = document.querySelector('meta[name="csrf-token"]').content;

  formData.append(CSRFparam, CSRFtoken);

  return formData;
};
