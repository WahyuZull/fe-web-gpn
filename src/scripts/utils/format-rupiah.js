// eslint-disable-next-line consistent-return
module.exports = (amount, currency = true) => {
  try {
    let desimalCount = Math.abs(0);
    // eslint-disable-next-line no-restricted-globals
    desimalCount = isNaN(desimalCount) ? 2 : desimalCount;

    const negativeSign = amount < 0 ? '.' : '';

    // eslint-disable-next-line no-param-reassign
    const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(desimalCount), 10).toString();
    const j = (i.length > 2) ? i.length % 3 : 0;
    const cur = currency === true ? 'Rp' : '';

    // eslint-disable-next-line no-useless-concat
    return `${cur} ${negativeSign}${j ? `${i.substring(0, j)}.` : ''}${i.substring(j).replace(/(\d{3})(?=\d)/g, '$1' + '.')}${desimalCount ? '.' : ''}`;
  } catch (e) {
    console.log(e);
  }
};
