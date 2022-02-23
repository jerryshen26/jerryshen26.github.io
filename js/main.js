window.onload = function() {

    var checkClick = true;
    var sectionIds = {};
    var graphicSectionIds = {};


    initTyping();

    function initTyping() {
        let lineIndex = 0;
        let isBacking = false;
        setInterval(() => {
            let textArr = ["UI & Website Design.", "Develop Website", "Positive. "];
            let element = document.querySelector(".typingText");
            let vvv = element.textContent;
            let index = vvv.length;
            let fullText = textArr[lineIndex];
            if (isBacking) {
                index--;
            } else {
                index++;
            }
            if (index === fullText.length) {
                isBacking = !isBacking;
            }
            if (index === -1) {
                isBacking = !isBacking;
                if (lineIndex < textArr.length - 1) {
                    lineIndex++;
                } else {
                    lineIndex = 0;
                }
            }
            let newText = fullText.substring(0, index);
            element.textContent = newText;
        }, 200);
    }


    $(".section").each(function() {
        var $this = $(this);
        sectionIds[$this.attr("id")] = Math.ceil($this.first().offset().top) - 5;
    });

    $(".graphicDesignSection").each(function() {
        var $this = $(this);
        graphicSectionIds[$this.attr("id")] = Math.ceil($this.first().offset().top) - 5;
    })

    $(window).scroll(function(evet) {
        if (checkClick) {
            var scrolled = $(this).scrollTop();
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

            for (key in graphicSectionIds) {
                var keyDiv = document.getElementById(key);
                var computedStyle = document.defaultView.getComputedStyle(keyDiv, null);
                var graphicArea = $("#menu4").height();
                var endGraphicHeight = graphicSectionIds["graphicDesign1"] + graphicArea;
                var color = computedStyle.color;

                if (scrolled >= graphicSectionIds[key]) {
                    if (scrolled > endGraphicHeight) {
                        $(".portfolio-banner-background").css("background", "");
                        $(".portfolio-list").css({ "color": "", });

                    } else {
                        var getBackground = computedStyle.backgroundColor;
                        $(".portfolio-banner-background").css("background", getBackground);
                        $(".portfolio-list").css({ "color": color, });
                    }

                } else if (scrolled < graphicSectionIds["graphicDesign1"]) {

                    $(".portfolio-banner-background").css("background", "");
                    $(".portfolio-list").css({ "color": "", });

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

    $(".portfolio-prototype-menu li").click(function() {
        $(".portfolio-prototype-menu li").removeClass("active");
        $(this).addClass("active");
    })

    $('html, body').animate({ scrollTop: ($(this).scrollTop() + 1) }, 10);
}

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



function changePrototypeData(type) {
    var $prototypeCard = $(".portfolio-prototype-block .portfolio-prototype-card");

    $prototypeCard.fadeIn(0);
    $(".portfolio-menu li")[2].click();
    if (type == "all")
        return
    $prototypeCard.each(function() {
        var data = $(this).data("item");
        var boolCheck = checkData(data, type);

        debugger
        if (!boolCheck) {
            $(this).fadeOut(0);
        }
    });

}

function checkData(data, type) {
    var datasplit = data.split(",");
    var checkContent = false;
    datasplit.forEach(function(d) {
        if (d == type) {
            debugger
            checkContent = true;
        }
    });
    return checkContent;
}