var jsonFileData = "/data/KeyboardKeys_withoutID.json";
var pageElementID2 = "#keyboardKeys-table";
var tabulatorConfig = {
	height:"211px",

	// responsiveLayout:"hide",  //hide columns that dont fit on the table
	layout:"fitDataFill", //id020230115231856
	responsiveLayout:"collapse", //id020230115231856
	columns:[                 //define the table columns
		{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false}, //id020230115231856

		{title:"KeySymbol", field:"keySymbol"},
		{title:"Utterance", field:"utterance", editor:"input", serviceHistory:[
			{date:"01/02/2016", engineer:"Steve Boberson", actions:"Changed oli filter"},
			{date:"07/02/2017", engineer:"Martin Stevenson", actions:"Break light broken"},
		]},
		{title:"Note", field:"note", width:230, editor:"input"},
		{title:"KeyName", field:"keyName"},
		{title:"Tag", field:"tag"},
		{title:"Id", field:"id"},
	],	
				
	//additional tabulator configuration options
};

// fetch('path/to/data.json')
fetch(jsonFileData)
	.then(response => response.json())
	.then(jsonData => {
	tabulatorConfig["data"] = jsonData;
	var table = new Tabulator(pageElementID2, tabulatorConfig);
	// new Tabulator(pageElementID2, tabulatorConfig); //__itWorksAlso
});
