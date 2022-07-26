$(document).ready(function(){
    $.getJSON("https://droidserver.github.io/owl.json", function(data){
        var get_data = '';
        
        $.each(data, function(key, value){

            get_data += '<div class="box-luar round-1">';
            get_data += '<div class="blt round-1 cl-03"></div>';    
            get_data += '<div class="textku cc-00">'+value.nama+'</div>';
            get_data += '<div class="mg"><a class="blt kiri round-1 cl-03 cc-00" href="'+value.link+'">OPEN</a></div>';
            get_data += '</div>';
        });
        $('#owl').append(get_data);
    });
});