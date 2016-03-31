# Load the IFrame Player API code asynchronously.
tag = document.createElement('script')
tag.src = "https://www.youtube.com/player_api"
firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

# Replace the 'ytplayer' element with an <iframe> and
# YouTube player after the API code downloads.
player = false
onYouTubePlayerAPIReady = ->
  player = new YT.Player('ytplayer', 
    videoId: 'vUeZ4TKz1Sk',
    playerVars:
      controls: 0,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3
    events: 
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange     
  )

onPlayerReady = (event) ->
  event.target.playVideo()
  setTimeout( ->
    event.target.pauseVideo()
  , 1000)

onPlayerStateChange = (event) -> 
  switch player.getPlayerState()
    when 1 then $('.video__play').fadeOut()
    when 2 then $('.video__play').fadeIn()

# Behavior for Play video button
$ '.video__play'
.on "click", ->
  player.playVideo()