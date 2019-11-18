import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const productLook = {
	init() {
		if (globalView) {
			core.discountStampProduct();
		}

		if (desktopView) {
		}

		if (mobileView) {
			core.tabFixesMobile();
		}

		console.log('Página: Detalhe do look');
	}
};

export { productLook };
