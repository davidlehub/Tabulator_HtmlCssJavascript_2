var keyboardKeys_dataFile = "/data/KeyboardKeys_withoutID.json";
var keyboardKeys_pageElementID2 = "#keyboardKeys-table";


// if(localStorage.getItem("keyboardKeysData") != null) {
// 	// const restoredSession = JSON.parse(localStorage.getItem("keyboardKeysData"));
// 	keyboardKeysData = JSON.parse(localStorage.getItem("keyboardKeysData"));
// }


// console.log(restoredSession)

//__--test save to localstorage
// const session = {
//   screens: [],
//   state: true,
// };

// session.screens.push({ name: "screenA", width: 450, height: 250 });
// session.screens.push({ name: "screenB", width: 650, height: 350 });
// session.screens.push({ name: "screenC", width: 750, height: 120 });
// session.screens.push({ name: "screenD", width: 250, height: 60 });
// session.screens.push({ name: "screenE", width: 390, height: 120 });
// session.screens.push({ name: "screenF", width: 1240, height: 650 });

// // Converting the JSON string with JSON.stringify()
// // then saving with localStorage in the name of session
// localStorage.setItem("session", JSON.stringify(session));
// console.log(session.screens)


//Works----------------------------------------------------------------
// var data = '[{"name" : "Ashwin", "age" : "20"},{"name" : "Abhinandan", "age" : "20"}]';

// var mydata = JSON.parse(data);
// console.log(mydata);


//works but ... ----------------------------------------------------------------
// fetch("/data/KeyboardKeys_withoutID.json").then(
// 	function(u){ return u.json();}
// 	).then(
// 	function(json){
// 		data_function(json); //calling and passing json to another function data_function
// 	}
// 	)
	
// //another functions
// // var data2;
// function data_function(data2){
// 	console.log(data2);
// 	// return data2; 
// }

var userRequestToChangeUtteranceOf_aKeyboardKey = -1;

//____ for nested table
// var subTableInstantiated= false;
var holderEl;
var tableEl;
var subTable;

