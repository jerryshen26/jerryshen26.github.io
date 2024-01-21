function changePrototypeData(type) {
    var $prototypeCard = $(".portfolio-prototype-block .portfolio-prototype-card");

    $(".portfolio-prototype-card").css({
        width: "0%"
    });
    var changeWidth = function(){
        $(".portfolio-prototype-card").animate({ width: "22%" },20);
    }

    $prototypeCard.fadeIn(0);
    $(".portfolio-menu li")[0].click();
    if (type == "all"){
    changeWidth();
        return
    }
    $prototypeCard.each(function () {
        var data = $(this).data("item");
        var boolCheck = checkData(data, type);

        if (!boolCheck) {
            $(this).fadeOut(0);
        }
    });
    changeWidth();

}


function checkData(data, type) {
    var datasplit = data.split(",");
    var checkContent = false;
    datasplit.forEach(function (d) {
        if (d == type) {
            checkContent = true;
        }
    });
    return checkContent;
}

