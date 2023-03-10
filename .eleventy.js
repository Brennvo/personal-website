module.exports = (config) => {
  config.addFilter('prettyDate', (date) => {
    const UTCString = date.toUTCString();
    return UTCString.slice(0, UTCString.indexOf(' 00:'));
  });
  config.addFilter('dateTime', (date) => {
    return date.toISOString().split('T')[0];
  });
  config.addFilter('kebab', (str) => {
    const regex = /\/|_/gm;
    return str.replaceAll(regex, '-');
  });
  config.addPassthroughCopy('src/assets/css');
  config.addWatchTarget('./src/assets/css/');
  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
      passthroughFileCopy: true,
    },
  };
};
