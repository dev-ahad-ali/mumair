import { StaticImageData } from 'next/image';

export type NavLinks = { title: string; sectionId: string }[];

export type SocialIcons = {
  icon: React.ReactElement;
  name: string;
  color: string;
}[];

export type ServicesInfo = {
  icon: StaticImageData;
  name: string;
  description: string;
}[];

export type ProjectsInfo = {
  image: StaticImageData;
  title: string;
  category: string;
}[];

export type TestimonialInfo = {
  image: StaticImageData;
  name: string;
  occupation: string;
  message: string;
}[];

export type SkillInfo = {
  name: string;
  point: number;
}[];
