import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  briefDesp: "",
  supportRequirement: "",
  technology: "",
  locationAfterGrad: "",
  spaceRequirement: "",
};

const ProInfo = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({ ...prevFormValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post("/api/submit-form", formValues);
        if (response.status === 200) {
          // Successful request, navigate to the success page
          navigate("/success", { replace: true });
        } else {
          // Request failed, handle the error
          throw new Error("Failed to submit the form.");
        }
      } catch (error) {
        // Request failed, handle the error
        console.error(error);
        // You can display an error message to the user here
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const formValue1 = JSON.parse(sessionStorage.getItem("formValues"));
      const formValue2 = JSON.parse(sessionStorage.getItem("formValues2"));

      // make api request to save dataa in the database
      saveDataToDatabase(formValue1, formValue2);
    }
  });

  const validate = (values) => {
    const errors = {};

    if (!values.briefDescription) {
      errors.briefDescription = "Brief Description is required";
    }

    if (!values.supportRequirement) {
      errors.supportRequirement = "Support Requirement is required";
    }

    if (!values.technologyUsed) {
      errors.technology = "Technology Used is required";
    }

    if (!values.businessLocation) {
      errors.locationAfterGrad = "Business Location is required";
    }

    if (!values.spaceRequirement) {
      errors.spaceRequirement = "Space Requirement is required";
    }

    return errors;
  };

  const saveDataToDatabase = (formValue1, formValue2, formValues) => {
    // construct the data payload
    const data = {
      name: formValue1.name,
      gender: formValue1.gender,
      dateOfBirth: formValue1.dateOfBirth,
      cid: formValue1.cid,
      academicQualification: formValue1.academicQualification,
      currentAddress: formValue1.currentAddress,
      email: formValue1.email,
      phoneNo: formValue1.phoneNo,
      additionalQualifications: {
        institution: formValue2.institution,
        training: formValue2.training,
        duration: formValue2.duration,
      },
      briefDesp: formValues.briefDesp,
      supportRequirement: formValues.supportRequirement,
      technology: formValues.technology,
      locationAfterGrad: formValues.locationAfterGrad,
      spaceRequirement: formValues.spaceRequirement,
    };

    // make the api request to the backend server
    fetch("/incubation/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        sessionStorage.clear();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <>
      <div className="container mx-auto h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="inline-block login-form px-34 py-8"
        >
          <h1 className="font-sans text-center font-black text-3xl pb-8">
            Personal Info
          </h1>
          <div className="flex flex-col items-center gap-4 font-sans">
            {/* Existing fields */}

            {/* Brief Description */}
            <div className="briefDescription flex flex-col">
              <textarea
                name="briefDesp"
                placeholder="Brief Description of Business Idea"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
                value={formValues.briefDesp}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.briefDesp}
              </small>
            </div>

            {/* Support Requirement */}
            <div className="supportRequirement flex flex-col">
              <textarea
                name="supportRequirement"
                placeholder="Support Requirement from Business Incubation Center"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md w-full"
                value={formValues.supportRequirement}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.supportRequirement}
              </small>
            </div>

            {/* Technology Used */}
            <div className="technologyUsed flex flex-col">
              <textarea
                name="technology"
                placeholder="Technology to be Used"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
                value={formValues.technology}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.technology}
              </small>
            </div>

            {/* Business Location */}
            <div className="businessLocation flex flex-col">
              <textarea
                name="locationAfterGrad"
                placeholder="Business Location After Graduation"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
                value={formValues.locationAfterGrad}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.locationAfterGrad}
              </small>
            </div>

            {/* Space Requirement */}
            <div className="spaceRequirement flex flex-col">
              <input
                name="spaceRequirement"
                type="text"
                placeholder="Space Requirement (sq. Ft)"
                className="input-field font-sans px-4 py-2 border border-gray-300 rounded-md"
                value={formValues.spaceRequirement}
                onChange={handleChange}
              />
              <small className="font-sans text-red-500">
                {formErrors.spaceRequirement}
              </small>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              type="submit"
              className="input-field text-center text-white font-sans sign-in-btn bg-blue-500 border-2 border-blue-500 rounded-full w-32"
            >
              Submit
            </button>
            <button
              type="button"
              className="input-field text-center text-white font-sans sign-in-btn bg-red-500 border-2 border-red-500 rounded-full w-32"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProInfo;
