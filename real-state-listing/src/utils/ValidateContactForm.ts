import FormErrors from "../interfaces/FormErrors";
import FormData from "../interfaces/FormData";

export const ValidateContactForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]+$/;

  if (!formData.fullName) {
    errors.fullName = 'Full name is required.';
  }

  if (!formData.email) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!formData.phone) {
    errors.phone = 'Phone number is required.';
  } else if (!phonePattern.test(formData.phone)) {
    errors.phone = 'Phone number should contain only numbers.';
  }

  if (!formData.message) {
    errors.message = 'Message is required.';
  }

  return errors;
};