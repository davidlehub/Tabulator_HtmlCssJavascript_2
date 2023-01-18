var utterance_dataFile = "/data/utterances_withoutID.json"
var utterances_pageElementID2 = "#utterances-table"

// tabulator_keyboardKeys_config = {
// const tabulator_utterances_config = {
var tabulator_utterances_config = {
	height:"211px",

	// responsiveLayout:"hide",  //hide columns that dont fit on the table
	reactiveData:true, //turn on data reactivity |id020230117190349

	layout:"fitDataFill", //id020230115231856
	responsiveLayout:"collapse", //id020230115231856
	columns:[                 //define the table columns
		{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false}, //id020230115231856

		{title:"Utterance", field:"utterance", editor:"input"},
		{title:"Note", field:"note", width:230, editor:"input"},
		{title:"Used For", field:"usedFor", width:130},
		{title:"Id", field:"id"},
	],	
				
	//additional tabulator configuration options
};		

// renderTable(utterance_dataFile,utterances_pageElementID2, tabulator_utterances_config);
renderTable2(utterancesData,utterances_pageElementID2, tabulator_utterances_config);

//__
//add row to bottom of table on button click
document.getElementById("reactivity-add").addEventListener("click", function(){
	tabledata.push({name:"IM A NEW ROW", progress:100, gender:"male"});
});

//remove bottom row from table on button click
document.getElementById("reactivity-delete").addEventListener("click", function(){
	tabledata.pop();
});

//update name on first row in table on button click
document.getElementById("reactivity-update").addEventListener("click", function(){
	tabledata[0].name = "IVE BEEN UPDATED";
});


// // fetch('path/to/data.json')
// fetch(utterance_dataFile)
//     .then(response => response.json())
//     .then(jsonData => {
// 		tabulator_utterances_config["data"] = jsonData;
// 			// tabulator_keyboardKeys_config["data"] = jsonData;
// 		var table = new Tabulator(utterances_pageElementID2, tabulator_utterances_config);
// 		// var table = new Tabulator(pageElementID, tabulator_keyboardKeys_config);
// });

