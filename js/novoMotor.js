var novaEscala = 1;
var novaEscalaTextos = 1;

var tipoDispositivo = "desktop";

var ratio = $(window).width() / $(window).height();

function redimencionarQuadros() {
    var alturaCompleta = $("#planetario-completo").height();

    var tamanhoTela = $(window).width();

    if (tamanhoTela > 1081) {
        //                    var alturaCaixa = alturaCompleta - 54;
        var alturaCaixa = alturaCompleta;
    } else {
        alturaCompleta = alturaCompleta;

        tipoDispositivo = "mobile";

        var alturaCaixa = alturaCompleta;

        $("#cont-completo-planetas-curiosidades").css({
            height: alturaCaixa + "px",
            //                        'margin-top':'-'+alturaCaixa+'px'
        });
    }

    /* 54 é a altura da caixa de menu. Ao tirar ela, pode-se retirar do calculo */

    //85 é a altura da logo em condições FULL HD
    var novoTamanhoLogoTabela = (85 * alturaCompleta) / 1080;
    var novoTamanhoLogoToolzz = (60 * alturaCompleta) / 1080;

    var novoTamanho15px = (15 * alturaCompleta) / 1080;
    var novoTamanho55px = (55 * alturaCompleta) / 1080;
    var novoTamanho90px = (90 * alturaCompleta) / 1080;
    var novoTamanho120px = (120 * alturaCompleta) / 1080;
    var novoTamanho135px = (135 * alturaCompleta) / 1080;
    var novoTamanhoItensMenu = (35 * alturaCompleta) / 1080;

    var novoTamanhoItensMenuCirculo = (33 * alturaCompleta) / 1080;
    //                var novoTamanhoItensMenuCirculoMenor = (25 * alturaCompleta)/1080;

    var diferencaTamanhoItensMenu =
        novoTamanho55px - novoTamanhoItensMenuCirculo;

    $("#logo-sistema-planetario").css({
        height: novoTamanhoLogoTabela + "px",
    });

    $("#btn-mais-infos-sistema-planetario").css({
        width: novoTamanho120px + "px",
        height: novoTamanho135px + "px",
    });

    $(".img-planeta-mais-infos-class").css({
        width: novoTamanho90px + "px",
        height: novoTamanho90px + "px",
        margin: "0px " + novoTamanho15px + "px 0px " + novoTamanho15px + "px",
    });

    $("#img-toolzz").css({
        height: novoTamanhoLogoToolzz + "px",
    });
    $(".caixa-menu-item-selecao").css({
        height: novoTamanhoItensMenu + "px",
    });
    $(".cont-btn-item-menu-lateral-esq").css({
        width: novoTamanho55px + "px",
        height: novoTamanhoItensMenu + "px",
    });
    $(".btn-item-menu-lateral-esq").css({
        width: novoTamanhoItensMenu + "px",
        height: novoTamanhoItensMenu + "px",
    });

    $(".btn-item-menu-lateral-esq-ligado").css({
        width: novoTamanhoItensMenu + "px",
        height: novoTamanhoItensMenu + "px",
        left: diferencaTamanhoItensMenu + "px",
    });

    $(".cont-btn-item-menu-lateral-esq-circulo").css({
        width: novoTamanhoItensMenuCirculo + "px",
        height: novoTamanhoItensMenuCirculo + "px",
    });
    $(".btn-item-menu-lateral-esq-circulo").css({
        width: novoTamanhoItensMenuCirculo + "px",
        height: novoTamanhoItensMenuCirculo + "px",
    });

    $("#cont-completo-planetas-curiosidades").css({
        height: alturaCaixa + "px",
        "margin-bottom": "-" + alturaCaixa + "px",
    });

    $("#cont-galaxia").css({
        height: alturaCaixa + "px",
    });
    $("#cont-lightbox-curiosidades").css({
        height: alturaCaixa + "px",
    });

    var valorAntigo_0 = 300;

    var novaAltura = (alturaCompleta * valorAntigo_0) / 1080;

    novaEscala = (alturaCompleta * 1) / 1080;

    novaEscalaTextos = 1 - novaEscala;

    novaEscalaTextos = novaEscalaTextos + 1;

    $(".cont-imagem-descricao-lightbox-class").css({
        width: novaAltura + "px",
    });

    //                $('.dinamica-escala-galaxia').css({
    //                    'transform': 'scale(' + novaEscala + ', ' + novaEscala + ')'
    //                });

    $(".imagem-descricao-lightbox").css({
        height: novaAltura + "px",
    });
}

redimencionarQuadros();

$(window).resize(function () {
    redimencionarQuadros();

    redimencionarPlanetas(tipoDadoAtual);
});

var menuAberto = false;

function menuMobile() {
    if (menuAberto) {
        document
            .getElementById("menu-planetas-mobile")
            .classList.remove("abrir-menu-mobile");
        document
            .getElementById("menu-itens-mobile")
            .classList.remove("menu-itens-cont-mobile-aberto");
        document
            .getElementById("caixa-itens-menu-mobile")
            .classList.remove("cont-itens-menu-mobile-abrir");
        document
            .getElementById("caixa-fundo-fechar-menu-mobile")
            .classList.remove("caixa-fechar-menu-mobile-aberto");

        document
            .getElementById("menu-funcionalidades-planetas-mobile")
            .classList.remove("bloquear-menu-mobile");

        menuAberto = false;
    } else {
        document
            .getElementById("menu-planetas-mobile")
            .classList.add("abrir-menu-mobile");
        document
            .getElementById("menu-itens-mobile")
            .classList.add("menu-itens-cont-mobile-aberto");
        document
            .getElementById("caixa-itens-menu-mobile")
            .classList.add("cont-itens-menu-mobile-abrir");
        document
            .getElementById("caixa-fundo-fechar-menu-mobile")
            .classList.add("caixa-fechar-menu-mobile-aberto");

        document
            .getElementById("menu-funcionalidades-planetas-mobile")
            .classList.add("bloquear-menu-mobile");

        menuAberto = true;
    }
}

function closeMenuMobile() {
    document
        .getElementById("menu-planetas-mobile")
        .classList.remove("abrir-menu-mobile");
    document
        .getElementById("menu-itens-mobile")
        .classList.remove("menu-itens-cont-mobile-aberto");
    document
        .getElementById("caixa-itens-menu-mobile")
        .classList.remove("cont-itens-menu-mobile-abrir");
    document
        .getElementById("caixa-fundo-fechar-menu-mobile")
        .classList.remove("caixa-fechar-menu-mobile-aberto");

    document
        .getElementById("menu-funcionalidades-planetas-mobile")
        .classList.remove("bloquear-menu-mobile");

    menuAberto = false;
}

