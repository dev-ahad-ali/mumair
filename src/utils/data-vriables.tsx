import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import uxIcon from '@/../public/img/uxIcon.png';
import webDesignIcon from '@/../public/img/webDesignIcon.png';
import appDesignIcon from '@/../public/img/appDesignIcon.png';
import graphicDesignIcon from '@/../public/img/graphicDesignIcon.png';
import project1 from '@/../public/img/project1.png';
import project2 from '@/../public/img/project2.png';
import project3 from '@/../public/img/project3.png';
import testimonialImg1 from '@/../public/img/reviewImg1.png';
import testimonialImg2 from '@/../public/img/reviewImg2.png';
import {
  NavLinks,
  ProjectsInfo,
  ServicesInfo,
  SkillInfo,
  SocialIcons,
  TestimonialInfo,
} from '@/types/types';

export const navLinks: NavLinks = [
  {
    title: 'home',
    sectionId: '',
  },
  {
    title: 'about me',
    sectionId: 'aboutMe',
  },
  {
    title: 'services',
    sectionId: 'services',
  },
  {
    title: 'projects',
    sectionId: 'projects',
  },
  {
    title: 'testimonial',
    sectionId: 'testimonial',
  },
  {
    title: 'contact',
    sectionId: 'contact',
  },
];

export const socialIcons: SocialIcons = [
  {
    icon: <FaFacebook />,
    name: 'facebook',
    color: '#3b82f6',
  },
  {
    icon: <FaTwitter />,
    name: 'twitter',
    color: '#93c5fd',
  },
  {
    icon: <FaInstagram />,
    name: 'instagram',
    color: '#db2777',
  },
  {
    icon: <FaLinkedin />,
    name: 'linkedin',
    color: '#1d4ed8',
  },
];

export const skillInfo: SkillInfo = [
  {
    name: 'UX',
    point: 90,
  },
  {
    name: 'Website Design',
    point: 85,
  },
  {
    name: 'App Design ',
    point: 95,
  },
  {
    name: 'Graphic Design ',
    point: 90,
  },
];

export const servicesInfo: ServicesInfo = [
  {
    icon: uxIcon,
    name: 'UI/UX',
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },
  {
    icon: webDesignIcon,
    name: 'Web Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },
  {
    icon: appDesignIcon,
    name: 'App Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },
  {
    icon: graphicDesignIcon,
    name: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum',
  },
];

export const projectsInfo: ProjectsInfo = [
  {
    image: project1,
    title: 'AirCalling Landing Page Design',
    category: 'web design',
  },
  {
    image: project1,
    title: 'Ecom Web Page Design',
    category: 'app design',
  },
  {
    image: project1,
    title: 'AirCalling Landing Page Design',
    category: 'graphic design',
  },
  {
    image: project2,
    title: 'AirCalling Landing Page Design',
    category: 'web design',
  },
  {
    image: project2,
    title: 'AirCalling Landing Page Design',
    category: 'graphic design',
  },
  {
    image: project2,
    title: 'Business Landing Page Design',
    category: 'UI/UX',
  },
  {
    image: project3,
    title: 'AirCalling Landing Page Design',
    category: 'graphic design',
  },
  {
    image: project3,
    title: 'AirCalling Landing Page Design',
    category: 'web design',
  },
  {
    image: project3,
    title: 'Business Landing Page Design',
    category: 'UI/UX',
  },
  {
    image: project3,
    title: 'Ecom Web Page Design',
    category: 'app design',
  },
  {
    image: project2,
    title: 'Ecom Web Page Design',
    category: 'app design',
  },
  {
    image: project1,
    title: 'Business Landing Page Design',
    category: 'UI/UX',
  },
];

export const testimonialInfo: TestimonialInfo = [
  {
    image: testimonialImg1,
    name: 'Name',
    occupation: 'ceo',
    message:
      'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
  },
  {
    image: testimonialImg1,
    name: 'Name',
    occupation: 'ceo',
    message:
      'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
  },
  {
    image: testimonialImg2,
    name: 'Name',
    occupation: 'ceo',
    message:
      'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
  },
  {
    image: testimonialImg1,
    name: 'Name',
    occupation: 'ceo',
    message:
      'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
  },
];
