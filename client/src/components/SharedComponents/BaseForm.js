import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { FormWrapper } from "./BaseForm.styles";

function BaseForm({
  title = "Form Title",
  submitText = "Submit",
  initialValues,
  fieldArray,
  onSubmit,
}) {
  if (!Object.keys(initialValues).length > 0 || !fieldArray.length > 0)
    return "Loading...";

  return (
    <>
      <h1>{title}</h1>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            onSubmit(values);
            resetForm();
          }, 500);
        }}
      >
        <Form>
          <FormWrapper>
            {fieldArray.map((field) => (
              <div key={field.id}>
                <label className="mb-6 block text-gray-700 text-sm font-bold mb-2">
                  {field.name}
                </label>
                <Field
                  className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              </div>
            ))}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {submitText}
            </button>
          </FormWrapper>
        </Form>
      </Formik>
    </>
  );
}

export default BaseForm;
