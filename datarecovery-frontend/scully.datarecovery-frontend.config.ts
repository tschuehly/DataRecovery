import {
  ContentTextRoute,
  HandledRoute,
  registerPlugin,
  scullyConfig,
  ScullyConfig,
} from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import { readFileSync } from 'fs';
import { join } from 'path';
import { myPlugin } from './scully/plugins';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'datarecovery-frontend',
  distFolder: './dist/datarecovery-frontend', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [myPlugin],
  routes: {
    /*
    '/api/article/:articleUrl': {
      type: 'contentFolder',
      articleUrl: {
        folder: '../datarecovery-backend/src/main/resources/templates/article',
      },
    },
    '/api/article/datenrettung-kosten': {
      type: 'default',
      contentType: 'html',
      content: async () => {
        return readFileSync(
          '../datarecovery-backend/src/main/resources/templates/article/datenrettung-kosten.html'
        ).toString('utf-8');
      },
    },*/

    '/tracking/keyword': {
      type: 'ignored',
    },
    '/tracking/category': {
      type: 'ignored',
    },
    '/tracking': {
      type: 'ignored',
    },
    '/tracking/product': {
      type: 'ignored',
    },
    '/tracking/login': {
      type: 'ignored',
    },
    '/tracking/order': {
      type: 'ignored',
    },
    '/datenrettung': {
      type: 'ignored',
    },
  },
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
  extraRoutes: [],
};
