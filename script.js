

function toggleReplySection() {
    var replySection = $('.main-reply-comment');
    replySection.slideToggle();

    var icon = $('.reply-tag i');
    icon.toggleClass('fa-chevron-down fa-chevron-up');
}

window.onscroll = function() {
    var header = document.getElementById("header");
    var h1 = header.querySelector("h1");

    if (window.scrollY > header.offsetTop) {
        h1.classList.add("h1-fixed");
    } else {
        h1.classList.remove("h1-fixed");
    }
};