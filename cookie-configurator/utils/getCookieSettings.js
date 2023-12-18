const { getAddonsFromRequest } = require('./get-addons-from-request');
const { handlebarsHelpers } = require('./handlebars-helpers');
const { COOKIE_ADDONS, COOKIE_BASES } = require('../data/cookies-data');

const getCookieSettings = (req) => {
  const { cookieBase: base } = req.cookies;
  const addons = getAddonsFromRequest(req);
  const allBases = Object.entries(COOKIE_BASES);
  const allAddons = Object.entries(COOKIE_ADDONS);

  const sum = (base ? handlebarsHelpers['find-price'](allBases, base) : 0)
    + addons.reduce(
      (prev, curr) => prev + handlebarsHelpers['find-price'](allAddons, curr),
      0,
    );

  return {
    addons,
    sum,
    base,
    allBases,
    allAddons,
  };
};

module.exports = {
  getCookieSettings,
};
