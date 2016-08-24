export const appendCSRFtoken = (formData) => {
  const CSRFparam = document.querySelector('meta[name="csrf-param"]').content;
  const CSRFtoken = document.querySelector('meta[name="csrf-token"]').content;

  formData.append(CSRFparam, CSRFtoken);

  return formData;
};

export const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
  }
};

export const checkFlashMessages = (response) => {
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

export const getJSON = (response) => {
  const contentType = response.headers.get('Content-Type');

  if (/application\/json/.test(contentType)) {
    return response.json();
  } else {
    const error = new Error('Response is not a valid JSON');

    error.response = response;
    throw error;
  }
};

export const checkFormErrors = (json) => {
  const formErrors = json.form_errors;

  if (formErrors) {
    const error = new Error('Form errors');

    error.formErrors = formErrors;
    throw error;
  } else {
    return json;
  }
};

export const createFetchHandler = ({ method, endpoint, onRequest, onSuccess, onFailure }) => (
  (formData = new FormData()) => (
    (dispatch, getState) => {
      onRequest && onRequest(dispatch, getState);

      const fetchParams = {
        body: appendCSRFtoken(formData),
        credentials: 'same-origin',
        method
      };

      const handleData = (data) => onSuccess && onSuccess(data, dispatch, getState);
      const handleError = (error) => onFailure && onFailure(error, dispatch, getState);

      return fetch(endpoint, fetchParams)
        .then(checkStatus)
        .then(checkFlashMessages)
        .then(getJSON)
        .then(checkFormErrors)
        .then(handleData)
        .catch(handleError);
    }
  )
);
