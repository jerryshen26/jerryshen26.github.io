window.onload = function() {
    var checkClick = true;
    var firstComeIn = true;

    var sectionIds = {};
    $('.section').each(function() {
        var $this = $(this);
        sectionIds[$this.attr("id")] = Math.ceil($this.first().offset().top) - 1;
    });

    var wikiHeight = $(window)[0].frameElement == undefined ? $(window)[0].innerHeight : $(window)[0].frameElement.offsetHeight;
    $(window).scroll(function(evet) {
        if (checkClick) {
            var scrolled = $(this).scrollTop() + 30;
            var windowHeight = $(window).innerHeight();
            var bodyHeight = $("body").height();
            for (key in sectionIds) {
                if ($(this).scrollTop() == (bodyHeight - windowHeight)) {
                    $(".portfolio-menu li").removeClass("active");
                    var c = $("[data-id=" + key + "]");
                    c.addClass("active");
                } else if (scrolled >= sectionIds[key]) {
                    $(".portfolio-menu li").removeClass("active");
                    var c = $("[data-id=" + key + "]");
                    c.addClass("active");
                }
            }
        }
    });


    $(".portfolio-menu li").click(function() {
        $(this).addClass('active');
        $(this).siblings().removeClass('active')

        checkClick = false;
        var name = $(this).attr('data-id');
        var id = "#" + name;
        var top = $(id).first().offset().top;
        $('html, body').animate({ scrollTop: top + 'px' }, 100, null, function() {
            checkClick = true;
        });
    });

    fabClickFun();

};

$(function() {
    var top = $(this).scrollTop();
    console.log(top);
    $(window).resize(function() {
        location.reload()
    })
})

function fabClickFun() {
    var winWidth = $(window).width();
    // $(".edm-nav-toggle,.fabb").unbind();
    if (winWidth <= 1000) {
        $(".portfolio-nav-menu,.fabb").click(function() {
            if ($(".portfolio-menu").is(":visible")) {
                $(".portfolio-menu").fadeOut(100);
                $(".portfolio-nav-toggle").removeClass("edm-nav-toggle-cancel");
                $(".portfolio-content").removeClass("content-blur");
            } else {
                $(".portfolio-menu").fadeIn(100);
                $(".portfolio-nav-toggle").addClass("edm-nav-toggle-cancel");
                $(".portfolio-content").addClass("content-blur");
            }
        });
    }
}



function waitLink() {
    alert("等連結")
}