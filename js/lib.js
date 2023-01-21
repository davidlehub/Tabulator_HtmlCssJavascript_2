/* This file contains only functions */
async function getData(dataUrl) {
	// let url = '/data/KeyboardKeys_withoutID.json';
	let url = dataUrl;
	try {
			let res = await fetch(url);
			return await res.json();
	} catch (error) {
			console.log(error);
	}
};


// async function renderTable2(data, pageElementID, tabulatorConfiguration) {
function renderTable2(data, pageElementID, tabulatorConfiguration) {
	// let data = await getData(data);
	// console.log(data)

	//__ Updating Existing Data (in cache) |id020230119173353
	if(localStorage.getItem(pageElementID) != null) {
		// const restoredSession = JSON.parse(localStorage.getItem("keyboardKeysData"));
		// keyboardKeysData = JSON.parqse(localStorage.getItem("keyboardKeysData"));
		data = JSON.parse(localStorage.getItem(pageElementID));
	}	
	
	tabulatorConfiguration["data"] = data;

	var table = new Tabulator(pageElementID, tabulatorConfiguration);
	
	//__
	table.on("rowClick", function (e, row, table) {
		// // alert("Row " + row.getIndex() + " Clicked!!!!");
		// console.log("Row " + row.getIndex() + " Clicked!!!!");

		// //------------------------------------------------
		// // //create and style holder elements
		// // var holderEl = document.createElement("div");
		// // var tableEl = document.createElement("div");

		// // holderEl.style.boxSizing = "border-box";
		// // holderEl.style.padding = "10px 30px 10px 10px";
		// // holderEl.style.borderTop = "1px solid #333";
		// // holderEl.style.borderBotom = "1px solid #333";
		
		// // tableEl.style.border = "1px solid #333";
		
		// // row.getElement().style.backgroundColor = "red";

		// // holderEl.appendChild(tableEl);
		// // row.getElement().appendChild(holderEl);

		// // tabulator_utterances_config.height = "100px";
		// // var subTable = new Tabulator(tableEl, tabulator_utterances_config)

		
		// //------------------------------------------------
		// var utterancesTable = Tabulator.findTable(utterances_pageElementID2)[0]; // find table object for table with id of example-table
		// // console.log(utterancesTable.getData()); //Works
		// var row = utterancesTable.getRow(1); //return row component with index of 1
		// var rowData = row.getData();
		// console.log(rowData.utterance + " |020230117163534"); //Works, returns: "char"



		// // console.log(table[0].columnManager.columns); //Works
		// // console.log(table[0].columnManager.columnsByField); //Works
		// // console.log(table[0].columnManager.columnsByField.utterance); //Works
		// // console.log(table[0].columnManager.columnsByField.utterance.cells); //Works
		// // console.log(table[0].columnManager.columnsByField.utterance.cells[1].value); //Works, returns: "char"

		// // console.log(table[0].columnManager.columnsByField.utterance.cells.values().length);
		// // console.log(table[0].columnManager.columnsByField.utterance.cells.keys.length);
		// // console.log(table[0].columnManager.columnsByField.utterance.cells.length); //_ !! only contains what been loaded: so not the full data.

		// // console.log(table[0].); //_ !! only contains what been loaded: so not the full data.


		// // var a= []; //
		// // a.length

		// // console.log(table[0].columnManager.columnsByField.utterance.getFieldValue(1));
		// // console.log(table[0].columnManager.columnsByField.utterance.getFieldValue(0));

		// // console.log(row.getElement());

		// // elem = document.getElementById('utterances-table');
		// // console.log(elem);

		// // function customJsonImporter(fileContents){
		// // 	var json = JSON.parse("/data/utterances_withoutID.json");
		// // 	console.log(json);

		// // 	return json;
		// // 	// return JSON.parse("/data/utterances_withoutID.json");
		// // }

	});	

	//__
	table.on("dataChanged", function(data){
		//data - the updated table data

		//__ Updating Existing Data (in cache) |id020230119173353
		localStorage.setItem(pageElementID, JSON.stringify(data)); //Works

		// console.log("dataChanged |020230119184348");
		// console.log(localStorage.getItem(pageElementID));

	});

	//__
  table.on("cellEdited", function(cell){
		//cell - cell component

		console.log("cellEdited |020230119184349");

	});

	// // table.import("json", ".json");
	// table.import("/data/utterances_withoutID.json", ".json");

	// function customJsonImporter(fileContents){
	// 	return JSON.parse("/data/utterances_withoutID.json");
	// }

	//__--trigger download of data.json file |id020230119222635
	//__ remove the '#' in the string
	document.getElementById(pageElementID + "-download-json").addEventListener("click", function(){
		table.download("json", pageElementID.replace("#", "") + "-data.json");
	});

	// document.getElementById("utterances-download-json").addEventListener("click", function(){
	// 	table.download("json", "data.json");
	// });

	return table;
}

