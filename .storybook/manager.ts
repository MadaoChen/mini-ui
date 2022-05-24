// 控制addon样式
import { addons } from '@storybook/addons';
import myTheme from './my.theme';

addons.setConfig({
  panelPosition: 'right',
  theme: myTheme
});