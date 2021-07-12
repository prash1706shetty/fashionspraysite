/* =================================
------------------------------------
	Divisima | eCommerce Template
	Version: 1.0
 ------------------------------------
 ====================================*/


'use strict';


$(window).on('load', function() {
    //console.log("window load start-------");
    /*------------------
    	Preloder
    --------------------*/
    $(".loader").fadeOut();
    $("#preloder").delay(400).fadeOut("slow");

    /* var test = '{"reviews":[{"review":"I had good experience. Your designs are perfect,pretty and looks beautiful 😍 fabric u choose  fabulously thanks for my outfit it was too gud ..I and my daughter looked fabulous in that outfit ❤","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/applique_1.jpg"},{"review":"This place is pure satisfaction of what you need in fashion field. Pruthvi shetty is such a person who understands the customers needs and bring out the best possible attire with trendy fashion. My bridal blouse was just as I had dreamt of with the antique embroidery.","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/layer1.jpg"},{"review":"Osm collections.. A very gud stitching.. I just loved ur ideas.. Ull really make our dreams cme true !!🙂","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/meshCascade_1.jpg"},{"review":"Happened to see the boutique while passing by and visited to check for daughter’s bday frock. Pruthvi has great taste and is very professional in her service . Happy to have this boutique accessible and so close !","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/pleat_1.jpg"}]}';
    var data = jQuery.parseJSON(test);
    var reviews = data.reviews;
    $.each(reviews, function(key, val) {
        console.log(val.review);
        $("#morereviews").append('<div class="feedbackPadding" style="background-color: #e6ffff;">' +
            '<div class="product-item shadow p-3 mb-2 bg-white rounded">' +
            '<h5 class="fbcustName"><font face="Georgia">Yashaswini CR</font></h5>' +
            '<span>Your designs are perfect,pretty and looks beautiful 😍 fabric u choose  fabulously thanks for my outfit it was too gud ..I and my daughter looked fabulous in that outfit ❤</span>' +
            '</div>' +
            '<div class="text-center">' +
            '<button type="button" class="btn btn-info btn-sm open-modal" data-toggle="modal" data-target="#exampleModalCenter">View Sreelatha Design</button>' +
            '</div>' +
            '</div>');
    });

    console.log("json db call start-------");
    $.getJSON("https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/test.json", function(data) {
        console.log("values->" + JSON.stringify(data));
        var test = '{"reviews":[{"review":"I had good experience. Your designs are perfect,pretty and looks beautiful 😍 fabric u choose  fabulously thanks for my outfit it was too gud ..I and my daughter looked fabulous in that outfit ❤","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/applique_1.jpg"},{"review":"This place is pure satisfaction of what you need in fashion field. Pruthvi shetty is such a person who understands the customers needs and bring out the best possible attire with trendy fashion. My bridal blouse was just as I had dreamt of with the antique embroidery.","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/layer1.jpg"},{"review":"Osm collections.. A very gud stitching.. I just loved ur ideas.. Ull really make our dreams cme true !!🙂","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/meshCascade_1.jpg"},{"review":"Happened to see the boutique while passing by and visited to check for daughter’s bday frock. Pruthvi has great taste and is very professional in her service . Happy to have this boutique accessible and so close !","imageUrl":"https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/pleat_1.jpg"}]}';
        var data = jQuery.parseJSON(test);
        $.each(data, function(key, val) {
            console.log(key + " - " + val);
        });
    });
    console.log("window load end-------"); */

});

$(document).ready(function() {
    console.log("called-------");
    $.getJSON("https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/test.json", function(data) {
        console.log("values->" + JSON.stringify(data));
        $.each(data, function(key, val) {
            console.log(key + " - " + val);
        });
    });
});



(function($) {
    /*------------------
    	Navigation
    --------------------*/
    $('.main-menu').slicknav({
        prependTo: '.main-navbar .container',
        closedSymbol: '<i class="flaticon-right-arrow"></i>',
        openedSymbol: '<i class="flaticon-down-arrow"></i>'
    });




    /*------------------
    	ScrollBar
    --------------------*/
    $(".cart-table-warp, .product-thumbs").niceScroll({
        cursorborder: "",
        cursorcolor: "#afafaf",
        boxzoom: false
    });


    /*------------------
    	Category menu
    --------------------*/
    $('.category-menu > li').hover(function(e) {
        $(this).addClass('active');
        e.preventDefault();
    });
    $('.category-menu').mouseleave(function(e) {
        $('.category-menu li').removeClass('active');
        e.preventDefault();
    });


    /*------------------
    	Background Set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });



    /*------------------
    	Hero Slider
    --------------------*/
    var hero_s = $(".hero-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        onInitialized: function() {
            var a = this.items().length;
            $("#snh-1").html("<span>1</span><span>" + a + "</span>");
        }
    }).on("changed.owl.carousel", function(a) {
        var b = --a.item.index,
            a = a.item.count;
        $("#snh-1").html("<span> " + (1 > b ? b + a : b > a ? b - a : b) + "</span><span>" + a + "</span>");

    });

    hero_s.append('<div class="slider-nav-warp"><div class="slider-nav"></div></div>');
    $(".hero-slider .owl-nav, .hero-slider .owl-dots").appendTo('.slider-nav');



    /*------------------
    	Brands Slider
    --------------------*/
    $('.product-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });

    $('.product-slider1').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 10000,
        navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });



    $(document).on("click", ".open-modal", function() {
        console.log("id is->" + $(this).attr('id'));
        var imageValue = $(this).attr('id');
        var x = 'Fashion Spray Designer Studio';
        var myHeading = "<img src='https://fashion-spray-pics.s3.us-south.cloud-object-storage.appdomain.cloud/" + imageValue + ".jpg' alt=''>";
        $("#modal-body").html(myHeading + x);
        $('#modal').modal('show');
    });

    /*------------------
    	Popular Services
    --------------------*/
    $('.popular-services-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 40,
        autoplay: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            991: {
                items: 3
            }
        }
    });


    /*------------------
    	Accordions
    --------------------*/
    $('.panel-link').on('click', function(e) {
        $('.panel-link').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        e.preventDefault();
    });


    /*-------------------
    	Range Slider
    --------------------- */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
    rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function(event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));


    /*-------------------
    	Quantity change
    --------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });



    /*------------------
    	Single Product
    --------------------*/
    $('.product-thumbs-track > .pt').on('click', function() {
        $('.product-thumbs-track .pt').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product-big-img').attr('src');
        if (imgurl != bigImg) {
            $('.product-big-img').attr({ src: imgurl });
            $('.zoomImg').attr({ src: imgurl });
        }
    });


    $('.product-pic-zoom').zoom();



})(jQuery);