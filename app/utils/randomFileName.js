const getDateString = () => {
  const now = new Date();
  const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();
  const month = now.getMonth() < 9 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
  return `${day}-${month}-${now.getFullYear()}`;
};

module.exports = getDateString;