var menuFuncionalidadesAberto = false;

function MenuFuncionalidadesMobile() {
    if (menuFuncionalidadesAberto) {
        document
            .getElementById("menu-funcionalidades-planetas-mobile")
            .classList.remove("abrir-menu-funcionalidades-mobile");
        document
            .getElementById("cont-btns-direita")
            .classList.remove("cont-funcionalidades-btns-direita-aberto");
        document
            .getElementById("fundo-funcionalidades-funcao")
            .classList.remove("funcionalidades-fundo-funcao-aberto");

        document
            .getElementById("menu-planetas-mobile")
            .classList.remove("bloquear-menu-mobile");

        menuFuncionalidadesAberto = false;
    } else {
        document
            .getElementById("menu-funcionalidades-planetas-mobile")
            .classList.add("abrir-menu-funcionalidades-mobile");
        document
            .getElementById("cont-btns-direita")
            .classList.add("cont-funcionalidades-btns-direita-aberto");
        document
            .getElementById("fundo-funcionalidades-funcao")
            .classList.add("funcionalidades-fundo-funcao-aberto");

        document
            .getElementById("menu-planetas-mobile")
            .classList.add("bloquear-menu-mobile");

        menuFuncionalidadesAberto = true;
    }
}

function closeMenuFuncionalidadesMobile() {
    document
        .getElementById("menu-funcionalidades-planetas-mobile")
        .classList.remove("abrir-menu-funcionalidades-mobile");
    document
        .getElementById("cont-btns-direita")
        .classList.remove("cont-funcionalidades-btns-direita-aberto");
    document
        .getElementById("fundo-funcionalidades-funcao")
        .classList.remove("funcionalidades-fundo-funcao-aberto");

    document
        .getElementById("menu-planetas-mobile")
        .classList.remove("bloquear-menu-mobile");

    menuFuncionalidadesAberto = false;
}

var listaBotoesCuriosidades = [
    "sol-curiosidades",
    "mercurio-curiosidades",
    "venus-curiosidades",
    "terra-curiosidades",
    "lua-curiosidades",
    "marte-curiosidades",
    "jupiter-curiosidades",
    "saturno-curiosidades",
    "urano-curiosidades",
    "netuno-curiosidades",
];

var listaTitulosCuriosidades = [
    "Sol",
    "Mercúrio",
    "Vênus",
    "Terra",
    "Lua",
    "Marte",
    "Júpiter",
    "Saturno",
    "Urano",
    "Netuno",
];

var curiosidadeAtual = "";

var planetaLightbox = "";

function lightBoxCuriosidades() {
    document
        .getElementById("menu-funcionalidades-planetas-mobile")
        .classList.add("esconder-menu-mobile");

    //                lightbox-curiosidades-sol

    if (curiosidadeAtual != "") {
        document
            .getElementById(curiosidadeAtual + "-curiosidades")
            .classList.remove("item-menu-lateral-selecionado");

        document
            .getElementById("lightbox-curiosidades-" + planetaLightbox)
            .classList.remove("lightbox-curiosidades-class-aparecer");

        setTimeout(function () {
            document
                .getElementById("lightbox-curiosidades-" + planetaLightbox)
                .classList.add("lightbox-curiosidades-class-desaparecer");
        }, 200);
    } else {
        document
            .getElementById("cont-lightbox-curiosidades")
            .classList.add("container-lightbox-curiosidades-aberto");

        document
            .getElementById("lightbox-curiosidades-" + planetaLightbox)
            .classList.remove("lightbox-curiosidades-class-desaparecer");
    }

    setTimeout(function () {
        curiosidadeAtual = planetaLightbox;

        document
            .getElementById(curiosidadeAtual + "-curiosidades")
            .classList.add("item-menu-lateral-selecionado");

        document
            .getElementById("lightbox-curiosidades-" + curiosidadeAtual)
            .classList.remove("lightbox-curiosidades-class-desaparecer");

        document
            .getElementById("lightbox-curiosidades-" + curiosidadeAtual)
            .classList.add("lightbox-curiosidades-class-aparecer");
    }, 200);
}

function closeLightBoxCuriosidades() {
    if (curiosidadeAtual != "") {
        document
            .getElementById("menu-funcionalidades-planetas-mobile")
            .classList.remove("esconder-menu-mobile");

        document
            .getElementById("cont-lightbox-curiosidades")
            .classList.remove("container-lightbox-curiosidades-aberto");

        document
            .getElementById(curiosidadeAtual + "-curiosidades")
            .classList.remove("item-menu-lateral-selecionado");

        document
            .getElementById("lightbox-curiosidades-" + curiosidadeAtual)
            .classList.add("lightbox-curiosidades-class-desaparecer");

        curiosidadeAtual = "";
    }
}

/*  ITEM 1: Velocidade  -- --  ITEM 2: Tamanho  ----  ITEM 3: Distância  */
var infosSol = ["0 Km/h", "1.390.000 Km", "149.600.000 Km"];
var infosMercurio = ["172.404 Km/h", "4.879,4 Km", "57.910.000 Km"];
var infosVenus = ["126.108 Km/h", "12.103,6 Km", "108.200.000 Km"];
var infosTerra = ["107.244 Km/h", "12.756,28 Km", "149.600.000 Km"];
var infosMarte = ["86.868 Km/h", "6.794,4 Km", "227.940.000 Km"];
var infosJupiter = ["47.016 Km/h", "142.984 Km", "778.330.000 Km"];
var infosSaturno = ["34.704 Km/h", "120.536 Km", "1.429.400.000 Km"];
var infosUrano = ["24.516 Km/h", "51.118 Km", "2.870.990.000 Km"];
var infosNetuno = ["19.548 Km/h", "49.492 Km", "4.504.300.000 Km"];

var listaInfos = [
    infosSol,
    infosMercurio,
    infosVenus,
    infosTerra,
    infosMarte,
    infosJupiter,
    infosSaturno,
    infosUrano,
    infosNetuno,
];

var listaIdsOrbitas = [
    "sol",
    "mercurio",
    "venus",
    "terra",
    "lua",
    "marte",
    "jupiter",
    "saturno",
    "urano",
    "netuno",
];

