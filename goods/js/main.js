$(function() {

	var owl1 = $('.owl-1');
    owl1.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    var carousel_nav_a_1 = $('.tshirt-nav a');

    carousel_nav_a_1.each(function(slide_index){
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl1.trigger('to.owl.carousel',[slide_index,1500]);
            e.preventDefault();
        })
    })

    owl1.on('changed.owl.carousel', function(event) {
        carousel_nav_a_1.removeClass('active');
        $(".tshirt-nav a[data-num="+event.item.index+"]").addClass('active');
    })

	var owl2 = $('.owl-2');
    owl2.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    var carousel_nav_a_2 = $('.towel-nav a');

    carousel_nav_a_2.each(function(slide_index){
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl2.trigger('to.owl.carousel',[slide_index,1500]);
            e.preventDefault();
        })
    })

    owl2.on('changed.owl.carousel', function(event) {
        carousel_nav_a_2.removeClass('active');
        $(".towel-nav a[data-num="+event.item.index+"]").addClass('active');
    })

    var owl3 = $('.owl-3');
    owl3.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    var carousel_nav_a_3 = $('.stationery-nav a');

    carousel_nav_a_3.each(function(slide_index){
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl3.trigger('to.owl.carousel',[slide_index,1500]);
            e.preventDefault();
        })
    })

    owl3.on('changed.owl.carousel', function(event) {
        carousel_nav_a_3.removeClass('active');
        $(".stationery-nav a[data-num="+event.item.index+"]").addClass('active');
    })
})

$(window).on('load resize',function(){
    //ウィンドウの高さを取得する
    var targetY = $(window).height();
    
    //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
    $('.top-scroll a').on('click',function(){
        $("html, body").stop().animate({scrollTop: 0}, 500, 'swing');
        return false;
    });
    //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
    $('.tshirt-scroll a').on('click',function(){
      $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing');
      return false;
    });
    $('.towel-scroll a').on('click',function(){
        $("html, body").stop().animate({scrollTop: targetY * 2}, 500, 'swing');
        return false;
      });
    $('.stationery-scroll a').on('click',function(){
    $("html, body").stop().animate({scrollTop: targetY * 3}, 500, 'swing');
    return false;
    });
});
