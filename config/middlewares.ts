// import previewUrl from '../src/middlewares/previewUrl'; 

export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  // {
  //   resolve: previewUrl,
  //   options: {
  //     enabled: true,
  //   },
  // },
];
