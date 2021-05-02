import '../src/scss/_variables.scss';
import '../src/scss/custom.scss';
import '../src/scss/style.scss';
import '../src/scss/style2.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '../src/css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';
import  '../src/images/landingpage/video1.mp4';
import  '../src/images/landingpage/video2.mp4';
$(function() {
    $("#yourModal").modal("hide"); 
    /* التأكد ان كانت كلمة الر مطابقة */
    function checkPasswordMatch() {
        var password = $("#txtNewPassword").val();
        var confirmPassword = $("#txtConfirmPassword").val();
        if (password != confirmPassword)
            $("#CheckPasswordMatch").html("غير متطابق!");
        else
            $("#CheckPasswordMatch").html("متطابق!");
    }
    $(document).ready(function () {
       $("#txtConfirmPassword").keyup(checkPasswordMatch);
    });
    $("a.scroll").on('click', function(event) {
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function(){});
    });
    $("#toggler").click(function() {
        $('#wrap').toggleClass('toggled');
    });
   
   
});

      

