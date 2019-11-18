import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const productDetail = {
    init() {
        if (globalView) {
            core.discountStampProduct();
            custom.productNotifyMe();
            core.productUnavailable();
        }

        if (desktopView) {
            core.tabFixes();
        }

        if (mobileView) {
            core.tabFixesMobile();
        }

        console.log('Página: Detalhe do produto');
    }
};

export { productDetail };
