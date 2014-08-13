$(document).ready(function(){

    $('#mytab a').click(function (e) {
        $(this).tab('show');
        e.preventDefault();
    });

    $('.popover-dismiss').popover({
        trigger: 'focus'
    })

    $('.navbar').on('affixed.bs.affix', function () {
        console.log('Affixed!');
        $('.navbar').animate({
            opacity: 0.7
        }, 300, function() {
            // Animation complete.
        });
    });
    $('.navbar').on('affixed-top.bs.affix', function () {
        console.log('Affixed-top!');
        $('.navbar').animate({
            opacity: 1
        }, 300, function() {
            // Animation complete.
        });
    });
});