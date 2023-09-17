<template>
	
	<div class="full-height">
		
		<golden-layout
			ref="GLayoutRoot"
			:config="prefinedLayouts.miniRow"
			style="width: 1550px; height: 90vh"
		>
			<template #Content1="{ abc }">
				<div style="color: white">{{abc}}</div>
			</template>
			<template #Content2="{ abc }" >
				<div style="width: 100%; color: white; overflow: auto">
	           {{abc}}
				</div>
			</template>
			<template #Content3="{ abc }">
				<div style="width: 100%; color: white; overflow: auto">
	            {{abc}}
				</div>
			</template>
		</golden-layout>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { prefinedLayouts } from "@/ts/predefined-layouts";
import { GoldenLayout } from './components/index';




</script>

<style scoped>


</style>
./components