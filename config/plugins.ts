// config file in Strapi
export default ({env}) => ({
  'preview-button': {
      enabled: true,
      config: {
        contentTypes: [
          {
            uid: 'api::gym-deatil.gym-deatil',
            draft: {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview`,
              query: {
                type: 'property',
                slug: '{id}',
              },
              openTarget: 'StrapiPreviewPage',
              alwaysVisible: true,
            },
            published: {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/property/{id}`,
              copy: false,
            },
            openTarget: '_blank',
          },
        ],
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
});
