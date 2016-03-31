angular.module("sendMessage").config(['$routeProvider',
  ($routeProvider) ->
    $routeProvider
    .when('/',
      templateUrl: 'pages/country.html',
      controller: 'CountryCtrl'
    )
    .when('/address',
      templateUrl: 'pages/address.html',
      controller: 'AddressCtrl'
    )
    .otherwise(
      redirectTo: '/'
    )
])