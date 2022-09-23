<script setup>
	import { ref } from "vue";
	import CreateList from "../CreateList/CreateList.vue";
	import { pullStudents } from "../../data/data.js";
	const props = defineProps(["groupName"]);
	const students = ref();

	const selectedGroup = async (group) => {
		const selectedStudents = await pullStudents(group);
		students.value = selectedStudents;
	};
	</script>
	
	<template>
		<div class="contents">
		 <!-- group names pass to cards via v-for -->
			<div class="card" v-for="groups in props.groupName" :key="groups">
				<div @click="selectedGroup(groups)">
					<div class="group">
						<h2 class="card__title">{{ groups }}</h2>
					</div>
				</div>
			</div>
		</div>
	
		<!-- pulling students pass to CreateList component via props -->
		<CreateList :group="students"></CreateList>
	</template>
	
	<style scoped>
	.contents {
		display: flex;
		justify-content: center;
	}
	.card {
		width: 175px;
		height: 75px;
		background-color: beige;
		color: blueviolet;
		border-radius: 7px;
		padding: 15px;
	}
	.group {
		text-align: center;
		padding: 15px;
	}
	.content :hover {
		transform: scale(1.1);
	}
	</style>