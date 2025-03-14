import { useElApi } from "../../../hooks";

export function useApi({ Form }: { Form: Vue.Ref<any> }) {
	return useElApi(
		[
			"open",
			"close",
			"clear",
			"reset",
			"submit",
			"bindForm",
			"changeTab",
			"setTitle",
			"showLoading",
			"hideLoading",
			"collapseItem",
			"getForm",
			"setForm",
			"invokeData",
			"setData",
			"setConfig",
			"setOptions",
			"setProps",
			"toggleItem",
			"hideItem",
			"showItem",
			"validate",
			"validateField",
			"resetFields",
			"scrollToField",
			"clearValidate",
			"fields"
		],
		Form
	);
}
