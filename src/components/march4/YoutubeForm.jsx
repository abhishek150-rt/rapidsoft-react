import React from 'react'
import { Input, Button, Error } from '../StyledComp';
import { useFormik } from "formik";

import { initialValues, onSubmit, validationSchema, onBlur } from './FormContent';

const YoutubeForm = () => {
  // using formik to set initial values for forms
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    onBlur
  });

  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <legend>Youtube form</legend>
        <div className="form-section">
          <Input type="text" id="name" name="name" placeholder="enter your name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} autoComplete="off" />
          {formik.touched.name && formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
        </div>
        <div className="form-section">
          <Input type="email" id="email" name="email" placeholder='enter your email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} autoComplete="off" />
          {formik.touched.email && formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
        </div>
        <div className="form-section">
          <Input type="text" name="channel" id="channel" placeholder='enter your youtube channel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel} autoComplete="off" />
          {formik.touched.channel && formik.errors.channel ? <Error>{formik.errors.channel}</Error> : null}
        </div>
        <div className="form-section">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  )
}

export default YoutubeForm