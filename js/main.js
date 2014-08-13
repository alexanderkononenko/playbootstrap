$(document).ready(function(){

    $('#mytab a').click(function (e) {
        $(this).tab('show');
        e.preventDefault();
    });

    $('.popover-dismiss').popover({
        trigger: 'focus'
    })
});