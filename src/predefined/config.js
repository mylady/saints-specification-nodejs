'use strict';

const Config = {
    envDevelopment : 'development',
    envProducton : 'production',
    defaultConfigPath : 'config/web.json',
    serviceHubPort : 8000
}

Object.freeze(Config);
module.exports = Config;