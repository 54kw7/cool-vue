<template>
	<div v-loading="loading" class="page-iframe" :element-loading-text="$t('拼命加载中')">
		<iframe :ref="setRefs('iframe')" :src="url" frameborder="0"></iframe>
	</div>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'frame-web'
});

import { ref, watch, onMounted } from 'vue';
import { useCool } from '/@/cool';

const loading = ref(false);
const url = ref();

const { route, refs, setRefs } = useCool();

watch(
	() => route,
	val => {
		url.value = val.meta?.iframeUrl;
	},
	{
		immediate: true,
		deep: true
	}
);

onMounted(() => {
	loading.value = true;

	refs.iframe.onload = () => {
		loading.value = false;
	};
});
</script>

<style lang="scss" scoped>
.page-iframe {
	height: 100%;

	iframe {
		height: 100%;
		width: 100%;
	}
}
</style>
