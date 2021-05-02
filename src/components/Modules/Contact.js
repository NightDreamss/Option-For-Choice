import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import swal from "sweetalert2";
import emailjs from "emailjs-com";
import Title from "../../constants/Title";
import Lottie from "../../constants/Lottie";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-gray-100">
      <div className="container px-5 py-24 xl:py-40 mx-auto">
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            const template = {
              name: values.name,
              email: values.email,
              message: values.message,
            };
            const service = process.env.GATSBY_EMAILJS_SERVICE;
            const temp = process.env.GATSBY_EMAILJS_TEMPLATE;
            const user = process.env.GATSBY_EMAILJS_USER;
            emailjs.send(service, temp, template, user).then(
              (result) => {
                swal.fire({
                  title: "Success!",
                  text: "Your message has been successfully send!",
                  icon: "success",
                });
              },
              (error) => {
                swal.fire({
                  title: "Error!",
                  text: `Your message was unable to send! 
                        Error code: ${error}`,
                  icon: "error",
                });
              }
            );
            actions.setSubmitting(false);
          }}
          validate={(values) => {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            const errors = {};
            if (!values.name) {
              errors.name = "Name required";
            }
            if (!values.email || !emailRegex.test(values.email)) {
              errors.email = "Valid email required";
            }
            if (!values.message) {
              errors.message = "Message required";
            }
            return errors;
          }}
        >
          {() => (
            <Form>
              <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2">
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col w-full mb-12 text-center">
                    <Title title="Contact Us" normal />
                    <p className="mt-1 text-xl text-gray-700 text-semibold">
                      We'd love to hear from you.
                    </p>
                  </div>
                  <div className="w-3/5 m-auto">
                    <Lottie contact />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="relative">
                      <div className="inline-flex justify-between w-full">
                        <label
                          htmlFor="name"
                          className="text-sm text-gray-600 md:text-base font-sans font-semibold"
                        >
                          Name
                        </label>
                        <span className="text-xs text-red-500 my-auto">
                          <ErrorMessage name="name" />
                        </span>
                      </div>

                      <Field
                        name="name"
                        className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="relative">
                      <div className="inline-flex justify-between w-full">
                        <label
                          htmlFor="email"
                          className="text-sm text-gray-600 md:text-base font-sans font-semibold"
                        >
                          Email
                        </label>
                        <span className="text-xs text-red-500 my-auto">
                          <ErrorMessage name="email" />
                        </span>
                      </div>

                      <Field
                        name="email"
                        className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="relative">
                      <div className="inline-flex justify-between w-full">
                        <label
                          htmlFor="message"
                          className="text-sm text-gray-600 md:text-base font-sans font-semibold"
                        >
                          Message
                        </label>
                        <span className="text-xs text-red-500 my-auto">
                          <ErrorMessage name="message" />
                        </span>
                      </div>

                      <Field
                        id="message"
                        name="message"
                        className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
                        component="textarea"
                      />
                    </div>
                  </div>

                  <button
                    className="w-full mt-6 p-3 text-sm font-semibold tracking-wide text-gray-100 uppercase bg-blue-accent-400 hover:bg-blue-accent-700 rounded-lg focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
