/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Input } from "rizzui";

const ConfirmPersonForm = ({ setFormState, childId }) => {
  const [formfield, setFormfield] = useState({
    first_name: "",
    last_name: "",
    citizenship_no: "",
    woda_no: "",
    relation: "",
    child: childId,
  });

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(formfield);
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/confirmation_person/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formfield),
        }
      );
      const data = await response.json();
      if (data) {
        setFormState(3);
      }
    } catch (err) {
      console.log("Something went wrong", err);
    }
    setFormState(5);
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
        Confirmation Person Form
      </h1>
      <Input
        label="First Name"
        placeholder="Enter Confirmation Person's First Name"
        onChange={(e) => handleChange("first_name", e.target.value)}
      />
      <Input
        label="Last Name"
        placeholder="Enter Confirmation Person's Last Name"
        onChange={(e) => handleChange("last_name", e.target.value)}
      />
      <Input
        label="Citizenship Number"
        placeholder="Enter Confirmation Person's Citizenship Number"
        onChange={(e) => handleChange("citizenship_no", e.target.value)}
      />
      <Input
        label="Ward No."
        type="number"
        onChange={(e) => handleChange("woda_no", e.target.value)}
        placeholder="Enter Confirmation Person's ward no."
      />
      <Input
        label="Relation"
        onChange={(e) => handleChange("relation", e.target.value)}
        placeholder="Enter Confirmation Person's Relation"
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ConfirmPersonForm;
