import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'stencil-components',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@koomzocomponents/dist/components',        
      directivesProxyFile: './../../koomzoappsv2/src/app/products/lowcode-app/libs/stencil-generated/proxies.ts',
      directivesArrayFile: './../../koomzoappsv2/src/app/products/lowcode-app/libs/stencil-generated/index.ts',  
     // directivesProxyFile: './../stencil-angularapp-demo/src/libs/stencil-generated/proxies.ts',  
     // directivesArrayFile: './../stencil-angularapp-demo/src/libs/stencil-generated/index.ts',    
     // valueAccessorConfigs: angularValueAccessorBindings,      
      //https://pranavsarda.hashnode.dev/stenciljs-with-angular-app-directly,
     // excludeComponents: [        'context-consumer'  ]
    }),
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
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
