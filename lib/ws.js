(function(module, ns) {
  var alert = ns.require('alert');

  function WS() {

  }

  WS.prototype = {
    alert: function() {
      alert('fooo');
    }
  };

  module.exports = WS;
}.apply(
  this,
  (this.Module)?
    [Module('ws'), Module] :
    [module, require('./ns')]
));
