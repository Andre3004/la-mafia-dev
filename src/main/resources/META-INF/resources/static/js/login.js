/**
 *
 */

var afterInit = function() {

    var redirectUrl="./authenticate";
    var passwordRecovery = false;

    var submit = function() {
        $.ajax({
            type: "POST",
            url: redirectUrl,
            data: {
                email: $('#email').val().replace(/[\.-]/g, ''),
                senha: $('#password').val()
            },
            success: function( redirectUrl ){

                if ( passwordRecovery )
                {
                    $("#message-error").html("Um e-mail de redefinição de senha foi enviado.");
                    $("#message-error").css("color", "green");
                } else
                {
                    window.location.replace("/" + redirectUrl);
                }
            },
            error: function( error ){
                if (error.responseJSON)
                {
                    $("#message-error").html(error.responseJSON.message);
                }
                else
                {
                    $("#message-error").html(error.responseText);
                }
                $("#message-error").css("color", "red");
            }
        });
    };

    $('#email').mask('000.000.000-00', {reverse: true});

    $("#submit").click(submit);
    $('#email').keypress(function(e) {
        if(e.which == 13) {
            submit();
        }
    });
    $('#password').keypress(function(e) {
        if(e.which == 13) {
            submit();
        }
    });


    function returnToLogin() {
        $('.login').show();
        $('.resetPass').hide();
        $("#message-error").html("");
        $("#submit").html("Acessar");
        window.location.replace("./");
    }

    $('#returnToLoginBtn').click(returnToLogin);

    $( window ).on("hashchange", function() {
        hash = location.hash.substring( 2 );
        if (hash == "reset-password"){
            passwordRecovery = true;
            redirectUrl="./reset-password";
            $('.login').hide();
            $('.resetPass').show();
            $("#message-error").html("");

            $("#submit").html("Enviar e-mail");
            $("#email").focus();
        }
    }).trigger('hashchange');

};

$(afterInit);

