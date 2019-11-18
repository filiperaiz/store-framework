import { core, globalView, desktopView, mobileView, $ } from '../modules/core';
import { custom } from '../modules/custom';

const catalog = {
    init() {
        if (globalView) {
            custom.moveSeo();
            core.clickVsmode();
        }

        if (desktopView) {
            core.filterHorizontal();
            core.listToDrop();
            custom.moveVsMode();
            custom.moveItemPage();
        }

        if (mobileView) {
            core.orderFilterMobile();
            custom.moveVsMode();
            custom.moveItemPage();
        }

        console.log('Página: Catálogo');
    }
};

export { catalog };
