angular.module("sendMessage", ["ngRoute"]);

angular.module("sendMessage").config([
  '$routeProvider', function($routeProvider) {
    return $routeProvider.when('/', {
      templateUrl: 'pages/country.html',
      controller: 'CountryCtrl'
    }).when('/address', {
      templateUrl: 'pages/address.html',
      controller: 'AddressCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }
]);

angular.module("sendMessage").controller('AppCtrl', [
  '$scope', '$config', function($scope, $config) {
    var $modal;
    $scope.config = $config;
    $modal = angular.element('#modal_window .modal-window__inner');
    $scope.openModal = function(event) {
      event.preventDefault();
      if (angular.element(event.target).hasClass('menu__mission')) {
        $modal.parent().addClass('modal-window__mission');
      }
      if (angular.element(event.target).hasClass('menu__cost')) {
        $modal.parent().addClass('modal-window__cost');
      }
      $.ajax(event.target.getAttribute('href')).done(function(resp) {
        $modal.html(resp).parent().foundation('open');
      });
    };
  }
]);

angular.module("sendMessage").controller('CountryCtrl', [
  '$scope', '$config', function($scope, $config) {
    return $config.currentTab = 'country';
  }
]);

angular.module("sendMessage").controller('AddressCtrl', [
  '$scope', '$config', '$rootScope', '$filter', function($scope, $config, $rootScope, $filter) {
    $config.currentTab = 'address';
    $scope.chooseAddress = function(countryName, index) {
      $config.editCountry = countryName;
      $config.activeAddress = index;
      $rootScope.selectedCountry = $filter('filter')($config.countries, {
        name: $config.editCountry
      });
    };
  }
]);

angular.module("sendMessage").controller('ContactWindowCtrl', [
  '$scope', '$config', '$rootScope', function($scope, $config, $rootScope) {
    $scope.foreignLang = false;
    $scope.loveMessage = function() {
      if ($scope.foreignLang) {
        return $rootScope.selectedCountry[0].loveMessage;
      } else {
        return 'I love you';
      }
    };
    if ($rootScope.selectedCountry) {
      $scope.selectedAddress = $rootScope.selectedCountry[0].addresses[$config.activeAddress];
    }
  }
]);

angular.module("sendMessage").factory('$config', [
  function() {
    return {
      menuVisible: false,
      currentTab: 'country',
      editCountry: '',
      activeAddress: 0,
      countries: [
        {
          name: 'russia',
          label: 'Russia',
          choosed: false,
          addresses: [{}],
          loveMessage: 'Люблю тебя'
        }, {
          name: 'belarus',
          label: 'Belarus',
          choosed: true,
          addresses: [{}, {}],
          loveMessage: 'Кахаю цябе'
        }, {
          name: 'poland',
          label: 'Poland',
          choosed: false,
          addresses: [{}],
          loveMessage: 'Kocham cię'
        }, {
          name: 'lithuania',
          label: 'Lithuania',
          choosed: false,
          addresses: [{}],
          loveMessage: 'Aš tave myliu'
        }, {
          name: 'spain',
          label: 'Spain',
          choosed: false,
          addresses: [{}],
          loveMessage: 'Te amo'
        }, {
          name: 'israel',
          label: 'Israel',
          choosed: false,
          addresses: [{}],
          loveMessage: 'אני אוהב אותך'
        }, {
          name: 'ukraine',
          label: 'Ukraine',
          choosed: false,
          addresses: [{}],
          loveMessage: 'Люблю тебе'
        }, {
          name: 'usa',
          label: 'USA',
          choosed: false,
          addresses: [{}],
          loveMessage: 'I love you'
        }, {
          name: 'india',
          label: 'India',
          choosed: false,
          addresses: [{}],
          loveMessage: 'I love you'
        }, {
          name: 'germany',
          label: 'Germany',
          choosed: false,
          addresses: [{}],
          loveMessage: 'Ich liebe dich'
        }, {
          name: 'england',
          label: 'England',
          choosed: false,
          addresses: [{}],
          loveMessage: 'I love you'
        }, {
          name: 'cambodia',
          label: 'Cambodia',
          choosed: false,
          addresses: [{}],
          loveMessage: 'ខ្ញុំស្រឡាញ់អ្នក'
        }, {
          name: 'china',
          label: 'China',
          choosed: false,
          addresses: [{}],
          loveMessage: '我愛你'
        }
      ],
      socialIcons: [
        {
          name: 'facebook',
          url: 'https://www.facebook.com/'
        }, {
          name: 'twitter',
          url: 'https://twitter.com/'
        }, {
          name: 'subscribe',
          url: 'http://subscribe.ru/'
        }, {
          name: 'google',
          url: 'https://www.google.com/'
        }, {
          name: 'linkedin',
          url: 'https://www.linkedin.com/'
        }, {
          name: 'skype',
          url: 'http://www.skype.com/'
        }, {
          name: 'vimeo',
          url: 'https://vimeo.com/'
        }, {
          name: 't',
          url: 'http://www.tshareapps.com/'
        }
      ]
    };
  }
]);

$(document).foundation();

$(".country__item .icon").click(function() {
  return $(this).parent().toggleClass("country__item--active");
});

$(".send-message").click(function() {
  return $(document).scrollTo('main', 1000, {
    offset: 100
  });
});

var $contact_form, $contact_info, $modal;

$modal = $('#modal_window .modal-window__inner');

$contact_info = $('.contact-window__info');

$contact_form = $('.contact-window__form');

$('#modal_window').bind('closed.zf.reveal', function() {
  $modal.parent().removeClass('modal-window__mission').removeClass('modal-window__cost');
});

$('#modal_window').bind('open.zf.reveal', function() {
  var maxHeight, self;
  self = this;
  maxHeight = parseInt($(self).css('max-height')) - 2 * parseInt($modal.css('padding-top'));
  $modal.css('max-height', maxHeight);
});

$('#contact_window').bind('open.zf.reveal', function() {
  var maxHeight, self, windowHeight;
  self = this;
  windowHeight = parseInt($(self).css('max-height')) || window.innerHeight;
  maxHeight = windowHeight - 2 * parseInt($modal.css('padding-top'));
  $contact_info.css('max-height', maxHeight);
  $contact_form.css('max-height', maxHeight);
});

var firstScriptTag, onPlayerReady, onPlayerStateChange, onYouTubePlayerAPIReady, player, tag;

tag = document.createElement('script');

tag.src = "https://www.youtube.com/player_api";

firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

player = false;

onYouTubePlayerAPIReady = function() {
  return player = new YT.Player('ytplayer', {
    videoId: 'vUeZ4TKz1Sk',
    playerVars: {
      controls: 0,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
};

onPlayerReady = function(event) {
  event.target.playVideo();
  return setTimeout(function() {
    return event.target.pauseVideo();
  }, 1000);
};

onPlayerStateChange = function(event) {
  switch (player.getPlayerState()) {
    case 1:
      return $('.video__play').fadeOut();
    case 2:
      return $('.video__play').fadeIn();
  }
};

$('.video__play').on("click", function() {
  return player.playVideo();
});
