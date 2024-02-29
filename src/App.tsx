import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from "formik";

import * as Yup from "yup";
import ContactForm from "./Component/ContactForm";
import Navbar1 from "./Component/Navbar";
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Getdata from "./Component/Getdata";
import axios from "axios";
import BasicExample from "./Component/Navtabel";

 import TabelData from "./Component/Ts";

function App() {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Test} />
                    <Route path="/TabelData" Component={TabelData} />
                    <Route path="/home" Component={BasicExample} />
                    <Route path="/App" Component={Test} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App;


const Test = () => {

    const ErrorSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            .min(2, "too Short")
            .max(15, "Too Long"),

        qualification: Yup.string()
            .typeError("Please Select your Qualification")
            //.integer("must be an integer")
            .required("Required Qualification"),

        country: Yup.string()
            .typeError("Please Select your Country")

            .required("Required Country"),
        state: Yup.string()
            .typeError("Please Select your State")

            .required("Required State"),
        pinCode: Yup.string()
            .typeError("Please Select your Pincode")
            .matches(
                /^\s*(?:\+?(\d{}))?[-. (]*(\d{2})[-. )]*(\d{3})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
                "Not a PinCode number"
            )
            .required("Required Pincode"),


        experience: Yup.string()
            .typeError("Please Select your Experience")

            .required("Required Experience"),

        currentyearlyCTC: Yup.string()
            .typeError("Please Select your CTC")

            .required("Required CTC"),

        expectedyearlyCTC: Yup.string()
            .typeError("Please Select your ExpectedCTC")

            .required("Required ExpectedCTC")
        ,
        email: Yup.string().email("Invalid email").required("Required"),
        gender: Yup.string().required("Gender Is Required!"),
        files: Yup.string().required("File Is Required!"),
        phoneNumber: Yup.string()
            .matches(
                /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                "Not a Phone number"
            )
            .required("Required"),
        address: Yup.string()
            .min(8, "Too Short!")
            .max(100, "Too Long!")
            .required("Required"),

    });

    return (

        <section className="Hero">

            <Navbar1 />
            <div className="container pt-5">
                <div className="row justify-content-sm-end pt-5 ">
                    <div className="col-sm-6 shadow round ">
                        <h3 className=" pt-3 Htag ms-4 ">Contact Us</h3>
                        <Formik
                            initialValues={{
                                name: '',
                                qualification: "",
                                email: "",
                                phoneNumber: "",
                                address: "",
                                country: "",
                                state: "",
                                pinCode: "",
                                experience: "",
                                currentyearlyCTC: "",
                                expectedyearlyCTC: "",
                                files: "",
                                gender: "",

                            }}
                            onSubmit={(values, { resetForm }) => {

                                axios.postForm('https://localhost:44374/api/Contact', values)
                                    .then(response => {
                                        console.log('Post Successful!', response);
                                        resetForm();
                                    })
                                    .catch(error => {
                                        console.error('Error posting data:', error);
                                    });
                            }}
                            validationSchema={ErrorSchema}
                        >
                            {({ values, errors, setFieldValue, handleSubmit, handleReset, touched }) => {
                                return <>
                                    <ContactForm errors={errors} setFiedValue={setFieldValue} touched={touched} key={1} />
                                </>
                            }}
                        </Formik>

                    </div>
                </div>
            </div>
        </section>

    );
}



