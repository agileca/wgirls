jQuery(function () {
	
	if (!EMPTYDDLTEXT || EMPTYDDLTEXT === "")
		EMPTYDDLTEXT = "-- Select a county --";
	
    jQuery("#countypane .fl-cta-button").prepend('<div><select id="selcounty" onchange="updateurl(this)"><option value = "">' + EMPTYDDLTEXT + '</option></select></div>');

    jQuery("#countypane .fl-button").css("background-color", "#ddd");
    jQuery("#countypane .fl-button").css("border-color", "#aaa");

    var selcounty = jQuery("#countypane select");
    if (selcounty) {
        for (var i = 0; i < jsondata.length; i++) {
            var o = new Option(jsondata[i]['county'], jsondata[i]['url']);
            selcounty.append(o);
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