import { HandledRoute, registerPlugin, ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import { myPlugin } from './scully/plugins';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'datarecovery-frontend',
  distFolder: './dist/datarecovery-frontend', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [myPlugin],
  routes: {
    '/blog': {
      type: 'ignored',
    },
    '/blog/:articleUrl': {
      type: 'ignored',
    },
    '/tracking/:trackingId/:postalCode': {
      type: 'ignored',
    },
    '/tracking': {
      type: 'ignored',
    },
    '/api/:route': {
      type: 'addFake',
    },
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};
