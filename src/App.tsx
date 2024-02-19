import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from "formik";
//import ContactForm from ".//";
import * as Yup from "yup";
import ContactForm from "./Component/ContactForm";

function App() {

    const ErrorSchema = Yup.object().shape({
        username: Yup.string()
            .required("Name is required")
            .min(2, "too Short")
            .max(12, "Too Long"),
        Qualification: Yup.string()
            .typeError("Please Select your Qualification")
            //.integer("must be an integer")
            .required("Required Qualification"),

        Contry: Yup.string()
            .typeError("Please Select your Contry")

            .required("Required Contry"),
        State: Yup.string()
            .typeError("Please Select your State")

            .required("Required State"),
        Pincode: Yup.string()
            .typeError("Please Select your Pincode")

            .required("Required Pincode"),


        Experience: Yup.string()
            .typeError("Please Select your Experience")

            .required("Required Experience"),

        // CurrentyearlyCTC: Yup.string()
        // .typeError("Please Select your CurrentyearlyCTC")

        // .required("Required CurrentyearlyCTC")

        CurrentyearlyCTC: Yup.string()
            .typeError("Please Select your CurrentyearlyCTC")

            .required("Required CurrentyearlyCTC"),


        ECTC: Yup.string()
            .typeError("Please Select your ECTC")

            .required("Required ECTC")

        // UploadCV: Yup.string()
        // .typeError("Please Select your UploadCV")

        // .required("Required ECTC")
        //  .min(18, "You must be at least 18 years")
        //  .max(60, "You must be at less than 60 years")
        ,
        email: Yup.string().email("Invalid email").required("Required"),
        phone: Yup.string()
            .matches(
                /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                "Not a Phone number"
            )
            .required("Required"),
        message: Yup.string()
            .min(8, "Too Short!")
            .max(100, "Too Long!")
            .required("Required"),
    });
    return (
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-5">
                    <h3 className=" pt-3 Htag ms-4 ">Contact Us</h3>
                    <Formik
                        initialValues={{
                            username: "",
                            Qualification: "",
                            email: "",
                            phone: "",
                            message: "",
                            Contry: "",
                            State: "",
                            Pincode: "",
                            Experience: "",
                            CurrentyearlyCTC: "",
                            ExpectedyearlyCTC: "",
                            UploadCV: "",

                        }}
                        onSubmit={(value, { resetForm }) => {
                            console.log(value);
                            resetForm();
                        }}
                        validationSchema={ErrorSchema}
                        component={ContactForm}
                    />

                </div>
            </div>
        </div>
    );
}

export default App;
