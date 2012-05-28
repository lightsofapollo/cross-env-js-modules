(function(module, ns) {
  module.exports = {
    Leaf: ns.require('sub/leaf')
  };

}.apply(
  this,
  (this.Module) ?
    [Module('sub'), Module] :
    [module, require('./module')]
));
