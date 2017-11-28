/* Global Variables */
var al = null;
var empty = "";

function initialize() {
    al = new Alliance.General();
    al.sliders = new Alliance.Sliders();
    al.initialize();
}

/* Global Namespaces */
var Alliance = {};

/* General Class */
Alliance.General = function () {
};

Alliance.General.prototype = {
    initialize: function () {
        $("#showMobMenuBtn").on("click", al.showMobMenu);
        $("#closeMobMenuBtn").on("click", al.hideMobMenu);
        $(".mobile-list-item--drd").find(".mobile-list-item--open")
            .on("click", al.toggleSubMenu);
        $(window).scroll(al.resizeHeader);
    },
    showMobMenu: function () {
        var $menu = $(".header-mobile-nav"),
            $layout = $(".header-mobile-layout")
        ;
        $layout.fadeIn(300);
        $menu.animate({
            "left": 0
        }, 300);
    },
    hideMobMenu: function () {
        var $menu = $(".header-mobile-nav"),
            $layout = $(".header-mobile-layout")
        ;
        $layout.fadeOut(300);
        $menu.animate({
            "left": -78 + "%"
        }, 300)
    },
    toggleSubMenu: function (event) {
        event.preventDefault();
        var $menuItem = $(this).closest(".mobile-list-item--drd"),
            $subMenu = $menuItem.find(".sub-menu")
        ;
        $menuItem.toggleClass("active");
        if ($menuItem.hasClass("active")) {
            $subMenu.slideDown();
        } else {
            $subMenu.slideUp();
        }
    },
    resizeHeader: function () {
        if ($("html, body").scrollTop() > 145) {
            $(".header-mobile__logo").slideUp(300);
        } else {
            $(".header-mobile__logo").slideDown(300);
        }
    }
};

/*Sliders class*/
Alliance.Sliders = function () {
    this.initialize();
};

Alliance.Sliders.prototype = {
    initialize: function () {
        $('.bg-slider-items').slick({
            dots: false,
            infinite: true,
            speed: 3000,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 10000,
            arrows: false
        });
    }
};


$(function () {
    initialize();
});