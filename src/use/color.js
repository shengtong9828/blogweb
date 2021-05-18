export const useRandomColor = () => {
  const useRandomNum = () => Math.random() * 255;
  return `rgb(
    ${useRandomNum()}, ${useRandomNum()}, ${useRandomNum()}
  )`;
};
