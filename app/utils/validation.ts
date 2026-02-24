export const validateForm = (formData: any) => {
  const errors: any = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.rating) {
    errors.rating = "Please select rating";
  }

  if (!formData.experience) {
    errors.experience = "Please select experience";
  }

 

  return errors;
};