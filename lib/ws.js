(function(module, ns) {

  /**
   * require another file from
   * the library works same way in node
   * and the browser.
   */
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
    /**
     * You need to specify
     * a path for ns.require to work.
     * Always use the name of the file
     * otherwise things will not work
     * as expected in node.
     */
    [Module('ws'), Module] :
    [module, require('./module')]
));
