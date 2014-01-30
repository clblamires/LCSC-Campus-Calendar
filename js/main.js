/* Author: Daniel White */

var iScrolls = new Object();

$(function() {

	// init collasibles
    $(".collapsible").collapsible();
    // init scroll-to-top
    $("#toTop").scrollToTop();

    /*
	 *  Addthis
	 *  Description: Configuration for the Addthis service
	*/
	var addthis_config = {
		"data_track_addressbar": true,
		"ui_delay": 100
		// data_ga_property: 'UA-xxxxxx-x',
	 	// data_ga_social: true
	};


	// init responsive videos
	$(".frame").fitVids();
	// init tab widget scrolling
	tabWidget(".w-tabs_toggles");
	// init responsive tables
	responsiveTables();
	// init spotlight widget images
	processSpotlights('.w-spotlight_img--fade');
	// init tag filtering
	$("#tagFilter").fastLiveFilter("#tagCloud", {
    	callback: function (total) { $("#tagCount").text(total); }
	});
	// init list filtering
	var noFilterItems = $("#filterList").children(".no-filter");
	var noFilterItemsCount = noFilterItems.length;
	$("#listFilter").fastLiveFilter("#filterList", {
    	ignoreClass: '.no-filter',
    	callback: function(total){
    		for( var i = 0; i < noFilterItemsCount; i++){
    			var item = noFilterItems[i];
    			var jItem = $(item);
    			var nextVisible = jItem.nextUntil(".no-filter", ":visible");
    			if( nextVisible.length > 0 ){
    				if( item.style.display === "none" ){
    					console.log("Show");
    					item.style.display = "block";
					}
    			}else{
    				if( item.style.display !== "none" ){
    					console.log("Hide");
    					item.style.display = "none";
    				}
    			}
    		}
    	}
	});
	// init XYZ table filtering
	$("#tableFilter").fastLiveFilter("#filterTable tbody", { // tbody is required for some reason
    	// subTxt: "td:first-child" // search only the first td
    	subTxt: "td" // search all tds
	});




	// var myScrollers = new Array();

	// function loaded() {
	// 	var els = document.querySelectorAll(".copy");
	// 	var idx = 0;
	// 	// Populate globally scoped array so we can call later
	// 	for (var i=0; i<els.length; i++) {
	//             id = $(els[i]).attr('id');
	//             if(id) {
	//     		myScrollers[idx] = new iScroll(id, {vScrollbar:true, hideScrollbar:false });
	//         	idx++;
	//     	    }
	//       }
	// }




    // Media Query Adjustments
    // (If we don't want the weight of all the JS we can probably swap out the mediaCheck plugin for just Modernizer)
	mediaCheck({
		media: '(min-width: 600px)',
		entry: function() {
			$('.home-audiences_mtoggle').trigger('collapse');
			$('.home-audiences_nav .is-selected').trigger('expand');
		},
		exit: function() {
			$('.home-audiences_mtoggle').trigger('collapse');
		}
	});

	mediaCheck({
		media: '(min-width: 720px)',
		entry: function() {
			$('.m-h-nav .is-selected').trigger('collapse');
		},
		exit: function() {
			$('.h-search_toggle .is-selected, .h-more_toggle').trigger('collapse');
		}
	});

	mediaCheck({
		media: '(min-width: 960px)',
		entry: function() {
			$('.h-search_toggle .is-selected, .h-more_toggle').trigger('collapse');
		},
		exit: function() {

		}
	});
});

