$(function(){

    // Display some statistics about this computer, using node's os module.

    var os = require('os');
    var prettyBytes = require('pretty-bytes');

    $('.stats').append('Number of cpu cores: <span>' + os.cpus().length + '</span> <br>');
    $('.stats').append('Free memory: <span>' + prettyBytes(os.freemem())+ '</span>');


});