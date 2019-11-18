import { core, globalView, desktopView, mobileView, $ } from '../modules/core';

const custom = {
    productNotifyMe() {
        setTimeout(() => {
            document.querySelectorAll('#info-product').forEach(element => {
                const notifyMe = element.querySelector('.notifyme.form');
                const tools = element.querySelector('.delivery');
                if (!!notifyMe) {
                    core.remove(tools);
                }
            });
        }, 1000);
    },

    listProductsCustom() {
        const hproducts = document.querySelectorAll('.list-products .hproduct');
        if (!!hproducts) {
            hproducts.forEach(element => {
                const tools = element.querySelector('.tools');
                const unavailable = element.querySelector('span.unavailable');
                const details = element.querySelector('.details');
                const link = element.querySelector('.details .link');

                if (!!tools) {
                    core.inBefore(tools, details);
                }

                if (!!unavailable) {
                    core.inAfter(unavailable, link);
                }
            });

            core.verticalAlign();
            core.discountStamp();

            let qtd = desktopView ? 3 : 2;
            core.resetSkuCat(qtd);
        }
    },

    infiniteScroll() {
        const target = document.querySelector('.show-four .jscroll-inner');
        const mutationObserver = new MutationObserver(function(mutations) {
            setTimeout(() => {
                custom.listProductsCustom();
            }, 3000);
        });
        const config = { attributes: true, childList: true, characterData: true };
        mutationObserver.observe(target, config);
    },

    moveBreadcrumbs() {
        const what = document.querySelector('#breadcrumbs');
        const where = document.querySelector('#main .container');

        if (!!what) {
            core.inBefore(what, where);
        }
    },

    moveVsMode() {
        const what = document.querySelector('.vs-mode');
        const where = mobileView ? document.querySelector('.box-filter') : document.querySelector('#divSort');

        if (!!what) {
            core.inBefore(what, where);
        }
    },

    moveVsModeLook() {
        const what = document.querySelector('.vs-mode');
        const where = mobileView ? document.querySelector('.box-filter') : document.querySelector('#ordena_produtos');

        if (!!what) {
            core.inBefore(what, where);
        }
    },

    moveSeo() {
        const what = document.querySelector('.categ-desc');
        const where = document.querySelector('.banners.b-top') ? document.querySelector('.banners.b-top') : document.querySelector('#breadcrumbs');

        if (!!what) {
            core.outAfter(what, where);
        }
    },

    moveSeoLook() {
        const what = document.querySelector('.categ-desc-look');
        const where = document.querySelector('.banners.b-top') ? document.querySelector('.banners.b-top') : document.querySelector('#breadcrumbs');

        if (!!what) {
            core.outAfter(what, where);
        }
    },

    moveItemPage() {
        const what = document.querySelector('.filter-details > p');
        const where = document.querySelector('.pagination');

        if (where == null) {
            core.remove(what);
        }

        if (!!what && !!where) {
            core.inBefore(what, where);
            where.classList.add('top');
        }
    },

    showSearch() {
        const toggle = document.querySelector('.iconav-search');
        const sectionSearch = document.querySelector('.header_search');

        toggle.addEventListener('click', () => {
            sectionSearch.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    },

    showSearchMobile() {
        const toggle = document.querySelector('.btn-search-mobile');
        const sectionSearch = document.querySelector('.header_search');

        toggle.addEventListener('click', () => {
            sectionSearch.classList.toggle('active');
            toggle.classList.toggle('active');
        });
    }
};

export { custom };
