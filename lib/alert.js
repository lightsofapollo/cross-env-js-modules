(function(module, ns) {

  module.exports = function(str) {
    console.log('!', str, '!');
  }

}.apply(
  this,
  (this.Module)?
    [Module('alert'), Module] :
    [module, require('./ns')]
));
