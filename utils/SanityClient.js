import { createClient } from "next-sanity";
const sanityClient = createClient({
    // projectId: "5y1ev1g6",
    projectId: "nmkwfwlr",
    dataset: "production",
    apiVersion: "2022-03-25",
    token: "sk91ZffzPH3RVOGzmXik4JBBdyeGEEKZTQHqLkCOOSuu8xgApXQWmVOYLCEiMTWH2vTRlyhY71OfcISsowDTC61R4hGUCwKDThSg7q0aWHQu3iDXQxsKfyF3gTD0oA6kAjyX8OTmEY5mtobcFKYyg0W2o86P9VMQHB4OJliYUW32SRGy8mlz",
    useCdn: false,
    perspective: 'published'
  });

  export {sanityClient}