export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
    });
  } else {
    window.scrollTo(0, 0);
  }
};
