export const hoverColorChange = (action: string, id: string, color: string) => {
  const socialIcon = document.getElementById(id);
  if (action === 'add') {
    socialIcon!.style.color = color;
  } else {
    socialIcon!.style.color = '#000000';
  }
};
