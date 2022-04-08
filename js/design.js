function changePrototypeData(type) {
    var $prototypeCard = $(".portfolio-prototype-block .portfolio-prototype-card");

    $prototypeCard.fadeIn(0);
    $(".portfolio-menu li")[1].click();
    if (type == "all")
        return
    $prototypeCard.each(function() {
        var data = $(this).data("item");
        var boolCheck = checkData(data, type);
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

