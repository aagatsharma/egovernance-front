import { useState } from "react";
import ChildForm from "./components/child-form";
import FatherForm from "./components/father-form";
import MotherForm from "./components/mother-form";
import ConfirmPersonForm from "./components/confirm-person-form";

function App() {
  const [formstate, setFormState] = useState(1);
  const [childId, setChildId] = useState();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-4xl m-auto p-4">
      <div className="rounded border p-10 w-full">
        {formstate === 1 && (
          <ChildForm setFormState={setFormState} setChildId={setChildId} />
        )}

        {formstate === 2 && (
          <FatherForm setFormState={setFormState} childId={childId} />
        )}

        {formstate === 3 && (
          <MotherForm setFormState={setFormState} childId={childId} />
        )}

        {formstate === 4 && (
          <ConfirmPersonForm setFormState={setFormState} childId={childId} />
        )}

        {formstate === 5 && (
          <div>
            <h1 className="text-center font-bold text-3xl">
              Successfully registered. Please check your email
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
