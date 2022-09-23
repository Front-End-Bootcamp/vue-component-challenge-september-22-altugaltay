export async function pullData() {
	const result = await fetch(
		"https://raw.githubusercontent.com/Front-End-Bootcamp/vue-bootcamp/d6f881aec77f15a4107eafc10f6a91e90f9268a4/homework%201/data.json"
	)
		.then((response) => response.json())
		.then((data) => data);

	return result;
}

// pull group names
export async function pullGroup() {
	const data = await pullData();
	const groupNames = data.map((student) => student.group);
	const uniqueGroupNames = [...new Set(groupNames)];
	return uniqueGroupNames;
}

// pull students
export async function pullStudents(groupName) {
	const data = await pullData();
	const dataFiltered = data.filter((student) => student.group == groupName);
	const dataMaped = dataFiltered.map((student) => {
		return { name: student.name, type: student.type };
	});
	return dataMaped;
}