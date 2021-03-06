jQuery(function () {
    jQuery("#countypane .fl-cta-button").prepend('<div><select id="selcounty" onchange="updateurl(this)"><option value = "">-- Select a county --</option></select></div>');

    jQuery("#countypane .fl-button").css("background-color", "#ddd");
    jQuery("#countypane .fl-button").css("border-color", "#aaa");

    var selcounty = jQuery("#countypane select");
    if (selcounty) {
        for (var i = 0; i < jsondata.length; i++) {
            var o = new Option(jsondata[i]['county'], jsondata[i]['url']);
            selcounty.append(o);
        }                
    }
	
	jQuery("#countypaneny .fl-cta-button").prepend('<div><select id="selcountyny" onchange="updateurlny(this)"><option value = "">-- Select a region --</option></select></div>');

    jQuery("#countypaneny .fl-button").css("background-color", "#ddd");
    jQuery("#countypaneny .fl-button").css("border-color", "#aaa");

    var selcountyny = jQuery("#countypaneny select");
    if (selcountyny) {
        for (var i = 0; i < jsondatany.length; i++) {
            var o = new Option(jsondatany[i]['county'], jsondatany[i]['url']);
            selcountyny.append(o);
        }                
    }
});
        
function updateurl(selected) {
    if (selected.value === "") {
        console.log("empty");
        jQuery("#countypane .fl-button").css("background-color", "#ddd");
        jQuery("#countypane .fl-button").css("border-color", "#aaa");
        jQuery("#countypane .fl-button").attr("href", "#");
    }
    else {
        jQuery("#countypane .fl-button").css("background-color", "#ed1c24");
        jQuery("#countypane .fl-button").css("border-color", "#ed1c24");
        jQuery("#countypane .fl-button").attr("href", selected.value);
    }
}        
function updateurlny(selected) {
    if (selected.value === "") {
        console.log("empty");
        jQuery("#countypaneny .fl-button").css("background-color", "#ddd");
        jQuery("#countypaneny .fl-button").css("border-color", "#aaa");
        jQuery("#countypaneny .fl-button").attr("href", "#");
    }
    else {
        jQuery("#countypaneny .fl-button").css("background-color", "#ed1c24");
        jQuery("#countypaneny .fl-button").css("border-color", "#ed1c24");
        jQuery("#countypaneny .fl-button").attr("href", selected.value);
    }
}