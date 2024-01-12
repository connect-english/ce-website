import { FC } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from "yup";
import emailjs from '@emailjs/browser';

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

type Props = object;

// const initialValues = {
//   userName: "",
//   email: "",
//   message: ""
// }


const ContactUs: FC<Props> = () => {

  const serviceId = 'service_69w8848'
  const templateId = 'template_a7p8d7i'
  const publicKey ='X8MoAnxk4Cf-m9A6g';



  // const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const { values, handleBlur, handleChange, handleSubmit } = useFormik({
  //   initialValues: initialValues,
  //   onSubmit: (values) => {
  //     console.log(values)
  //   }
  // })

  // const [contactNumber, setContactNumber] = useState("");
  // const [country, setCountry] = useState("");

  return (
    <div className="w-full mb-10">
      <div className="relative items-center justify-between w-full h-full px-5 md:flex lg:px-32 ">
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="w-full col-span-2 lg:col-span-1">
            <h1 className="text-4xl text-ce-pink">Get in touch</h1>
            <p className="mt-5 text-ce-white md:text-xl lg:text-base ">
              Have questions or ready to start your educational journey with
              Connect English? Reach out to our friendly team for personalized
              assistance. We are here to guide you towards a brighter and more
              fulfilling future.
            </p>
            <p className="mt-5 text-ce-white md:text-xl lg:text-base ">Join Connect English - Where Education
              Transforms Lives</p>
            <div className="flex mt-5">
              <div className="text-3xl text-ce-pink lg:text-base ">
                <MdEmail />
              </div>
              <p className="ml-2 text-ce-white md:text-xl lg:text-base ">info@conectenglish.me</p>
            </div>
            <div className="flex mt-5">
              <div className="text-3xl lg:text-base text-ce-pink">
                <FaPhone />
              </div>
              <p className="ml-2 text-ce-white md:text-xl lg:text-base ">+94 742 742 537</p>
            </div>
          </div>
          <div className="w-full col-span-2 lg:col-span-1">
            <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl text-ce-pink">
                  Say something
                </h5>
              </a>
              <Formik
                initialValues={{
                  userName: "",
                  email: "",
                  message: ""
                }}
                onSubmit={async(values, { setSubmitting, resetForm }) => {

                  
                  const templateParams = {
                    from_name: values.userName,
                    from_email: values.email,
                    to_name:"Connect English",
                    message:values.message
                  }
                
                  emailjs.send(serviceId, templateId, templateParams, publicKey)
                    .then(() => {
                      console.log("Email sent successfully", publicKey)
                    })
                    .catch((error) => {
                      console.error(`Error sending email: ${error}`)
                    })
                    setSubmitting(false)
                    resetForm()
                  
                }}

                validationSchema={Yup.object({
                  userName: Yup.string().required("Please enter your name"),
                  email: Yup.string().email("Invalid email address").required("Please enter your email"),
                  message: Yup.string().min(10,"Write something more than to 10 chracters").required("Please enter your name"),
                })}
              >
              <Form className="w-full text-ce-blue md:text-xl">
                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text md:text-xl text-ce-blue lg:text-base ">
                      Full Name
                    </span>
                  </div>
                  <Field
                    name="userName"
                    type="text"
                    placeholder="Jhon"
                    className="w-full md:text-xl input input-bordered lg:text-base "
                  />
                  <ErrorMessage component="label" className="text-base text-ce-pink" name="userName" /> 
                </label>
                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text md:text-xl text-ce-blue lg:text-base ">Email Address</span>
                  </div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="jhon@gmail.com"
                    className="w-full md:text-xl input input-bordered lg:text-base "
                  />
                  <ErrorMessage component="label" className="text-base text-ce-pink" name="email" /> 
                </label>
                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text md:text-xl lg:text-base ">Message</span>
                  </div>
                  <Field
                    component="textarea" rows="4"
                    name="message"                  
                    className="w-full h-24 md:text-xl lg:text-base textarea textarea-bordered"
                    placeholder="Your message"
                  />
                   <ErrorMessage component="label" className="text-base text-ce-pink" name="message" /> 
                </label>
                <div className="flex justify-end mt-5">
                  <button type="submit" className="px-10 py-3 rounded-lg text-ce-white bg-ce-pink">
                    {" "}
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
};

export default ContactUs;
