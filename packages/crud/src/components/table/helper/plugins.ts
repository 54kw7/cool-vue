import { getCurrentInstance } from "vue";
import { useConfig } from "../../../hooks";
import { uniqueFns } from "../../../utils";

export function usePlugins() {
	const that: any = getCurrentInstance();
	const { style } = useConfig();

	// 插件创建
	function create(plugins: ClTable.Plugin[] = []) {
		// 执行
		uniqueFns([...(style.table.plugins || []), ...plugins]).forEach((p) => {
			p({
				exposed: that.exposed
			});
		});
	}

	return {
		create
	};
}
