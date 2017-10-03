module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  API: process.env.API_PORT,
  GA: 'UA-46731966-17',
  LOGS_PATH: '/var/log/app_logs',
  app: {
    htmlAttributes: { lang: 'fr' },
    title: 'La Piscine - Le trading de crypto monnaies à votre portée',
    titleTemplate: 'La Piscine - Le trading de crypto monnaies à votre portée',
    meta: [
      { name: 'description', content: 'Sautez dans le bain des cryptomonnaies et passez à la vitesse supérieure en rejoignant La Piscine' },
      { name: 'author', content: 'Antoine Lin <contact@antoinelin.com>' },
      { name: 'robots', content: 'index, follow' },
      { name: 'google-site-verification', content: '_2EmM6ICCFSlEL9P9hEdOp_nh1lQaUDOaJPk1AU7MmY' },
      // IE META
      { name: 'msapplication-tap-highlight', content: 'no' },
      // APPLE META
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'LaPiscine.gg' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      // MOBILE META
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'format-detection', content: 'telephone=no' },
      // FACEBOOK META
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'http://lapiscine.gg' },
      { property: 'og:image', content: 'https://pbs.twimg.com/profile_banners/908401670098485249/1506285048/1500x500' },
      { property: 'og:site_name', content: 'lapiscine.gg' },
      { property: 'og:title', content: 'lapiscine.gg' },
      { property: 'og:description', content: 'Sautez dans le bain des crypto monnaies et passez à la vitesse supérieure en rejoignant lapiscine.gg' },
      // TWITTER META
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: 'http://lapiscine.gg' },
      { name: 'twitter:site', content: 'lapiscine.gg' },
      { name: 'twitter:title', content: 'lapiscine.gg' },
      { property: 'og:image', content: 'https://pbs.twimg.com/profile_banners/908401670098485249/1506285048/1500x500' },
    ],
  },
}
