import React, { useState } from "react";
import RightArrowSVG from "./SVG/RightArrowSVG";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Error submitting form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again later.");
    }
  };

  return (
    <div id="contact-us" className="lg:pt-28 lg:pb-16 py-10 ">
      <div className="container mx-auto">
        <div className="xl:px-[120px]">
          <h1 className={`sm:text-[35px] text-lg font-medium lg:pb-16 pb-4`}>
            Let’s Start a Conversation
          </h1>

          <form onSubmit={handleSubmit} netlify>
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-10 gap-6 sm:pb-10 pb-6">
              <div>
                <input
                  required
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </div>
              <div>
                <input
                  required
                  onChange={handleChange}
                  value={formData.email}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </div>
            </div>

            <div className="sm:pb-10 pb-6">
              <textarea
                required
                onChange={handleChange}
                value={formData.message}
                name="message"
                placeholder="Your Message"
                rows={4}
                className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
              />
            </div>
            <div className="sm:flex justify-center">
              <button
                type="submit"
                className="group sm:w-[210px] w-full bg-primaryLight  sm:py-4 py-2 flex items-center justify-center gap-4 rounded border duration-300  border-primaryLight hover:bg-primaryDark hover:border-primaryWhite"
              >
                <span className="sm:text-xl text-lg sm:font-medium">
                  Submit
                </span>
                <div className="group-hover:translate-x-3  duration-300">
                  <RightArrowSVG
                    width="28px"
                    height="28px"
                    fillColor="#F4F4F4"
                  />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
