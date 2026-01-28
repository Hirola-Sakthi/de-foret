import React, { useEffect, useState } from 'react'
import Icons from '../../../data/json/icons.json';
import MyIcon from '../myIcon';
const InlineIcons = ({ iconsList }) => {
    return (
        <>
            <style jsx>
                {`
            .icon__section
            {
                padding:0;
                display:flex;
            }
            .icon__section li
            {
                min-width:150px;
                display:flex;
                margin-right: 10px;
                justify-content: left;
                align-items: center;
                gap: 10%;
                font-size:var(--fs-desktop);
                fill:#fff;
            }
           
            .icon__section li span svg
            {
                fill:red;
            }
            @media screen and (max-width: 450px)
            {
                .icon__section li
            {
                margin-right: 0;
                font-size:var(--fs-mobile);
                min-width:100px;
            } 
            :global(.icon__section li span svg)
            {
                width:18px;
            }
            }
            `}
            </style>

            {iconsList.length > 0 ? <div>
                <ul className='icon__section'>

                    {
                        iconsList.map((item, index) => (
                            <li key={index}>
                                <MyIcon icon={item.icon} />
                                <span>{item.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div> : null
            }
        </>
    );
}

export default InlineIcons;