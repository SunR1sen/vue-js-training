export const validateCardNumber = (value) => {
  const cardNumberRegex = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/;
  if (!cardNumberRegex.test(value)) {
    return "This field must be a valid card number";
  }

  return true;
};

export const isRequired = (value) => {
  if (!value) {
    return "This field is required";
  }

  return true;
};

export const validateCvc = (value) => {
  const cvcRegex = /^[0-9]{3,4}$/;
  if (!cvcRegex.test(value)) {
    return "Not valid CVC/CVV code";
  }

  return true;
};

export const isNumber = (value) => {
  if (isNaN(parseInt(value))) {
    return "Must be a number";
  }

  return true;
};

export const validateCardholderName = (value) => {
  const cardholderNameRegex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
  if (!cardholderNameRegex.test(value)) {
    return "This field must be a valid cardholder name";
  }

  return true;
};

export const emailValidator = (value) => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  if (!emailRegex.test(value)) {
    return "This field must be a valid email address";
  }

  return true;
};

const getSingleParam = (params, paramName) => {
  return Array.isArray(params) ? params[0] : params[paramName];
};

export const regexValidator = (value, params) => {
  let regex = getSingleParam(params, "regex");
  if (typeof regex === "string") {
    regex = new RegExp(regex);
  }
  if (!regex.test(String(value))) {
    return "This value must be a valid regex";
  }

  return true;
};

export const validate = (currentValue, validators) => {
  let isValid = true;
  if (!validators || !validators.length) {
    return isValid;
  }
  validators.forEach((validator) => {
    let validatorValue = validator(currentValue);
    if (typeof validatorValue === "string") {
      isValid = validatorValue;
    }
  });

  return isValid;
};
