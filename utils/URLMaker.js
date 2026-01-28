import React from 'react'

export default function URLMaker(relativeUrl) {
   if(process.env.NODE_ENV=="development")
   return `http://localhost:3000${relativeUrl}`
    else if (process.env.NODE_ENV=="production")
    return `https://deforetresorts.com${relativeUrl}`;
}
