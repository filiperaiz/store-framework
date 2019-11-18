import { core } from './modules/core';
import { header } from './pages/header';
import { footer } from './pages/footer';
import { main } from './pages/allPages';
import { catalog } from './pages/catalog';
import { home } from './pages/home';
import { look } from './pages/look';
import { productDetail } from './pages/productDetail';
import { productLook } from './pages/productLook';
import { vitrine } from './pages/vitrine';

const init = () => {
    if (!core.bodyClass('quickview')) {
        header.init();
        footer.init();
        main.init();
    }

    if (core.bodyClass('home')) {
        home.init();
    }

    if (core.bodyClass('catalog')) {
        catalog.init();
    }

    if (core.bodyClass('vitrine')) {
        vitrine.init();
    }

    if (core.bodyClass('product')) {
        productDetail.init();
    }

    if (core.bodyClass('lookDetalhe')) {
        productLook.init();
    }

    if (core.bodyClass('look') && !core.bodyClass('lookDetalhe')) {
        look.init();
    }
};

/* =================================================== */
/* ================= INIT FUNCTIONS ================== */
/* =================================================== */

// Passar como parâmetro o tempo do load em segundos
core.iconLoader(2);

// Carrega as funções após o carregamento da pagina
window.onload = init;