function customJsonImporter(fileContents){
	var json = JSON.parse("/data/utterances_withoutID.json");
	console.log(json);

	return json;
	// return JSON.parse("/data/utterances_withoutID.json");
}

async function renderTable(dataUrl, keyboardKeys_pageElementID2, tabulator_keyboardKeys_config) {
// async function renderTable(dataUrl, keyboardKeys_pageElementID2, tabulator_keyboardKeys_config, returnValue) {
	let users = await getData(dataUrl);
	// let html = '';

	// return users;
	
	tabulator_keyboardKeys_config["data"] = users;
	// console.log(tabulator_keyboardKeys_config);
	
	// console.log(users);
	// returnValue = users;
	// // let returnValue = users;

	// return tabulator_keyboardKeys_config; //It return a promise :(


	var table = new Tabulator(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config);
	
	//__
	table.on("rowClick", function (e, row) {
		// alert("Row " + row.getIndex() + " Clicked!!!!");
		console.log("Row " + row.getIndex() + " Clicked!!!!");

		//------------------------------------------------
		var utterancesTable = Tabulator.findTable(utterances_pageElementID)[0]; // find table object for table with id of example-table
		// console.log(utterancesTable.getData()); //Works
		var row = utterancesTable.getRow(1); //return row component with index of 1
		var rowData = row.getData();
		console.log(rowData.utterance + " |020230117163533"); //Works, returns: "char"

		// console.log(table[0].columnManager.columns); //Works
		// console.log(table[0].columnManager.columnsByField); //Works
		// console.log(table[0].columnManager.columnsByField.utterance); //Works
		// console.log(table[0].columnManager.columnsByField.utterance.cells); //Works
		// console.log(table[0].columnManager.columnsByField.utterance.cells[1].value); //Works, returns: "char"

		// console.log(table[0].columnManager.columnsByField.utterance.cells.values().length);
		// console.log(table[0].columnManager.columnsByField.utterance.cells.keys.length);
		// console.log(table[0].columnManager.columnsByField.utterance.cells.length); //_ !! only contains what been loaded: so not the full data.

		// console.log(table[0].); //_ !! only contains what been loaded: so not the full data.


		// var a= []; //
		// a.length

		// console.log(table[0].columnManager.columnsByField.utterance.getFieldValue(1));
		// console.log(table[0].columnManager.columnsByField.utterance.getFieldValue(0));

		// console.log(row.getElement());

		// elem = document.getElementById('utterances-table');
		// console.log(elem);

	});	

}

// console.log(renderUsers(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config));



// tabulator_keyboardKeys_config["data"] = a1;
// var table = new Tabulator(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config);

// table.on("rowClick", function (e, row) {
// 	alert("Row " + row.getIndex() + " Clicked!!!!");
// });

function getLowestUnusedNumberInAnArray(inputArray = []) {
	//-- from: https://stackoverflow.com/questions/30672861/find-the-lowest-unused-number-in-an-array-using-javascript

	inputArray.sort(function(a, b) { return a-b; });   // To sort by numeric
	
	var lowest = -1;
	for (i = 0;  i < inputArray.length;  ++i) {
		if (inputArray[i] != i) {
			lowest = i;
			break;
		}
	}
	if (lowest == -1) {
			lowest = inputArray[inputArray.length - 1] + 1;
	}
	return lowest;
}