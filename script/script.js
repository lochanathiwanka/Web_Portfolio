$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.headerBar').addClass("sticky");
        } else {
            $('.headerBar').removeClass("sticky");
        }
    })
})

