const handlebarsHelpers = {
  upper: (str) => str.toUpperCase(),
  'find-price': (entries, selectedItem) => {
    const found = entries.find((el) => el[0] === selectedItem);
    if (!found) {
      throw new Error(`Cannot find price of "${selectedItem}".`);
    }
    const [, price] = found;
    return price;
  },

  pricyfy: (price) => price.toFixed(2),

  isNotInArray: (array, element) => !array.includes(element),

  isInArray: (array, element) => array.includes(element),

  not: (arg) => !arg,
};

module.exports = {
  handlebarsHelpers,
};
