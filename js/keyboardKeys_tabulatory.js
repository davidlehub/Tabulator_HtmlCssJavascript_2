var jsonFileData = "/data/KeyboardKeys_withoutID.json"
var pageElementID2 = "#keyboardKeys-table"

// fetch('path/to/data.json')
fetch(jsonFileData)
    .then(response => response.json())
    .then(jsonData => {
    var table = new Tabulator(pageElementID2, {
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
							
        data: jsonData,

        //additional tabulator configuration options
    });
});