var listaIdsNovas = [
    "sol",
    "mercurio",
    "venus",
    "terra",
    "marte",
    "jupiter",
    "saturno",
    "urano",
    "netuno",
];

var listaValoresMercurioOrbita = [170, 150, 400];
var listaValoresVenusOrbita = [230, 180, 440];
var listaValoresTerraOrbita = [320, 220, 500];
var listaValoresMarteOrbita = [428, 256, 550];
var listaValoresJupiterOrbita = [570, 410, 650];
var listaValoresSaturnoOrbita = [810, 650, 850];
var listaValoresUranoOrbita = [1000, 980, 1040];
var listaValoresNetunoOrbita = [1120, 1300, 1200];

var listaValoresOrbitasCompleto = [
    0,
    listaValoresMercurioOrbita,
    listaValoresVenusOrbita,
    listaValoresTerraOrbita,
    listaValoresMarteOrbita,
    listaValoresJupiterOrbita,
    listaValoresSaturnoOrbita,
    listaValoresUranoOrbita,
    listaValoresNetunoOrbita,
];

var listaValoresMercurioPlaneta = [12, 7, 8];
var listaValoresVenusPlaneta = [20, 9, 10];
var listaValoresTerraPlaneta = [22, 12, 10];
var listaValoresMartePlaneta = [18, 8, 10];
var listaValoresJupiterPlaneta = [60, 17, 47];
var listaValoresSaturnoPlaneta = [48, 14, 42];
var listaValoresUranoPlaneta = [25, 12, 18];
var listaValoresNetunoPlaneta = [24, 11, 14];

var listaValoresPlanetasCompleto = [
    0,
    listaValoresMercurioPlaneta,
    listaValoresVenusPlaneta,
    listaValoresTerraPlaneta,
    listaValoresMartePlaneta,
    listaValoresJupiterPlaneta,
    listaValoresSaturnoPlaneta,
    listaValoresUranoPlaneta,
    listaValoresNetunoPlaneta,
];

var listaTiposDados = ["Velocidade de Órbita", "Diâmetro Equatorial", "do Sol"];

var listaClassesInfo = document.getElementsByClassName("cont-infos-planetas");
var listaBoxInfo = document.getElementsByClassName("box-infos-comp");

