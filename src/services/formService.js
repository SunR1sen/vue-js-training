import {
  validateCardNumber,
  validateCardholderName,
  validateCvc,
  isRequired
} from "./validators";

export const inputConfig = {
  // TODO: use simple names for inputs
  name: {
    text: "text",
    cardNumber: "cardNumber",
    cardholderName: "cardholderName",
    cvc: "CVC/CVV"
  },
  type: {
    text: "text",
    number: "number"
  },
  style: {
    default: "default",
    medium: "medium",
    cvc: "cvc"
  }
};

export const selectConfig = {
  name: {
    month: "Month",
    year: "Year"
  },
  style: {
    medium: "medium"
  },
  validator: {
    required: isRequired
  }
};

export const selectValues = (name) => {
  if (name === "month") {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  if (name === "year") {
    const currentYear = new Date().getFullYear();
    const data = [];
    for (let i = 0; i <= 10; i++) {
      data.push(currentYear + i);
    }
    return data;
  }

  return [];
};

export const selectPlaceholder = (name) => {
  switch (name) {
    case inputConfig.name.cardNumber:
      return "CARD NUMBER";

    case inputConfig.name.cardholderName:
      return "CARDHOLDER NAME";

    case inputConfig.name.cvc:
      return "CVC/CVV";
  }

  return "";
};

export const selectValidator = (name) => {
  switch (name) {
    case inputConfig.name.cardNumber:
      return validateCardNumber;

    case inputConfig.name.cardholderName:
      return validateCardholderName;

    case inputConfig.name.cvc:
      return validateCvc;
  }

  return null;
};

export const selectAutocomplete = (name) => {
  switch (name) {
    case inputConfig.name.cardNumber:
      return "cc-number";
  }

  return "";
};

export const selectMask = (name) => {
  switch (name) {
    case inputConfig.name.cardNumber:
      return "#### #### #### ####";
  }

  return "";
};

export const formData = [
  {
    name: "cardNumber",
    type: "input",
    placeholder: "CARD NUMBER",
    defaultValue: "4444333322221111"
  },
  {
    name: "cardholderName",
    type: "input",
    placeholder: "CARDHOLDER NAME",
    defaultValue: "TEST NAME"
  },
  {
    name: "year",
    type: "select",
    placeholder: "YEAR",
    defaultValue: ""
  },
  {
    name: "month",
    type: "select",
    placeholder: "MONTH",
    defaultValue: ""
  },
  {
    name: "terms",
    type: "checkbox",
    label: "Accept Terms & Conditions",
    defaultValue: true
  }
];
