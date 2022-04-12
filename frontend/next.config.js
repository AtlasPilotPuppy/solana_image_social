const calendarTranspile = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  '@fullcalendar/list',
  '@fullcalendar/timegrid',
]);

const withImages = require('next-images');

const exp = withImages(
  calendarTranspile({
    i18n: {
      defaultLocale: 'en',
      locales: ['en']
    }
  })
);

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  ...exp
}