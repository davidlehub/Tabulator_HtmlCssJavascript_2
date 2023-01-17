// // data variable
// var data = [
// 	{id: 1, name: "Oli Bob", age: "12", col: "red", dob: ""},
// 	{id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982"},
// 	{id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982"},
// 	{id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980"},
// 	{id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999"},
// ];

// //tabulator constructor
// var table = new Tabulator("#utterances-table", {
// 	data:data,
// 	columns: [
// 			{title:"Name", field:"name", width:150},
// 			{title:"Age", field:"age", align:"left", formatter:"progress"},
// 			{title:"Favourite Color", field:"col"},
// 			{title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
// 	],
// 	//additional tabulator configuration options
// });

// fetch('path/to/data.json')
fetch('/data/utterances_withoutID.json')
    .then(response => response.json())
    .then(jsonData => {
    var table = new Tabulator("#utterances-table", {
				height:"211px",

        data: jsonData,
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
        //additional tabulator configuration options
    });
});

