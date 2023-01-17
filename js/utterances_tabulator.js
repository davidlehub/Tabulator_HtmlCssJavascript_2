var utterance_dataFile = "/data/utterances_withoutID.json"
var utterances_pageElementID2 = "#utterances-table"

// tabulator_keyboardKeys_config = {
// const tabulator_utterances_config = {
var tabulator_utterances_config = {
	height:"211px",

	// responsiveLayout:"hide",  //hide columns that dont fit on the table
	layout:"fitDataFill", //id020230115231856
	responsiveLayout:"collapse", //id020230115231856
	columns:[                 //define the table columns
		{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false}, //id020230115231856

		{title:"Utterance", field:"utterance", editor:"input"},
		{title:"Note", field:"note", width:230, editor:"input"},
		{title:"Used For", field:"usedFor", width:130},
		{title:"Id", field:"id"},
	],	
				
	// data: jsonData,

	//additional tabulator configuration options
};		
			

// fetch('path/to/data.json')
fetch(utterance_dataFile)
    .then(response => response.json())
    .then(jsonData => {
		tabulator_utterances_config["data"] = jsonData;
			// tabulator_keyboardKeys_config["data"] = jsonData;
		var table = new Tabulator(utterances_pageElementID2, tabulator_utterances_config);
		// var table = new Tabulator(pageElementID, tabulator_keyboardKeys_config);
});

