/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Input, Select } from "rizzui";

const genderoptions = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: "FEMALE" },
];

const birthOption = [
  { label: "Single", value: "SINGLE" },
  { label: "Twins", value: "TWINS" },
];

const birthPlace = [
  { label: "Home", value: "HOME" },
  { label: "Hospital", value: "HOSPITAL" },
];

const ChildForm = ({ setFormState, setChildId }) => {
  const [formfield, setFormfield] = useState({
    first_name: "",
    last_name: "",
    DOB: "",
    gender: "",
    birth_place: "",
    birth_type: "",
    caste: "",
    woda_no: "",
    number: "",
    email: "",
  });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/child_register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formfield),
      });
      const data = await response.json();
      if (data) {
        setChildId(data.data.id);
        setFormState(2);
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
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
        Child registration Form
      </h1>
      <Input
        label="First Name"
        placeholder="Enter your First Name"
        onChange={(e) => handleChange("first_name", e.target.value)}
      />
      <Input
        label="Last Name"
        placeholder="Enter your Last Name"
        onChange={(e) => handleChange("last_name", e.target.value)}
      />
      <Input
        type="date"
        label="Date"
        placeholder="Enter your Date of Birth"
        onChange={(e) => handleChange("DOB", e.target.value)}
      />
      <Select
        label="Select Your gender"
        options={genderoptions}
        value={formfield.gender}
        onChange={(e) => handleChange("gender", e.value)}
      />
      <Select
        label="Select Your Birth Place"
        options={birthPlace}
        value={formfield.birth_place}
        onChange={(e) => handleChange("birth_place", e.value)}
      />
      <Select
        label="Select Your Birth Type"
        options={birthOption}
        value={formfield.birth_type}
        onChange={(e) => handleChange("birth_type", e.value)}
      />
      <Input
        label="Caste"
        placeholder="Enter your caste"
        onChange={(e) => handleChange("caste", e.target.value)}
      />
      <Input
        label="Ward No."
        type="number"
        onChange={(e) => handleChange("woda_no", e.target.value)}
        placeholder="Enter your ward no."
      />
      <Input
        label="Phone Number"
        type="number"
        placeholder="Enter your phone number"
        onChange={(e) => handleChange("number", e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ChildForm;
