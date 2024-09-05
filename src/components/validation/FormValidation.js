import * as Yup from "yup";

const useValidationSchema = () => {
  const BookingValidation = Yup.object().shape({
    fullName: Yup.string().required("FullName is required"),
    email: Yup.string()
      .matches(
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Please enter valid email"
      )
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required."),
    subject: Yup.string().required("Subject is required."),
  });

  const ContactValidation = Yup.object().shape({
    email: Yup.string()
      .matches(
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "Please enter valid email"
      )
      .required("Email is required"),
    name: Yup.string().required("Name is required."),
    phone: Yup.string().required("Phone Number is required."),
    country: Yup.string().required("Country is required."),
    message: Yup.string().required("Message is required."),
  });

  const JobValidation = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required."),
    currentCtc: Yup.string().required("Current CTC is required."),
    expectedCtc: Yup.string().required("Expected CTC is required."),
    resume: Yup.mixed()
      .required("File is required")
      .test("fileSize", "File too large", (value) => {
        if (!value) return true;
        return value.size <= 5 * 1024 * 1024;
      })
      .test("fileFormat", "Unsupported Format", (value) => {
        if (!value) return true;
        return [
          "image/jpeg",
          "image/png",
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value.type);
      }),
  });

  return {
    BookingValidation,
    ContactValidation,
    JobValidation,
  };
};

export default useValidationSchema;
