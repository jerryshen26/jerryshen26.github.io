window.onload = function() {
    $(".ui-design-prototype-learnmore p").click(function() {
        if ($(".ui-design-prototype-learnmore p.active").length == 0) {
            $(".ui-design-prototype").css({ "height": "auto", "overflow": "auto" });
            $(".ui-design-prototype-learnmore p").addClass("active");

        } else {
            $(".ui-design-prototype").css({ "height": "100vh", "overflow": "hidden" });
            $(".ui-design-prototype-learnmore p").removeClass("active");
        }
    })




}