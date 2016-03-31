$modal = $('#modal_window .modal-window__inner')
$contact_info = $('.contact-window__info')
$contact_form = $('.contact-window__form')

$ '#modal_window'
.bind 'closed.zf.reveal', ->
	$modal
	.parent()
	.removeClass 'modal-window__mission'
	.removeClass 'modal-window__cost'
	return

$ '#modal_window'
.bind 'open.zf.reveal', ->
	self = this
	maxHeight = (parseInt($(self).css('max-height')) - 2 * parseInt($modal.css 'padding-top' ))
	$modal.css('max-height', maxHeight)
	return

$ '#contact_window'
.bind 'open.zf.reveal', ->
	self = this
	windowHeight = parseInt($(self).css('max-height')) || window.innerHeight
	maxHeight = (windowHeight - 2 * parseInt($modal.css 'padding-top' ))
	$contact_info.css('max-height', maxHeight)
	$contact_form.css('max-height', maxHeight)
	return