function redimencionarPlanetas(tipoRedimencionar) {
    var comprimentoCompleto = $("#planetario-completo").width();

    var tamanhoTela = $(window).width();

    if (tipoRedimencionar == 0) {
        var tamanhoProporcional120px = (120 * comprimentoCompleto) / 1920;
        $(".sol-orbita-novo-velocidade").css({
            width: tamanhoProporcional120px + "px",
            height: tamanhoProporcional120px + "px",
            "margin-top": "-" + tamanhoProporcional120px / 2 + "px",
            "margin-left": "-" + tamanhoProporcional120px / 2 + "px",
        });
        $(".sol-planeta-novo-velocidade").css({
            width: tamanhoProporcional120px + "px",
            height: tamanhoProporcional120px + "px",
        });

        var tamanhoProporcional37px = (37 * comprimentoCompleto) / 1920;
        var tamanhoProporcional19px = (19 * comprimentoCompleto) / 1920;
        var tamanhoProporcional20pxOther = (20 * comprimentoCompleto) / 1920;

        $(".lua-orbita-nova-velocidade").css({
            width: tamanhoProporcional37px + "px",
            height: tamanhoProporcional37px + "px",
            "margin-top": "-" + tamanhoProporcional19px + "px",
            "margin-left": "-" + tamanhoProporcional20pxOther + "px",
        });

        var tamanhoProporcional8px = (8 * comprimentoCompleto) / 1920;
        var tamanhoProporcional4px = (4 * comprimentoCompleto) / 1920;

        $(".img-lua-class-velocidade").css({
            width: tamanhoProporcional8px + "px",
            height: tamanhoProporcional8px + "px",
            "margin-top": "-" + tamanhoProporcional4px + "px",
            "margin-left": "-" + tamanhoProporcional4px + "px",
        });

        var tamanhoProporcional61px = (61 * comprimentoCompleto) / 1920;
        var tamanhoProporcional62px = (62 * comprimentoCompleto) / 1920;

        $(".img-saturno-anel-1-class-velocidade").css({
            width: tamanhoProporcional120px + "px",
            height: tamanhoProporcional120px + "px",
            "margin-top": "-" + tamanhoProporcional61px + "px",
            "margin-left": "-" + tamanhoProporcional62px + "px",
        });

        var tamanhoProporcional70px = (70 * comprimentoCompleto) / 1920;
        var tamanhoProporcional55px = (55 * comprimentoCompleto) / 1920;
        var tamanhoProporcional20px = (20 * comprimentoCompleto) / 1920;

        $(".img-saturno-anel-2-class-velocidade").css({
            width: tamanhoProporcional70px + "px",
            height: tamanhoProporcional70px + "px",
            "margin-top": "-" + tamanhoProporcional55px + "px",
            "margin-left": "-" + tamanhoProporcional55px + "px",
            border: tamanhoProporcional20px + "px solid rgba(199,136,65,0.5)",
        });

        for (var i = 1; i < listaIdsNovas.length; i++) {
            var orbitaClass = listaIdsNovas[i] + "-orbita-nova-velocidade";

            var planetaClass = "img-" + listaIdsNovas[i] + "-class-velocidade";

            var valorCalculoOrbita = listaValoresOrbitasCompleto[i][0];
            var valorCalculoPlaneta = listaValoresPlanetasCompleto[i][0];

            var tamanhoNovoOrbita =
                (valorCalculoOrbita * comprimentoCompleto) / 1920;
            var tamanhoNovoClasse =
                (valorCalculoPlaneta * comprimentoCompleto) / 1920;

            valorCalculoOrbita = tamanhoNovoOrbita;
            valorCalculoPlaneta = tamanhoNovoClasse;

            $("." + orbitaClass).css({
                width: valorCalculoOrbita + "px",
                height: valorCalculoOrbita + "px",
                "margin-top": "-" + valorCalculoOrbita / 2 + "px",
                "margin-left": "-" + valorCalculoOrbita / 2 + "px",
            });

            $("." + planetaClass).css({
                width: valorCalculoPlaneta + "px",
                height: valorCalculoPlaneta + "px",
                "margin-top": "-" + valorCalculoPlaneta / 2 + "px",
                "margin-left": "-" + valorCalculoPlaneta / 2 + "px",
            });
        }
    }

    if (tipoRedimencionar == 1) {
        var tamanhoProporcional130px = (130 * comprimentoCompleto) / 1920;
        $(".sol-orbita").css({
            width: tamanhoProporcional130px + "px",
            height: tamanhoProporcional130px + "px",
            "margin-top": "-" + tamanhoProporcional130px / 2 + "px",
            "margin-left": "-" + tamanhoProporcional130px / 2 + "px",
        });
        $(".sol-planeta").css({
            width: tamanhoProporcional130px + "px",
            height: tamanhoProporcional130px + "px",
        });

        var tamanhoProporcional28px = (28 * comprimentoCompleto) / 1920;
        var tamanhoProporcional15px = (15 * comprimentoCompleto) / 1920;

        $(".img-saturno-anel-1-class").css({
            width: tamanhoProporcional28px + "px",
            height: tamanhoProporcional28px + "px",
            "margin-top": "-" + tamanhoProporcional15px + "px",
            "margin-left": "-" + tamanhoProporcional15px + "px",
        });

        var tamanhoProporcional20px = (20 * comprimentoCompleto) / 1920;
        var tamanhoProporcional13px = (13 * comprimentoCompleto) / 1920;
        var tamanhoProporcional3px = (3 * comprimentoCompleto) / 1920;

        $(".img-saturno-anel-2-class").css({
            width: tamanhoProporcional20px + "px",
            height: tamanhoProporcional20px + "px",
            "margin-top": "-" + tamanhoProporcional13px + "px",
            "margin-left": "-" + tamanhoProporcional13px + "px",
            border: tamanhoProporcional3px + "px solid rgba(199,136,65,0.5)",
        });

        var tamanhoProporcional18px = (18 * comprimentoCompleto) / 1920;
        var tamanhoProporcional10px = (10 * comprimentoCompleto) / 1920;

        $(".lua-orbita-parado").css({
            width: tamanhoProporcional18px + "px",
            height: tamanhoProporcional18px + "px",
            "margin-top": "-" + tamanhoProporcional10px + "px",
            "margin-left": "-" + tamanhoProporcional10px + "px",
        });

        var tamanhoProporcional4px = (4 * comprimentoCompleto) / 1920;
        var tamanhoProporcional2px = (2 * comprimentoCompleto) / 1920;

        $(".img-lua-class").css({
            width: tamanhoProporcional4px + "px",
            height: tamanhoProporcional4px + "px",
            "margin-top": "-" + tamanhoProporcional2px + "px",
            "margin-left": "-" + tamanhoProporcional2px + "px",
        });

        for (var i = 1; i < listaIdsNovas.length; i++) {
            var orbitaClass = listaIdsNovas[i] + "-orbita";
            var orbitaParadoClass = listaIdsNovas[i] + "-orbita-parado";

            var planetaClass = "img-" + listaIdsNovas[i] + "-class";

            var valorCalculoOrbita = listaValoresOrbitasCompleto[i][1];
            var valorCalculoPlaneta = listaValoresPlanetasCompleto[i][1];

            var tamanhoNovoOrbita =
                (valorCalculoOrbita * comprimentoCompleto) / 1920;
            var tamanhoNovoClasse =
                (valorCalculoPlaneta * comprimentoCompleto) / 1920;

            valorCalculoOrbita = tamanhoNovoOrbita;
            valorCalculoPlaneta = tamanhoNovoClasse;

            $("." + orbitaClass).css({
                width: valorCalculoOrbita + "px",
                height: valorCalculoOrbita + "px",
                "margin-top": "-" + valorCalculoOrbita / 2 + "px",
                "margin-left": "-" + valorCalculoOrbita / 2 + "px",
            });
            $("." + orbitaParadoClass).css({
                width: valorCalculoOrbita + "px",
                height: valorCalculoOrbita + "px",
                "margin-top": "-" + valorCalculoOrbita / 2 + "px",
                "margin-left": "-" + valorCalculoOrbita / 2 + "px",
            });

            $("." + planetaClass).css({
                width: valorCalculoPlaneta + "px",
                height: valorCalculoPlaneta + "px",
                "margin-top": "-" + valorCalculoPlaneta / 2 + "px",
                "margin-left": "-" + valorCalculoPlaneta / 2 + "px",
            });
        }
    }

    if (tipoRedimencionar == 2) {
        var tamanhoProporcional130px = (350 * comprimentoCompleto) / 1920;
        $(".sol-orbita-nova").css({
            width: tamanhoProporcional130px + "px",
            height: tamanhoProporcional130px + "px",
            "margin-top": "-" + tamanhoProporcional130px / 2 + "px",
            "margin-left": "-" + tamanhoProporcional130px / 2 + "px",
        });
        $(".sol-planeta-novo").css({
            width: tamanhoProporcional130px + "px",
            height: tamanhoProporcional130px + "px",
        });

        var tamanhoProporcional95px = (95 * comprimentoCompleto) / 1920;
        var tamanhoProporcional49_5px = (49.5 * comprimentoCompleto) / 1920;
        var tamanhoProporcional50_5px = (50.5 * comprimentoCompleto) / 1920;

        $(".saturno-anel-1-planeta-novo").css({
            width: tamanhoProporcional95px + "px",
            height: tamanhoProporcional95px + "px",
            "margin-top": "-" + tamanhoProporcional49_5px + "px",
            "margin-left": "-" + tamanhoProporcional50_5px + "px",
        });

        var tamanhoProporcional61px = (61 * comprimentoCompleto) / 1920;
        var tamanhoProporcional45px = (45 * comprimentoCompleto) / 1920;
        var tamanhoProporcional15px = (15 * comprimentoCompleto) / 1920;

        $(".saturno-anel-2-planeta-novo").css({
            width: tamanhoProporcional61px + "px",
            height: tamanhoProporcional61px + "px",
            "margin-top": "-" + tamanhoProporcional45px + "px",
            "margin-left": "-" + tamanhoProporcional45px + "px",
            border: tamanhoProporcional15px + "px solid rgba(199,136,65,0.5)",
        });

        var tamanhoProporcional20px = (20 * comprimentoCompleto) / 1920;
        var tamanhoProporcional10px = (10 * comprimentoCompleto) / 1920;

        $(".lua-orbita-nova").css({
            width: tamanhoProporcional20px + "px",
            height: tamanhoProporcional20px + "px",
            "margin-top": "-" + tamanhoProporcional10px + "px",
            "margin-left": "-" + tamanhoProporcional10px + "px",
        });

        var tamanhoProporcional4px = (4 * comprimentoCompleto) / 1920;
        var tamanhoProporcional2px = (2 * comprimentoCompleto) / 1920;

        $(".lua-planeta-novo").css({
            width: tamanhoProporcional4px + "px",
            height: tamanhoProporcional4px + "px",
            "margin-top": "-" + tamanhoProporcional2px + "px",
            "margin-left": "-" + tamanhoProporcional2px + "px",
        });

        for (var i = 1; i < listaIdsNovas.length; i++) {
            var orbitaClass = listaIdsNovas[i] + "-orbita-nova";

            var planetaClass = listaIdsNovas[i] + "-planeta-novo";

            var valorCalculoOrbita = listaValoresOrbitasCompleto[i][2];
            var valorCalculoPlaneta = listaValoresPlanetasCompleto[i][2];

            var tamanhoNovoOrbita =
                (valorCalculoOrbita * comprimentoCompleto) / 1920;
            var tamanhoNovoClasse =
                (valorCalculoPlaneta * comprimentoCompleto) / 1920;

            valorCalculoOrbita = tamanhoNovoOrbita;
            valorCalculoPlaneta = tamanhoNovoClasse;

            $("." + orbitaClass).css({
                width: valorCalculoOrbita + "px",
                height: valorCalculoOrbita + "px",
                "margin-top": "-" + valorCalculoOrbita / 2 + "px",
                "margin-left": "-" + valorCalculoOrbita / 2 + "px",
            });

            $("." + planetaClass).css({
                width: valorCalculoPlaneta + "px",
                height: valorCalculoPlaneta + "px",
                "margin-top": "-" + valorCalculoPlaneta / 2 + "px",
                "margin-left": "-" + valorCalculoPlaneta / 2 + "px",
            });
        }
    }
}

