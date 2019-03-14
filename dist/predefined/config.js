'use strict';

var Config = {
    envDevelopment: 'development',
    envProducton: 'production',
    defaultConfigPath: 'config/web.json',
    serviceHubPort: 23003
};

Object.freeze(Config);
module.exports = Config;