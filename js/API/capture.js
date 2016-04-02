var capture = {
    
    success: function(){
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;            
        }
        
        $('#regFoto').attr('data-foto',path);
        $('#regFoto').attr('<img src="' + path + '" style="width:100%;",path);
    },
    captureError: function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error','Perfecto!');
    },
    takePhoto: function(){
        navigator.device.capture.captureImage(capture.Success, capture.captureError, {limit:2});
    }
}