var dadoAtual;
var planetaAtual = 0;

var tipoDadoAtual = 0;

/*  TipoDado 1: Velocidade  -- --  TipoDado: Tamanho  ----  TipoDado: Distância  */
function mudancaDado(tipoDado) {
    //VERIFICA SE O MODO SELECIONADO É O ATUAL. SE FOR, PARA POR AI
    if (dadoAtual == tipoDado) {
        return;
    }

    if (tipoDado != dadoAtual) {
        if (tipoDado == 0) {
            document
                .getElementById("btn-item-tamanho")
                .classList.add("btn-item-menu-lateral-esq-circulo-ligado");
            document
                .getElementById("btn-item-distancia")
                .classList.remove("btn-item-menu-lateral-esq-circulo-ligado");
            document
                .getElementById("btn-item-velocidade")
                .classList.remove("btn-item-menu-lateral-esq-circulo-ligado");

            modo_comp_metade = "completo";
            changeScale(1);
            changeClassVelocity(0);

            tipoDadoAtual = 0;

            redimencionarPlanetas(tipoDadoAtual);
        }
        if (tipoDado == 2) {
            document
                .getElementById("btn-item-tamanho")
                .classList.remove("btn-item-menu-lateral-esq-circulo-ligado");
            document
                .getElementById("btn-item-distancia")
                .classList.add("btn-item-menu-lateral-esq-circulo-ligado");
            document
                .getElementById("btn-item-velocidade")
                .classList.remove("btn-item-menu-lateral-esq-circulo-ligado");

            modo_comp_metade = "completo";
            changeScale(1);
            changeClassVelocity(1);

            tipoDadoAtual = 2;

            redimencionarPlanetas(tipoDadoAtual);
        }
        if (tipoDado == 1) {
            document
                .getElementById("btn-item-tamanho")
                .classList.remove("btn-item-menu-lateral-esq-circulo-ligado");
            document
                .getElementById("btn-item-distancia")
                .classList.remove("btn-item-menu-lateral-esq-circulo-ligado");
            document
                .getElementById("btn-item-velocidade")
                .classList.add("btn-item-menu-lateral-esq-circulo-ligado");

            modo_comp_metade = "metade";
            changeClassVelocity(1);
            changeScale(0);

            tipoDadoAtual = 1;

            redimencionarPlanetas(tipoDadoAtual);
        }
    }

    dadoAtual = tipoDado;

    planetaAtual = 0;

    for (var i = 0; i < listaInfos.length; i++) {
        if (i > 0) {
            document
                .getElementById("planeta-parado-" + i)
                .parentNode.classList.add("box-infos-desaparecer");
        }

        document
            .getElementById("planeta-" + i)
            .parentNode.classList.add("box-infos-desaparecer");

        setTimeout(function () {
            document.getElementById(
                "planeta-" + planetaAtual
            ).children[1].innerHTML = listaInfos[planetaAtual][dadoAtual];

            //Verifica se tipo é de distância e se o planeta é o Sol
            if (dadoAtual == 2 && planetaAtual == 0) {
                document.getElementById(
                    "planeta-" + planetaAtual
                ).children[2].innerHTML = "da Terra";
            } else {
                document.getElementById(
                    "planeta-" + planetaAtual
                ).children[2].innerHTML = listaTiposDados[dadoAtual];
            }

            document
                .getElementById("planeta-" + planetaAtual)
                .parentNode.classList.remove("box-infos-desaparecer");

            if (planetaAtual > 0) {
                document.getElementById(
                    "planeta-parado-" + planetaAtual
                ).children[1].innerHTML = listaInfos[planetaAtual][dadoAtual];

                document.getElementById(
                    "planeta-parado-" + planetaAtual
                ).children[2].innerHTML = listaTiposDados[dadoAtual];

                document
                    .getElementById("planeta-parado-" + planetaAtual)
                    .parentNode.classList.remove("box-infos-desaparecer");
            }

            planetaAtual++;
        }, 200);
    }
}

mudancaDado(tipoDadoAtual);

document
    .getElementById("btn-item-perspectiva")
    .classList.add("btn-item-menu-lateral-esq-ligado");

var modo_2D_3D_Atual = "3D";

function selecionarModo_2D_3D() {
    if (modo_2D_3D_Atual == "2D") {
        modo_2D_3D_Atual = "3D";

        document
            .getElementById("btn-item-perspectiva")
            .classList.add("btn-item-menu-lateral-esq-ligado");

        modo3D();
    } else {
        modo_2D_3D_Atual = "2D";

        document
            .getElementById("btn-item-perspectiva")
            .classList.remove("btn-item-menu-lateral-esq-ligado");

        modo2D();
    }
}

