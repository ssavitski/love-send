angular.module("sendMessage").controller('AppCtrl', ['$scope', '$config', ($scope, $config) ->
  $scope.config = $config

  $modal = angular.element('#modal_window .modal-window__inner')
  $scope.openModal = (event) ->
    event.preventDefault();
    $modal.parent().addClass 'modal-window__mission' if angular.element(event.target).hasClass 'menu__mission'
    $modal.parent().addClass 'modal-window__cost' if angular.element(event.target).hasClass 'menu__cost'
    $.ajax(event.target.getAttribute('href'))
    .done((resp) ->
      $modal.html(resp).parent().foundation 'open'
      return
    )
    return
  return

])

angular.module("sendMessage").controller('CountryCtrl', ['$scope', '$config', ($scope, $config) ->
  $config.currentTab = 'country'
])

angular.module("sendMessage").controller('AddressCtrl', ['$scope', '$config','$rootScope', '$filter', ($scope, $config, $rootScope, $filter) ->
  $config.currentTab = 'address'
  $scope.chooseAddress = (countryName, index) ->
    $config.editCountry = countryName
    $config.activeAddress = index
    $rootScope.selectedCountry = $filter('filter')($config.countries, { name : $config.editCountry })
    return
  return
])

angular.module("sendMessage").controller('ContactWindowCtrl', ['$scope', '$config', '$rootScope', ($scope, $config, $rootScope) ->
  $scope.foreignLang = false
  $scope.loveMessage = () ->
    if ($scope.foreignLang) then $rootScope.selectedCountry[0].loveMessage else 'I love you'
  $scope.selectedAddress = $rootScope.selectedCountry[0].addresses[$config.activeAddress] if $rootScope.selectedCountry
  return
])
