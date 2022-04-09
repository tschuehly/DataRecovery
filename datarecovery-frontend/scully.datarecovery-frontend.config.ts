import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
import { myPlugin } from './scully/plugins';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'datarecovery-frontend',
  distFolder: './dist/datarecovery-frontend', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [myPlugin],
  routes: {},
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};
