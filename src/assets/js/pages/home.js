import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const home = {
    init() {
        if (globalView) {
        }

        if (desktopView) {
            core.carousel($('.b-top .owl-carousel'), 1, true, true, true);
        }

        if (mobileView) {
            core.carousel($('.b-top-mobile .owl-carousel'), 1, false, true, true);
            core.carousel($('.b-betweenvit-mobile .owl-carousel'), 1, true, false, true);
        }

        console.log('Página: Home');
    }
};

export { home };
