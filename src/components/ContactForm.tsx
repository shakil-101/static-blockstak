"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import RightArrowSVG from "./SVG/RightArrowSVG";
import { toast } from "react-toastify";

const ContactForm: React.FC = () => {
  return (
    <div id="contact-us" className="lg:pt-28 lg:pb-16 py-10">
      <div className="container mx-auto">
        <div className="xl:px-[120px]">
          <h1 className="sm:text-[35px] text-lg font-medium lg:pb-16 md:pb-10 pb-4">
            Let’s Start a Conversation
          </h1>

          {/* <form
            name="contact"
            action="success"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="contact" value="contact" />
            <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-10 gap-6 sm:pb-10 pb-6">
              <div>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </div>
              <div>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </div>
            </div>

            <div className="sm:pb-10 pb-6">
              <textarea
                required
                name="message"
                placeholder="Your Message"
                rows={4}
                className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
              />
            </div>
            <div className="sm:flex justify-center">
              <button
                type="submit"
                className="group sm:w-[210px] w-full bg-primaryLight sm:py-4 py-2 flex items-center justify-center gap-4 rounded border duration-300 border-primaryLight hover:bg-primaryDark hover:border-primaryWhite"
              >
                <span className="sm:text-xl text-lg sm:font-medium">
                  Submit
                </span>
                <div className="group-hover:translate-x-3 duration-300">
                  <RightArrowSVG
                    width="28px"
                    height="28px"
                    fillColor="#F4F4F4"
                  />
                </div>
              </button>
            </div>
          </form> */}

          <form
            name="contact"
            action="success"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-10 gap-6 sm:pb-10 pb-6">
              <div>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
                />
              </div>

              <div>
                <input
                  required
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
                name="message"
                placeholder="Your Message"
                rows={4}
                className="bg-transparent border border-borderWhite w-full sm:p-5 p-3 rounded-md outline-primaryLight placeholder-primaryWhite sm:font-medium sm:text-xl text-sm"
              />
            </div>

            <div className="sm:flex justify-center">
              <button
                type="submit"
                className="group sm:w-[210px] w-full bg-primaryLight sm:py-4 py-2 flex items-center justify-center gap-4 rounded border duration-300 border-primaryLight hover:bg-primaryDark hover:border-primaryWhite"
              >
                <span className="sm:text-xl text-lg sm:font-medium">
                  Submit
                </span>
                <div className="group-hover:translate-x-3 duration-300">
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
