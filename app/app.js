var webAdminApp = angular.module('webAdminApp', ['ngRoute']);

webAdminApp.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'app/partials/default.html'
    }).
    when('/About', {
        templateUrl: 'app/partials/about.html'
    }).
    when('/Contact', {
        templateUrl: 'app/partials/contact.html'
    }).
    when('/Account', {
        controller: 'AccountController',
        templateUrl: 'app/partials/userhome.html'
    }).
      when('/Login', {
          controller: 'AccountController',
          templateUrl: 'app/partials/login.html'
      }).
      when('/Register', {
          controller: 'AccountController',
          templateUrl: 'app/partials/register.html'
      }).
      when('/EditInfo', {
          controller: 'AccountController',
          templateUrl: 'app/partials/editinfo.html'
      }).
      when('/ResetPassword', {
          controller: 'AccountController',
          templateUrl: 'app/partials/resetpassword.html'
      }).
      when('/UserInfo', {
          controller: 'AccountController',
          templateUrl: 'app/partials/userinfo.html'
      }).
         when('/EditInfo', {
             controller: 'AccountController',
             templateUrl: 'app/partials/editinfo.html'
         }).
      when('/Logout', {
          controller: 'AccountController',
          templateUrl: 'app/partials/logout.html'
      }).
    when('/clients', {
            templateUrl:'clients.html'
    })
    .otherwise({redirectTo:'/'});

});