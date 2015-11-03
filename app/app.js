'use strict';

angular.module('ngModelApp', [])

.controller('MainCtrl', function(){
  var self = this;

  this.header = "the NgModel Demo";
  this.ideas = "Ideas Go Here";

  this.cancel = function(e) {
    if (e.keyCode == 27) {
      self.rollbackForm.headerIdeas.$rollbackViewValue();
    }
  };

  this.cancelBtn = function(){
    self.rollbackForm.headerIdeas.$rollbackViewValue();
  }

});
