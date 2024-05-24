import React from "react";

import { Form, Formik } from "formik";

export default function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
      >
        {({ handleChange }) => (
          <Form>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
            />
            <label>description</label>

            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
            ></textarea>
            <button>save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
