import {
	ComponentItemConfig,
	ItemType,
	LayoutConfig,
} from "golden-layout";

const miniRowConfig: LayoutConfig = {
	root: {
		type: ItemType.row,
		content: [{
			type: "component",
			title: "Component A",
			header: { show: "top" },
			componentType: "Content1",
			width: 50,
			componentState: { abc: 'A' },
		} as ComponentItemConfig, {
			type: ItemType.column,
			content: [{
				type: "component",
				title: "Component B",
				header: { show: "top" },
				componentType: "Content1",
				width: 50,
				componentState: { abc: 'B' },
			} as ComponentItemConfig, {
				type: "component",
				title: "Component C",
				header: { show: "top"},
				componentType: "Content2",
				componentState: { abc: 'C' },
			} as ComponentItemConfig
		]}]
	}
};

export const prefinedLayouts = {
	miniRow: miniRowConfig,
}