# Countries selection
$ ".country__item .icon"
.click ->
	$ this
	.parent()
	.toggleClass("country__item--active")

# Move to Choose country section
$ ".send-message"
.click ->
	$ document
	.scrollTo('main', 1000,
		offset: 100
	)