
jQuery(document).ready(function(){
    $("#countypane .fl-cta-button").prepend('<div><select id="selcounty" onchange="updateurl(this)"><option value = "">-- Select a county --</option></select></div>');

    $("#countypane .fl-button").css("background-color", "#ddd");
    $("#countypane .fl-button").css("border-color", "#aaa");

    var selcounty = $("#countypane select");
    if (selcounty) {
        for (var i = 0; i < jsondata.length; i++) {
            var o = new Option(jsondata[i]['county'], jsondata[i]['url']);
            selcounty.append(o);
        }                
    } 
})(jQuery);
        
function updateurl(selected) {
    if (selected.value === "") {
        console.log("empty");
        $("#countypane .fl-button").css("background-color", "#ddd");
        $("#countypane .fl-button").css("border-color", "#aaa");
        $("#countypane .fl-button").attr("href", "#");
    }
    else {
        $("#countypane .fl-button").css("background-color", "#ed1c24");
        $("#countypane .fl-button").css("border-color", "#ed1c24");
        $("#countypane .fl-button").attr("href", selected.value);
    }
}
