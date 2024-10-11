import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import uxIcon from '@/../public/img/uxIcon.png';
import webDesignIcon from '@/../public/img/webDesignIcon.png';
import appDesignIcon from '@/../public/img/appDesignIcon.png';
import graphicDesignIcon from '@/../public/img/graphicDesignIcon.png';
import { StaticImageData } from 'next/image';
import project1 from '@/../public/img/project1.png';
import project2 from '@/../public/img/project2.png';
import project3 from '@/../public/img/project3.png';

export const navLinks: { title: string; sectionId: string }[] = [
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

export const socialIcons: { icon: React.ReactElement; name: string; color: string }[] = [
  {
    icon: <FaFacebook />,
    name: 'facebook',
    color: 'text-blue-500',
  },
  {
    icon: <FaTwitter />,
    name: 'twitter',
    color: 'text-blue-300',
  },
  {
    icon: <FaInstagram />,
    name: 'instagram',
    color: 'text-pink-600',
  },
  {
    icon: <FaLinkedin />,
    name: 'linkedin',
    color: 'text-blue-700',
  },
];

export const servicesInfo: { icon: StaticImageData; name: string; description: string }[] = [
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

export const projectsInfo: { image: StaticImageData; title: string; category: string }[] = [
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
