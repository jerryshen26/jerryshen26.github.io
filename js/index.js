window.onload = function() {

    var checkClick = true;
    var sectionIds = {};
    var graphicSectionIds = {};


    initTyping();

    function initTyping() {
        let lineIndex = 0;
        let isBacking = false;
        setInterval(() => {
            let textArr = ["Website Designer.", "Front End Developer", "Visual Designer. "];
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



}

