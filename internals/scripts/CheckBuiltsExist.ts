// @flow
// Check if the renderer and main bundles are built
import path = require('path');
import fs = require('fs');

import chalk from 'chalk';

function CheckBuildsExist() {
  const mainPath = path.join(__dirname, '..', '..', 'app', 'main.prod.js');
  const rendererPath = path.join(__dirname, '..', '..', 'app', 'dist', 'renderer.prod.js');

  if (!fs.existsSync(mainPath)) {
    throw new Error(chalk.whiteBright.bgRed.bold(
      'The main process is not built yet. Build it by running "npm run build-main"'
    ));
  }

  if (!fs.existsSync(rendererPath)) {
    throw new Error(chalk.whiteBright.bgRed.bold(
      'The renderer process is not built yet. Build it by running "npm run build-renderer"'
    ));
  }
}

CheckBuildsExist();
