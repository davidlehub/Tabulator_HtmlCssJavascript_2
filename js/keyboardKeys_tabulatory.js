var keyboardKeys_dataFile = "/data/KeyboardKeys_withoutID.json";
var keyboardKeys_pageElementID2 = "#keyboardKeys-table";
var tabulator_keyboardKeys_config = {
	height:"211px",

	// responsiveLayout:"hide",  //hide columns that dont fit on the table
	layout:"fitDataFill", //id020230115231856
	responsiveLayout:"collapse", //id020230115231856
	columns:[                 //define the table columns
		{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false}, //id020230115231856

		{title:"KeySymbol", field:"keySymbol"},
		{title:"Utterance", field:"utterance", editor:"input"},
		{title:"Note", field:"note", width:230, editor:"input"},
		{title:"KeyName", field:"keyName"},
		{title:"Tag", field:"tag"},
		{title:"Id", field:"id"},
	],	

	rowFormatter:function(row){
		//create and style holder elements
	 var holderEl = document.createElement("div");
	 var tableEl = document.createElement("div");

	 holderEl.style.boxSizing = "border-box";
	 holderEl.style.padding = "10px 30px 10px 10px";
	 holderEl.style.borderTop = "1px solid #333";
	 holderEl.style.borderBotom = "1px solid #333";
	 

	 tableEl.style.border = "1px solid #333";

	 holderEl.appendChild(tableEl);

	 row.getElement().appendChild(holderEl);

	 var subTable = new Tabulator(tableEl, tabulator_utterances_config)

		//  var subTable = new Tabulator(tableEl, {
		// 		 layout:"fitColumns",
		// 		 data:row.getData().serviceHistory,
		// 		 columns:[
		// 		 {title:"Date", field:"date", sorter:"date"},
		// 		 {title:"Engineer", field:"engineer"},
		// 		 {title:"Action", field:"actions"},
		// 		 ]
		//  })
	},	

	//additional tabulator configuration options
};

async function getUsers() {
	let url = '/data/KeyboardKeys_withoutID.json';
	try {
			let res = await fetch(url);
			return await res.json();
	} catch (error) {
			console.log(error);
	}
};


async function renderUsers(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config) {
	let users = await getUsers();
	let html = '';

	console.log(users);
	// return users;


	tabulator_keyboardKeys_config["data"] = users;
	console.log(tabulator_keyboardKeys_config);

	// return tabulator_keyboardKeys_config; //It return a promise :(


	var table = new Tabulator(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config);

	table.on("rowClick", function (e, row) {
		alert("Row " + row.getIndex() + " Clicked!!!!");
	});	
}

renderUsers(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config);
// console.log(renderUsers(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config));



// tabulator_keyboardKeys_config["data"] = a1;
// var table = new Tabulator(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config);

// table.on("rowClick", function (e, row) {
// 	alert("Row " + row.getIndex() + " Clicked!!!!");
// });