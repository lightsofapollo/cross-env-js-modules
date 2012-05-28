(function(module, ns) {
  module.exports.alert = ns.require('alert');
  module.exports.ws = ns.require('ws');
  module.exports.Sub = ns.require('sub');
}.apply(
  this,
  (this.Module)?
    [Module, Module] :
    [module, require('./module')]
));
