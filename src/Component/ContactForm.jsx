/* eslint-disable react/jsx-no-undef */
import { Form, Field, } from "formik";
import { Row } from "antd";


function ContactForm({ errors, touched, setFiedValue }) {
 

  return (
    <>
      <Form>

        <Row className="justify-content-center">
          <div className="col-12 col-md-12 col-lg-11">
            <div className="row">
              <div className="form-group col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">Name<i style={{ color: 'red' }}>*</i></label>
                <Field
                  name="name"
                  className={touched.name
                    ? `form-control ${errors.name ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" />
                {touched.name && errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className=" col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">Email<i style={{ color: 'red' }}>*</i></label>
                <Field
                  name="email"
                  className={touched.email
                    ? `form-control ${errors.email ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" />
                {touched.email && errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}

              </div>
              <div className=" col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">Phone<i style={{ color: 'red' }}>*</i></label>
                <Field
                  name="phoneNumber"
                  className={touched.phoneNumber
                    ? `form-control ${errors.phoneNumber ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" />
                {touched.phoneNumber && errors.phoneNumber && (
                  <small className="text-danger">{errors.phoneNumber}</small>
                )}
              </div>

              <div className=" col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">Qualification<i style={{ color: 'red' }}>*</i></label>

                <Field
                  name="qualification"
                  className={touched.qualification
                    ? `form-control ${errors.qualification ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" as="select"  >
                  <option></option>
                  <option value="0">BCom</option>
                  <option value="1">Bsc Computer Science</option>
                  <option value="2">BCA</option>
                  <option value="3">BSc</option>
                  <option value="4">BBA</option>
                </Field>

                {touched.qualification && errors.qualification && (
                  <small className="text-danger">{errors.qualification}</small>
                )}

              </div>
              <div className="form-group">
                <label className="col-form-label text-secondary">Address<i style={{ color: 'red' }}>*</i></label>
                <Field
                  as="textarea"
                  name="address"
                  className={touched.address
                    ? `form-control ${errors.address ? "invalid" : "valid"}`
                    : `form-control`}
                >
                </Field>
                {touched.address && errors.address && (
                  <small className="text-danger">{errors.address}</small>
                )}
              </div>
              <div className=" col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">Country<i style={{ color: 'red' }}>*</i></label>
                <Field
                  name="country"
                  className={touched.country
                    ? `form-control ${errors.country ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" />
                {touched.country && errors.country && (
                  <small className="text-danger">{errors.country}</small>
                )}
              </div>

              <div className=" col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">State<i style={{ color: 'red' }}>*</i></label>
                <Field
                  name="state"
                  className={touched.state
                    ? `form-control ${errors.state ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" />
                {touched.state && errors.state && (
                  <small className="text-danger">{errors.state}</small>
                )}
              </div>
              <div className=" col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">Pincode<i style={{ color: 'red' }}>*</i></label>
                <Field
                  name="pinCode"
                  className={touched.pinCode
                    ? `form-control ${errors.pinCode ? "invalid" : "valid"}`
                    : `form-control`}
                  type="pinCode" />
                {touched.pinCode && errors.pinCode && (
                  <small className="text-danger">{errors.pinCode}</small>
                )}
              </div>

              <div className=" col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary ">Experience<i style={{ color: 'red' }}>*</i></label>

                <Field
                  name="experience"
                  placeholder="Freher"
                  className={touched.experience
                    ? `form-control ${errors.experience ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" />
                {touched.experience && errors.experience && (
                  <small className="text-danger">{errors.experience}</small>
                )}
              </div>
              <div className="form-group col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary" htmlFor="selectOption">Current yearly CTC<sup style={{ color: 'red' }}>*</sup></label>
                <Field
                  name="currentyearlyCTC"
                  className={touched.currentyearlyCTC
                    ? `form-control ${errors.currentyearlyCTC ? "invalid" : "valid"}`
                    : `form-control`}
                  type="text" as="select" >
                  <option></option>
                  <option value="0">7 LPA in hand salary</option>
                  <option value="1">8 LPA in hand salary</option>
                  <option value="2">9 LPA in hand salary</option>
                  <option value="3">10 LPA in hand salary</option>
                  <option value="4">11 LPA in hand salary</option>
                </Field>
                {touched.currentyearlyCTC && errors.currentyearlyCTC && (
                  <small className="text-danger">{errors.currentyearlyCTC}</small>
                )}
              </div>
              <div className="form-group col-12 col-md-6 col-lg-6">
                <label className="col-form-label text-secondary">Expected yearly CTC<sup style={{ color: 'red' }}>*</sup></label>

                <Field as="select"
                  name="expectedyearlyCTC"
                  className={touched.expectedyearlyCTC
                    ? `form-control ${errors.expectedyearlyCTC ? "invalid" : "valid"}`
                    : `form-control`}
                  type='text' >
                  <option></option>
                  <option value="0">8 LPA in hand salary</option>
                  <option value="1">9 LPA in hand salary</option>
                  <option value="2">10 LPA in hand salary</option>
                  <option value="3">11 LPA in hand salary</option>
                  <option value="4">12 LPA in hand salary</option>

                </Field>
                {touched.expectedyearlyCTC && errors.expectedyearlyCTC && (
                  <small className="text-danger">{errors.expectedyearlyCTC}</small>
                )}
              </div>


              <div className=" col-form-label  col-12 col-md-6 col-lg-12">
                <label htmlFor="files" className="m-1 text-secondary">Upload CV<sup style={{ color: 'red' }}>*</sup></label>
                <Field type="file" id="files" name="files"

                  className={touched.files
                    ? `form-control ${errors.files ? "invalid" : "valid"}`
                    : `form-control`} />
                {/* <ErrorMessage name='file' /> */}
                {touched.files && errors.files && (
                  <small className="text-danger">{errors.files}</small>
                )}
                <sub className="text-secondary Supportedbutton" >(Supported formats: doc, docx, pdf)</sub>
              </div>

              <div className=" col-12 col-md-6 col-lg-5 ">
                <label htmlFor="state" >Geander &nbsp; </label>
                <br />
                <label htmlFor="male">Male: &nbsp; </label>
                <Field style={{ margin: 10 }} type="radio" name="gender"
                  value="male" />
                <label htmlFor="female"> Female: &nbsp;</label>
                <Field type="radio" name="gender" value="female" />
                <br />
                {/* <ErrorMessage  name='gender' /> */}
                {touched.gender && errors.gender && (
                  <small className="text-danger">{errors.gender}</small>
                )}
              </div>
              <div className="form-check  col-lg-7 col-12 text-lg-end align-text-top  box-1">
                <input className="form-check-input  float-none" type="checkbox" id="invalidCheck" checked />
                <label className="form-check-label">Do you agree to the terms?
                </label>
              </div>


            </div>
            <button type="submit" key='submit' class="btn btn-outline-primary my-3 mt-3"  disabled={false}>Send Now</button>
          </div>


        </Row>

      </Form></>

  );
}
export default ContactForm;