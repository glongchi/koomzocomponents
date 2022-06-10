import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';


// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  namespace: 'koomzowebcomponent',
  outputTargets: [  
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    // angularOutputTarget({
    //   componentCorePackage: '',
    //   directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
    //   directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    // }),
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
};

