import { FC } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

type Props = object
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
import 'react-toastify/dist/ReactToastify.css';

const StudentReferralScheme: FC<Props> = () => {
  const templateId = 'template_84a88ht'
  const serviceId = 'service_18yk0s8'
  const publicKey ='Wtu2Xsjk3bCwniBOn';

  return (
    <div className='w-full mt-[65px] py-5'>
      <div className='flex items-center justify-between w-full h-full px-2 mt-10 md:px-5 lg:px-32'>
        <div className='grid max-w-full grid-cols-2 gap-4 w-fill'>
          <div className='w-[80%] col-span-2 mt-5 lg:col-span-1' >
            <div className='flex items-center w-full h-full'>
              <div>
                <h1 className='mb-5 text-3xl font-bold text-ce-blue'>Student Referral Scheme</h1>
                <p className='mt-10 md:text-xl lg:text-xl text-ce-gray'>If you have friends and family who want to study, why not refer them to Connect English? The process is quick and simple and you'll received 3000LKR for each person who successfully enrols.  And, there's no limit to the number of referrals you can make</p>
              </div>
            </div>
          </div>
          <div className='w-full col-span-2 mt-5 lg:col-span-1'>
            <h1 className='mb-5 text-3xl font-bold text-ce-blue'>STUDENT REFERRAL FORM</h1>
            <p className='md:text-xl lg:text-base text-ce-gray'>This is a form for students who to refer friends and family to studdy with us. To participate please file the form below. </p>
            <Formik
              initialValues={{
                userName: "",
                email: "",
                contactNumber: "",
                country: "",
                numbrtOfRef: 0
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                const templateParams = {
                  from_name: values.userName,
                  from_email: values.email,
                  to_name: "Connect English",
                  message: { contactNumber: values.contactNumber, country: values.country, numbrtOfRef: values.numbrtOfRef }
                }

                emailjs.send(serviceId, templateId, templateParams, publicKey)
                  .then(() => {
                    toast.success("Email sent successfully", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  })
                  .catch((error) => {
                    console.error(`Error sending email: ${error}`)
                    toast.error(`Error sending email:`, {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  })
                setSubmitting(false)
                resetForm()
              }}

              validationSchema={Yup.object({
                userName: Yup.string().required("Please enter your name"),
                email: Yup.string().email("Invalid email address").required("Please enter your email"),
                contactNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Please enter your contact number').min(10, "Phone number is not valid").max(10, "Phone number is not valid").required("Please enter your name"),
                country: Yup.string().required("Please enter your country"),
                numbrtOfRef: Yup.number().min(1, "Please enter number of ref").required( "Please enter number of ref")
              })}
            >

              <Form action="" className="w-full text-ce-blue md:text-2xl">
                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text md:text-xl text-ce-blue lg:text-base ">
                      Full Name
                    </span>
                  </div>
                  <Field
                    name="userName"
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
                    placeholder="jhon@gmail.com"
                    className="w-full md:text-xl input input-bordered lg:text-base "
                  />
                  <ErrorMessage component="label" className="text-base text-ce-pink" name="email" /> 
                </label>
                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text md:text-xl text-ce-blue lg:text-base ">Contact Number</span>
                  </div>
                  <Field
                    name="contactNumber"
                    placeholder="xxx xxx xxx"
                    className="w-full input md:text-xl input-bordered lg:text-base "
                  />
                   <ErrorMessage component="label" className="text-base text-ce-pink" name="contactNumber" /> 
                </label>
                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text md:text-xl text-ce-blue lg:text-base ">Country</span>
                  </div>
                  <Field
                    name="country"
                    placeholder="Sri Lanka"
                    className="w-full md:text-xl input input-bordered lg:text-base "
                  />
                   <ErrorMessage component="label" className="text-base text-ce-pink" name="country" /> 
                </label>

                <label className="w-full form-control">
                  <div className="label">
                    <span className="label-text md:text-xl text-ce-blue lg:text-base ">How many students would you like to refer?</span>
                  </div>
                  <Field
                    name="numbrtOfRef"
                    min={0}
                    placeholder="0"
                    className="w-full md:text-xl input input-bordered lg:text-base "
                  />
                  <ErrorMessage component="label" className="text-base text-ce-pink" name="numbrtOfRef" /> 
                </label>


                <div className="flex justify-end mt-5">
                  <button type="submit"  className="px-10 py-3 rounded-lg text-ce-white bg-ce-pink">
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
  )
}

export default StudentReferralScheme