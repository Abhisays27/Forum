

function toggleReplySection() {
    var replySection = $('.main-reply-comment');
    replySection.slideToggle();

    var icon = $('.reply-tag i');
    icon.toggleClass('fa-chevron-down fa-chevron-up');
}

