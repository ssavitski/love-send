angular.module("sendMessage").factory('$config', [() ->
  return {
    menuVisible: false
    currentTab: 'country'
    editCountry: ''
    activeAddress: 0
    countries: [
      { name: 'russia',	label: 'Russia', choosed: false, addresses: [{}], loveMessage: 'Люблю тебя' }
      { name: 'belarus',	label: 'Belarus', choosed: true, addresses: [{},{}], loveMessage: 'Кахаю цябе' }
      { name: 'poland',	label: 'Poland', choosed: false, addresses: [{}], loveMessage: 'Kocham cię' }
      { name: 'lithuania',	label: 'Lithuania', choosed: false, addresses: [{}], loveMessage: 'Aš tave myliu' }
      { name: 'spain',	label: 'Spain', choosed: false, addresses: [{}], loveMessage: 'Te amo' }
      { name: 'israel',	label: 'Israel', choosed: false, addresses: [{}], loveMessage: 'אני אוהב אותך' }
      { name: 'ukraine',	label: 'Ukraine', choosed: false, addresses: [{}], loveMessage: 'Люблю тебе' }
      { name: 'usa',	label: 'USA', choosed: false, addresses: [{}], loveMessage: 'I love you' }
      { name: 'india',	label: 'India', choosed: false, addresses: [{}], loveMessage: 'I love you' }
      { name: 'germany',	label: 'Germany', choosed: false, addresses: [{}], loveMessage: 'Ich liebe dich' }
      { name: 'england',	label: 'England', choosed: false, addresses: [{}], loveMessage: 'I love you' }
      { name: 'cambodia',	label: 'Cambodia', choosed: false, addresses: [{}], loveMessage: 'ខ្ញុំស្រឡាញ់អ្នក' }
      { name: 'china',	label: 'China', choosed: false, addresses: [{}], loveMessage: '我愛你' }
    ]
    socialIcons: [
      { name: 'facebook', url: 'https://www.facebook.com/' }
      { name: 'twitter', url: 'https://twitter.com/' }
      { name: 'subscribe', url: 'http://subscribe.ru/' }
      { name: 'google', url: 'https://www.google.com/' }
      { name: 'linkedin', url: 'https://www.linkedin.com/' }
      { name: 'skype', url: 'http://www.skype.com/' }
      { name: 'vimeo', url: 'https://vimeo.com/' }
      { name: 't', url: 'http://www.tshareapps.com/' }
    ]
  }
])
