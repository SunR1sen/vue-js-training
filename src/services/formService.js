import {
  validateCardNumber,
  validateCardholderName,
  validateCvc
} from "./validators";

export const inputConfig = {
  name: {
    text: "Text",
    cardNumber: "Card Number",
    cardholderName: "Cardholder Name",
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
