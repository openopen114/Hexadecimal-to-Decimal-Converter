$("button#Hex2Dec").on("click", function() {
	var HexInput = $("#HexInput").val().toString(16);
	var Hex2Dec = parseInt(HexInput, 16);
	$("#hex2DecOutput").text("Hex2Dec: "+Hex2Dec);
 	console.log("button#Hex2Dec!:"+HexInput); 
 	console.log("button#Hex2Dec!:"+Hex2Dec); 
});


$("button#Dec2Hex").on("click", function() {
	var DecInput = $("#DecInput").val();
	var Dec2Hex = Number(DecInput).toString(16); 
	$("#Dec2HexOutput").text("Dec2Hex: "+Dec2Hex);
 	console.log("button#Dec2Hex!:"+DecInput); 
 	console.log("button#Dec2Hex!:"+Dec2Hex); 
});
