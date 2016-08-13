const appendCSRFtoken = (formData) => {
  const CSRFparam = document.querySelector('meta[name="csrf-param"]').content;
  const CSRFtoken = document.querySelector('meta[name="csrf-token"]').content;

  formData.append(CSRFparam, CSRFtoken);

  return formData;
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }
};

const checkFlashMessages = (response) => {
  const flashMessages = JSON.parse(response.headers.get('X-Flash-Messages'));

  if (flashMessages) {
    const error = new Error('X-Flash-Messages');

    error.response = response;
    error.flashMessages = flashMessages;
    throw error;
  } else {
    return response;
  }
};

const getJSON = (response) => {
  const contentType = response.headers.get('Content-Type');

  if (/application\/json/.test(contentType)) {
    return response.json();
  } else {
    const error = new Error('Response is not a valid JSON');

    error.response = response;
    throw error;
  }
};

const checkFormErrors = (json) => {
  const formErrors = json.form_errors;

  if (formErrors) {
    const error = new Error('Form errors');

    error.formErrors = formErrors;
    throw error;
  } else {
    return json;
  }
};

export const fetchRequest = (method, endpoint, callback) => (
  (formData = new FormData()) => {
    const params = {
      body: appendCSRFtoken(formData),
      credentials: 'same-origin',
      method
    };

    const handleData = (dispatch) => (json) => callback(dispatch, json);

    return (dispatch) => fetch(endpoint, params)
      .then(checkStatus)
      .then(checkFlashMessages)
      .then(getJSON)
      .then(checkFormErrors)
      .then(handleData(dispatch));
  }
);
