var utterance_dataFile = "/data/utterances_withoutID.json"
var utterances_pageElementID = "#utterances-table"

// tabulator_keyboardKeys_config = {
// const tabulator_utterances_config = {
var tabulator_utterances_config = {
	height:"211px",
	selectable:"highlight",
	// responsiveLayout:"hide",  //hide columns that dont fit on the table
	// reactiveData:true, //turn on data reactivity. Carefull: 020230117190349 a1 ProbSolut DataHasWeirdContent– 'reactiveData'.mp4 |id020230117190349

	//---- persistence (https://tabulator.info/docs/5.4/persist)
	persistence:true, //enable table persistence
	persistence:{
		sort:true,
		filter:true,
		columns:true,
	},
	persistenceID:"utterancesPerststance",

	//---- responsiveLayout:"collapse"
	layout:"fitDataFill", //id020230115231856
	responsiveLayout:"collapse", //id020230115231856
	columns:[                 //define the table columns
		{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false} //id020230115231856

		,{formatter:"rowSelection", titleFormatter:"rowSelection", align:"center", headerSort:false}

    // ,{formatter:"rowSelection", titleFormatter:"rowSelection", titleFormatterParams:{
		// 	rowRange:"active" //only toggle the values of the active filtered rows
		// }, hozAlign:"center", headerSort:false},
	

		,{title:"Utterance", field:"utterance", editor:"input", headerFilter:"input"}
		,{title:"Note", field:"note", width:230, editor:"input", headerFilter:"input"}
		,{title:"Used For", field:"usedFor", width:130, headerFilter:"input"}
		,{title:"Id", field:"id", headerFilter:"input"
			// ,formatter:"money", formatterParams:{
			// 	decimal:",",
			// 	thousand:false,
			// 	// symbol:"$",
			// 	// symbol:false,
			// 	// symbolAfter:"p",
			// 	symbolAfter:true,
			// 	// precision:false
			// }
		}
		,{title:"#", field:"rowNumb", formatter:"rownum"}

	]	//end: columns

	// //__
	// , rowClick:function(e, row){
	// 	//e - the click event object
	// 	//row - row component

	// 	console.log("tabulator_utterances_config['rowClick'] |020020230119080853230119074306")
		
	// 	// row.toggleSelect(); //toggle row selected state on row click
	// }

	// ,rowClick:function(e, row){
	// 		//e - the click event object
	// 		//row - row component

	// 		console.log("'rowClick' |020230119081707")

	// 		row.toggleSelect(); //toggle row selected state on row click
	// }

	//additional tabulator configuration options
};		



var utteranceTable = renderTable2(utterancesData,utterances_pageElementID, tabulator_utterances_config);
// renderTable2(utterancesData,utterances_pageElementID, tabulator_utterances_config);
// renderTable(utterance_dataFile,utterances_pageElementID2, tabulator_utterances_config);


//----------------------------------------------------------------
//__--Buttons--
//Add row on "Add Row" button click |id02023120150748
document.getElementById("add-row").addEventListener("click", function(){
	// var arrayOfId = utteranceTable.getData().map((row) => row.id);
	var nextIdAvailaible = getLowestUnusedNumberInAnArray(utteranceTable.getData().map((row) => row.id))
	
	//__
	utteranceTable.addRow({id: nextIdAvailaible});
	console.log('Row added (id: ' + nextIdAvailaible + ')');
});

//__Delet/removee row on "Delete Row" button click |id020230120145906
document.getElementById("del-row").addEventListener("click", function(){
	// var selectedRows = utteranceTable.getSelectedRows(); //get array of currently selected row components.
	var countDeleted = 0;
	utteranceTable.getSelectedRows().forEach(row => {
		row.delete();
		countDeleted ++;
	});
	// alert(countDeleted + "row removed")
	console.log(countDeleted + " row removed");

	// utteranceTable.deleteRow(1);
});

// //Clear table on "Empty the table" button click
// document.getElementById("clear").addEventListener("click", function(){
// 	table.clearData()
// });

// //Reset table contents on "Reset the table" button click
// document.getElementById("reset").addEventListener("click", function(){
// 	table.setData(tabledata);
// });




// //---- Buttons: Reactivity Controls (https://tabulator.info/docs/5.4/reactivity#overview) |id020230117190349 --------------------------------
// //__add row to bottom of table on button click
// document.getElementById("reactivity-add").addEventListener("click", function(){
// 	utterancesData.unshift({utterance:"bla02030120091227"});
// 	// utterancesData.push({utterance:"bla020230117192258"}); //Works
// 	console.log(utterancesData);
	
// 	// tabledata.push({name:"IM A NEW ROW", progress:100, gender:"male"});
// });

// // //remove bottom row from table on button click
// document.getElementById("reactivity-delete").addEventListener("click", function(){
// 	utterancesData.pop();
// });

// // //update name on first row in table on button click
// document.getElementById("reactivity-update").addEventListener("click", function(){
// 	console.log("before update 'utterancesData[0].utterance':");
// 	console.log(utterancesData[0].utterance);

// 	utterancesData[0].utterance = "bla020230117192433";

// 	console.log("after update 'utterancesData[0].utterance':");
// 	console.log(utterancesData[0].utterance);

// });



