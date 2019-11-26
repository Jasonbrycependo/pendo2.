jQuery(document).ready(function($){
	/* =============================================================================================== 
	Запускаем скрипт вкладок для блока "how it works"
	=============================================================================================== */
	  $( function() {
	    $( "#tabs" ).tabs();
	  } );



	/* ===================================================================================================================
	Плавный скроллинг при переходе по ссылке-якорю
	==================================================================================================================== */

	// Событие при клике на ссылку-якорь
	$('.navbar a[href^="#"]').on('click', function(event) {
	    // отменяем стандартное действие
	    event.preventDefault();
	    
	    // заносим информацию о том, к какому блоку надо перейти
	    var $anchor = $(this).attr("href"),
	    // определяем положение блока на странице
	        anchorPos = $($anchor).offset().top;
	    
	    // Анимация перехода
	    $('html, body').animate({scrollTop: anchorPos}, 500);
  	});



  	/* ===================================================================================================================
	Добавление класса для отображения мобильного меню
	==================================================================================================================== */

	/* Чтобы связать стили и jquery при изменении ширины экрана отследим когда будет отображена кнопка включения мобильного меню */
	if($('button.menu-btn').is(':visible')){
		if($('.navbar').hasClass('header-navbar-pc') === true){
			// Удаляем класс для pc и добавляем класс для мобильных
			$('.navbar').removeClass('header-navbar-pc');
			$('.navbar').addClass('header-navbar-mobile')

			$('.header-navbar-mobile').hide();	
		}

		// При нажатии на кнопку меню скрываем его или разворачиваем
		$('button.menu-btn').on('click', function() {
			$('.header-navbar-mobile').toggle();
		});
		// При нажатии на ссылку меню скрываем его
		$('.header-navbar-mobile > a').on('click', function() {
			$('.header-navbar-mobile').hide();
		});
	}
});