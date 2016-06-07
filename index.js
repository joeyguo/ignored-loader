/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author joeyguo
*/
module.exports = function(source) {
    if(this.cacheable) this.cacheable();
    return source;
};
module.exports.pitch = function() {
    if(this.cacheable) this.cacheable();
    return '';
};