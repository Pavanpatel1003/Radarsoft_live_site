import useValidationSchema from "@/components/validation/FormValidation";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { closeApplyModal } from "../common/data";

const Apply = ({ selectedJobTitle }) => {
    const { JobValidation } = useValidationSchema();
    const [loading, setLoading] = useState(false);
    const [fileName, setFileName] = useState(""); // Add state for file name

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            currentCtc: "",
            expectedCtc: "",
            jobTitle: selectedJobTitle || "Web developer",
            resume: null,
        },
        validationSchema: JobValidation,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                const data = new FormData();
                Object.keys(values).forEach((key) => {
                    if (values[key] !== null) {
                        data.append(key, values[key]);
                    }
                });

                const response = await axios.post(
                    `https://api.radarsoft.tech/api/career`,
                    data,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log("form data", response);
                if (response.status === 201) {
                    console.log("response here", response);
                    toast.success("Your request submitted successfully.");
                    resetForm();
                    closeApplyModal();
                }
            } catch (error) {
                console.log("error in request", error);
                toast.error("There was an error submitting your request.");
            } finally {
                setLoading(false); // Set loading to false after submission completes
            }
        },
    });

    return (
        <>
            <div
                className="modal fade"
                id="ApplyModal"
                tabIndex="-1"
                aria-labelledby="ApplyModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ApplyModalLabel">
                                <span className="me-2">
                                    <Link href="#">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </Link>
                                </span>
                                {selectedJobTitle ? selectedJobTitle : "web developer"}
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="contact-form">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name*"
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                        />
                                        <div className="">
                                            {formik.errors.name && formik.touched.name && (
                                                <span className="formik-errors-text">
                                                    {formik.errors.name}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email address*"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                        />
                                        <div className="">
                                            {formik.errors.email && formik.touched.email && (
                                                <span className="formik-errors-text">
                                                    {formik.errors.email}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone*"
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                        />
                                        <div className="">
                                            {formik.errors.phone && formik.touched.phone && (
                                                <span className="formik-errors-text">
                                                    {formik.errors.phone}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="currentCtc">Current ctc</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="currentCtc"
                                            name="currentCtc"
                                            placeholder="Current ctc*"
                                            value={formik.values.currentCtc}
                                            onChange={formik.handleChange}
                                        />
                                        <div className="">
                                            {formik.errors.currentCtc &&
                                                formik.touched.currentCtc && (
                                                    <span className="formik-errors-text">
                                                        {formik.errors.currentCtc}
                                                    </span>
                                                )}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="expectedCtc">Expected ctc</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="expectedCtc"
                                            name="expectedCtc"
                                            placeholder="Expected ctc*"
                                            value={formik.values.expectedCtc}
                                            onChange={formik.handleChange}
                                        />
                                        <div className="">
                                            {formik.errors.expectedCtc &&
                                                formik.touched.expectedCtc && (
                                                    <span className="formik-errors-text">
                                                        {formik.errors.expectedCtc}
                                                    </span>
                                                )}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="resume">Upload resume</label>
                                        <br />
                                        <div
                                            className="upload-area"
                                            onClick={() => document.getElementById("resume").click()}
                                        >
                                            <i className="fa-solid fa-cloud-arrow-up"></i>
                                            <p>
                                                Drag your file(s) or <span>browse</span>
                                            </p>
                                            <p>Max 5MB file allowed</p>
                                            <input
                                                type="file"
                                                id="resume"
                                                name="resume"
                                                style={{ display: "none" }}
                                                onChange={(event) => {
                                                    const file = event.target.files[0];
                                                    if (file) {
                                                        formik.setFieldValue("resume", file);
                                                        setFileName(file.name); // Set the file name here
                                                    }
                                                }}
                                            />
                                        </div>
                                        {fileName && (
                                            <div className="file-name">
                                                <p>Uploaded file: {fileName}</p>
                                            </div>
                                        )}
                                        <div className="">
                                            {formik.errors.resume && formik.touched.resume && (
                                                <span className="formik-errors-text">
                                                    {formik.errors.resume}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="submit"
                                            className="co-button"
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            {loading ? (
                                                <ThreeDots
                                                    visible={true}
                                                    height="30"
                                                    width="30"
                                                    color="#FFFFFF"
                                                    radius="9"
                                                    ariaLabel="three-dots-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass=""
                                                />
                                            ) : (
                                                "Apply now"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Apply;
