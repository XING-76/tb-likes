const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#2a2f35',
              'link-color': '#bb986c',
             },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};