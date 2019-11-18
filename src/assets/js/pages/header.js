import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const header = {
	init() {
		if (globalView) {
			core.dropDownSearch();
		}

		if (desktopView) {
			core.fixedHeader();
			core.dynamicMenuDropDown();
		}

		if (mobileView) {
			core.navMobile();
			core.wishlistMobile();
			core.basketNumberMobile();
		}
	}
};

export { header };
