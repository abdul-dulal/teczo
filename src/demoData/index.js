import project from "@/assets/img/home/project.png";
import management from "@/assets/img/home/management.png";
import keyword from "@/assets/img/home/keyword.png";

import service01 from "@/assets/img/home/service-01.png";
import service02 from "@/assets/img/home/service-02.png";
import service03 from "@/assets/img/home/service-03.png";
import service04 from "@/assets/img/home/service-04.png";

import author01 from "@/assets/img/home/author-01.png";
import author02 from "@/assets/img/home/author-02.png";
import author03 from "@/assets/img/home/author-03.png";

import slider01 from "@/assets/img/home/slider-01.png";
import slider02 from "@/assets/img/home/slider-02.png";
import slider03 from "@/assets/img/home/slider-03.png";
import slider04 from "@/assets/img/home/slider-04.png";
import slider05 from "@/assets/img/home/slider-05.png";

import blog01 from "@/assets/img/home/blog-01.png";
import blog02 from "@/assets/img/home/blog-02.png";
import blog03 from "@/assets/img/home/blog-03.png";

import C01 from "@/assets/img/homeTwo/c-01.svg";
import C02 from "@/assets/img/homeTwo/c-02.svg";
import C03 from "@/assets/img/homeTwo/c-03.svg";
import C04 from "@/assets/img/homeTwo/c-04.svg";
import C05 from "@/assets/img/homeTwo/c-05.svg";
import C06 from "@/assets/img/homeTwo/c-06.svg";

import tm01 from "@/assets/img/homeTwo/team-01.png";
import tm02 from "@/assets/img/homeTwo/team-02.png";
import tm03 from "@/assets/img/homeTwo/team-03.png";

import cs01 from "@/assets/img/homeThree/cs01.png";
import cs02 from "@/assets/img/homeThree/cs02.png";
import cs03 from "@/assets/img/homeThree/cs03.png";

import icon01 from "@/assets/img/homeThree/software.svg";
import icon02 from "@/assets/img/homeThree/product.svg";
import icon03 from "@/assets/img/homeThree/tree.svg";

import p01 from "@/assets/img/homeThree/p01.png";
import p02 from "@/assets/img/homeThree/p02.png";
import p03 from "@/assets/img/homeThree/p03.png";
import p04 from "@/assets/img/homeThree/p04.png";

import project01 from "@/assets/img/homeThree/p-01.png";
import project02 from "@/assets/img/homeThree/p-02.png";

import client01 from "@/assets/img/homeThree/client01.png";

export const stats = [
  { title: "Risk management", img: management, number: "20x" },
  { title: "Keyword optimization", img: keyword, number: "140k" },
  { title: "Project completed", img: project, number: "10k" },
];

export const services = [
  { serviceName: "Cyber security solution", img: service01 },
  { serviceName: "Cloud integration", img: service02 },
  { serviceName: "Software development", img: service03 },
  { serviceName: "Data analytics", img: service04 },
];

export const experts = [
  { name: "Richard Vanman", img: author01, design: "Designer" },
  { name: "Tanveer Raihan", img: author02, design: "Co Founder" },
  { name: "Hanry Pollard", img: author03, design: "Developer" },
];

export const testimonials = [
  {
    text: "I think you did a  great job when you ran the all-hands meeting. It showed that you are  capable of getting people to work together and communicate",
    name: "Richard Varman",
    role: "Designer",
    img: slider01,
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et enim neque laborum. Cum, qui voluptatibus? Velit maiores dolorum non.",
    name: "John Doe",
    role: "Manager",
    img: slider02,
  },
  {
    text: "I think you did a  great job when you ran the all-hands meeting. It showed that you are  capable of getting people to work together and communicate",
    name: "Alex Smith",
    role: "Developer",
    img: slider03,
  },
  {
    text: "You turn complex problems into clear action plans. Everyone feels heard.",
    name: "Sara Lee",
    role: "Designer",
    img: slider04,
  },
  {
    text: "The way you handled the client feedback session was brilliant. You really know how to align people.",
    name: "Chris Evan",
    role: "Lead",
    img: slider05,
  },
];

