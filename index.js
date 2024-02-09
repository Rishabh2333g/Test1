function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name") .text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image") .attr('src', profile.getImageUr1());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}   
function signout() {
    var auth2 = gapi. auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });
}