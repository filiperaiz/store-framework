import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const vitrine = {
	init() {
		if (globalView) {
			custom.moveSeo();
			custom.moveSeoLook();
		}

		if (desktopView) {
		}

		if (mobileView) {
		}

		console.log('Página: Vitrine');
	}
};

export { vitrine };
