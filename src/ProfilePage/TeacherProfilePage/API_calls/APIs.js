function getData() {
	let dataToReturn;
	const requestURL1 = "http://localhost:8080/teamzeromissionreadybackend";
	fetch(requestURL1)
		.then((response) => response.json())
		.then((data) => (data = dataToReturn));
	return dataToReturn;
}

function getProfileName() {
	let dataToReturn;
	const requestURL1 = "http://localhost:8080/teamzeromissionreadybackend";
	fetch(requestURL1)
		.then((response) => response.json())
		.then((data) => (dataToReturn = data[0].Course));
	return dataToReturn;
}

function getCourseName() {
	let dataToReturn;
	const requestURL1 = "http://localhost:8080/teamzeromissionreadybackend";
	fetch(requestURL1)
		.then((response) => response.json())
		.then((data) => (dataToReturn = data[0].SubJectMatter1));
	return dataToReturn;
}

export default getData;
