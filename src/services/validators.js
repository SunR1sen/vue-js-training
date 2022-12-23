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

export const validateCardholderName = (value) => {
  const cardholderNameRegex = /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
  if (!cardholderNameRegex.test(value)) {
    return "This field must be a valid cardholder name";
  }

  return true;
};
