// // data variable
// var data = [
// 	{id: 1, name: "Oli Bob", age: "12", col: "red", dob: ""},
// 	{id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982"},
// 	{id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982"},
// 	{id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980"},
// 	{id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999"},
// ];

// //tabulator constructor
// var table = new Tabulator("#example-table", {
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
fetch('data.json')
    .then(response => response.json())
    .then(jsonData => {
    var table = new Tabulator("#example-table", {
        data: jsonData,
				columns: [
						{title:"Name", field:"name", width:150},
						{title:"Age", field:"age", align:"left", formatter:"progress"},
						{title:"Favourite Color", field:"col"},
						{title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},
				],				
        //additional tabulator configuration options
    });
});

