// 整个book的主题
import { create } from '@storybook/theming';

export default create({
  base: 'light',

  // UI
  appBg: 'white',
  // appContentBg: '#f1f1f1',

  brandTitle: 'mini-ui',
  brandUrl: 'https://example.com',
  brandImage: require('../public/favicon.ico'),
});
