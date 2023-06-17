import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullname: "",
  gender: "",
  dateOfBirth: "",
  cidNo: "",
  academicQualification: "",
  currentAddress: "",
  email: "",
  phoneNo: "",
};

const AppliForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      sessionStorage.setItem("formValues", JSON.stringify(formValues));
      navigate("/services/incubation/additional");
    }
  };

  const validate = (values) => {
    const errors = {};
    // Add validations for the fields
    if (!values.fullname) {
      errors.fullname = "Fullname is required";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    }
    if (!values.cidNo) {
      errors.cidNo = "CID No is required";
    }
    if (!values.academicQualification) {
      errors.academicQualification = "Academic Qualification is required";
    }
    if (!values.currentAddress) {
      errors.currentAddress = "Current Address is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.phoneNo) {
      errors.phoneNo = "Phone No is required";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sessionStorage.setItem("formValues", JSON.stringify(formValues));
      navigate("/services/incubation/additional");
    }
  }, [formErrors, formValues, isSubmit, navigate]);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center login-form max-w-xl px-24 py-8 border-2 border-black-800"
      >
        <h1 className="font-sans text-center font-black text-3xl pb-8">
          Personal Info
        </h1>
        <div className="flex flex-col gap-2 font-sans border-2 border-black-800 p-2">
          <div className="username flex flex-col border-2 border-black-800 p-2">
            <input
              name="fullname"
              type="text"
              placeholder="Full Name"
              className="input-field font-sans px-2 py-2 border border-gray-300 rounded-md w-full"
              value={formValues.fullname}
              onChange={handleChange}
            />
            <small className="font-sans text-red-500">
              {formErrors.fullname}
            </small>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="gender flex flex-col border-2 border-black-800 p-2">
              <select
                name="gender"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md p-2"
                value={formValues.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <small className="font-sans text-red-500">
                {formErrors.gender}
              </small>
            </div>

            <div className="date-of-birth flex flex-col border-2 border-black-800 p-2">
              <input
                name="dateOfBirth"
                type="date"
                placeholder="Date of Birth"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md p-2"
                value={formValues.dateOfBirth}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.dateOfBirth}
              </small>
            </div>
          </div>
          <div className="cid-no flex flex-col border-2 border-black-800 p-2">
            <input
              name="cidNo"
              type="text"
              placeholder="CID No"
              className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
              value={formValues.cidNo}
              onChange={handleChange}
            />
            <small className="font-sans text-red-500">{formErrors.cidNo}</small>
          </div>

          <div className="academic-qualification flex flex-col border-2 border-black-800 p-2">
            <input
              name="academicQualification"
              type="text"
              placeholder="Academic Qualification"
              className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
              value={formValues.academicQualification}
              onChange={handleChange}
            />
            <small className="font-sans text-red-500">
              {formErrors.academicQualification}
            </small>
          </div>

          <div className="current-address flex flex-col border-2 border-black-800 p-2">
            <input
              name="currentAddress"
              type="text"
              placeholder="Current Address"
              className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
              value={formValues.currentAddress}
              onChange={handleChange}
            />
            <small className="font-sans text-red-500">
              {formErrors.currentAddress}
            </small>
          </div>

          <div className="email flex flex-col border-2 border-black-800 p-2">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
              value={formValues.email}
              onChange={handleChange}
            />
            <small className="font-sans text-red-500">{formErrors.email}</small>
          </div>

          <div className="phone-no flex flex-col border-2 border-black-800 p-2">
            <input
              name="phoneNo"
              type="text"
              placeholder="Phone No"
              className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
              value={formValues.phoneNo}
              onChange={handleChange}
            />
            <small className="font-sans text-red-500">
              {formErrors.phoneNo}
            </small>
          </div>
        </div>
        <button
          type="submit"
          className="input-field text-center items-center justify-center text-white font-sans sign-in-btn bg-blue-500 border-2 border-blue-500 m-2 rounded-full w-3/4"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default AppliForm;
