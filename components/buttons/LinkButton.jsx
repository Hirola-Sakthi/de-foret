import React from 'react'
import Link from 'next/link';
const LinkButton = (props) => {
  return (
    <>
      <style jsx>
        {`    
.btn {    
    position: relative; 
    padding: 1.4rem 0;

    font-size: 1.4rem;
    color: var(--wood-color);
    letter-spacing: 0.32rem;
    text-transform: uppercase;
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);  
    cursor: pointer;
    user-select: none;
  }
  
  .btn:after {
    content: '';
    position: absolute; 
    transition: inherit;
    z-index: 2;
    bottom:0;
    width:0;
    height:3px;
    background:var(--wood-color);
    left:0;
  }
  
  .btn:hover {
    transition-delay: .3s;
  }
  

  .btn:hover:after {
    transition-delay: .15s;
    width:80%;
  }
        `}
      </style>

      <Link legacyBehavior  href={props.href}><a className="btn from-left cursor__hover" onClick={props.onClick} style={{ color: props.color }}>{
        props.title}</a></Link>

    </>);
}

export default LinkButton;