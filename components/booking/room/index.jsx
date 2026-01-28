import React, { useState, useEffect, useRef } from 'react';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import gsap, { Power4, Strong, Expo } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import dynamic from 'next/dynamic'
const DateRangePicker = dynamic(() => import("@wojtekmaj/react-daterange-picker/dist/entry.nostyle"), {
    ssr: false,
});
const RoomBookingForm = (props) => {
    const { scroll } = useLocomotiveScroll();
    const [date, onChange] = useState([new Date(), new Date()]);
    const [noofadults, setAdults] = useState(2);
    const [noofchild, setChild] = useState(0);
    const [isCalendarOpen, onCalendarOpenChange] = useState(false);
    const line = useRef();
    useEffect(() => {
        gsap.to(line.current, {
            duration: 2,
            height: 100,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: line.current,
                scroller: scroll?.el,
                start: "top 70%",
                end: "bottom top",
                scrub: false,
                toggleActions: "restart none none reverse"
            },
        });
    }, [scroll]);


    const adultChange = (action) => {
        if (action === 'UP' && noofadults < 8)
            setAdults(noofadults + 1)
        else if (action === 'DOWN') {
            if (noofadults !== 1)
                setAdults(noofadults - 1);

        }
    };


    const childrenChange = (action) => {
        if (action === 'UP' && noofchild < 6)
            setChild(noofchild + 1)
        else if (action === 'DOWN') {
            if (noofchild !== 0)
                setChild(noofchild - 1);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        e.target.submit();
    }

    function getFormattedDate(date) {
        if (date === null) return;
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        // return month + '/' + day + '/' + year;
        return day + '-' + month + '-' + year;
    }

    // useEffect(() => {
    //     console.log("Date", date);
    // }, [date])



    return (
        <>
            <style jsx>
                {`
                .heading
                {
                    font-size:var( --fs-subtit-desktop);
                    color:var( --bg-text-color-fade);
                    max-width:60%;
                    text-align:center;
                    font-weight:300;
                    line-height:1.8;
                    letter-spacing: 3px;
                }
            .booking__form
            {
                background:#fff;                
                display: grid;
                grid-template-columns: 33.33%  33.33% 33.33%;
                // grid-template-columns: 36.5%  63.5%;
                grid-template-rows: 1fr;
                grid-column-gap: 1rem;
                grid-row-gap: 2rem; 
            }
            .component:first-of-type
            {
                display:flex;
                flex-direction:column;
                padding:12px 10px 12px 10px;
                width:100%;
            }
            .component
            {
                display:flex;
                flex-direction:column;
                padding:12px 20px 12px 10px;
                width:100%;
            }
            .right__border
            {
                border-right:2px solid var(--border-color-fade);
            }
            .title
            {
                font-size:1.5rem;
                margin-bottom:20px;
                color:var(--bg-text-color-fade);
                position:relative;
                text-align:center;
            }
            .title:before
            {
                content:'';
                width:25px;
                height:1px;
                display:inline-block;
               
                position:absolute;
                bottom:0;
                background-color:var(--wood-color);
            }

            .right__panel
            {
                display:flex;
                gap: 12px;
                
            }

            .stepper
            {
                position: relative;
                display: inline-block;
                min-width: 50%;
              
            }
            .stepper svg
            {
                width:12px;
            }
            .stepper input[type="number"]
            {
                width: 97%;
                padding-left: 55px;
                padding-right: 55px;
                text-align: center;
                appearance: textfield;
                outline:0;
                border:0;
                height:100%;
            }
            
            .stepper-arrow{
                position: absolute;
                top: 50%;
                margin-top: -10px;
                
                height: 20px;
                line-height: 20px;
                font-size: 28px;
              
                cursor: pointer;
                color: #ffa900;
                transition: .3s all ease;
            }
            .stepper-arrow.up {
                right: 0;
                text-align: left;
            }
            .stepper-arrow.down {
                left: 0;
                text-align: right;
            }
            .center__align
            {
                display:flex;
                justify-content: center;
            }
            .grid__merger
            {
                grid-area: 2/1/3/4;
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
              
            //   .button:hover {
            //     color: var(--wood-color);
            //     background-color: #fff;
               
            //   }

            .line__wrapper
            {
                
                min-height:100px;
                
            }
            .line
            {
                width:2px;
                height:2px;
                background-color:var(--wood-color);
            }

            @media screen and (max-width: 768px) {
                .heading
                {
                    max-width: 100%;
                }
                
                .booking__form
                {
                    grid-template-columns:100%;
                    width:400px;
                }
                .right__border
                {
                    border:0;
                }
                 .grid__merger
                {
                    grid-area: 4;
            }
            .title
            {
                font-size:1.4rem;
               
            }
            .center__align__form
            {
                display:flex;
                justify-content: center;
            }
        }

            
              

            `}
            </style>
            <div className='center__align line__wrapper' id="booking__div"><span ref={line} className='line' ></span></div>
            <div className='center__align mb-5'><h3 className='heading font__parata'>COME AS YOU ARE AND WE WILL TAKE CARE OF THE REST</h3></div>
            <form className='center__align__form' action='https://live.ipms247.com/booking/book-rooms-deforetresort' method="POST"
                target="_blank" onSubmit={onSubmit}>
                <div className='booking__form'>
                    <div>
                        <div className='component right__border'>
                            <span className='title'>Arrival & Departure</span>
                            <div style={{ position: "relative" }}>
                                <span className='date__mask__room' onClick={() => { onCalendarOpenChange(prevState => !prevState) }}></span>
                                <DateRangePicker
                                    onChange={onChange}
                                    value={date}
                                    dayPlaceholder="dd"
                                    minDate={new Date()}
                                    maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                                    onCalendarClose={() => { onCalendarOpenChange(false) }}
                                    onClick={() => { onCalendarOpenChange(true) }}
                                    isOpen={isCalendarOpen}
                                    rangeDivider=" to "
                                    clearIcon=''
                                    openCalendarOnFocus={false}
                                    format="MM/dd/yyyy"
                                    locale="en-GB"
                                    readOnly={true}
                                // onFocus={(e) => e.target.disabled = true}
                                />
                            </div>

                        </div>
                    </div>
                    <div className='component right__border'>
                        <span className='title'>Number of Adults</span>
                        <div className="stepper ">
                            <input className="form-input input-append stepper-input"
                                id="form-element-stepper1" type="number" min="0"
                                max="8" name="noa" value={noofadults} readOnly />
                            <span className="stepper-arrow up cursor__hover" onClick={() => adultChange('UP')}><svg className='cursor__hover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" className='cursor__hover' /></svg></span>
                            <span className="stepper-arrow down cursor__hover" onClick={() => adultChange('DOWN')}><svg className='cursor__hover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z" className='cursor__hover' /></svg></span>
                        </div>
                    </div>

                    <div className='component'>
                        <span className='title'>Number of Child</span>
                        <div className="stepper ">
                            <input className="form-input input-append stepper-input"
                                id="form-element-stepper" type="number" min="0"
                                max="5" name="noa" value={noofchild} readOnly />
                            <span className="stepper-arrow up cursor__hover" onClick={() => childrenChange('UP')}><svg className='cursor__hover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className='cursor__hover' d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg></span>
                            <span className="stepper-arrow down cursor__hover" onClick={() => childrenChange('DOWN')}><svg className='cursor__hover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z" className='cursor__hover' /></svg></span>
                        </div>
                    </div>

                    {/* <div className='right__panel'>

                      
                       
                    </div> */}

                    <div className='center__align grid__merger mt-5'>
                        <input type="submit" value="Check Availibility" className='button cursor__hover' />
                    </div>
                </div>
                <input type="hidden" id="eZ_adult" name="eZ_adult" value="1" />
                <input type="hidden" id="eZ_child" name="eZ_child" value="1" />
                <input type="hidden" id="eZ_room" name="eZ_room" value="2" />

                <input type="hidden" id="eZ_chkout" name="eZ_chkout" value={getFormattedDate(date && date[1])} />
                <input type="hidden" id="eZ_chkin" name="eZ_chkin" value={getFormattedDate(date && date[0])} />
            </form>
        </>

    );
}

export default RoomBookingForm;