//____
var tabulator_keyboardKeys_config = {
	height:"211px",

	// responsiveLayout:"hide",  //hide columns that dont fit on the table

	persistence:true, //enable table persistence
	persistence:{
		sort: true, //persist column sorting
		filter: true, //persist filter sorting
		group: true, //persist row grouping
		page: true, //persist page
		columns: true, //persist columns
	},	
	persistenceID:"keyboardKeysPerststance",
	persistenceMode: true,

	layout:"fitDataFill", //id020230115231856
	responsiveLayout:"collapse", //id020230115231856
	columns:[                 //define the table columns
		{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false}, //id020230115231856

		{title:"KeySymbol", field:"keySymbol"},
		{title:"Utterance", field:"utterance"
			// , editor:"input"

			//__--When user want to select an utterance for a keyboard's key >> show the utterance table in nested. |id020230118223319
			,cellDblClick:function(e, cell){
				//e - the click event object
				//cell - cell component

				console.log("'cellDblClick' |020230119053702"); //Works

				// console.log(cell.getRow().getData().utterance); //Works

				//------------------------------------------------
				
				//__--Show-hide nested table
				if (holderEl == null) {
					// console.log(" gonna instantiate subTable")

					//__
					// cell.getRow().getElement().style.backgroundColor = "red";

					//__--create and style holder elements
					holderEl = document.createElement("div");
					tableEl = document.createElement("div");
	
					holderEl.style.boxSizing = "border-box";
					holderEl.style.padding = "10px 30px 10px 10px";
					holderEl.style.borderTop = "1px solid #333";
					holderEl.style.borderBotom = "1px solid #333";
					
					tableEl.style.border = "1px solid #333";
					
	
					holderEl.appendChild(tableEl);
					cell.getRow().getElement().appendChild(holderEl);
					
					tabulator_utterances_config.height = "120px";

					//__
					subTable = new Tabulator(tableEl, tabulator_utterances_config)
					
					//__-- Confirme selected candidate
					subTable.on("rowSelected", function(row){
						//row - row component for the selected row
						// console.log("rowSelected |020230119074307" + row.getData().utterance); //Works
						// console.log("rowSelected |020230119074307" + row.getData().utterance); //Works
						
						// cell.getRow().getData().utterance = "asdfsdf"; //No
						// console.log(cell.getRow().getData().utterance); //Works
						// cell.setValue("sdfsdf"); //works
						// console.log(cell.getValue() ); //Works

						//__ set the selected value to the requested cell. |id020230119121529
						cell.setValue(row.getData().utterance); //Works
						// console.log(keyboardKeysData[row.getData().id].utterance);
						
						// //__ Updating Existing Data (in cache) |id020230119173353
						// localStorage.setItem("keyboardKeysData", JSON.stringify(keyboardKeysData));

						// const restoredSession = JSON.parse(localStorage.getItem("keyboardKeysData"));
						// restoredSession = JSON.parse(localStorage.getItem("keyboardKeysData"));
						// console.log(restoredSession)						
						// console.log(keyboardKeysData);
						// console.log(keyboardKeysData[row.getData().id].utterance);


						// row.update({"utterance":"bla020230119173701"}); Works but... 
						// var table020230119173538 = row.getTable();
						// table.updateData([{id:1, utterance:"bla020230119173701"}]);
						// var table020230119173538 = row.getTable().updateData([{id:1, utterance:"bla020230119173701"}]);
						// console.log(table020230119173538 ); //Works
						// table020230119173538.updateData([{id:1, utterance:"bla020230119173701"}]);
						// table020230119173538.updateOrAddData([{id:1, utterance:"bla020230119173701"}]);


						//__--Resetting things.
						holderEl.remove();
						holderEl = null;
						tableEl.remove();
						tableEl = null;
						subTable = null;						

					});

					// //__--
					// subTable.on("rowClick", function (e, row) {
					// 	console.log("rowClick |020230119074306")
					// });
					
				}	else {
					// console.log("gonna remove and resset ...");
					//__--Resetting things.
					holderEl.remove();
					holderEl = null;
					tableEl.remove();
					tableEl = null;
					subTable = null;					
				}
			}, //End: cellDblClick:function

			// , editor:"input"
			// , formatter:"lookup", formatterParams:{
			// 	"note": "Cute",
			// 	"medium": "Fine",
			// 	"big": "Scary",
			// }
		}, //end: title:"Utterance"

		{title:"Note", field:"note", width:230, editor:"input"},
		{title:"KeyName", field:"keyName"},
		{title:"Tag", field:"tag"},
		{title:"Id", field:"id"}

		,{title:"Example", field:"example", editor:"list", editorParams:{

			// var utterancesTable = Tabulator.findTable(utterances_pageElementID2)[0]; // find table object for table with id of example-table
			// var row = utterancesTable.getRow(1); //return row component with index of 1
			// var rowData = row.getData();
			// console.log(rowData.utterance); //Works, returns: "char"

			//Value Options (You should use ONE of these per editor)
			values:["red", "green", "blue", "blue2"], //an array of values or value/label objects
			// values:Tabulator.findTable(utterances_pageElementID2)[0], //an array of values or value/label objects
			// values: Tabulator.findTable(utterances_pageElementID2)[0].getRows(), //an array of values or value/label objects

			// valuesURL: "http://myvalues.com", //a url to load the values from
			// valuesLookup:"active", //get the values from the currently active rows in this column
	
			//Value Lookup Configuration (use these with valuesLookup Option)
			// valuesLookupField:"color", //the field to lookup values from
			// valuesLookupField:"tag", //the field to lookup values from
	
			//General Options
			clearable:true, //show clear "x" button on editpr
			// itemFormatter:(label, value, item, element) {
			itemFormatter:(label, value, item, element) => {
					//label - the text lable for the item
					//value - the value for the item
					//item - the original value object for the item
					//element - the DOM element for the item
	
					// return "<strong>" + label + " </strong><br/><div>" + item.subtitle + "</div>" : "");
					return "<strong>" + label + " </strong><br/><div>" + item.subtitle + "</div>";
			},
			// elementAttributes:{ //set attributes on input element
			// 		// maxlength:"10", //set the maximum character length of the input element to 10 characters
			// },
			verticalNavigation:"hybrid", //navigate to new row when at the top or bottom of the selection list
			sort:"asc", //sort direction for the values list
			// defaultValue:"Steve Johnson", //the value that should be selected by default if the cells value is undefined
			emptyValue:null, //the value that should be asigned to the cell if the editor is left with an empty value
			maxWidth:true, //prevent width of list item from exceeding width of cell
			placeholderLoading:"Loading List...", //set custom placeholder when loading list values
			placeholderEmpty:"No Results Found", //set custom placeholder when list is empty
	
			// //Select Options (only available when autocomplete:false)
			// multiselect:true, //allow selection of multiple items from the list
	
			//Autocomplete Options (only available when autocomplete:true)
			autocomplete:true, //enable autocomplete mode,
			filterFunc:function(term, label, value, item){ //replace built in filter function with custom
					//term - the string being searched for
					//label - the text lable for the item
					//value - the value for the item
					//item - the original value object for the item
	
					// return  label === term;
					// return  label => term;
					// return  label <= term;
					label = "sdfsf";
					return  label.includes(term); //__works :)
			},
			// filterRemote:true, //pass filter term to remote server in request instead of filtering
			filterDelay:100, //delay in milliseconds after typing before filter begins
			allowEmpty:true, //allow the user to leave the cell empty
			listOnEmpty:true, //show all values in the list if the input is empty
			// mask:"AAA-999", //apply input mask to text entry
			freetext:true, //allow the user to set the value of the cell to a free text entry
		}}
	],//end: columns:

	//____ rowFormatter ____
	//__ test Nested table. |id020230117081739
	// rowFormatter:function(row){
	// 	//create and style holder elements
	//  var holderEl = document.createElement("div");
	//  var tableEl = document.createElement("div");

	//  holderEl.style.boxSizing = "border-box";
	//  holderEl.style.padding = "10px 30px 10px 10px";
	//  holderEl.style.borderTop = "1px solid #333";
	//  holderEl.style.borderBotom = "1px solid #333";
	 
	//  tableEl.style.border = "1px solid #333";

	//  holderEl.appendChild(tableEl);

	//  row.getElement().appendChild(holderEl);

	//  var subTable = new Tabulator(tableEl, tabulator_utterances_config)
	// },	

	//__ test Nested table: when meat condition |id020230117081739
	// rowFormatter:function(row){
	// 	//create and style holder elements
	// 	var holderEl = document.createElement("div");
	// 	var tableEl = document.createElement("div");

	// 	holderEl.style.boxSizing = "border-box";
	// 	holderEl.style.padding = "10px 30px 10px 10px";
	// 	holderEl.style.borderTop = "1px solid #333";
	// 	holderEl.style.borderBotom = "1px solid #333";
		
	// 	tableEl.style.border = "1px solid #333";
	 
	// 	var data = row.getData();
	// 	//  if(data.utterance == "zoll"){
	// 	if(data.id == userRequestToChangeUtteranceOf_aKeyboardKey){
	// 			row.getElement().style.backgroundColor = "red";

	// 			holderEl.appendChild(tableEl);
	// 			row.getElement().appendChild(holderEl);

	// 			tabulator_utterances_config.height = "100px";
	// 			var subTable = new Tabulator(tableEl, tabulator_utterances_config)

	// 		}	 
	// 	//  var subTable = new Tabulator(tableEl, tabulator_utterances_config)
	// },


	//__ Change BackGround Color if meet a condition/
	// rowFormatter:function(row){
	// 	//row - row component
		
	// 	var data = row.getData();
	// 	// console.log(data);
	// 	if(data.utterance == "zoll"){
	// 			// row.getElement().style.backgroundColor = "#1e3b20";
	// 			row.getElement().style.backgroundColor = "red";
	// 	}
	// },

	
	//additional tabulator configuration options
}; //end var tabulator_keyboardKeys_config
// var returnValue = Object;

// console.log(keyboardKeysData);

// renderTable2(keyboardKeysData,utterances_pageElementID2, tabulator_utterances_config);
renderTable2(keyboardKeysData,keyboardKeys_pageElementID2, tabulator_keyboardKeys_config);



//----------------------------------------------------------------
// var table = Tabulator.findTable("utterances-table")[0]; // find table object for table with id of example-table


//----------------------------------------------------------------
// var elem = document.getElementById('utterances-table');
// console.log(elem);
// // console.log(elem.classList.length);	//ruetrn 0
// console.log(elem.childNodes.length);	//ruetrn 0