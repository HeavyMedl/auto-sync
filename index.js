'use strict';
const RemoteSync = require('remote-sync');
const watcher = require('chokidar');
const mirror = 'mirror -c --only-missing files/completed/P90X3/ .';
/**
 * [exports description]
 * @type {[type]}
 */
class AutoSync extends RemoteSync {
  /**
   * Sets the configuration file for [Remote|Auto]Sync. Initializes
   * the watcher.
   * @param  {object} config The configuration object defining the settings
   *                         and commands to use.
   */
  constructor(config) {
    super(config);
  }
  /**
   * [watch description]
   */
  watch() {
    watcher.watch('.').on('all', (event, path) => {
      console.log(event, path);
    });
  }
}
module.exports = AutoSync;

const config = {
  operations: [{
    operation: 'Mirror',
    command: mirror,
  }],
  user: '',
  pw: '',
  host: '',
  stdio: {
    stdio_config: {
      stdio: 'inherit',
    },
  },
};
const client = new AutoSync(config);
client.watch();