function modo2D() {
    document.getElementById("galaxia").classList.add("galaxia_2d");

    document.getElementById("img-sol").classList.add("planetas-90deg");

    document
        .getElementById("mercurio-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-mercurio").classList.add("planetas-90deg");
    document
        .getElementById("img-mercurio-parado")
        .classList.add("planetas-90deg");

    document
        .getElementById("venus-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-venus").classList.add("planetas-90deg");
    document.getElementById("img-venus-parado").classList.add("planetas-90deg");

    document
        .getElementById("terra-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-terra").classList.add("planetas-90deg");
    document.getElementById("img-terra-parado").classList.add("planetas-90deg");

    document.getElementById("img-lua-parado").classList.add("planetas-90deg");
    document.getElementById("img-lua").classList.add("planetas-90deg");

    document
        .getElementById("marte-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-marte").classList.add("planetas-90deg");
    document.getElementById("img-marte-parado").classList.add("planetas-90deg");

    document
        .getElementById("jupiter-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-jupiter").classList.add("planetas-90deg");
    document
        .getElementById("img-jupiter-parado")
        .classList.add("planetas-90deg");

    document
        .getElementById("saturno-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-saturno").classList.add("planetas-90deg");
    document
        .getElementById("img-saturno-parado")
        .classList.add("planetas-90deg");

    document
        .getElementById("img-saturno-anel-1")
        .classList.add("planetas-0deg");
    document
        .getElementById("img-saturno-anel-1-parado")
        .classList.add("planetas-0deg");

    document
        .getElementById("urano-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-urano").classList.add("planetas-90deg");
    document.getElementById("img-urano-parado").classList.add("planetas-90deg");

    document
        .getElementById("netuno-parado")
        .classList.add("planeta-estilo-flat");

    document.getElementById("img-netuno").classList.add("planetas-90deg");
    document
        .getElementById("img-netuno-parado")
        .classList.add("planeta-netuno-90deg-escala-negativa");

    document.getElementById("sistemaSolar").classList.add("sistemaSolar-0deg");

    setTimeout(function () {
        document
            .getElementById("sistemaSolar")
            .classList.add("sistemaSolar-flat");
    }, 200);
}

function modo3D() {
    document.getElementById("galaxia").classList.remove("galaxia_2d");

    document.getElementById("img-sol").classList.remove("planetas-90deg");

    document
        .getElementById("mercurio-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-mercurio").classList.remove("planetas-90deg");
    document
        .getElementById("img-mercurio-parado")
        .classList.remove("planetas-90deg");

    document
        .getElementById("venus-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-venus").classList.remove("planetas-90deg");
    document
        .getElementById("img-venus-parado")
        .classList.remove("planetas-90deg");

    document
        .getElementById("terra-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-terra").classList.remove("planetas-90deg");
    document
        .getElementById("img-terra-parado")
        .classList.remove("planetas-90deg");

    document
        .getElementById("img-lua-parado")
        .classList.remove("planetas-90deg");
    document.getElementById("img-lua").classList.remove("planetas-90deg");

    document
        .getElementById("marte-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-marte").classList.remove("planetas-90deg");
    document
        .getElementById("img-marte-parado")
        .classList.remove("planetas-90deg");

    document
        .getElementById("jupiter-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-jupiter").classList.remove("planetas-90deg");
    document
        .getElementById("img-jupiter-parado")
        .classList.remove("planetas-90deg");

    document
        .getElementById("saturno-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-saturno").classList.remove("planetas-90deg");
    document
        .getElementById("img-saturno-parado")
        .classList.remove("planetas-90deg");

    document
        .getElementById("img-saturno-anel-1")
        .classList.remove("planetas-0deg");
    document
        .getElementById("img-saturno-anel-1-parado")
        .classList.remove("planetas-0deg");

    document
        .getElementById("urano-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-urano").classList.remove("planetas-90deg");
    document
        .getElementById("img-urano-parado")
        .classList.remove("planetas-90deg");

    document
        .getElementById("netuno-parado")
        .classList.remove("planeta-estilo-flat");

    document.getElementById("img-netuno").classList.remove("planetas-90deg");
    document
        .getElementById("img-netuno-parado")
        .classList.remove("planeta-netuno-90deg-escala-negativa");

    document
        .getElementById("sistemaSolar")
        .classList.remove("sistemaSolar-0deg");
    document
        .getElementById("sistemaSolar")
        .classList.remove("sistemaSolar-flat");
}

if (tipoDispositivo == "mobile") {
    selecionarModo_2D_3D();
}

var ultimoPlanetaSelecionado = "terra";

function selecionarPlaneta(idPlaneta) {
    var planeta = idPlaneta.split("-");

    planetaLightbox = planeta[1];

    $("#btn-mais-infos-sistema-planetario").addClass("desaparecer-classe");

    setTimeout(function () {
        $("#img-planeta-mais-infos").css({
            background: "url(images/" + planeta[1] + ".png)",
            "background-position": "center",
            "background-repeat": "no-repeat",
            "background-size": "contain",
        });
        document.getElementById("tit-planeta-mais-infos").innerHTML =
            document.getElementById(idPlaneta).innerHTML;

        $("#btn-mais-infos-sistema-planetario").removeClass(
            "desaparecer-classe"
        );
    }, 100);

    if (planeta[1] != ultimoPlanetaSelecionado) {
        if (ultimoPlanetaSelecionado != "sol") {
            document
                .getElementById(ultimoPlanetaSelecionado + "-parado")
                .classList.remove("planeta-selecionado-parado");
            document
                .getElementById(
                    "cont-infos-" + ultimoPlanetaSelecionado + "-parado"
                )
                .classList.remove("cont-infos-selecionado");
        }
        document
            .getElementById(ultimoPlanetaSelecionado)
            .classList.remove("planeta-selecionado");

        document
            .getElementById("item-" + ultimoPlanetaSelecionado)
            .classList.remove("item-menu-lateral-selecionado");

        document
            .getElementById("cont-infos-" + ultimoPlanetaSelecionado)
            .classList.remove("cont-infos-selecionado");

        ultimoPlanetaSelecionado = planeta[1];

        if (planeta[1] != "sol") {
            document
                .getElementById(ultimoPlanetaSelecionado + "-parado")
                .classList.add("planeta-selecionado-parado");
            document
                .getElementById(
                    "cont-infos-" + ultimoPlanetaSelecionado + "-parado"
                )
                .classList.add("cont-infos-selecionado");
        }
        document
            .getElementById(ultimoPlanetaSelecionado)
            .classList.add("planeta-selecionado");

        document
            .getElementById("item-" + ultimoPlanetaSelecionado)
            .classList.add("item-menu-lateral-selecionado");
        document
            .getElementById("cont-infos-" + ultimoPlanetaSelecionado)
            .classList.add("cont-infos-selecionado");
    }
}

