(function(module) {

  module.exports = function(str) {
    console.log('!', str, '!');
  }

}(
  (this.Module) ?
    Module('alert') : 
    module
));

