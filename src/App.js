import React, { useState } from "react";
import { FormBuilder, Form } from "react-formio/lib/components";
import { options } from "./options";

const App = () => {
  const [show, setShow] = useState(true);
  const toggle = () => setShow((i) => !i);
  const [form, setForm] = useState(null);
  return (
    <div>
      <button onClick={toggle}>Toggle Form Builder</button>
      {show ? (
        <FormBuilder
          onChange={setForm}
          form={{ display: "form" }}
          options={options}
        ></FormBuilder>
      ) : (
        <Form form={form} onSubmit={console.log}></Form>
      )}
    </div>
  );
};

export default App;
