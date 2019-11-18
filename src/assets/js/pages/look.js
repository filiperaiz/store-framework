import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const look = {
	init() {
		if (globalView) {
		}

		if (desktopView) {
			core.filterHorizontal();
			core.listToDrop();
			custom.moveVsModeLook();
			custom.moveItemPage();
		}

		if (mobileView) {
			core.orderFilterMobile();
			custom.moveVsModeLook();
			custom.moveItemPage();
		}

		console.log('Página: Look');
	}
};

export { look };
