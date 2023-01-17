var jsonFileData = "/data/utterances_withoutID.json"
var pageElementID = "#utterances-table"

// fetch('path/to/data.json')
fetch(jsonFileData)
    .then(response => response.json())
    .then(jsonData => {
    var table = new Tabulator(pageElementID, {
				height:"211px",

				// responsiveLayout:"hide",  //hide columns that dont fit on the table
				layout:"fitDataFill", //id020230115231856
				responsiveLayout:"collapse", //id020230115231856
				columns:[                 //define the table columns
					{formatter:"responsiveCollapse", width:30, minWidth:30, hozAlign:"center", resizable:false, headerSort:false}, //id020230115231856

					{title:"Id", field:"id"},
					{title:"Utterance", field:"utterance", editor:"input"},
					{title:"Note", field:"note", width:230, editor:"input"},
					{title:"Used For", field:"usedFor", width:130},
				],	
							
        data: jsonData,

        //additional tabulator configuration options
    });
});

