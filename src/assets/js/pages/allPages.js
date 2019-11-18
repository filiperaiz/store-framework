import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const main = {
    init() {
        if (globalView) {
            custom.moveBreadcrumbs();
            custom.listProductsCustom();
        }

        if (desktopView) {
        }

        if (mobileView) {
        }
    }
};

export { main };
