
import React from "react";

import { Form, Field } from "formik";

function ContactForm({ errors, touched, isValid, dirty
}) {
  // console.log(errors);
  return (
    <Form>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 col-lg-11">
          <div className="row">
            <div className="form-group col-12 col-md-6 col-lg-6">
              <label className="col-form-label">Name :</label>
              <Field
                name="username"
                className={
                  touched.username
                    ? `form-control ${errors.username ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.username && errors.username && (
                <small className="text-danger">{errors.username}</small>
              )}
            </div>
            <div className=" col-12 col-md-6 col-lg-6">

              <label className="col-form-label">Email :</label>
              <Field
                name="email"
                className={
                  touched.email
                    ? `form-control ${errors.email ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.email && errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}

            </div>


            <div className=" col-12 col-md-6 col-lg-6">
              <label className="col-form-label">Phone :</label>
              <Field
                name="phone"
                className={
                  touched.phone
                    ? `form-control ${errors.phone ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.phone && errors.phone && (
                <small className="text-danger">{errors.phone}</small>
              )}
            </div>
            <div className=" col-12 col-md-6 col-lg-6">
              <label className="col-form-label">Qualification :</label>
              <Field
                name="Qualification"
                className={
                  touched.Qualification
                    ? `form-control ${errors.Qualification ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.Qualification && errors.Qualification && (
                <small className="text-danger">{errors.Qualification}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Address :</label>
              <Field
                as="textarea"
                name="message"
                className={
                  touched.message
                    ? `form-control ${errors.message ? "invalid" : "valid"}`
                    : `form-control`
                }
              >
              </Field>
              {touched.message && errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}
            </div>
            <div className=" col-12 col-md-6 col-lg-6">
              <label className="col-form-label">Contry :</label>
              <Field
                name="Contry"
                className={
                  touched.Contry
                    ? `form-control ${errors.Contry ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.Contry && errors.Contry && (
                <small className="text-danger">{errors.Contry}</small>
              )}
            </div>
            <div className=" col-12 col-md-6 col-lg-6">
              <label className="col-form-label">State :</label>
              <Field
                name="State"
                className={
                  touched.State
                    ? `form-control ${errors.State ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.State && errors.State && (
                <small className="text-danger">{errors.State}</small>
              )}
            </div>
            <div className=" col-12 col-md-6 col-lg-6">
              <label className="col-form-label">Pincode :</label>
              <Field
                name="Pincode"
                className={
                  touched.Pincode
                    ? `form-control ${errors.Pincode ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.Pincode && errors.Pincode && (
                <small className="text-danger">{errors.Pincode}</small>
              )}
            </div>

            <div className=" col-12 col-md-6 col-lg-6">
              <label className="col-form-label ">Experience :</label>
              <Field
                name="Experience"
                className={
                  touched.Experience
                    ? `form-control ${errors.Experience ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.Experience && errors.Experience && (
                <small className="text-danger">{errors.Experience}</small>
              )}
            </div>

            <div className=" col-12 col-md-6 col-lg-6">
              <label className="col-form-label ">Current yearly CTC :</label>
              <Field
                name=" CurrentyearlyCTC"
                className={
                  touched.Current_yearly_CTC
                    ? `form-control ${errors.CurrentyearlyCTC ? "invalid" : "valid"}`
                    : `form-control`
                }
                type="text"
              />
              {touched.CurrentyearlyCTC && errors.CurrentyearlyCTC && (
                <small className="text-danger">{errors.CurrentyearlyCTC}</small>
              )}
            </div>

            <div className=" col-12 col-md-6 col-lg-6">
              <label className=" col-form-label">Expected yearly CTC :</label>
              <Field
                name=" Expected yearly CTC"
                className={
                  touched.ECTC
                    // eslint-disable-next-line no-template-curly-in-string
                    ? 'form-control ${errors.ECTC ? "invalid" : "valid"}'
                    : 'form-control'
                }
                type="text"
              />
              {touched.ECTC && errors.ECTC && (
                <small className="text-danger">{errors.ECTC}</small>
              )}
            </div>

            {/* <div className=" col-12 col-md-6 col-lg-12">
              <label >Upload CV :</label>
              <Field
                name=" UploadCV"
                className={
                  touched.UploadCV
                    // eslint-disable-next-line no-template-curly-in-string
                    ? 'form-control ${errors.UploadCV ? "invalid" : "valid"}'
                    : 'form-control'
                }
                type="text"
              />
              {touched.UploadCV && errors.UploadCV && (
                <small className="text-danger">{errors.UploadCV}</small>
              )}
            </div> */}

            <div className=" col-12 col-md-6 col-lg-12">
              <label>Upload CV</label>
              <i class="fa fa-image"></i>
              <input type="file" id="UploadCV" class="form-control" />
              <label class="validation-error hide text-danger fw-small  " id="UploadCVValidationError">Please Upload File</label>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary my-3 "
              disabled={!isValid || !dirty}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
export default ContactForm;