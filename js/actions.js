var fn = {
    ready: function(){
        document.addEventListener("deviceready", fn.init, false);
    },
    init: function(){
        if(!fn.estaRegistrado())
            window.location.href = '#registro';
        $('#registro div[data-role=footer] a').click(fn.regitrar);
        $('#tomarFoto').click(capture.takePhoto);
    },
    //***********funciones de registro**********************
    estaRegistrado: function(){
        var usr = window.localStorage.getItem("user");
        if (usr == undefined || usr == '')
            return false;
        else 
            return true;
    },
    regitrar: function(){
        var nom = $('#regNom').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        var foto = $('#regFoto').data('foto');
    
        if (nom != '' && mail != '' && tel != '' && foto != undefined)
            {
                $.mobile.loading("show",{
                    theme: 'b'
                });
                $.ajax({
                  method: "POST",
                  url: "http://carlos.igitsoft.com/apps/test.php",
                  data: { nom: nom, mail: mail, tel: tel },
                    error: function(jq,txt){
                        alert(jq+txt);
                    }
                }).done(function( msg ) {
                    if(msg == 1)
                        ft.transfer(foto);
                });
            }else
            alert('Todos los campos son requeridos');
    }
};

$(fn.ready);