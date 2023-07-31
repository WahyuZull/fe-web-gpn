module.exports = (text) => {
  const description = text.split('\n').join('<br />');
  return description;
};
