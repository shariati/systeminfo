#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var systeminfo = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(systeminfo(options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    systeminfo',
      '    systeminfo  --export HTML',
      '',
      '  Example',
      '    systeminfo',
      systeminfo
    ].join('\n'));
  },
  version: pkg.version
});