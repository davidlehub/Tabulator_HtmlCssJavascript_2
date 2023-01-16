alert("This alert box was called with the onload event");

// import {TabulatorFull as Tabulator} from 'tabulator-tables';

var data = [
	{id: 1, name: "Oli Bob 2", age: "12", col: "red", dob: ""},
	{id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982"},
	{id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982"},
];

var table = new Tabulator("#example-table", {
	data: data,
	columns: [
		{title: "Name", field: "name"},
		{title: "Age", field: "age"},
		{title: "Favourite Color", field: "col"},
		{title: "Date of Birth", field: "dob"},
	]
});

// //define some sample data
// var tabledata = [
// 	{id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
// 	{id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
// 	{id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
// 	{id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
// 	{id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
// ];