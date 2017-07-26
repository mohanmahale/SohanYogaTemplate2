$(document).ready(function () {
    var navItems = $('.menu li > a');
    var navListItems = $('.menu li');
    var allWells = $('.content');
    var allWellsExceptFirst = $(".content:not(:first)");
    allWells.hide();
    allWellsExceptFirst.hide();
    navItems.click(function (e) {
       
        e.preventDefault();
      
        navListItems.removeClass('active');
        $(this).closest('li').addClass('active');

        allWells.hide();
        var target = $(this).attr('data-target-id');
        $('#' + target).fadeIn(1000);
    });
    $("#logo")
        .click(function() {
            allWells.hide();
            navListItems.removeClass("active");
        });
});
$(document).ready(function () {
    var allWells = $('.content');
    var linkitem = $('.readmorelink');
    linkitem.click(function (e) {
        e.preventDefault();
        allWells.hide();
        var linktarget = $(this).attr('data-target-id');
        $('#' + linktarget).fadeIn(1000);
    });
});
