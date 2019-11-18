const $ = jQuery;

const core = {
    // Validação da class body
    bodyClass(className) {
        const body = document.getElementsByTagName('body')[0];
        return body.classList.contains(className);
    },

    // Função para ativar/desativar o ícone de load no carregamento da pagina
    iconLoader(time = 0) {
        if (!core.bodyClass('quickview')) {
            const loader = document.querySelector('.box-loader');

            if (!!loader) {
                if (time == 0) {
                    core.remove(loader);
                } else {
                    let seconds = time * 1000;
                    setTimeout(() => core.remove(loader), seconds);
                }
            }
        }
    },

    // Remove o elemento
    remove(element) {
        element.parentNode.removeChild(element);
    },

    // Inserir o elemento What antes de um elemento Where
    outBefore(what, where) {
        where.parentNode.insertBefore(what, where);
    },

    // Inserir o elemento What depois de um elemento Where
    outAfter(what, where) {
        where.parentNode.insertBefore(what, where.nextSibling);
    },

    // Inserir o elemento What como primeiro filho do elemento Where
    inBefore(what, where) {
        where.insertBefore(what, where.firstChild);
    },

    // Inserir elemento What como ultimo filho do elemento Where
    inAfter(what, where) {
        where.insertBefore(what, where.lastChild);
    },

    // Coloca o nav mobile fora do header , Abre/fecha o menu mobile e trava/destrava o scroll do body
    navMobile() {
        const header = document.querySelector('#header');
        const menuMobile = document.querySelector('.wrap-nav-mobile');
        const userLogin = document.querySelector('.user-login');

        menuMobile.insertAdjacentHTML('beforeend', '<div class="hide-menu"></div>');

        const body = document.querySelector('body');
        const html = document.querySelector('html');
        const clickOpen = document.querySelector('.nav-click');
        const clickClose = document.querySelector('.hide-menu');

        if (!!menuMobile) {
            core.outBefore(menuMobile, header);
            core.inBefore(userLogin, menuMobile);

            clickOpen.addEventListener('click', () => {
                html.classList.add('noscroll');
                body.classList.add('noscroll');
                menuMobile.classList.add('active');
                menuMobile.insertAdjacentHTML('afterend', '<div class="navmask"></div>');
            });

            clickClose.addEventListener('click', () => {
                html.classList.remove('noscroll');
                body.classList.remove('noscroll');
                menuMobile.classList.remove('active');
                core.remove(document.querySelector('.navmask'));
            });
        }
    },

    //Cria ou reinicia um carousel
    carousel(carousel, qtd = 4, arrows = true, buttons = true, autoPlay = false, autoHeight = false) {
        if (!!carousel) {
            carousel.each(function(i, el) {
                let elementLength = carousel[i].children.length;

                if ($(el).hasClass('owl-carousel')) {
                    $(el)
                        .data('owlCarousel')
                        .destroy();

                    elementLength = carousel[i].children.length;
                }

                if (elementLength > qtd) {
                    $(el).owlCarousel({
                        items: qtd, // items above 1400px browser width
                        itemsDesktop: [1400, qtd], //5 items between 1400px and 980px
                        itemsMobile: [979, qtd], //2 items between 979 and 0
                        navigation: arrows,
                        responsive: true,
                        pagination: buttons,
                        stopOnHover: true,
                        loop: true,
                        autoPlay: autoPlay,
                        autoHeight: autoHeight
                    });
                }
            });
        }
    },

    // Movimenta os campos de busca auto complete para dentro do bloco de busca do header
    dropDownSearch() {
        const search = document.querySelector('#header_busca_container');
        const searchInput = document.querySelector('#header_busca_container > input');

        setTimeout(() => {
            const autoComplete = document.querySelector('.autocomplete-mais-buscadas');
            if (!!autoComplete) {
                core.inAfter(autoComplete, search);
            }
        }, 1000);

        searchInput.addEventListener('keyup', () => {
            setTimeout(() => {
                const multiComplete = document.querySelector('.panel-multicomplete-results');
                if (!!multiComplete) {
                    core.inAfter(multiComplete, search);
                }
            }, 2000);
        });
    },

    //Setar o header fixo
    fixedHeader() {
        const header = document.querySelector('#header');

        if (!!header) {
            let lastScrollTop = 150;

            const translateY = 'translateY(-42px)';

            header.addEventListener('mouseover', () => {
                header.classList.add('hover');
                header.style.WebkitTransform = 'translateY(0)';
                header.style.msTransform = 'translateY(0)';
                header.style.transform = 'translateY(0)';
            });

            header.addEventListener('mouseout', () => header.classList.remove('hover', 'small-header'));

            window.onscroll = function() {
                if (window.pageYOffset > lastScrollTop) {
                    header.style.WebkitTransform = translateY;
                    header.style.msTransform = translateY;
                    header.style.transform = translateY;
                    header.classList.add('small-header');
                } else {
                    header.classList.remove('small-header');
                    header.style.WebkitTransform = 'translateY(0)';
                    header.style.msTransform = 'translateY(0)';
                    header.style.transform = 'translateY(0)';
                }

                // lastScrollTop = window.pageYOffset > 150 ? window.pageYOffset : lastScrollTop;
            };
        }
    },

    // Cria dropdown para os menus institucionais do footer mobile
    footerDropDown() {
        const tab = document.querySelectorAll('.box-institucional h3');

        tab.forEach((element, index) => {
            element.addEventListener('click', () => {
                element.parentElement.classList.toggle('active');
            });
        });
    },

    //Alinhamento vertical dos itens dos produtos de catalogo e outras areas da loja
    verticalAlign() {
        $('.list-products .hproduct .figure').matchHeight({ byRow: false, property: 'min-height' });
        $('.list-products .hproduct .tools').matchHeight({ byRow: false, property: 'min-height' });
        $('.list-products .hproduct .stamp').matchHeight({ byRow: false, property: 'min-height' });
        $('.list-products .hproduct .name').matchHeight({ byRow: false, property: 'min-height' });
        $('.list-products .hproduct .offers').matchHeight({ byRow: false, property: 'min-height' });
        $('.list-products .hproduct .parcel').matchHeight({ byRow: false, property: 'min-height' });
        $('.list-products .hproduct span.unavailable').matchHeight({ byRow: false, property: 'min-height', target: $('.list-products .hproduct #infoPrices') });
    },

    //Reset no carrossel de sku do catalogo
    resetSkuCat(qtd = 3) {
        const sku = $('.list-products .hproduct .skus');
        if (!!sku) {
            sku.each(function() {
                if ($(this).find('li').length > qtd) {
                    setTimeout(() => {
                        core.carousel($(this), qtd, true, false);
                    }, 1000);
                }
            });
        }
    },

    //Reset no carrossel de SKU's do look
    resetLookAsideSku(qtd = 3) {
        const skuLook = $('.lookDetalhe .aside .jcarousel-skin-tango');
        if (!!skuLook) {
            skuLook.each(function() {
                if ($(this).find('li').length > qtd) {
                    core.carousel($(this), qtd, true, false);
                }
            });
        }
    },

    //Adiciona botão de retornar ao topo
    addBtTop() {
        $('body').append('<div class="voltar-top"><i class="fas fa-angle-up"></i></div>');
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 50) {
                $('.voltar-top').addClass('active');
            } else {
                $('.voltar-top').removeClass('active');
            }
        });
        $('.voltar-top').click(function() {
            $('body,html').animate(
                {
                    scrollTop: 0
                },
                500
            );
        });
    },

    //Adiciona botões de acréscimo e descréscimo no campo de quantidade
    addQtdButtons() {
        if ($('body').hasClass('product') || $('body').hasClass('look') || $('body').hasClass('catalog')) {
            $('.txtQuantity').each(function() {
                let txtContainer = $(this),
                    input = txtContainer.find('.ipt-quantity'),
                    btnUp = txtContainer.find('.quantity-up'),
                    btnDown = txtContainer.find('.quantity-down'),
                    min = input.attr('min'),
                    max = input.attr('max');

                if (input.is(':disabled')) {
                    btnUp.toggle();
                    btnDown.toggle();
                }

                btnUp.click(function() {
                    let oldValue = parseFloat(input.val()),
                        newVal = oldValue + 1;

                    if (oldValue >= max) {
                        newVal = oldValue;
                    }

                    txtContainer.find('input').val(newVal);
                    txtContainer.find('input').trigger('change');
                });

                btnDown.click(function() {
                    let oldValue = parseFloat(input.val()),
                        newVal = oldValue - 1;

                    if (oldValue <= min) {
                        newVal = oldValue;
                    }

                    txtContainer.find('input').val(newVal);
                    txtContainer.find('input').trigger('change');
                });
            });
        }
    },

    // Transformar em tabs
    tabFixes() {
        const infoProduct = document.querySelector('#info-product');
        const tabsBlock = `
			<div class="tabs-block">
				<div class="tab-link">
				</div>
				<div class="tab-content">
				</div>
			</div>
		`;

        infoProduct.insertAdjacentHTML('afterend', tabsBlock);

        let h2 = document.querySelectorAll('.section.about:not(.opinion) h2');
        let content = document.querySelectorAll('.section.about:not(.opinion) > div');
        const tabLink = document.querySelector('.tabs-block .tab-link');
        const tabContent = document.querySelector('.tabs-block .tab-content');

        h2.forEach((element, index) => {
            if (index == 0) {
                element.classList.add('active');
            }

            element.classList.add('btn-tab');
            element.classList.add('tab-' + (index + 1));
            core.inAfter(element, tabLink);
        });

        content.forEach((element, index) => {
            if (index == 0) {
                element.classList.add('active');
            }

            element.classList.add('section');
            core.inAfter(element, tabContent);
        });

        const tabLinkH2 = document.querySelectorAll('.btn-tab');
        const tabContentDiv = document.querySelectorAll('.tabs-block .tab-content div');
        const infoTexts = document.querySelector('.info-texts');

        if (!!infoTexts) {
            core.remove(infoTexts);
        }

        const resetTab = () => {
            tabLinkH2.forEach(element => {
                element.classList.remove('active');
            });

            tabContentDiv.forEach(element => {
                element.classList.remove('active');
            });
        };

        tabLinkH2.forEach((element, index) => {
            element.addEventListener('click', () => {
                resetTab();
                element.classList.add('active');
                tabContentDiv[index].classList.add('active');
            });
        });
    },

    // Corrige tabs na versão mobile
    tabFixesMobile() {
        const infoProduct = document.querySelector('#info-product');
        const tabsBlock = '<div class="abas-dropdown"></div>';

        infoProduct.insertAdjacentHTML('afterend', tabsBlock);

        const section = document.querySelectorAll('.section.about');
        const abas = document.querySelector('.abas-dropdown');

        section.forEach((element, index) => {
            element.removeAttribute('id');
            element.classList.remove('section');
            element.classList.remove('about');
            element.classList.add('resp-abas');
            core.inAfter(element, abas);
        });

        const tabLink = document.querySelectorAll('.resp-abas');

        const infoTexts = document.querySelector('.info-texts');

        if (!!infoTexts) {
            core.remove(infoTexts);
        }

        tabLink.forEach((element, index) => {
            element.addEventListener('click', () => {
                element.classList.toggle('open');
            });
        });
    },

    // Filtro horizontal
    filterHorizontal() {
        let details = document.querySelector('.content .filter-details');
        let main = document.querySelector('.content #divMain');
        let sort;

        if (core.bodyClass('catalog')) {
            sort = document.querySelector('.content #divSort');
        }

        if (core.bodyClass('look')) {
            sort = document.querySelector('.content #ordena_produtos');
        }

        if (!!main) {
            main.classList.add('filter-horizontal');
        }

        if (!!sort) {
            sort.classList.add('filter-horizontal');
            details.classList.add('filter-horizontal');
        }
    },

    // Lista de dropdown catálogos
    listToDrop() {
        const dropBlock = `
			<div class="filtro-horizontal">
				<div class="content-filters">
					<h3 class="horizontal-title">Ordenar por:</h3>
					<ul class="horizontal-list filtro-subcategoria">
						<li>
							<span class="spnFiltro">Selecione</span>
							<ul class="filterBlock">

							</ul>
						</li>
					</ul>
				</div>
			</div>
		`;

        const orderHorizontal = document.querySelector('.filters.filter-horizontal');
        const list = document.querySelectorAll('.filters.filter-horizontal ul li');

        if (orderHorizontal !== null) {
            orderHorizontal.insertAdjacentHTML('beforeend', dropBlock);

            const filterBlock = document.querySelector('.filters.filter-horizontal .horizontal-list li .filterBlock');

            list.forEach((element, index) => {
                core.inAfter(element, filterBlock);
            });

            const selected = document.querySelector('.filters.filter-horizontal .horizontal-list li .filterBlock .selected');
            let span = document.querySelector('.filters.filter-horizontal .horizontal-list li .spnFiltro');

            span.innerHTML = selected.textContent;
        }

        document.querySelectorAll('.horizontal-list li').forEach(element => {
            element.addEventListener('click', () => {
                element.classList.toggle('open');
            });
        });
    },

    // Selects filtro e ordenação
    orderFilterMobile() {
        const dropBlock = '<div class="box-filter"></div>';

        const content = document.querySelector('#main .content');

        if (!!content) {
            content.insertAdjacentHTML('afterbegin', dropBlock);

            const box = document.querySelector('.box-filter');

            const btnFilters = document.querySelector('.open-mob-filters');
            const divMain = document.querySelector('#divMain');
            const ordenaProdutos = document.querySelector('#ordena_produtos');
            const divSort = document.querySelector('#divSort');
            const filterDetails = document.querySelector('.filter-details');

            let sort = divSort !== null ? divSort : ordenaProdutos;

            core.inAfter(sort, box);
            core.inBefore(filterDetails, box);
            core.inAfter(divMain, filterDetails);

            btnFilters.addEventListener('click', () => {
                filterDetails.classList.toggle('open');
                sort.classList.remove('open');
            });

            sort.addEventListener('click', () => {
                sort.classList.toggle('open');
                filterDetails.classList.remove('open');
            });

            const ul = document.querySelectorAll('#divMain .block > ul > li');
            const vertical = document.querySelectorAll('.side-filters li');

            let click = vertical.length > 0 ? vertical : ul;

            const horizontal = document.querySelectorAll('.horizontal-list li');

            click.forEach(element => {
                element.addEventListener('click', () => {
                    element.classList.toggle('open');
                });
            });

            horizontal.forEach(element => {
                element.addEventListener('click', () => {
                    element.classList.toggle('open');
                });
            });
        }
    },

    // Width menu dinâmico dropdown
    dynamicMenuDropDown() {
        $('.navbar li').hover(function() {
            let sub = $(this).children('.sub-nav');
            sub.width($('.navbar #nav').width() + 0);
        });
    },

    // Inserir selo de desconto
    discountStamp() {
        const hproducts = document.querySelectorAll('.list-products li .hproduct');
        if (!!hproducts) {
            hproducts.forEach(element => {
                const figure = element.querySelector('.figure');
                let priceFrom = element.querySelector('.regular del');
                let priceTo = element.querySelector('.sale strong');

                if (!!priceFrom && !!priceTo) {
                    priceFrom = priceFrom.textContent.replace(/[^0-9,]/g, '').replace(',', '.');
                    priceTo = priceTo.textContent.replace(/[^0-9,]/g, '').replace(',', '.');

                    const result = Math.round(100 - (parseFloat(priceTo).toFixed(2) / parseFloat(priceFrom).toFixed(2)) * 100);

                    if (!isNaN(result)) {
                        const stamp = `<div class="selo-desconto"><span>${result}%</span>off</div>`;
                        figure.insertAdjacentHTML('afterbegin', stamp);
                    }
                }
            });
        }
    },

    // Inserir selo de desconto
    discountStampProduct() {
        let priceFrom = document.querySelector('#info-product .offers .regular');
        let priceTo = document.querySelector('#info-product .offers .sale strong');

        if (!!priceFrom && !!priceTo) {
            priceFrom = priceFrom.textContent.replace(/[^0-9,]/g, '').replace(',', '.');
            priceTo = priceTo.textContent.replace(/[^0-9,]/g, '').replace(',', '.');

            const result = Math.round(100 - (parseFloat(priceTo).toFixed(2) / parseFloat(priceFrom).toFixed(2)) * 100);

            if (!isNaN(result)) {
                const stamp = `<div class="selo-desconto"><span>${result}%</span>off</div>`;

                const content = document.querySelector('#info-product .info-left');
                content.insertAdjacentHTML('afterbegin', stamp);
            }
        }
    },

    //Adiciona  numero de itens no carrinho para versão mobile
    basketNumberMobile() {
        const what = document.querySelector('.basket-count-number');
        const where = document.querySelector('.btn-cart-mobile .qtd-cart');

        if (!!what) {
            core.inBefore(what, where);
        }
    },

    //Adiciona icone wishlist para versão mobile
    wishlistMobile() {
        const what = document.querySelector('.btn-wishlist-mobile');
        const where = document.querySelector('.header-btn-mobile');

        if (!!what) {
            core.inBefore(what, where);
        }
    },

    searchtMobile() {
        const what = document.querySelector('.btn-search-mobile');
        const where = document.querySelector('.header-btn-mobile');

        if (!!what) {
            core.inBefore(what, where);
        }
    },

    clickVsmode() {
        const table = document.querySelector('.vs-mode #table');
        const list = document.querySelector('.vs-mode #list');
        table.addEventListener('click', () => {
            table.classList.add('selected');
            list.classList.remove('selected');
        });
        list.addEventListener('click', () => {
            table.classList.remove('selected');
            list.classList.add('selected');
        });
    },

    productUnavailable() {
        $('#ProductBuy .action').observe('childlist subtree', function(record) {
            if ($('#ProductBuy .action .notifyme').length) {
                $('#info-product')
                    .addClass('product-unavailable')
                    .removeClass('product-available');
            } else {
                $('#info-product')
                    .removeClass('product-unavailable')
                    .addClass('product-available');
            }
        });
    }
};

// Constantes de media queries para execução dos scripts específicos de cada pagina
const globalView = true;
const desktopView = window.innerWidth >= 979 ? true : false;
const mobileView = window.innerWidth <= 978 ? true : false;

export { core, globalView, desktopView, mobileView, $ };
