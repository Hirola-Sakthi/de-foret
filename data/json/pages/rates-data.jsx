import { Award, Clock3, Dot, Sandwich, SunMoon, University } from "lucide-react";

const cards = [
  {
    primaryEntity: "privatePool",
    title: "Tropical Love Retreat",
    desc: "Celebrate love in paradise with our thoughtfully curated package designed for unforgettable moments.",
    inclusion: [
      { icon: University, content: "Daily breakfast served with your stay" },
      { icon: Sandwich, content: "One floating breakfast experience for two, set amidst serene waters" },
      { icon: SunMoon, content: "One-time romantic candlelight dinner for two featuring a five-course gourmet menu" },
      { icon: Clock3, content: "Early check-in and late check-out privileges (subject to availability)" },
      { icon: Award, content: "Exclusive offer available only for bookings made through our official website" },
    ],
    Notes: [
      { icon: Dot, content: "Additional guests at the candlelight dinner will be charged separately, payable directly at the resort." },
      { icon: Dot, content: "Floating breakfast and candlelight dinner are subject to weather conditions." },
      { icon: Dot, content: "The romantic dinner experience is not available on December 24th and December 31st." }
    ],
    pricingConfig: {
      price: "₹7500",
      timing: "INR / Night",
      priceContent1: "Plus ₹2,480 taxes & fees per night",
      priceContent2: "Total ₹9,980 for 1 night (incl. taxes)",
      btn: {
        btncontent: "BOOK NOW",
        btnUrl: ""
      }
    }
  },  
  {
    primaryEntity: "debella",
    title: "Tropical Love Retreat",
    desc: "Celebrate love in paradise with our thoughtfully curated package designed for unforgettable moments.",
    inclusion: [
      { icon: University, content: "Daily breakfast served with your stay" },
      { icon: Sandwich, content: "One time romantic candlelight dinner for two featuring a five-course gourmet menu" },
      { icon: SunMoon, content: "Early check-in and late check-out privileges (subject to availability)" },
      { icon: Clock3, content: "Exclusive offer available only for bookings made through our official website" },
    ],
    Notes: [
      { icon: Dot, content: "Additional guests at the candlelight dinner will be charged separately, payable directly at the resort." },
      { icon: Dot, content: "candlelight dinner is subject to weather conditions." },
      { icon: Dot, content: "The romantic dinner experience is not available on December 24th and December 31st." }
    ],
    pricingConfig: {
      price: "₹6000",
      timing: "INR / Night",
      priceContent1: "Plus ₹2,480 taxes & fees per night",
      priceContent2: "Total ₹8,480 for 1 night (incl. taxes)",
      btn: {
        btncontent: "BOOK NOW",
        btnUrl: ""
      }
    }
  }
];

export default cards;
