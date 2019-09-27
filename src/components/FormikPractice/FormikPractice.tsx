import React from 'react';
import { Formik } from 'formik';

export default function FormikPractice(): JSX.Element {
  return (
    <Formik
      initialValues={{
        name: '',
        age: 18,
      }}
      validate={(values): { [key in keyof typeof values]?: string } => {
        const errors: { [key in keyof typeof values]?: string } = {};

        if (!values.name) {
          errors.name = '必填';
        }
        if (!values.age) {
          errors.age = '必填';
        } else if (!/^[0-9]*$/.test(values.age.toString())) {
          errors.age = '填寫內容必須為數字';
        }
        return errors;
      }}
      onSubmit={(values, actions): void => {
        setTimeout((): void => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
      }): JSX.Element => (
        <form onSubmit={handleSubmit}>
          <h2>姓名年齡示範表單</h2>

          <div>
            <input
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </div>
          <div>
            {errors.name && touched.name && errors.name}
          </div>

          <div>
            <input
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
            />
          </div>
          <div>
            {errors.age && touched.age && errors.age}
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
