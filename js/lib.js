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


async function renderTable(dataUrl, keyboardKeys_pageElementID2, tabulator_keyboardKeys_config) {
	let users = await getData(dataUrl);
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

// console.log(renderUsers(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config));



// tabulator_keyboardKeys_config["data"] = a1;
// var table = new Tabulator(keyboardKeys_pageElementID2, tabulator_keyboardKeys_config);

// table.on("rowClick", function (e, row) {
// 	alert("Row " + row.getIndex() + " Clicked!!!!");
// });