(function(mod, util) {
  var alert = util.require('alert');

  function WS() {

  }

  WS.prototype = {
    alert: function() {
      alert('fooo');
    }
  };

  mod.exports = WS;
}.apply(
  this,
  (this.Module)?
    [Module('ws'), Module] :
    [module, require('./ns')]
));
