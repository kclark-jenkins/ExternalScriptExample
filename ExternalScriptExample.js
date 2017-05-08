(function(window){
  'use strict';

  var defineLibrary = function() {
   /**
    * A small library of methods used as an example for consuming external
    * JavaScript in a BIRT Report.
    * For more information see {@tutorial deployment}.
    * {@tutorial destroy Destroying a Widget}.
    * @example
    * var myExampleObj = new ExternalScriptExample();
    * @constructor
    */
    var ExternalScriptExample = function() {
      this.name    = 'ExternalScriptExample';
      this.version = '1.0.0';
      this.author  = 'Kristopher Clark';
      this.license = 'MIT';
      this.build   = '1494256603';

     /**
      * Engineering 101, announce loudly to the world that we're here
      * @example
      * var myExampleObj = new ExternalScriptExample();
      * myExampleObj.helloWorld(); // Alert's with 'Hello, World!'
      */
      this.helloWorld = function() {
          alert('Hello, World!');
      };

      /**
      * Engineering 102, announce to a specific person we're here via
      * a single parameter
      * @example
      * var myExampleObj = new ExternalScriptExample();
      * myExampleObj.sayHello('BIRT'); // Alert's with 'Hello, BIRT'
      * @param {string} name - The name of the person you'd like to say hello to.
      */ 
      this.sayHello = function(name) {
          alert('Hello, ' + name);
      };

     /**
      * A method that takes either a single string or an array of strings.  These
      * strings should be paths to other JavaScript files.  This method will load
      * the JavaScript resources and either callback to success or error depending
      * on the status.
      * @example
      * var myExampleObj = new ExternalScriptExample();
      * myExampleObj.helloWorld('resources/myOtherLibrary.js', function() {
      *   console.log('Library loaded');
      * },
      * function() {
      *   console.log('Library load failed!');
      *})); // Alert's with 'Hello, World!'
      * @param {string} script  - The JavaScript resource to load
      * @param {function} success - The success callback
      * @param {function} error   - The error callback
      */
      this.loadExternalScript = function(script, success, error) {
        try {
        $.getScript(script, function( data, textStatus, jqxhr ) {
            if(jqxhr.status === 200) {
              success();
            }else{
              error();
            }
          });
        }catch(err){
	  error(err);
        }
      };

    }
    
    return ExternalScriptExample;
  }
  if(typeof(ExternalScriptExample) === 'undefined'){
    window.ExternalScriptExample = defineLibrary();
  }else{
    console.log("Library already defined.");
  }
})(window);