export const faqs = [
  {
    question: "How To Soft Launch Your Business?",
    answer:
      "Integer fringilla sed lacus non venenatis. Vivamus turpis ex suscipit sit amet lorem dictum purus. Sed nec arcu id nunc porttitor nec dui.",
  },
  {
    question: "Is My Technology Allowed On Tech?",
    answer:
      "Integer fringilla sed lacus non venenatis. Vivamus turpis ex suscipit sit amet lorem dictum purus. Sed nec arcu id nunc porttitor nec dui.",
  },
  {
    question: "How To Turn Visitors Into Contributors?",
    answer:
      "Integer fringilla sed lacus non venenatis. Vivamus turpis ex suscipit sit amet lorem dictum purus. Sed nec arcu id nunc porttitor nec dui.",
  },
  {
    question: "How Can I Find My Solutions?",
    answer:
      "Integer fringilla sed lacus non venenatis. Vivamus turpis ex suscipit sit amet lorem dictum purus. Sed nec arcu id nunc porttitor nec dui.",
  },
];

export const blogs = [
  {
    blogTitle: "Our strategic planning ensures your brand's vision aligns",
    img: blog01,
    desc: "Development",
  },
  {
    blogTitle: "The complex but awesome CSS border-image proper for",
    img: blog02,
    desc: "Technology",
  },
  {
    blogTitle: "Our strategic planning ensures your brand's vision aligns",
    img: blog03,
    desc: "Development",
  },
];

export const ourClients = [
  { id: "01", title: "IT management", icon: C01 },
  { id: "02", title: "Product development", icon: C02 },
  { id: "03", title: "Data visualization", icon: C03 },
  { id: "04", title: "Ui/Ux Designing", icon: C04 },
  { id: "05", title: "App development", icon: C05 },
  { id: "06", title: "Security systems", icon: C06 },
];

export const teamMembers = [
  { name: "Hanna Marriez", img: tm01, design: "HR Manager" },
  { name: "David Brumha", img: tm02, design: "Executive Officer" },
  { name: "Brandon Hussey", img: tm03, design: "Co Founder" },
];

export const menu = [
  {
    name: "Home",
    path: "/",
    children: [
      { name: "Home One", path: "/" },
      { name: "Home Two", path: "/home-two" },
      { name: "Home Three", path: "/home-three" },
      { name: "Home Three", path: "/home-3" },
    ],
  },
  { name: "About", path: "/about" },
  { name: "Pages", path: "/pages" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const customerService = [
  {
    title: "Software Development",
    image: cs01,
    icon: icon01,
  },
  {
    title: "Product Development",
    image: cs02,
    icon: icon02,
  },
  {
    title: "Cloud Integration",
    image: cs03,
    icon: icon03,
  },
];

export const counterData = [
  { count: "586+", img: p01, title: "Project completed" },
  { count: "284+", img: p02, title: "Specialist  company" },
  { count: "4500", img: p03, title: "Satisfied customers" },
  { count: "320", img: p04, title: "Smart solutions" },
];

export const projectSlides = [
  { image: project01, title: "Tech solution", design: "Design / Idea" },
  {
    image: project02,
    title: "Cyber security",
    design: "Design / Development",
  },
  {
    image: project01,
    title: " Cyber security",
    design: "Design / Development",
  },
];

export const clientTestimonials = [
  {
    name: "St. Jessica Lauren",
    role: "Developer",
    image: client01,
    text: `The team demonstrated a deep understanding of our industry which
    helped them to tailor solutions specifically to our needs. They took the
    time to understand our business and worked`,
  },
  {
    name: "John Carter",
    role: "Designer",
    image: client01,
    text: "Amazing service and smooth communication. Highly recommended.",
  },
];
