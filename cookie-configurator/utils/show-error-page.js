const showErrorPage = (response, message) => response.render('error', {
  description: message,
});

module.exports = {
  showErrorPage,
};
