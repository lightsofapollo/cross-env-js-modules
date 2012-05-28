(function(module, ns) {
  module.exports.alert = ns.require('alert');
  module.exports.ws = ns.require('ws');
}.apply(
  this,
  (this.Module)?
    [Module, Module] :
    [module, require('./module')]
));
