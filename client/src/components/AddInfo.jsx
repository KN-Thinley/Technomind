import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const initialValues = {
  institutionName: "",
  training: "",
  duration: "",
};

const AddInfo = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.institutionName) {
      errors.institutionName = "Name of Institution is required";
    }

    if (!values.training) {
      errors.training = "Training is required";
    }

    if (!values.duration) {
      errors.duration = "Duration is required";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sessionStorage.setItem("formValues", JSON.stringify(formValues));
      navigate("/services/incubation/final");
    }
  }, [formErrors, formValues, isSubmit, navigate]);

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="inline-block login-form px-24 py-8"
        >
          <h1 className="font-sans text-center font-black text-3xl pb-8">
            Additional Info
          </h1>
          <div className="flex flex-col items-center gap-4 font-sans">
            <div className="institution flex flex-col">
              <input
                name="institutionName"
                type="text"
                placeholder="Name of Institution"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md w-full"
                value={formValues.institutionName}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.institutionName}
              </small>
            </div>
            <div className="training flex flex-col">
              <input
                name="training"
                type="text"
                placeholder="Training"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md w-full"
                value={formValues.training}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.training}
              </small>
            </div>
            <div className="duration flex flex-col">
              <input
                name="duration"
                type="text"
                placeholder="Duration (days)"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md w-full"
                value={formValues.duration}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.duration}
              </small>
            </div>
          </div>
          <button
            type="submit"
            className="input-field text-center text-white font-sans sign-in-btn bg-blue-500 border-2 border-blue-500 rounded-full px-4 py-2 mt-4 mx-auto"
          >
            Next
          </button>
        </form>
      </div>
    </>
  );
};

export default AddInfo;
