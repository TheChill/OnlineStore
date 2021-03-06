﻿$(document).ready(function () {
    var footer = document.getElementById('main-footer');

    if ($(window).height() - $('#main-footer').outerHeight() >= $('body').height()) {
        footer.style.position = 'fixed';
        footer.style.top = (window.innerHeight - $('#main-footer').outerHeight()).toString() + 'px';
        footer.style.left = '0';
    }
    //if ($(document).height() <= $(window).height()) {
    //    footer.style.position = 'fixed';
    //    footer.style.top = (window.innerHeight - $('#main-footer').outerHeight()).toString() + 'px';
    //    footer.style.left = '0';
    //}

    var mainNavbar = document.getElementById('main-navbar');
    var mainNavbarTopValue;
    var mainNavbarHeightValue = $('#main-navbar').height();

    var stickyNavbar;
    var isWindowWide;
    if ($(window).outerWidth() < 768) {
        stickyNavbar = document.getElementById('main-dropdown-navbar');
        isWindowWide = false;
    }
    else {
        stickyNavbar = document.getElementById('main-sticky-navbar');
        isWindowWide = false;
        stickyNavbar.style.marginLeft = ($('#main-sticky-navbar').width() / -2).toString() + 'px';
    }
    stickyNavbar.style.display = 'block';

    window.onresize = function () {
        //if ($(document).height() <= $(window).height()) {
        //    footer.style.position = 'fixed';
        //    footer.style.top = (window.innerHeight - $('#main-footer').outerHeight()).toString() + 'px';
        //    footer.style.left = '0';
        //}
        if ($(window).height() - $('#main-footer').outerHeight() >= $('body').height()) {
            footer.style.position = 'fixed';
            footer.style.top = (window.innerHeight - $('#main-footer').outerHeight()).toString() + 'px';
            footer.style.left = '0';
        }
        else if (footer.style.position != 'static') {
            footer.style.position = 'static';
        }

        if ($(window).outerWidth() < 768) {
            if (isWindowWide) {
                stickyNavbar.style.display = 'none';
                stickyNavbar = document.getElementById('main-dropdown-navbar');
                stickyNavbar.style.display = 'block';
                stickyNavbar.style.top = (mainNavbarTopValue + mainNavbarHeightValue).toString() + 'px';
            }
            isWindowWide = false;
        }
        else {
            if (!isWindowWide) {
                stickyNavbar.style.display = 'none';
                stickyNavbar = document.getElementById('main-sticky-navbar');
                stickyNavbar.style.display = 'block';
                stickyNavbar.style.top = (mainNavbarTopValue + mainNavbarHeightValue).toString() + 'px';
            }
            isWindowWide = true;
        }

        if (isWindowWide)
            stickyNavbar.style.marginLeft = ($('#main-sticky-navbar').width() / -2).toString() + 'px';
    }

    $('#main-navbar').hover(function () {
        if (mainNavbarTopValue < 0) {
            var interval = setInterval(function () {
                mainNavbarTopValue++;

                mainNavbar.style.top = mainNavbarTopValue.toString() + 'px';
                stickyNavbar.style.top = (mainNavbarTopValue + mainNavbarHeightValue).toString() + 'px';

                if (mainNavbarTopValue >= 0)
                    clearInterval(interval);
            }, 3);
        }
    });

    var previousScrollY = window.pageYOffset;
    window.onscroll = function () {
        mainNavbarTopValue = $('#main-navbar').position().top;
        var current = window.pageYOffset;

        if (current < previousScrollY && mainNavbarTopValue < 0) { //scroll up
            if (mainNavbarTopValue + (previousScrollY - current) > 0)
                mainNavbarTopValue = 0;
            else
                mainNavbarTopValue = mainNavbarTopValue + (previousScrollY - current);

            mainNavbar.style.top = mainNavbarTopValue.toString() + 'px';
            stickyNavbar.style.top = (mainNavbarTopValue + mainNavbarHeightValue).toString() + 'px';
        }
        else if (current > previousScrollY && mainNavbarTopValue > mainNavbarHeightValue * (-1)) { //scroll down
            if (mainNavbarTopValue - (current - previousScrollY) < mainNavbarHeightValue * (-1))
                mainNavbarTopValue = mainNavbarHeightValue * (-1);
            else
                mainNavbarTopValue = mainNavbarTopValue - (current - previousScrollY);

            mainNavbar.style.top = mainNavbarTopValue.toString() + 'px';
            stickyNavbar.style.top = (mainNavbarTopValue + mainNavbarHeightValue).toString() + 'px';
        }

        previousScrollY = current;
    }

    $('#dropdown-menu-button').click(function () {
        (document.getElementById('expanded-navbar').style.display === 'block') ? $('#expanded-navbar').hide() : $('#expanded-navbar').show();
    });

    $('#main-dropdown-navbar').blur(function () {
        $('#expanded-navbar').hide();
    });
});