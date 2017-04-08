import { configure, addDecorator } from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import {muiTheme} from 'storybook-addon-material-ui';

const req = require.context('../../src', true, /.stories.tsx$/);

setOptions({
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(muiTheme());
configure(loadStories, module);
