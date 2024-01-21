window.onload = function() {
    const openHeight = "90vh"
    $(".ui-design-prototype").css({"height":openHeight});
    $(".ui-design-prototype-learnmore p").click(function() {
        if ($(".ui-design-prototype-learnmore p.active").length == 0) {
            $(".ui-design-prototype").css({ "height": "auto", "overflow": "auto" });
            $(".ui-design-prototype-learnmore p").addClass("active");

        } else {
            $(".ui-design-prototype").css({ "height": "90vh", "overflow": "hidden" });
            $(".ui-design-prototype-learnmore p").removeClass("active");
            $(window).scrollTop($(".ui-design-prototype").offset().top);
        }
    })




}