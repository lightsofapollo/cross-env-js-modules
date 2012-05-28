(function(module, ns) {

  function Leaf() {
    console.log('! OK - Submodule loaded !');
  }

  module.exports = Leaf;
}.apply(
  this,
  (this.Module) ?
    [Module('sub/leaf'), Module] :
    [module, require('../module')]
));

