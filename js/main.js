$(document).ready(function(){

    $('#mytab a').click(function (e) {
        $(this).tab('show');
        e.preventDefault();
    });

    $('.popover-dismiss').popover({
        trigger: 'focus'
    })

    $('.navbar').on('affixed.bs.affix', function () {
        //console.log('Affixed!');
        $('a.navbar-brand').animate({
            'background-position-x': '-140px',
            'background-position-y': '-18px',
            'width': '67px',
            'height': '50px'
        }, 300, function() {
            // Animation complete.
        });

        $('.navbar').animate({opacity: 0.7}, 300);
    });
    $('.navbar').on('affixed-top.bs.affix', function () {
        //console.log('Affixed-top!');
        $('a.navbar-brand').animate({
            'background-position-x': '0',
            'background-position-y': '0',
            'width': '200px',
            'height': '150px'
        }, 300, function() {
            // Animation complete.
        });

        $('.navbar').animate({opacity: 1}, 300);
    });
});