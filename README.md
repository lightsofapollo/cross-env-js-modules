# Cross Environment Modules

While developing libraries that where intended to run on both node and the browser I wanted
to create a simple method of defining modules (think node not AMD) that would behave 
the same in both the browser and node.

## Goals:

  1. In the browser provide familiar semantics where
     there is aways _one_ top level namespace and sub components
     can live inside this namespace.
     
     ````js
     var instance = new Module.Thing();
     ````

  2. Even though libraries may be intended to be bundled into a single
     javascript file for simple inclusion in the browser (think mocha.js) 
     each component also  be able to run standalone or with only its
     immediate dependancies included.
     
     The intend is that if you develop some awesome library with utility X
     some other author can include utility X without your entire library
     and without figuring out your build system. Simply include utility X
     and any of its dependancies and it should work.
     
     
  3. Node conventions are followed when running in node noone should
     know or care that you are taking special steps to also run in the browser.
     
     ````js
     var Module = require('module');
     var instance = new Module.Thing();
     
     //also!
     
     //this will also work if thing has dependancies
     //on other files inside your library.
     var instance = require('module/lib/thing');
     
     ````
     
  4. Achieve 1-3 without dependancies on an external library with
     an absolutely minimal footprint and no special build process.

## Test it out

Load index.html in your browser 

Run `bin/test-node-individual` and `bin/test-node-all`

## LICENSE

(MIT) see LICENSE.md