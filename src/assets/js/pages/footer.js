import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const footer = {
    init() {
        if (globalView) {
        }

        if (desktopView) {
        }

        if (mobileView) {
            core.footerDropDown();
        }
    }
};

export { footer };
