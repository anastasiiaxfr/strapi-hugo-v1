module.exports = ({ env }) => ({
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
        uploadStream: {},
        delete: {},
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
        accessToken: env('NETLIFY_ACCESS_TOKEN'),
        sites: [
          {
            // name: env('NETLIFY_SITE_NAME'),
            // id: env('NETLIFY_SITE_ID'),
            // buildHook: env('NETLIFY_BUILD_HOOKS'),
            // branch: 'main', 
            accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN
          }
        ]
      },
  },
});