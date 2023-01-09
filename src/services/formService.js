import { validateCardNumber, validateCardholderName } from "./validators";

export const inputConfig = {
  name: {
    text: "Text",
    cardNumber: "Card Number",
    cardholderName: "Cardholder Name"
  },
  type: {
    text: "text",
    number: "number"
  },
  style: {
    default: "default",
    medium: "medium"
  }
};

export const selectPlaceholder = (name) => {
  switch (name) {
    case inputConfig.name.cardNumber:
      return "CARD NUMBER";
  }

  return "";
};

export const selectValidator = (name) => {
  switch (name) {
    case inputConfig.name.cardNumber:
      return validateCardNumber;

    case inputConfig.name.cardholderName:
      return validateCardholderName;
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
