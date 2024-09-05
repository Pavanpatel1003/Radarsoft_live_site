import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { toast } from "react-toastify";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const Appointment = () => {
  const [loading, setLoading] = useState(false); // Initialize loading state

  // Define your Yup validation schema
  const BookingValidation = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      phoneNumber: "",
      subject: "",
    },
    validationSchema: BookingValidation, // Link the validation schema
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Set loading state
      try {
        const response = await axios.post(
          `https://api.radarsoft.tech/api/appoinment`,
          values
        );
        console.log("Form Data", response);
        if (response.status === 201) {
          toast.success("Your request was submitted successfully.");
          resetForm(); // Reset form after successful submission
        }
      } catch (error) {
        console.log("Error in request", error);
        toast.error("There was an error submitting your request.");
      } finally {
        setLoading(false); // End loading state
      }
    },
  });

  return (
    <>
      <div
        className="modal fade"
        id="Appointment"
        tabIndex="-1" // Correct tabIndex case
        aria-labelledby="AppointmentLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="">
                <div className="banner-right-side-areas">
                  <div className="banner-right-side-boxs">
                    <h3 className="banner-right-side-h3">
                      Book an Appointment
                    </h3>
                    <form onSubmit={formik.handleSubmit}>
                      {/* Full Name Field */}
                      <input
                        type="text"
                        name="fullName"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} // Capture blur event for validation
                        placeholder="Full Name*"
                      />
                      <div className="mb-4">
                        {formik.touched.fullName && formik.errors.fullName && (
                          <span
                            className="formik-errors-text"
                            style={{ fontSize: "12px" }}
                          >
                            {formik.errors.fullName}
                          </span>
                        )}
                      </div>

                      {/* Email Field */}
                      <input
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Email Id*"
                      />
                      <div className="mb-4">
                        {formik.touched.email && formik.errors.email && (
                          <span
                            className="formik-errors-text"
                            style={{ fontSize: "12px" }}
                          >
                            {formik.errors.email}
                          </span>
                        )}
                      </div>

                      {/* Phone Number Field */}
                      <input
                        type="number"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Phone No*"
                      />
                      <div className="mb-4">
                        {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber && (
                            <span
                              className="formik-errors-text"
                              style={{ fontSize: "12px" }}
                            >
                              {formik.errors.phoneNumber}
                            </span>
                          )}
                      </div>

                      {/* Subject Field */}
                      <input
                        type="text"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Subject*"
                      />
                      <div className="mb-4">
                        {formik.touched.subject && formik.errors.subject && (
                          <span
                            className="formik-errors-text"
                            style={{ fontSize: "12px" }}
                          >
                            {formik.errors.subject}
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        className="banner-right-side-button"
                        type="submit"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {loading ? (
                          <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#FFFFFF"
                            radius="9"
                            ariaLabel="three-dots-loading"
                          />
                        ) : (
                          "Enquire Now"
                        )}
                      </button>
                    </form>
                    <p className="banner-right-side-paragraph">
                      ⚡Available from Mon - Fri 10AM TO 7PM ⚡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
