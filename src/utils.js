import home from "./assets/home.svg";
import aboutIcon from "./assets/briefcase-arrow-left-right.svg";
import featuresIcon from "./assets/palette-swatch.svg"
import phoneIcon from'./assets/card-account-phone.svg'
import payment from "./assets/payment-icon.svg";
import storeIcon from "./assets/setup-icon.svg";
import scalability from "./assets/Scalability-icon.svg";
import railroad from "./assets/railroad-light.svg";
import face1 from './assets/chicky-fits.jpeg'
import face2 from './assets/beads.jpeg'
import face3 from './assets/face3.svg'
import face4 from './assets/face4.svg'
import journey1 from './assets/journey-1.svg'
import journey2 from './assets/journey-2.svg'
import journey3 from './assets/journey-3.svg'
import journey4 from './assets/journey-4.svg'
import imageItem1 from './assets/image-item1.svg'

import payStack from './assets/paystack.svg'
import analytics from './assets/analytics.svg'
import customizeStore from './assets/customize-store.svg'
import inventory from './assets/inventory.svg'

import emailArrow from './assets/email-arrow-left.svg'
import phone from './assets/phone-forward.svg'
import aliImg from'./assets/Ali.jpeg'
import rachaelImg from './assets/rachel.jpg'
import stephenImg from './assets/stephen.jpg'
import hashimImg from './assets/hashim.jpeg'
import aminatImg from './assets/aminat.jpeg'
// import hrImg from'./assets/Hr.svg'

export const navLinkItems = [
  { id: 0, text: "Home", url: "/", icon: home },
  { id: 1, text: "About us", url: "/AboutUs", icon: aboutIcon },
  { id: 2, text: "Features", url: "/FeaturesPage", icon: featuresIcon },
  { id: 3, text: "Contact us", url: "/ContactPage", icon: phoneIcon },
];

export const footerLinks = [
  {
    id: 0,
    heading: "Quick Links",
    list3: "Features",
    list1: "Home",
    list2: "About",
    list4: "Contact",
    list5: "Blog",
  },
  {
    id: 1,
    heading: "Social Links",
    list1: "Facebook",
    list2: "Instagram",
    list3: "LinkedIn",
    list4: "Twitter",
  },
];

export const features = [
  {
    id: 0,
    img: storeIcon,
    text: " Launch your store   with no coding in minutes.",
    heading: "Easy Store setup",
  },
  {
    id: 1,
    img: railroad,
    text: " Analyze sales, track performance and optimize with ai insights.",
    heading: "AI Analytics",
  },
  {
    id: 2,
    img: payment,
    text: "Seamless payment across Africa with trusted gateways",
    heading: "Local Payment Gateways",
  },
  {
    id: 3,
    img: scalability,
    text: "Grow from a small shop to a fully-fledged e-commerce platform. ",
    heading: "Scalability",
  },
];

export const testimonies = [
  
  {
    id: 0,
    name:'Ekeh Ukem, CEO Of Chicky Fits.',
    image:face1,
    text: ` Nile made launching my online store a breeze! I had no prior experience with building websites, but with their intuitive platform. It’s been a game changer for my business.?`,
  },
  {
    id: 1,
    name:'Mena E, Owner Of Mybeads.ng',
    image:face2,
    text: ` The customizable templates and marketing tools on Nile helped me build a professional-looking store without hiring a designer. Sales have increased by 40% since i switched  to Nile.`,
  },
  {
    id: 2,
    name:'Jessica R., Founder Of EcoTote',
    image:face3,
    text: ` What i love about Nile is how easy it is to manage everything from one dashboard. From payment processing to order management, they have it all covered. Highly recommended.`,
  },
  {
    id: 3,
    name:'Emily A., Owner Of Lux Botanical',
    image: face4,
    text: `  Thanks to Nile, i was able to scale my online business quickly. The analytics and reporting tools are super helpful in tracing my sales and customer behavior. Nile has definitely help me grow..`,
   
  },
];

export const journey = [
  {
    id: 0,
    color:'bg-myCustomColor-blue',
    image:journey1,
    h4: "Product Launches",
    text: "Started with the goal of helping e-commerce website make sales.",
  },
  {
    id: 1,
    color:'bg-myCustomColor-light',
    image:journey2,
    h4: "Complete MVP Development",
    text: "We finalize our MVP, ensuring it meets  the core needs of our users. ",
  },
  {
    id: 2,
    color:'bg-pry3',
    image:journey3,
    h4: "Major Partnerships",
    text: "Partnered with top brands like paystack for the ease of our clients.",
  },
  {
    id: 3,
    color:'bg-pry2',
    image:journey4,
    h4: "Growth",
    text: "Moved from 5 websites to over 100 of e-commerce website within our sever.",
    textColor:'text-pry3'
  },
];


export const teams= [
  {id:0, name:'Winner Oyebanjo', position:'CEO', img:imageItem1},
  // {id:1, name:'Esther Ayodeji', position:'People Operations', img:hrImg},
  { id: 2, name: 'Agu Rachael', position: 'Product Officer', img:  rachaelImg},
  {id:3, name:'Ali Mohammed', position:'Frontend Developer', img:aliImg},
  {id:4, name:'Adegoke Stephen', position:'Backend Developer', img:stephenImg},
  {id:5, name:'Sulaimon Aminat', position:'Frontend Developer', img:aminatImg},
  {id:6, name:'Hashim Amuda', position:'Product Designer', img:hashimImg},
  // {id:7, name:'Winner Oyebanjo', position:'CEO', img:imageItem1},

]

export const featuresSpecs = [
  { id: 0, title:'1- Store Customization', paragraph:'Choose from a variety of modern, mobile-friendly themes to suit your brands', img:customizeStore},
  { id: 1, title:'2- AI Analytics', paragraph:'Track your store’s performance with Ai powered analytics and sales insights.', img:analytics},
  { id: 2, title:'3- Payment Gateway Integration', paragraph:'We support multiple payment gateways to ensure secure transactions.', img:payStack},
  { id: 3, title:'4- Inventory Management', paragraph:'Manage your inventory with ease, track stock levels, and set up alert for low stock.', img:inventory},
  
]


export const contacts = [
  {id:0, name:'Email', contact:'support@getNile.co', icon:emailArrow},
  {id:1, name:'Phone', contact:'+234 812 3843 076', icon:phone}
]