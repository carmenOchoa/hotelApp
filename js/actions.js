var fn = {
    init: function(){
        if(!fn.estaRegistrado())
            window.location.href = '#registro';
        $('#registro div[data-role=footer] a').click(fn.regitrar);
    },
    //***********funciones de registro**********************
    estaRegistrado: function(){
        return false;
    },
    regitrar: function(){
        var nom = $('#regNom').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        var foto = $('#regFoto').data('Foto');
    
        if (nom != '' && mail != '' && tel != '')
            alert('Sincronizar');
        else
            alert('Todos los campos son requeridos');
    }
};

$(fn.init);