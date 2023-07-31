module.exports = (length) => {
  let result = '';
  const characthers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characthers.length;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    result += characthers.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