selecionarPlaneta("item-terra");

var modo_Zoom_In_Out_Atual = "zoomOut";

function escolhaModoInOut() {
    if (modo_Zoom_In_Out_Atual == "zoomIn") {
        modo_Zoom_In_Out_Atual = "zoomOut";

        document
            .getElementById("btn-item-verFila")
            .classList.remove("btn-item-menu-lateral-esq-ligado");

        zoomInOut("zoomOut");
    } else {
        modo_Zoom_In_Out_Atual = "zoomIn";

        document
            .getElementById("btn-item-verFila")
            .classList.add("btn-item-menu-lateral-esq-ligado");

        zoomInOut("zoomIn");
    }
}

var modo_comp_metade = "completo";

function escolhaModoInteiroMetade() {
    if (modo_comp_metade == "metade") {
        modo_comp_metade = "completo";

        document
            .getElementById("btn-item-zoom")
            .classList.remove("btn-item-menu-lateral-esq-ligado");

        changeScale(1);
    } else {
        modo_comp_metade = "metade";

        document
            .getElementById("btn-item-zoom")
            .classList.add("btn-item-menu-lateral-esq-ligado");

        changeScale(0);
    }
}

function zoomInOut(modo) {
    if (modo == "zoomIn") {
        document.getElementById("galaxia").classList.add("galaxia-2x-escala");

        if (modo_comp_metade == "metade") {
            document
                .getElementById("galaxia")
                .classList.add("galaxia-margin-maior");
        }

        document
            .getElementById("pos-mercurio-parado")
            .classList.add("direcao-parado-aparecer");
        document
            .getElementById("pos-mercurio")
            .classList.add("direcao-desaparecer");
        document
            .getElementById("pos-venus-parado")
            .classList.add("direcao-parado-aparecer");
        document
            .getElementById("pos-venus")
            .classList.add("direcao-desaparecer");
        document
            .getElementById("pos-terra-parado")
            .classList.add("direcao-parado-aparecer");

        document
            .getElementById("pos-lua-parado")
            .classList.add("direcao-parado-aparecer");

        document
            .getElementById("pos-terra")
            .classList.add("direcao-desaparecer");

        document.getElementById("pos-lua").classList.add("direcao-desaparecer");

        document
            .getElementById("pos-marte-parado")
            .classList.add("direcao-parado-aparecer");
        document
            .getElementById("pos-marte")
            .classList.add("direcao-desaparecer");
        document
            .getElementById("pos-jupiter-parado")
            .classList.add("direcao-parado-aparecer");
        document
            .getElementById("pos-jupiter")
            .classList.add("direcao-desaparecer");
        document
            .getElementById("pos-saturno-parado")
            .classList.add("direcao-parado-aparecer");
        document
            .getElementById("pos-saturno")
            .classList.add("direcao-desaparecer");
        document
            .getElementById("pos-urano-parado")
            .classList.add("direcao-parado-aparecer");
        document
            .getElementById("pos-urano")
            .classList.add("direcao-desaparecer");
        document
            .getElementById("pos-netuno-parado")
            .classList.add("direcao-parado-aparecer");
        document
            .getElementById("pos-netuno")
            .classList.add("direcao-desaparecer");

        for (var i = 0; i < listaClassesInfo.length; i++) {
            listaClassesInfo[i].classList.add("escala-reduzida");
        }
    } else {
        if (modo_comp_metade == "metade") {
            document
                .getElementById("galaxia")
                .classList.remove("galaxia-margin-maior");
        }

        document
            .getElementById("galaxia")
            .classList.remove("galaxia-2x-escala");

        document
            .getElementById("pos-mercurio-parado")
            .classList.remove("direcao-parado-aparecer");
        document
            .getElementById("pos-mercurio")
            .classList.remove("direcao-desaparecer");
        document
            .getElementById("pos-venus-parado")
            .classList.remove("direcao-parado-aparecer");
        document
            .getElementById("pos-venus")
            .classList.remove("direcao-desaparecer");
        document
            .getElementById("pos-terra-parado")
            .classList.remove("direcao-parado-aparecer");

        document
            .getElementById("pos-lua-parado")
            .classList.remove("direcao-parado-aparecer");

        document
            .getElementById("pos-terra")
            .classList.remove("direcao-desaparecer");

        document
            .getElementById("pos-lua")
            .classList.remove("direcao-desaparecer");

        document
            .getElementById("pos-marte-parado")
            .classList.remove("direcao-parado-aparecer");
        document
            .getElementById("pos-marte")
            .classList.remove("direcao-desaparecer");
        document
            .getElementById("pos-jupiter-parado")
            .classList.remove("direcao-parado-aparecer");
        document
            .getElementById("pos-jupiter")
            .classList.remove("direcao-desaparecer");
        document
            .getElementById("pos-saturno-parado")
            .classList.remove("direcao-parado-aparecer");
        document
            .getElementById("pos-saturno")
            .classList.remove("direcao-desaparecer");
        document
            .getElementById("pos-urano-parado")
            .classList.remove("direcao-parado-aparecer");
        document
            .getElementById("pos-urano")
            .classList.remove("direcao-desaparecer");
        document
            .getElementById("pos-netuno-parado")
            .classList.remove("direcao-parado-aparecer");
        document
            .getElementById("pos-netuno")
            .classList.remove("direcao-desaparecer");

        for (var i = 0; i < listaClassesInfo.length; i++) {
            listaClassesInfo[i].classList.remove("escala-reduzida");
        }
    }
}

