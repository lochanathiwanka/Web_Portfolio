$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.headerBar').addClass("sticky");
        } else {
            $('.headerBar').removeClass("sticky");
        }
    })
})

function matches() {
    let content1 = document.getElementById("about-para1");
    let content2 = document.getElementById("about-para2");
    let btnCVContent = document.getElementById("btnCV");

    if (window.matchMedia("(max-width: 425px)").matches) {
        content1.innerHTML = "I'm a Fullstack Java Developer &<br>"+
            "Web Designer from Panadura, Sri Lanka<br>"+
            "who is 20 years old.<br>"+
            "Also i'm a Musician & Music Producer<br>" +
            "since 2016.";

        content2.innerHTML = "I'm also currently working on Fiver<br>" +
            "& FreeLancer as a part time worker<br>" +
            "and always lookout"+" for expecting<br>" +
            "new projects to work on.";
    } else {
        content1.innerHTML = "I'm a Fullstack Java Developer & Web Designer<br>" +
            "from Panadura, Sri lanka who is 20 years old.<br>Also i'm a Musician & Music Producer since<br>2016.";

        content2.innerHTML = "I'm also currently working on Fiver & FreeLancer<br>" +
            "as a part time worker and always lookout"+" for<br>" +
            "expecting new projects to work on.";
    }

    if (window.matchMedia("(max-width: 360px)").matches) {
        content1.innerHTML = "I'm a Fullstack Java Developer<br>" +
            "& Web Designer from Panadura,<br>" +
            "Sri Lanka who is 20 years old.<br>"+
            "Also i'm a Musician & Music<br>" +
            "Producer since 2016.";

        content2.innerHTML = "I'm also currently working on<br>" +
            "Fiver & FreeLancer as a part time<br>" +
            "worker and always lookout"+" for<br>" +
            "expecting new projects to<br>" +
            "work on.";
    }

    if (window.matchMedia("(max-width: 326px)").matches) {
        btnCVContent.innerHTML = "CV";
    } else {
        btnCVContent.innerHTML = "DOWNLOAD CV";
    }
}
window.onresize = function(event) {
    matches();
};
matches();