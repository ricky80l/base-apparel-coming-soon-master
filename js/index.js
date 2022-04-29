// CHANGE PICTURE MOBILE/DESKTOP

var include = false;
var chiocciola = "";
var ordered = false;
var space = true;


$(window).resize(function() {
    $(document).ready(image_change($(window).width()));
});

function image_change(width) {
    var finestra = width;
    if (finestra < 1064) {
        $(".image").attr("src", "images/hero-mobile.jpg");
    } else {
        $(".image").attr("src", "images/hero-desktop.jpg");
    }
}


// CHECK FUNCTIONS

$(".submit").click(function() {
    $(".submit").addClass("clicked");
    setTimeout(function() {
        $(".submit").removeClass("clicked");
    }, 200);
    check();
});


function check() {
    verEmail();
    orderCheck();
    verSpace();
    if (($(".email").val() != "") && (include == true) && (ordered == true) && (space == false)) {
        $(".result").text("Thank you Sir!");
        setTimeout(function() {
        window.location.reload();
        },2000)
        reset();
    } else {
        $(".result").text("Please provide a valid email");
        $(".error").addClass("visible");
        $(".email").addClass("red");
        reset();
    }
}

function verEmail() {
    chiocciola = $(".email").val();
    if (chiocciola.includes("@") && chiocciola.includes(".")) {
        include = true;
    } else {
        include = false;
    }
}

function orderCheck() {
    if (chiocciola.indexOf("@") < chiocciola.indexOf(".")) {
        ordered = true;
    } else {
        ordered = false;
    }
}


function verSpace() {
    if (chiocciola.includes(" ")) {
        space = true;
    } else {
        space = false;
    }
}


function reset() {
    setTimeout(function() {
        $(".result").text("");
        $(".error").removeClass("visible");
        $(".email").removeClass("red");
    }, 2000);
    include = false;
    chiocciola = "";
    ordered = false;
    space = true;
}