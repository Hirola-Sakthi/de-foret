import React, { useRef, useLayoutEffect, useEffect, useMemo, useState } from 'react';
// import DatePicker from 'react-date-picker/dist/entry.nostyle';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import gsap from "gsap";
import cx from 'classnames';
import dynamic from 'next/dynamic'
const DatePicker = dynamic(() => import("react-date-picker/dist/entry.nostyle"), {
  ssr: false,
});

const DiningForm = ({ toogle, onClose }) => {

  const [date, onDateChange] = useState(new Date());
  const [bookoption, changeBookOption] = useState([]);
  const [loading, onLoadingChange] = useState(false);
  const [isCalendarOpen, onCalendarOpenChange] = useState(false);
  const { handleSubmit, register, watch, formState: { errors }, reset, resetField } = useForm();
  let t1 = useMemo(() => gsap.timeline({ paused: true }), []);
  let venue = watch("venue");
  useLayoutEffect(() => {
    t1.fromTo(".diningForm", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, zIndex: 101, ease: "power3.inOut" });

    t1.from(".diningFormLeft", {
      duration: 0.8,
      y: 60,
      delay: 0.4,
      opacity: 0
    }, "<");

    t1.from(".diningFormRight", {
      duration: 0.9,
      y: 60,
      delay: 0.2,
      opacity: 0
    }, "<");
    t1.from(".closeControl", {
      duration: 0.3,
      x: 10,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut"
    }, "<");
  }, []);

  useLayoutEffect(() => {
    resetForm();
    toogle ? t1.play() : t1.reverse();
  }, [toogle]);

  useEffect(() => {
    if (venue === "Sante") {
      changeBookOption(["Book a Table"])
    }
    else if (venue === "LAmour") {
      changeBookOption(["Book a Table", "Candle Light Dinner"])
    }
  }, [venue]);



  function resetForm() {
    reset();
    onDateChange(new Date());
  }

  function getFormattedDate(date) {
    if (date === null) return;
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    // return month + '/' + day + '/' + year;
    return day + '/' + month + '/' + year;
  }
  function getCurrentDateTime() {
    var date = new Date()
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var hours = date.getHours();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var currentDate = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return currentDate;
  }

  function submitHandler(data) {
    onLoadingChange(true);
    var templateParams = {
      ...data,
      date: getFormattedDate(date) + " (dd/mm/yyyy)",
      requestedDate: getCurrentDateTime() + " (dd/mm/yyyy hh:mi:ss)"
    };
    emailjs.send('service_3ahpt25', 'template_mazk66m', templateParams, '5Dc68f0YnyEt37Pc1')
      .then((result) => {
        onLoadingChange(false);
        toast.success("Thank you for your request. Our customer executive will get back to you with booking confirmation.", {
          duration: 6000,
          position: 'top-center',
          // Styling
          style: { fontSize: "1.5rem" },
          className: '', iconTheme: {
            primary: '#cc7c6e',
            secondary: '#fff',
          }
        });
        onClose();
        resetForm();
      }, (error) => {
        onLoadingChange(false);
        toast.error('Oops! Some error.', {
          duration: 3000,
          position: 'top-center',
          style: { fontSize: "1.5rem" }
        });
      });
  }
  return (
    <>
      <style jsx>
        {`
        .dining__form
                {
                    background-color:var(--bg-color);
                    position:fixed;
                    width:100vw;
                    height:100vh;
                    overflow:scroll;
                    z-index: -1;
                    opacity: 0;
                    padding-bottom:5rem;
                }

                .dining__inner
                {
                    background-color:var(--bg-color);
                    position:relative;
                    height: calc(100vh - 180px);
                    margin:90px 50px;    
                }
              

                .booking__header
{
 font-size:var(--fs-desktop,1.5rem);
  color: var(--wood-color);
  position:relative;
}

.booking__header::before
{
  content: "";
  width: 25px;
  height: 1px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  background-color: var(--wood-color);
}
.booking__title
{
  font-size:var(--lh-mobile);
  margin-top:20px;
}
.booking__text
{
  padding:10px 30px 10px 0px;
  font-size:var(--fs-desktop,1.4rem);
}
.booking__text__mobile
               {
                display:none;
                padding:10px 30px 10px 0px;
                font-size:var(--fs-desktop,1.4rem);
               }


               .inline
               {
                display:grid;
                grid-template-columns: repeat(2, 1fr);
                gap:20px;
               } 
               .sub__inline
               {
                display:grid;
                grid-template-columns: repeat(2, 1fr);
                gap:20px;
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
    color: #EC0868;
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
     -moz-transform:translate(5px,5px);
     -ms-transform:translate(5px,5px);
     -webkit-transform: translate(5px,5px);
    transform: translate(5px,5px);
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
    color:var(--typo-color,#fff);
  }
  .input_field:focus{
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
    border:0;
    transition: 0.2s ease-in-out;
    border-left: 3px transparent solid;
    border-right: 3px transparent solid;
    padding:12px 50px;
    font-size:var(--fs-desktop);
    letter-spacing:1px;
    text-transform:uppercase;
  }
  .button:disabled
  {
    background-color: gray;
  }

  .close__section
  {
    position: absolute;
     right: 0;
     margin-bottom: 30px;
     display: flex;
     justify-content: space-between;
     width: 30px;
    align-items: center;
    z-index:1;
    font-size:1.2rem;
    margin-right:15px;
    margin-bottom:30px;
    cursor:pointer;
  }
  .hamburger-menu
  {
    padding: 10px 2px;
    cursor:pointer;
  }

  .hamburger-menu span.line {
    width: 16px;
    height: 1px;
    background: #fff;
    display: block;
    position: relative;
    top: 0;
    transform: rotate(45deg);
    cursor:pointer;
  }
  .hamburger-menu span.line:nth-child(2) {
     margin-top: -1px;
    transform: rotate(-45deg);
  }

  .loader {
    width: 100%;
    height: 3px;
    display: inline-block;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    overflow: hidden;
    border:0;
    z-index:103;
  }
  .loader::after {
    content: '';
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
  font-size:14px;
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
  background-color: var( --wood-color); 
  color:#fff;
}
label input:checked + span:before {
  box-shadow: inset 0 0 0 0.4375em var(--typo-color,#fff);
}
label span {
  display: flex;
  align-items: center;
  padding: 0.175em 0.75em 0.175em 0.175em;
  border-radius: 99em;
  transition: 0.25s ease;
  color:var(--typo-color,#fff);
}
label span:hover {
  background-color: var( --wood-color);
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
  box-shadow: inset 0 0 0 0.125em var(--typo-color,#fff);
}

select {
  padding:12px 0;
  border: 0;
  background-color:var(--bg-color);
  color:var(--typo-color,#fff);
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
  color: var(  --wood-color);
  background:var(--bg-color);
  border:0 !important;
  outline:0;
  transition: 0.25s ease;
}
select:required:invalid {
  color: #5a667f;
}
select::-ms-expand {
    display: none;
}

  @media screen and (max-width: 768px) {
              .inline{
                grid-template-columns: repeat(1, 1fr);
                grid-gap:0;
               } 
               
               .dining__inner
               {
                   margin:50px 20px;    
               }
               .booking__text__mobile
               {
                display:block;
               }
               .booking__text
                {
                  display:none;
                }
  }

                `
        }
      </style>

      <div className='dining__form diningForm'>
        <div className='dining__inner'>

          <div className='close__section cursor__hover closeControl' onClick={onClose}>

            <div className="cursor__hover">Close</div>
            <div className="hamburger-menu cursor__hover">
              <span className="line line1 cursor__hover"></span>
              <span className="line line2 cursor__hover"></span>
            </div>


          </div>
          <div className='grid grid--cols-2'>
            <div className='left__content diningFormLeft'>
              <span className='booking__header'>BOOK YOUR TABLE</span>
              <h2 className='booking__title'>DINE IN @ DEFORET</h2>
              <p className='booking__text'>
                Our luxurious restaurant L’Amour is here to cater to your taste, with some exquisite cuisines and exotic food menu. With the finest local food, our restaurants infuse the distinct flavors of traditional Indian dishes with western cuisine. Want to get the party started with some booze? Sante’, our opulent bar, has a collection of classic and unique drinks to set the perfect mood!
              </p>
            </div>
            <div className='right__content diningFormRight'>
              <form onSubmit={handleSubmit((data) => {
                submitHandler(data);
              })}>
                <div className='inline'>
                  <div className="input">
                    <input {...register("firstName", { required: "First Name is Required", pattern: { value: /^[A-Za-z ]+$/i, message: "Only Alphabets" } })} className="input_field" placeholder='First Name' />
                    {/* <label className="input_label">First Name</label> */}
                    <label className="input__error">{errors.firstName?.message}</label>
                  </div>
                  <div className="input">
                    <input {...register("lastName", { required: "Last Name is Required", pattern: { value: /^[A-Za-z]+$/i, message: "Only Alphabets" } })} className="input_field" placeholder='Last Name' />
                    {/* <label className="input_label">Last Name</label> */}
                    <label className="input__error">{errors.lastName?.message}</label>
                  </div>
                </div>

                <div className='inline'>
                  <div className="input">
                    <input {...register("mobile", { required: "Mobile No is Required", pattern: { value: /^[0-9]{10}$/, message: "Only Digits" }, minLength: { value: 10, message: "Enter Valid 10 Digit Mobile Number" } })} className="input_field" maxLength={10} placeholder='Mobile No' />
                    {/* <label className="input_label">Mobile Number</label> */}
                    <label className="input__error">{errors.mobile?.message}</label>
                  </div>
                  <div className="input">
                    <input {...register("email", { required: "Email is Required", pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Invalid Email" } })} className="input_field" placeholder='Email' />
                    {/* <label className="input_label">Email</label> */}
                    <label className="input__error">{errors.email?.message}</label>
                  </div>
                </div>

                <div className='inline'>
                  <div className="input">
                    <div className="input" style={{ position: "relative" }}>
                      <span className='date__mask' onClick={() => { onCalendarOpenChange(prevState => !prevState) }}></span>
                      <DatePicker
                        onChange={onDateChange}
                        value={date}
                        onCalendarClose={() => { onCalendarOpenChange(false) }}
                        onClick={() => { onCalendarOpenChange(true) }}
                        isOpen={isCalendarOpen}
                        dayPlaceholder="dd"
                        minDate={new Date()}
                        maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                        rangeDivider=" to "
                        clearIcon=''
                        format="MM/dd/yyyy"
                        locale="en-GB"
                      />
                    </div>
                    <label className="input_label">Date</label>

                  </div>
                  <div className="input">
                    <input {...register("noOfPax", { required: "No of Person is Required", pattern: { value: /^\d{1,2}$/, message: "Only Digits" }, max: { value: 15, message: "Maximum 15 Person" }, min: { message: "Invalid Input", value: 1 } })} className="input_field" placeholder='No of Person' />
                    {/* <label className="input_label">Number of Person</label> */}
                    <label className="input__error">{errors.noOfPax?.message}</label>

                  </div>
                </div>

                <div className='inline'>
                  <div className="input">

                    {/* <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                    <input {...register("Developer", { required: true })} type="radio" value="No" /> */}
                    <div className='sub__inline'>
                      <div>
                        <label>
                          <input {...register("venue", { required: "Please select any", onChange: (e) => { resetField("option"); } })} type="radio" value="LAmour" />
                          <span>L’Amour</span>
                        </label>
                        <span className="input__des">{venue === 'LAmour' ? "The Restaurant" : null}</span>
                      </div>
                      <div>
                        <label>
                          <input {...register("venue", { required: "Please select any" })} type="radio" value="Sante" />
                          <span>Santé</span>
                        </label>
                        <span className="input__des">{venue === 'Sante' ? "The Pub" : null}</span>
                      </div>
                    </div>
                    {/* <input {...register("firstName", { required: "First Name is Required", pattern: { value: /^[A-Za-z ]+$/i, message: "Only Alphabets" } })} className="input_field" placeholder='First Name' /> */}
                    <label className="input_label">Venue</label>
                    <label className="input__error"> {errors.venue?.message}</label>

                  </div>
                  <div className="input">
                    <select {...register("bookfor", { required: "Please select" })}>
                      <option value="">Select</option>
                      {
                        bookoption.map((item, key) => {
                          return <option key={key} value={item}>{item}</option>;
                        })
                      }
                    </select>

                    <label className="input_label">Want to Book</label>
                    <label className="input__error"> {errors.option?.message}</label>
                  </div>
                </div>


                <div className="input">

                  {/* 

                <input type="password" className="input_field" required />
                <label className="input_label">Password</label> */}
                </div>
                <div className="input">
                  <textarea className="input_field"
                    {...register("comments")}
                    placeholder="Message" />
                  {/* <label className="input_label">Comments</label> */}

                  {/* <input type="text" className="input_field" required /> */}
                  {/* <label className="input_label">Comments</label> */}
                </div>


                <div className="input">
                  <input type="submit" value="Submit" className='button cursor__hover' disabled={loading} />
                  {loading ? <span className="loader"></span> : null}
                </div>
                <p className='booking__text__mobile'>
                  Our luxurious restaurant L’Amour is here to cater to your taste, with some exquisite cuisines and exotic food menu. With the finest local food, our restaurants infuse the distinct flavors of traditional Indian dishes with western cuisine. Want to get the party started with some booze? Sante’, our opulent bar, has a collection of classic and unique drinks to set the perfect mood!
                </p>
              </form>
            </div>
          </div>


        </div>
      </div>
      <Toaster />
    </>);

}

export default DiningForm;