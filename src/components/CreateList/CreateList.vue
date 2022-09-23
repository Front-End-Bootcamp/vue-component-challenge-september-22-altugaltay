<script setup>
	const props = defineProps(["group"]);
	</script>
	
	<template>
		<!-- seperate students and assistants -->
		<div class="content" v-for="student in props.group">
			<ul class="group-table">

				<li class="students" v-if="student.type == null">
					<div>{{ student.name }}</div>
				</li>
				
				<li class="assistant" v-else="student.type == 'assistant'">
					<div>{{ student.name }}</div>
				</li>
				

			</ul>
		</div>
	</template>
	
	<style scoped>
	.group-table {
		width: auto;
		list-style-type: none;
		display: flex;
		justify-content: center;
	}
	.assistant {
		background-color: aquamarine;
		width: 60%;
		padding: 15px;
		border-radius: 7px;
		text-align: center;
	}
	.students {
		background-color: antiquewhite;
		width: 60%;
		padding: 15px;
		border-radius: 7px;
		text-align: center;
	
	}

	</style>