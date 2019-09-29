import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';

const valuesSchema = Yup.object().shape({
  name: Yup.string()
    .required('必填'),
  age: Yup.number()
    .typeError('填寫內容必須為數字')
    .required('必填'),
  gender: Yup.string()
    .required('必填'),
  favoriteLibrary: Yup.string()
    .required('必填'),
  activities: Yup.array().of(
    Yup.string(),
  ).required('必填'),
});

export default function FormikPractice(): JSX.Element {
  return (
    <Formik
      initialValues={{
        name: '',
        age: '',
        gender: '',
        favoriteLibrary: '',
        activities: [] as string[],
      }}
      validationSchema={valuesSchema}
      onSubmit={(values, actions): void => {
        setTimeout((): void => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 500);
      }}
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit,
        isSubmitting, setFieldValue,
      }): JSX.Element => (
        <form onSubmit={handleSubmit}>
          <h2>示範表單</h2>

          <div>
            <TextField
              placeholder="姓名"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.name && touched.name && errors.name}
              error={!!(errors.name && touched.name && errors.name)}
              margin="dense"
            />
          </div>

          <div>
            <TextField
              placeholder="年齡"
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.age && touched.age && errors.age}
              error={!!(errors.age && touched.age && errors.age)}
              margin="dense"
            />
          </div>

          <div>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              placeholder="性別"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors.gender && touched.gender && errors.gender}
              error={!!(errors.gender && touched.gender && errors.gender)}
              margin="dense"
            >
              <option value="">{null}</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </TextField>
          </div>

          <div>
            <FormControl component="fieldset">
              <FormLabel component="legend">最喜歡的函式庫</FormLabel>
              <RadioGroup row aria-label="favoriteLibrary" name="favoriteLibrary" value={values.favoriteLibrary} onChange={handleChange}>
                <FormControlLabel control={<Radio />} value="react" label="React" />
                <FormControlLabel control={<Radio />} value="vue" label="Vue" />
                <FormControlLabel control={<Radio />} value="angular" label="Angular" />
                <FormControlLabel
                  control={<Radio />}
                  disabled
                  value="disabled"
                  label="(Disabled option)"
                />
              </RadioGroup>
              <FormHelperText
                hidden={
                  !(errors.favoriteLibrary && touched.favoriteLibrary && errors.favoriteLibrary)
                }
                error={
                  !!(errors.favoriteLibrary && touched.favoriteLibrary && errors.favoriteLibrary)
                }
              >
                {errors.favoriteLibrary && touched.favoriteLibrary && errors.favoriteLibrary}
              </FormHelperText>
            </FormControl>
          </div>

          <div>
            <FormControl component="fieldset">
              <FormGroup row>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={values.activities.includes('reading')}
                      onChange={(): void => {
                        if (values.activities.includes('reading')) {
                          const nextValues = values.activities.filter((value): boolean => value !== 'reading');
                          setFieldValue('activities', nextValues);
                        } else {
                          const nextValues = [...values.activities, 'reading'];
                          setFieldValue('activities', nextValues);
                        }
                      }}
                      value="reading"
                    />
                  )}
                  label="讀書"
                />
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={values.activities.includes('coding')}
                      onChange={(): void => {
                        if (values.activities.includes('coding')) {
                          const nextValues = values.activities.filter((value): boolean => value !== 'coding');
                          setFieldValue('activities', nextValues);
                        } else {
                          const nextValues = [...values.activities, 'coding'];
                          setFieldValue('activities', nextValues);
                        }
                      }}
                      value="coding"
                    />
                  )}
                  label="寫程式"
                />
              </FormGroup>
              <FormHelperText
                hidden={
                  !(errors.activities && touched.activities && errors.activities)
                }
                error={
                  !!(errors.activities && touched.activities && errors.activities)
                }
              >
                {errors.activities && touched.activities && errors.activities}
              </FormHelperText>
            </FormControl>
          </div>

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}
