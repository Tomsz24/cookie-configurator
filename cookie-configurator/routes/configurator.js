const express = require('express');
const { getAddonsFromRequest } = require('../utils/get-addons-from-request');
const { COOKIE_ADDONS, COOKIE_BASES } = require('../data/cookies-data');
const { showErrorPage } = require('../utils/show-error-page');

const configuratorRouter = express.Router();

configuratorRouter
  .get('/select-base/:baseName', (req, res) => {
    const { baseName } = req.params;

    if (!COOKIE_BASES[baseName]) {
      return showErrorPage(res, `There's no such a base as ${baseName}`);
    }
    res.cookie('cookieBase', baseName);
    res.render('configurator/base-selected', {
      baseName,
    });
  })
  // eslint-disable-next-line consistent-return
  .get('/add-addon/:addonName', (req, res) => {
    const { addonName } = req.params;

    if (!COOKIE_ADDONS[addonName]) {
      // return res.render('error', {
      //   description: `There's no such thing as ${addonName}`,
      // });
      return showErrorPage(res, `There's no such thing as ${addonName}`);
    }
    const addons = getAddonsFromRequest(req);

    if (addons.includes(addonName)) {
      return res.render('error', {
        description: `${addonName} is already on your cookie. You cannot add it twice`,
      });
    }

    addons.push(addonName);

    res
      .cookie('cookieAddons', JSON.stringify(addons))
      .render('configurator/added', { addonName });
  })
  .get('/delete-addon/:addonName', (req, res) => {
    const { addonName } = req.params;

    const oldAddons = getAddonsFromRequest(req);

    if (!oldAddons.includes(addonName)) {
      return showErrorPage(
        res,
        `Cannot delete something that isn't already added to the cookie. 
        ${addonName} not found on the cookie`,
      );
    }
    const addons = oldAddons.filter((addon) => addon !== addonName);

    res
      .cookie('cookieAddons', JSON.stringify(addons))
      .render('configurator/deleted', {
        addonName,
      });
  });

module.exports = {
  configuratorRouter,
};
