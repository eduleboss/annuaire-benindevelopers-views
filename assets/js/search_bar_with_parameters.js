$(document).ready(function(e){
    $('.search-negocio .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
        var color = $(this).attr("color");


		$('.search-negocio span#tipo_negocio').text(concept);
        $('#button_tipo_negocio').css("background-color", color);
        $('#button_tipo_negocio').css("color", "#FFFFFF");

        $('.input-group #search_tipo_negocio').val(param);


	});

    $('.search-tipo .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
        var color = $(this).attr("front");
        var background = $(this).attr("background");
		$('.search-tipo span#tipo_propiedad').text(concept);
		$('.input-group #tipo_propiedad').val(param);
        $('#button_tipo_propiedad').css("background-color", background);
        $('#button_tipo_propiedad').css("color",  color);

        $('.input-group #search_tipo_propiedad').val(param);

       // alert("el codigo de categoria es "+$('.input-group #search_cat_propiedad').attr("value"))

	});

    $('.search-cat .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
        var color = $(this).attr("front");
        var background = $(this).attr("background");
        var image = $(this).attr("image");
        $('#header-background').removeAttr("background");
        $('#header-background').css('background-image',"url('assets/img/"+image+"')");
 		$('.search-cat span#cat_propiedad').text(concept);
        $('#button_cat_propiedad').css("background-color", background);
        $('#button_cat_propiedad').css("color",  color);

 //        $("#header-background").stop().animate({opacity: 0},1000,function(){
 //    $(this).css({'background': "url('assets/img/"+image+"') #444444 no-repeat cover"})
 //               .animate({opacity: 1},{duration:1000});
 // });
//         $('.input-group #search_cat_propiedad').val(param);

//         alert("el codigo de categoria es "+$('.input-group #search_cat_propiedad').attr("value"))

	});

});

$(document).ready(function(){
          var submitIcon = $('.searchbox-icon');
          var inputBox = $('.searchbox-input');
          var searchBox = $('.searchbox');
          var isOpen = false;
          submitIcon.click(function(){
              if(isOpen == false){
                  searchBox.addClass('searchbox-open');
                  inputBox.focus();
                  isOpen = true;
              } else {
                  searchBox.removeClass('searchbox-open');
                  inputBox.focusout();
                  isOpen = false;
              }
          });
           submitIcon.mouseup(function(){
                  return false;
              });
          searchBox.mouseup(function(){
                  return false;
              });
          $(document).mouseup(function(){
                  if(isOpen == true){
                      $('.searchbox-icon').css('display','block');
                      submitIcon.click();
                  }
              });
      });
          function buttonUp(){
              var inputVal = $('.searchbox-input').val();
              inputVal = $.trim(inputVal).length;
              if( inputVal !== 0){
                  $('.searchbox-icon').css('display','none');
              } else {
                  $('.searchbox-input').val('');
                  $('.searchbox-icon').css('display','block');
              }
          }
