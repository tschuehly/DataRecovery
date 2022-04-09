import { registerPlugin, getPluginConfig } from '@scullyio/scully';
import { JSDOM } from 'jsdom';
export const myPlugin = 'myPlugin';

const myFunctionPlugin = async (dom: JSDOM, route): Promise<any> => {
  /** traverse dom and remove/replace */
  let document = dom.window.document;
  document.getElementById('cookie').remove();
  return Promise.resolve(dom);
};

const validator = async () => [];
registerPlugin('postProcessByDom', myPlugin, myFunctionPlugin, validator);
