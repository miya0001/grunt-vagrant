/* vim: set ft=javascript expandtab shiftwidth=2 tabstop=2: */

/**
 * Hatammoto
 * https://github.com/miya0001/wp-plugin
 *
 * Copyright (c) 2013 Takayuki Miyauchi (http://firegoby.jp/)
 * Licensed under the MIT License
 */

'use strict';

exports.description = 'Init Vagrant environment.';

exports.notes = '';
exports.after = '';
exports.warnOn = '*';

exports.template = function( grunt, init, done ) {
  init.process( {}, [
    {
      name   : 'ipaddress',
      message: 'IP Address',
      default: '192.168.33.10'
    },
  ], function( err, props ) {
    var files = init.filesToCopy( props );
    init.copyAndProcess( files, props );
    done();
  });
};

