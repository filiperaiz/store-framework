import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const header = {
	init() {
		if (globalView) {
			core.dropDownSearch();
		}

		if (desktopView) {
			core.dynamicMenuDropDown();
			custom.showSearch();
		}

		if (mobileView) {
			core.navMobile();
			core.wishlistMobile();
			core.searchtMobile();
			custom.showSearchMobile();
			core.basketNumberMobile();
		}
	}
};

export { header };