function changeScale(tipoEscala) {
    if (tipoEscala == 0) {
        if (modo_Zoom_In_Out_Atual == "zoomIn") {
            document
                .getElementById("galaxia")
                .classList.add("galaxia-margin-maior");
        }

        document.getElementById("sol").classList.add("sol-orbita-nova");
        document.getElementById("img-sol").classList.add("sol-planeta-novo");

        document
            .getElementById("img-saturno-anel-1")
            .classList.add("saturno-anel-1-planeta-novo");
        document
            .getElementById("img-saturno-anel-2")
            .classList.add("saturno-anel-2-planeta-novo");

        document
            .getElementById("img-saturno-anel-1-parado")
            .classList.add("saturno-anel-1-planeta-novo");
        document
            .getElementById("img-saturno-anel-2-parado")
            .classList.add("saturno-anel-2-planeta-novo");
        //
        for (var i = 1; i < listaIdsOrbitas.length; i++) {
            var orbitaID = listaIdsOrbitas[i];
            var orbitaIDParado = listaIdsOrbitas[i] + "-parado";

            var planetaID = "img-" + listaIdsOrbitas[i];
            var planetaIDParado = "img-" + listaIdsOrbitas[i] + "-parado";

            document
                .getElementById(orbitaID)
                .classList.add(listaIdsOrbitas[i] + "-orbita-nova");
            document
                .getElementById(orbitaIDParado)
                .classList.add(listaIdsOrbitas[i] + "-orbita-nova");

            document
                .getElementById(planetaID)
                .classList.add(listaIdsOrbitas[i] + "-planeta-novo");
            document
                .getElementById(planetaIDParado)
                .classList.add(listaIdsOrbitas[i] + "-planeta-novo");
        }
    } else {
        if (modo_Zoom_In_Out_Atual == "zoomIn") {
            document
                .getElementById("galaxia")
                .classList.remove("galaxia-margin-maior");
        }

        document.getElementById("sol").classList.remove("sol-orbita-nova");
        document.getElementById("img-sol").classList.remove("sol-planeta-novo");

        document
            .getElementById("img-saturno-anel-1")
            .classList.remove("saturno-anel-1-planeta-novo");
        document
            .getElementById("img-saturno-anel-2")
            .classList.remove("saturno-anel-2-planeta-novo");

        document
            .getElementById("img-saturno-anel-1-parado")
            .classList.remove("saturno-anel-1-planeta-novo");
        document
            .getElementById("img-saturno-anel-2-parado")
            .classList.remove("saturno-anel-2-planeta-novo");
        //
        for (var i = 1; i < listaIdsOrbitas.length; i++) {
            var orbitaID = listaIdsOrbitas[i];
            var orbitaIDParado = listaIdsOrbitas[i] + "-parado";

            var planetaID = "img-" + listaIdsOrbitas[i];
            var planetaIDParado = "img-" + listaIdsOrbitas[i] + "-parado";

            document
                .getElementById(orbitaID)
                .classList.remove(listaIdsOrbitas[i] + "-orbita-nova");
            document
                .getElementById(orbitaIDParado)
                .classList.remove(listaIdsOrbitas[i] + "-orbita-nova");

            document
                .getElementById(planetaID)
                .classList.remove(listaIdsOrbitas[i] + "-planeta-novo");
            document
                .getElementById(planetaIDParado)
                .classList.remove(listaIdsOrbitas[i] + "-planeta-novo");
        }
    }
}

function changeClassVelocity(typeClass) {
    if (typeClass == 0) {
        document
            .getElementById("sol")
            .classList.add("sol-orbita-novo-velocidade");
        document
            .getElementById("img-sol")
            .classList.add("sol-planeta-novo-velocidade");

        document
            .getElementById("img-saturno-anel-1")
            .classList.add("img-saturno-anel-1-class-velocidade");
        document
            .getElementById("img-saturno-anel-2")
            .classList.add("img-saturno-anel-2-class-velocidade");

        document
            .getElementById("img-saturno-anel-1-parado")
            .classList.add("img-saturno-anel-1-class-velocidade");
        document
            .getElementById("img-saturno-anel-2-parado")
            .classList.add("img-saturno-anel-2-class-velocidade");
        //
        for (var i = 1; i < listaIdsOrbitas.length; i++) {
            var orbitaID = listaIdsOrbitas[i];
            var orbitaIDParado = listaIdsOrbitas[i] + "-parado";

            var planetaID = "img-" + listaIdsOrbitas[i];
            var planetaIDParado = "img-" + listaIdsOrbitas[i] + "-parado";

            document
                .getElementById(orbitaID)
                .classList.add(listaIdsOrbitas[i] + "-orbita-nova-velocidade");
            document
                .getElementById(orbitaIDParado)
                .classList.add(listaIdsOrbitas[i] + "-orbita-nova-velocidade");

            document
                .getElementById(planetaID)
                .classList.add(
                    "img-" + listaIdsOrbitas[i] + "-class-velocidade"
                );
            document
                .getElementById(planetaIDParado)
                .classList.add(
                    "img-" + listaIdsOrbitas[i] + "-class-velocidade"
                );
        }
    } else {
        document
            .getElementById("sol")
            .classList.remove("sol-orbita-novo-velocidade");
        document
            .getElementById("img-sol")
            .classList.remove("sol-planeta-novo-velocidade");

        document
            .getElementById("img-saturno-anel-1")
            .classList.remove("img-saturno-anel-1-class-velocidade");
        document
            .getElementById("img-saturno-anel-2")
            .classList.remove("img-saturno-anel-2-class-velocidade");

        document
            .getElementById("img-saturno-anel-1-parado")
            .classList.remove("img-saturno-anel-1-class-velocidade");
        document
            .getElementById("img-saturno-anel-2-parado")
            .classList.remove("img-saturno-anel-2-class-velocidade");
        //
        for (var i = 1; i < listaIdsOrbitas.length; i++) {
            var orbitaID = listaIdsOrbitas[i];
            var orbitaIDParado = listaIdsOrbitas[i] + "-parado";

            var planetaID = "img-" + listaIdsOrbitas[i];
            var planetaIDParado = "img-" + listaIdsOrbitas[i] + "-parado";

            document
                .getElementById(orbitaID)
                .classList.remove(
                    listaIdsOrbitas[i] + "-orbita-nova-velocidade"
                );
            document
                .getElementById(orbitaIDParado)
                .classList.remove(
                    listaIdsOrbitas[i] + "-orbita-nova-velocidade"
                );

            document
                .getElementById(planetaID)
                .classList.remove(
                    "img-" + listaIdsOrbitas[i] + "-class-velocidade"
                );
            document
                .getElementById(planetaIDParado)
                .classList.remove(
                    "img-" + listaIdsOrbitas[i] + "-class-velocidade"
                );
        }
    }
}
