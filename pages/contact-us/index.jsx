import { useEffect, useLayoutEffect, useMemo, useState } from "react";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import TextWithImage from "../../components/typography/textwithimage";
import Hero from "../../components/hero/Hero";
import RoomBookingForm from "../../components/booking/room";
import Data from "../../data/json/pages/contact.json";
export async function getStaticProps() {
  console.log("TRThius os awesome");
  return { props: { data: Data } };
}

export default function Contact({ data }) {
  const { hero } = data;
  const { scroll } = useLocomotiveScroll();
  const contactReason = [
    "Make / Modify Reservation",
    "Request Transfer Service",
    "General Questions",
    "Others",
  ];
  const [loading, onLoadingChange] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    scroll && scroll.scrollTo(0, { duration: 0, disableLerp: true });
  }, [scroll]);

  function submitHandler(data) {
    onLoadingChange(true);
    var templateParams = {
      ...data,
      requestedDate: getCurrentDateTime() + " (dd/mm/yyyy hh:mi:ss)",
    };
    emailjs
      .send(
        "service_3ahpt25",
        "template_vibuhz7",
        templateParams,
        "5Dc68f0YnyEt37Pc1"
      )
      .then(
        (result) => {
          onLoadingChange(false);
          toast.success(
            "Thank you for contacting us. One of our customer executive will get back to you soon.",
            {
              duration: 6000,
              position: "top-center",
              // Styling
              style: { fontSize: "1.5rem" },
              className: "",
              iconTheme: {
                primary: "#cc7c6e",
                secondary: "#fff",
              },
            }
          );
          resetForm();
        },
        (error) => {
          onLoadingChange(false);
          toast.error("Oops! Some error.", {
            duration: 3000,
            position: "top-center",
            style: { fontSize: "1.5rem" },
          });
        }
      );
  }

  function resetForm() {
    reset();
  }

  function getCurrentDateTime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var currentDate =
      day +
      "/" +
      month +
      "/" +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      " " +
      ampm;
    return currentDate;
  }
  return (
    <>
      <style jsx>
        {`
          .feature__title {
            text-align: left;
            color: var(--heading-color, #fff);
            font-size: var(--fs-tit-desktop);
            text-transform: uppercase;
            z-index: 10;
            position: relative;
            max-width: 350px;
            min-height: 94px;
          }
          p {
            color: var(--typo-color, #fff);
            line-height: var(--lh-desktop);
            font-size: var(--fs-desktop, 1.4rem);
            margin-top: 0;
            padding: 1rem 5rem 1rem 0;
          }
          .inline {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .sub__inline {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .input {
            display: flex;
            flex-direction: column-reverse;
            position: relative;
            padding-top: 10px;
            margin-top: 25px;
          }
          .input_label {
            color: #665856;
            position: absolute;
            top: 20px;
            font-size: 0.9rem;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            -moz-transform: translateY(-25px);
            -ms-transform: translateY(-25px);
            -webkit-transform: translateY(-25px);
            transform: translateY(-25px);
          }

          .input__error {
            color: #ec0868;
            position: absolute;
            font-size: 0.9rem;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            -moz-transform: translateY(12px);
            -ms-transform: translateY(12px);
            -webkit-transform: translateY(12px);
            transform: translateY(12px);
          }

          .input__des {
            color: var(--wood-color);
            position: absolute;
            font-size: 1rem;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            -moz-transform: translate(5px, 5px);
            -ms-transform: translate(5px, 5px);
            -webkit-transform: translate(5px, 5px);
            transform: translate(5px, 5px);
          }

          .input_field {
            border: 0;
            padding: 0;
            z-index: 2;
            background-color: transparent;
            border-bottom: 2px solid #adb5bd;
            font: inherit;
            font-size: 14px;
            line-height: 30px;
            color: var(--typo-color, #fff);
          }
          .input_field:focus {
            outline: 0;
            border-bottom-color: #665856;
          }
          .input_eye {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 36px;
            height: 30px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
          }
          .input_eye svg {
            width: 24px;
            height: auto;
            stroke: #8597a3;
          }

          .button {
            color: #fff;
            background-color: var(--wood-color);
            border: 0;
            transition: 0.2s ease-in-out;
            border-left: 3px transparent solid;
            border-right: 3px transparent solid;
            padding: 12px 50px;
            font-size: var(--fs-desktop);
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .button:disabled {
            background-color: gray;
          }
          .loader {
            width: 100%;
            height: 3px;
            display: inline-block;
            position: relative;
            background: rgba(255, 255, 255, 0.15);
            overflow: hidden;
            border: 0;
            z-index: 103;
          }
          .loader::after {
            content: "";
            width: 100px;
            height: 3px;
            background: rgb(161, 77, 24);
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            animation: animloader 2.2s linear infinite;
          }

          @keyframes animloader {
            0% {
              left: 0;
              transform: translateX(-100%);
            }
            100% {
              left: 100%;
              transform: translateX(0%);
            }
          }

          label {
            display: flex;
            cursor: pointer;
            font-weight: 500;
            position: relative;
            overflow: hidden;
            font-size: 14px;
            /* Accessible outline */
            /* Remove comment to use */
            /*
  	&:focus-within {
  			outline: .125em solid $primary-color;
  	}
  */
          }
          label input {
            position: absolute;
            left: -9999px;
          }
          label input:checked + span {
            background-color: var(--wood-color);
            color: #fff;
          }
          label input:checked + span:before {
            box-shadow: inset 0 0 0 0.4375em var(--typo-color, #fff);
          }
          label span {
            display: flex;
            align-items: center;
            padding: 0.175em 0.75em 0.175em 0.175em;
            border-radius: 99em;
            transition: 0.25s ease;
            color: var(--typo-color, #fff);
          }
          label span:hover {
            background-color: var(--wood-color);
          }
          label span:before {
            display: flex;
            flex-shrink: 0;
            content: "";
            background-color: var(--wood-color);
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            margin-right: 0.375em;
            transition: 0.25s ease;
            box-shadow: inset 0 0 0 0.125em var(--typo-color, #fff);
          }

          select {
            padding: 12px 0;
            border: 0;
            background-color: var(--bg-color);
            color: var(--typo-color, #fff);
            border-bottom: 2px solid #adb5bd;
            /* needed */
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;

            /* SVG background image */
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABmElEQVRIie2UsUocURSGv7OyW6QJhJm52rnkAQK2IYK6kE6QkARSm30EBX2AJNZayDYBxUIMCSmCATFVkGg9paUL9wxIiiA27kmxuzCzuzq7G5vAfN05997/4w5nLhQUFBSMiaQLVT3G7KHBK+fc+X0IvPePBfYNfjvnFrr9UmaX2RwwA5x672v/KlXVWYETYEZgPr1WGnRA4JHAoaqujitNvK9jdgSEg9YzYoFfqXICs/eq2rA4rgwrtDiuqGrDYBso35KdFZtIDficTbLlJAh+qOpknrTZbAZJGH7HbLkn49tEufw83coMV3uPSZIkK5i961m/KLVaS8HU1Nkgqff+icAXYDodB2yEUbQmIq07xV1U9SVmH4EHqfa1Qd05tzPu3lzxMLcAbJyvkyvuyJ3AJ+Bpum/wtROw2HPkp8EL55y/KzdXDO1JTcJwq29o+sN2/1xdva1Wq9d5mUOJuyTe1w02Sf0mHW4QWY+i6MOwWSOJAVT1GWYHQARgcAm8ds4djZIzshja7y+w1ynf3Ne7XlBQ8H/xF0IAqD48s1g/AAAAAElFTkSuQmCC");
            background-size: 1em;
            background-position: calc(100% - 0.5em) center;
            background-repeat: no-repeat;
          }

          select option {
            color: var(--wood-color);
            background: var(--bg-color);
            border: 0 !important;
            outline: 0;
            transition: 0.25s ease;
          }
          select:required:invalid {
            color: #5a667f;
          }
          select::-ms-expand {
            display: none;
          }

          @media screen and (max-width: 768px) {
            .feature__title {
              min-height: 0;
            }
          }
        `}
      </style>

      <div>
        <Head>
          <title>
            Book A Resort - Contact Us | Best resort in havelock | De Foret
            Resort
          </title>
          <meta
            name="description"
            content="Book your perfect stay at DeForet Resorts by Contacting us: For Reservation: +91 800 124 6000, +91 800 124 7000 | Mail: contact@deforetresorts.com | Location: Near Radha Nagar Beach, Havelock Island, Andaman and Nicobar Island, India - 744211."
          />
          <meta
            name="keywords"
            content="Book A Resort, Contact Us, Best resort in havelock, De Foret Resort, De Foret, De Foret Resorts, Havelock Island Resort, 5 star resort in andaman, andaman and nicobar best resort, andaman luxury resorts,"
          />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>

        <Hero
          image={hero.bgImage}
          title={hero.title}
          description={hero.description}
        />

        <main className={styles.main}>
          {/* <Myimage src="https://i.picsum.photos/id/901/900/400.jpg?hmac=qkyi6SIz1DNx4pZGhPam9Vtqft_YzQ45QdHBEWtsYG8" className={styles.myImage} /> */}

          {/* <Carousel slides={media}/> */}

          <div className={styles.container}>
            <section className="section mt-20" data-scroll>
              <div className="grid grid--cols-2">
                <TextWithImage
                  heading="Contact Us"
                  bgtext="Contact"
                  content={[]}
                />
              </div>
            </section>
          </div>

          <div className={styles.container}>
            <section className="section mt-10" data-scroll>
              <div className="grid grid--cols-2">
                <div>
                  <h2 className="feature__title font__parata">GET IN TOUCH.</h2>
                  <p className="feature__content">
                    De Foret <br />
                    Near Radha Nagar Beach,
                    <br /> Havelock Island,
                    <br />
                    Andaman and Nicobar Islands,
                    <br /> India - 744211
                    <br />
                    <a href="tel:+913192283267">+91 3192283267 (Hotel)</a>
                    <br />
                    <a href="tel:+918001247000">+91 800 124 7000</a> (Hotel)
                    <br />
                    <a href="tel:+918001246000">+91 800 124 6000</a>{" "}
                    (Reservation)
                    <br />
                    <a href="mailto:contact@deforetresorts.com">
                      {" "}
                      contact@deforetresorts.com
                    </a>
                  </p>
                </div>

                <div>
                  <form
                    onSubmit={handleSubmit((data) => {
                      submitHandler(data);
                    })}
                  >
                    <div className="inline">
                      <div className="input">
                        <input
                          {...register("firstName", {
                            required: "First Name is Required",
                            pattern: {
                              value: /^[A-Za-z ]+$/i,
                              message: "Only Alphabets",
                            },
                          })}
                          className="input_field"
                          placeholder="First Name"
                        />
                        {/* <label className="input_label">First Name</label> */}
                        <label className="input__error">
                          {errors.firstName?.message}
                        </label>
                      </div>
                      <div className="input">
                        <input
                          {...register("lastName", {
                            required: "Last Name is Required",
                            pattern: {
                              value: /^[A-Za-z]+$/i,
                              message: "Only Alphabets",
                            },
                          })}
                          className="input_field"
                          placeholder="Last Name"
                        />
                        {/* <label className="input_label">Last Name</label> */}
                        <label className="input__error">
                          {errors.lastName?.message}
                        </label>
                      </div>
                    </div>

                    <div className="inline">
                      <div className="input">
                        <input
                          {...register("mobile", {
                            required: "Mobile No is Required",
                            pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Only Digits",
                            },
                            minLength: {
                              value: 10,
                              message: "Enter Valid 10 Digit Mobile Number",
                            },
                          })}
                          className="input_field"
                          maxLength={10}
                          placeholder="Mobile No"
                        />
                        {/* <label className="input_label">Mobile Number</label> */}
                        <label className="input__error">
                          {errors.mobile?.message}
                        </label>
                      </div>
                      <div className="input">
                        <input
                          {...register("email", {
                            required: "Email is Required",
                            pattern: {
                              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                              message: "Invalid Email",
                            },
                          })}
                          className="input_field"
                          placeholder="Email"
                        />
                        {/* <label className="input_label">Email</label> */}
                        <label className="input__error">
                          {errors.email?.message}
                        </label>
                      </div>
                    </div>

                    <div className="input">
                      <select
                        {...register("reason", { required: "Please select" })}
                      >
                        <option value=""> - Reason for Contact - </option>
                        {contactReason.map((item, key) => {
                          return (
                            <option key={key} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>

                      {/* <label className="input_label">Want to Book</label> */}
                      <label className="input__error">
                        {" "}
                        {errors.option?.message}
                      </label>
                    </div>

                    <div className="input">
                      <textarea
                        className="input_field"
                        {...register("comments")}
                        placeholder="Message"
                      />
                      {/* <label className="input_label">Comments</label> */}

                      {/* <input type="text" className="input_field" required /> */}
                      {/* <label className="input_label">Comments</label> */}
                    </div>

                    <div className="input">
                      <input
                        type="submit"
                        value="Send"
                        className="button cursor__hover"
                        disabled={loading}
                      />
                      {loading ? <span className="loader"></span> : null}
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>

          {/* <div className={styles.container}>

                        <section className="section mt-40" >

                        </section>
                    </div> */}

          <section
            className="section mt-20"
            style={{ backgroundColor: "#fff" }}
            data-scroll
          >
            <div className={styles.container}>
              <RoomBookingForm />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
