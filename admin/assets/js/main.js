$(document).ready(function(){
    $(".dropdown-ul").hide();
    $(".dropdown-btn").hover(function(){
        var panelId = $(this).attr('data-panelId');
        $("#"+panelId).toggle(300);
    });
});