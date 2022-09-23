<script setup>
	import { ref, onMounted } from "vue";
	import { pullGroup } from "./data/data.js";
	import GroupPart from "./components/GroupPart/GroupPart.vue";
	import CreateList from "./components/CreateList/CreateList.vue";
	const groupsName = ref("IndianRed");

	onMounted(async () => {
		const getGroups = await pullGroup();
		groupsName.value = getGroups;
	});
	</script>
	
	<template>
		<GroupPart :groupName="groupsName"></GroupPart>
		<CreateList></CreateList>
	</template>
	
	<style scoped></style>