(function(module, ns) {
  var alert = ns.require('alert');

  function WS() {

  }

  WS.prototype = {
    alert: function() {
      alert('OK - Module loading works');
    }
  };

  module.exports = WS;
}.apply(
  this,
  (this.Module) ?
    [Module('ws'), Module] :
    [module, require('./module')]
));
