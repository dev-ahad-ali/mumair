export const hoverColorChange = (action: string, id: string, color: string) => {
  const socialIcon = document.querySelector(`#${id}`);
  if (action === 'add') {
    socialIcon?.classList.add(color);
  } else {
    socialIcon?.classList.remove(color);
  }
};
