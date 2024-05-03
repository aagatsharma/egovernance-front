/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Input } from "rizzui";

const FatherForm = ({ setFormState, childId }) => {
  const [formfield, setFormfield] = useState({
    first_name: "",
    last_name: "",
    citizenship_no: "",
    woda_no: "",
    age: "",
    occupation: "",
    education: "",
    language: "",
    religion: "",
    child: childId,
  });

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(formfield);
    try {
      const response = await fetch("http://127.0.0.1:8000/father/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formfield),
      });
      const data = await response.json();
      if (data) {
        setFormState(3);
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
    setFormState(3);
  };

  const handleChange = (fieldName, value) => {
    setFormfield((prevFormfield) => ({
      ...prevFormfield,
      [fieldName]: value,
    }));
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={submitForm}>
      <h1 className="text-center font-bold text-3xl">
        Father Information Form
      </h1>
      <Input
        label="First Name"
        placeholder="Enter your Father's First Name"
        onChange={(e) => handleChange("first_name", e.target.value)}
      />
      <Input
        label="Last Name"
        placeholder="Enter your Father's Last Name"
        onChange={(e) => handleChange("last_name", e.target.value)}
      />
      <Input
        label="Citizenship Number"
        placeholder="Enter your Father's Citizenship Number"
        onChange={(e) => handleChange("citizenship_no", e.target.value)}
      />
      <Input
        label="Ward No."
        type="number"
        onChange={(e) => handleChange("woda_no", e.target.value)}
        placeholder="Enter your Father's ward no."
      />
      <Input
        label="Age"
        type="number"
        placeholder="Enter your Father's Age"
        onChange={(e) => handleChange("age", e.target.value)}
      />
      <Input
        label="Occupation"
        placeholder="Enter your Father's Occupation"
        onChange={(e) => handleChange("occupation", e.target.value)}
      />
      <Input
        label="Education"
        placeholder="Enter your Father's Education"
        onChange={(e) => handleChange("education", e.target.value)}
      />
      <Input
        label="Language"
        placeholder="Enter your Father's Language"
        onChange={(e) => handleChange("language", e.target.value)}
      />
      <Input
        label="Religion"
        placeholder="Enter your Father's Religion"
        onChange={(e) => handleChange("religion", e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FatherForm;
