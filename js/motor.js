            var novaEscala = 1;
            var novaEscalaTextos = 1;
            
            var tipoDispositivo = 'desktop';

            function redimencionarQuadros(){
                var alturaCompleta = $("#planetario-completo").height();
                
//                alert(alturaCompleta);
                
                var tamanhoTela = $(window).width();
                
                if(tamanhoTela > 1081)
                {
                    var alturaCaixa = alturaCompleta - 54;
//                    var alturaCaixa = alturaCompleta;
                }
                else
                {
                    alturaCompleta = alturaCompleta;
                    
                    tipoDispositivo = 'mobile';
                    
                    var alturaCaixa = alturaCompleta;
                    
                    $('#cont-completo-planetas-curiosidades').css({
                        'height':alturaCaixa+'px',
                        'margin-top':'-'+alturaCaixa+'px'
                    });
                }
                
                /* 54 é a altura da caixa de menu. Ao tirar ela, pode-se retirar do calculo */

                $('#cont-galaxia').css({
                    'height':alturaCaixa+'px'
                });
                $('#cont-lightbox-curiosidades').css({
                    'height':alturaCaixa+'px'
                });
                
                var valorAntigo_0 = 300;
                
                var novaAltura = (alturaCompleta * valorAntigo_0)/1080;
                
                novaEscala = (alturaCompleta * 1)/1080;
                
                novaEscalaTextos = 1 - novaEscala;
                
                novaEscalaTextos = novaEscalaTextos + 1;
                
                $('.dinamica-escala-galaxia').css({
                    'transform': 'scale(' + novaEscala + ', ' + novaEscala + ')'
                });
                
                $('.imagem-descricao-lightbox').css({
                    'height': novaAltura+'px'
                });
            }
            
            redimencionarQuadros();
            
            $(window).resize(function() {
              redimencionarQuadros();
            });


            var menuAberto = false;

            function menuMobile()
            {
                if(menuAberto)
                {                    
                    document.getElementById('menu-planetas-mobile').classList.remove('abrir-menu-mobile');
                    document.getElementById('menu-itens-mobile').classList.remove('menu-itens-cont-mobile-aberto');
                    document.getElementById('caixa-itens-menu-mobile').classList.remove('cont-itens-menu-mobile-abrir');
                    document.getElementById('caixa-fundo-fechar-menu-mobile').classList.remove('caixa-fechar-menu-mobile-aberto');
                    
                    document.getElementById('menu-funcionalidades-planetas-mobile').classList.remove('bloquear-menu-mobile');
                    
                    menuAberto = false;
                }
                else
                {
                    document.getElementById('menu-planetas-mobile').classList.add('abrir-menu-mobile');
                    document.getElementById('menu-itens-mobile').classList.add('menu-itens-cont-mobile-aberto');
                    document.getElementById('caixa-itens-menu-mobile').classList.add('cont-itens-menu-mobile-abrir');
                    document.getElementById('caixa-fundo-fechar-menu-mobile').classList.add('caixa-fechar-menu-mobile-aberto');
                    
                    document.getElementById('menu-funcionalidades-planetas-mobile').classList.add('bloquear-menu-mobile');
                    
                    menuAberto = true;
                }
                
            }

            function closeMenuMobile()
            {
                document.getElementById('menu-planetas-mobile').classList.remove('abrir-menu-mobile');
                document.getElementById('menu-itens-mobile').classList.remove('menu-itens-cont-mobile-aberto');
                document.getElementById('caixa-itens-menu-mobile').classList.remove('cont-itens-menu-mobile-abrir');
                document.getElementById('caixa-fundo-fechar-menu-mobile').classList.remove('caixa-fechar-menu-mobile-aberto');
                
                document.getElementById('menu-funcionalidades-planetas-mobile').classList.remove('bloquear-menu-mobile');
                    
                menuAberto = false;
            }

            var menuFuncionalidadesAberto = false;

            function MenuFuncionalidadesMobile()
            {
                if(menuFuncionalidadesAberto)
                {
                    document.getElementById('menu-funcionalidades-planetas-mobile').classList.remove('abrir-menu-funcionalidades-mobile');
                    document.getElementById('cont-btns-direita').classList.remove('cont-funcionalidades-btns-direita-aberto');
                    document.getElementById('fundo-funcionalidades-funcao').classList.remove('funcionalidades-fundo-funcao-aberto');
                    
                    document.getElementById('menu-planetas-mobile').classList.remove('bloquear-menu-mobile');
                    
                    menuFuncionalidadesAberto = false;
                }
                else
                {
                    document.getElementById('menu-funcionalidades-planetas-mobile').classList.add('abrir-menu-funcionalidades-mobile');
                    document.getElementById('cont-btns-direita').classList.add('cont-funcionalidades-btns-direita-aberto');
                    document.getElementById('fundo-funcionalidades-funcao').classList.add('funcionalidades-fundo-funcao-aberto');
                    
                    document.getElementById('menu-planetas-mobile').classList.add('bloquear-menu-mobile');
                    
                    menuFuncionalidadesAberto = true;
                }
                
            }

            function closeMenuFuncionalidadesMobile()
            {
                document.getElementById('menu-funcionalidades-planetas-mobile').classList.remove('abrir-menu-funcionalidades-mobile');
                document.getElementById('cont-btns-direita').classList.remove('cont-funcionalidades-btns-direita-aberto');
                document.getElementById('fundo-funcionalidades-funcao').classList.remove('funcionalidades-fundo-funcao-aberto');
                
                document.getElementById('menu-planetas-mobile').classList.remove('bloquear-menu-mobile');
                
                menuFuncionalidadesAberto = false;
            }

            var listaBotoesCuriosidades = ["sol-curiosidades", "mercurio-curiosidades", "venus-curiosidades", "terra-curiosidades", "lua-curiosidades", "marte-curiosidades", "jupiter-curiosidades", "saturno-curiosidades", "urano-curiosidades", "netuno-curiosidades"];
            
            var listaTitulosCuriosidades = ["Sol", "Mercúrio", "Vênus", "Terra", "Lua", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"];
            
            var curiosidadeAtual = "";
            
            function lightBoxCuriosidades(idCuriosidade)
            {                
                document.getElementById('menu-funcionalidades-planetas-mobile').classList.add('esconder-menu-mobile');
                
//                lightbox-curiosidades-sol
                
                if(curiosidadeAtual != "")
                {                    
                    document.getElementById(curiosidadeAtual+'-curiosidades').classList.remove('item-planeta-curiosidades-selecionado');
                    
                    document.getElementById('lightbox-curiosidades-'+ curiosidadeAtual).classList.remove('lightbox-curiosidades-class-aparecer');
                    
                    setTimeout(function(){
                        document.getElementById('lightbox-curiosidades-'+ curiosidadeAtual).classList.add('lightbox-curiosidades-class-desaparecer');
                    },200);
                }
                
                else{
                    document.getElementById('cont-lightbox-curiosidades').classList.add('container-lightbox-curiosidades-aberto');
                    
                    document.getElementById('lightbox-curiosidades-'+ idCuriosidade).classList.remove('lightbox-curiosidades-class-desaparecer');
                    
                }
                
                setTimeout(function(){
                    curiosidadeAtual = idCuriosidade;
                    
                    document.getElementById(curiosidadeAtual + '-curiosidades').classList.add('item-planeta-curiosidades-selecionado');
                    
                    
                    document.getElementById('lightbox-curiosidades-'+ curiosidadeAtual).classList.remove('lightbox-curiosidades-class-desaparecer');
                    
                    document.getElementById('lightbox-curiosidades-'+ curiosidadeAtual).classList.add('lightbox-curiosidades-class-aparecer');
                    
                },200);
            }
            
            function closeLightBoxCuriosidades()
            {
                document.getElementById('menu-funcionalidades-planetas-mobile').classList.remove('esconder-menu-mobile');
                
                document.getElementById('cont-lightbox-curiosidades').classList.remove('container-lightbox-curiosidades-aberto');
                
                document.getElementById(curiosidadeAtual+'-curiosidades').classList.remove('item-planeta-curiosidades-selecionado');
                
                document.getElementById('lightbox-curiosidades-'+ curiosidadeAtual).classList.add('lightbox-curiosidades-class-desaparecer');
                
                curiosidadeAtual = "";
            }
            
            /*  ITEM 1: Velocidade  -- --  ITEM 2: Tamanho  ----  ITEM 3: Distância  */
            var infosSol = ['0 Km/h', '1.390.000 Km', '149.600.000 Km'];
            var infosMercurio = ['172.404 Km/h', '4.879,4 Km', '57.910.000 Km'];
            var infosVenus = ['126.108 Km/h', '12.103,6 Km', '108.200.000 Km'];
            var infosTerra = ['107.244 Km/h', '12.756,28 Km', '149.600.000 Km'];
            var infosMarte = ['86.868 Km/h', '6.794,4 Km', '227.940.000 Km'];
            var infosJupiter = ['47.016 Km/h', '142.984 Km', '778.330.000 Km'];
            var infosSaturno = ['34.704 Km/h', '120.536 Km', '1.429.400.000 Km'];
            var infosUrano = ['24.516 Km/h', '51.118 Km', '2.870.990.000 Km'];
            var infosNetuno = ['19.548 Km/h', '49.492 Km', '4.504.300.000 Km'];
            
            var listaInfos = [infosSol, infosMercurio, infosVenus, infosTerra, infosMarte, infosJupiter, infosSaturno, infosUrano, infosNetuno];
            
            
            var listaIdsOrbitas = ['sol', 'mercurio', 'venus', 'terra', 'lua', 'marte', 'jupiter', 'saturno', 'urano', 'netuno'];
            
            var listaTiposDados = ['Velocidade de Órbita', 'Diâmetro Equatorial', 'do Sol'];
            
            var listaClassesInfo = document.getElementsByClassName('cont-infos-planetas');
            var listaBoxInfo = document.getElementsByClassName('box-infos-comp');
            
            var dadoAtual;
            var planetaAtual = 0;
            
            /*  TipoDado 1: Velocidade  -- --  TipoDado: Tamanho  ----  TipoDado: Distância  */
            function mudancaDado(tipoDado)
            {
                //VERIFICA SE O MODO SELECIONADO É O ATUAL. SE FOR, PARA POR AI
                if(dadoAtual == tipoDado)
                {
                    return;
                }
                
                if(tipoDado != dadoAtual)
                {
                    if(tipoDado == 0)
                    {
                        document.getElementById('selecao-circulo-velocidade').classList.add('circulo-interno-modo-selecao');
                        document.getElementById('selecao-circulo-tamanho').classList.remove('circulo-interno-modo-selecao');
                        document.getElementById('selecao-circulo-distancia').classList.remove('circulo-interno-modo-selecao');
                    }
                    if(tipoDado == 1)
                    {
                        document.getElementById('selecao-circulo-velocidade').classList.remove('circulo-interno-modo-selecao');
                        document.getElementById('selecao-circulo-tamanho').classList.add('circulo-interno-modo-selecao');
                        document.getElementById('selecao-circulo-distancia').classList.remove('circulo-interno-modo-selecao');
                    }
                    if(tipoDado == 2)
                    {
                        document.getElementById('selecao-circulo-velocidade').classList.remove('circulo-interno-modo-selecao');
                        document.getElementById('selecao-circulo-tamanho').classList.remove('circulo-interno-modo-selecao');
                        document.getElementById('selecao-circulo-distancia').classList.add('circulo-interno-modo-selecao');
                    }
                }
                
                dadoAtual = tipoDado;
                
                planetaAtual = 0;
                
                for(var i = 0; i < listaInfos.length; i++)
                {
                    if(i > 0)
                    {
                        document.getElementById('planeta-parado-'+i).parentNode.classList.add('box-infos-desaparecer');
                    }
                    
                    document.getElementById('planeta-'+i).parentNode.classList.add('box-infos-desaparecer');
                    
                    setTimeout(function(){
                        
                        document.getElementById('planeta-'+planetaAtual).children[1].innerHTML = listaInfos[planetaAtual][dadoAtual];
                        
                        //Verifica se tipo é de distância e se o planeta é o Sol
                        if(dadoAtual == 2 && planetaAtual == 0)
                        {
                            document.getElementById('planeta-' + planetaAtual).children[2].innerHTML = "da Terra";
                        }
                        else
                        {
                            document.getElementById('planeta-' + planetaAtual).children[2].innerHTML = listaTiposDados[dadoAtual];
                        }
                        
                        document.getElementById('planeta-'+planetaAtual).parentNode.classList.remove('box-infos-desaparecer');
                        
                        if(planetaAtual > 0)
                        {
                            document.getElementById('planeta-parado-'+planetaAtual).children[1].innerHTML = listaInfos[planetaAtual][dadoAtual];
                            
                            document.getElementById('planeta-parado-' + planetaAtual).children[2].innerHTML = listaTiposDados[dadoAtual];
                        
                            document.getElementById('planeta-parado-'+planetaAtual).parentNode.classList.remove('box-infos-desaparecer');
                        }
                        
                        planetaAtual++;
                        
                    }, 200);
                }
            }
            
            mudancaDado(0);
            
            var modo_2D_3D_Atual = '3D';
            
            function selecionarModo_2D_3D()
            {
                if(modo_2D_3D_Atual == '3D')
                {
                    modo_2D_3D_Atual = '2D';
                    
                    document.getElementById('btn-modo-2d').classList.add('circulo-selecao-modo');
                    
                    document.getElementById('btn-modo-3d').classList.remove('circulo-selecao-modo');
                    
                    modo2D();
                }
                else
                {
                    modo_2D_3D_Atual = '3D';
                    
                    document.getElementById('btn-modo-2d').classList.remove('circulo-selecao-modo');
                    
                    document.getElementById('btn-modo-3d').classList.add('circulo-selecao-modo');
                    
                    modo3D();
                }
            }
            
            function modo2D()
            {
                document.getElementById("galaxia").classList.add('galaxia_2d');
                
                document.getElementById("img-sol").classList.add('planetas-90deg');
                
                document.getElementById("mercurio-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-mercurio").classList.add('planetas-90deg');
                document.getElementById("img-mercurio-parado").classList.add('planetas-90deg');
                
                document.getElementById("venus-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-venus").classList.add('planetas-90deg');
                document.getElementById("img-venus-parado").classList.add('planetas-90deg');
                
                document.getElementById("terra-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-terra").classList.add('planetas-90deg');
                document.getElementById("img-terra-parado").classList.add('planetas-90deg');
                
                document.getElementById("img-lua-parado").classList.add('planetas-90deg');
                document.getElementById("img-lua").classList.add('planetas-90deg');
                
                
                document.getElementById("marte-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-marte").classList.add('planetas-90deg');
                document.getElementById("img-marte-parado").classList.add('planetas-90deg');
                
                document.getElementById("jupiter-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-jupiter").classList.add('planetas-90deg');
                document.getElementById("img-jupiter-parado").classList.add('planetas-90deg');
                
                document.getElementById("saturno-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-saturno").classList.add('planetas-90deg');
                document.getElementById("img-saturno-parado").classList.add('planetas-90deg');
                
                document.getElementById("img-saturno-anel-1").classList.add('planetas-0deg');
                document.getElementById("img-saturno-anel-1-parado").classList.add('planetas-0deg');
                
                
                document.getElementById("urano-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-urano").classList.add('planetas-90deg');
                document.getElementById("img-urano-parado").classList.add('planetas-90deg');
                
                document.getElementById("netuno-parado").classList.add('planeta-estilo-flat');
                
                document.getElementById("img-netuno").classList.add('planetas-90deg');
                document.getElementById("img-netuno-parado").classList.add('planeta-netuno-90deg-escala-negativa');
                
                document.getElementById("sistemaSolar").classList.add('sistemaSolar-0deg');
                
                setTimeout(function(){
                    document.getElementById("sistemaSolar").classList.add('sistemaSolar-flat');
                },200);
            }
            
            function modo3D()
            {
                document.getElementById("galaxia").classList.remove('galaxia_2d');
                
                document.getElementById("img-sol").classList.remove('planetas-90deg');
                
                document.getElementById("mercurio-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-mercurio").classList.remove('planetas-90deg');
                document.getElementById("img-mercurio-parado").classList.remove('planetas-90deg');
                
                document.getElementById("venus-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-venus").classList.remove('planetas-90deg');
                document.getElementById("img-venus-parado").classList.remove('planetas-90deg');
                
                document.getElementById("terra-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-terra").classList.remove('planetas-90deg');
                document.getElementById("img-terra-parado").classList.remove('planetas-90deg');
                
                document.getElementById("img-lua-parado").classList.remove('planetas-90deg');
                document.getElementById("img-lua").classList.remove('planetas-90deg');
                
                
                document.getElementById("marte-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-marte").classList.remove('planetas-90deg');
                document.getElementById("img-marte-parado").classList.remove('planetas-90deg');
                
                document.getElementById("jupiter-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-jupiter").classList.remove('planetas-90deg');
                document.getElementById("img-jupiter-parado").classList.remove('planetas-90deg');
                
                document.getElementById("saturno-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-saturno").classList.remove('planetas-90deg');
                document.getElementById("img-saturno-parado").classList.remove('planetas-90deg');
                
                document.getElementById("img-saturno-anel-1").classList.remove('planetas-0deg');
                document.getElementById("img-saturno-anel-1-parado").classList.remove('planetas-0deg');
                
                
                document.getElementById("urano-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-urano").classList.remove('planetas-90deg');
                document.getElementById("img-urano-parado").classList.remove('planetas-90deg');
                
                document.getElementById("netuno-parado").classList.remove('planeta-estilo-flat');
                
                document.getElementById("img-netuno").classList.remove('planetas-90deg');
                document.getElementById("img-netuno-parado").classList.remove('planeta-netuno-90deg-escala-negativa');
                
                document.getElementById("sistemaSolar").classList.remove('sistemaSolar-0deg');
                document.getElementById("sistemaSolar").classList.remove('sistemaSolar-flat');
            }
            

            if(tipoDispositivo == 'mobile')
            {
                selecionarModo_2D_3D();
            }

            var ultimoPlanetaSelecionado = "terra";
            
            function selecionarPlaneta(idPlaneta)
            {
                var planeta = idPlaneta.split("-");
                
                if(planeta[1] != ultimoPlanetaSelecionado)
                {
                    if(ultimoPlanetaSelecionado != "sol")
                    {
                        document.getElementById(ultimoPlanetaSelecionado+"-parado").classList.remove("planeta-selecionado-parado");
                        document.getElementById("cont-infos-"+ultimoPlanetaSelecionado+"-parado").classList.remove("cont-infos-selecionado");
                    }
                    document.getElementById(ultimoPlanetaSelecionado).classList.remove("planeta-selecionado");
                    
                    document.getElementById('item-'+ultimoPlanetaSelecionado).classList.remove("item-planeta-selecionado");
                    document.getElementById("cont-infos-"+ultimoPlanetaSelecionado).classList.remove("cont-infos-selecionado");

                    ultimoPlanetaSelecionado = planeta[1];

                    if(planeta[1] != "sol")
                    {
                        document.getElementById(ultimoPlanetaSelecionado+"-parado").classList.add("planeta-selecionado-parado");
                        document.getElementById("cont-infos-"+ultimoPlanetaSelecionado+"-parado").classList.add("cont-infos-selecionado");
                    }
                    document.getElementById(ultimoPlanetaSelecionado).classList.add("planeta-selecionado");
                    
                    document.getElementById('item-'+ultimoPlanetaSelecionado).classList.add("item-planeta-selecionado");                    
                    document.getElementById("cont-infos-"+ultimoPlanetaSelecionado).classList.add("cont-infos-selecionado");
                }
            }
            
            var modo_Zoom_In_Out_Atual = 'zoomOut';
            
            function escolhaModoInOut()
            {
                if(modo_Zoom_In_Out_Atual == 'zoomOut')
                {
                    modo_Zoom_In_Out_Atual = 'zoomIn';
                    
                    document.getElementById('btn-modo-metade').classList.add('circulo-selecao-modo');
                    
                    document.getElementById('btn-modo-inteiro').classList.remove('circulo-selecao-modo');
                    
                    zoomInOut('zoomIn');
                }
                else
                {
                    modo_Zoom_In_Out_Atual = 'zoomOut';
                    
                    document.getElementById('btn-modo-metade').classList.remove('circulo-selecao-modo');
                    
                    document.getElementById('btn-modo-inteiro').classList.add('circulo-selecao-modo');
                    
                    zoomInOut('zoomOut');
                }
            }
            
            var modo_comp_metade = 'completo';
            
            function escolhaModoInteiroMetade()
            {
                if(modo_comp_metade == 'completo')
                {
                    modo_comp_metade = 'metade';
                    
                    document.getElementById('btn-modo-zoom-in').classList.add('circulo-selecao-modo');
                    
                    document.getElementById('btn-modo-zoom-out').classList.remove('circulo-selecao-modo');
                    
                    changeScale(0);
                }
                else
                {
                    modo_comp_metade = 'completo';
                    
                    document.getElementById('btn-modo-zoom-in').classList.remove('circulo-selecao-modo');
                    
                    document.getElementById('btn-modo-zoom-out').classList.add('circulo-selecao-modo');
                    
                    changeScale(1);
                }
            }
            
            function zoomInOut(modo)
            {
                if(modo == 'zoomIn')
                {
                    document.getElementById('galaxia').classList.add('galaxia-2x-escala');
                    
                    document.getElementById("pos-mercurio-parado").classList.add('direcao-parado-aparecer');
                    document.getElementById("pos-mercurio").classList.add('direcao-desaparecer');
                    document.getElementById("pos-venus-parado").classList.add('direcao-parado-aparecer');
                    document.getElementById("pos-venus").classList.add('direcao-desaparecer');
                    document.getElementById("pos-terra-parado").classList.add('direcao-parado-aparecer');
                    
                    document.getElementById("pos-lua-parado").classList.add('direcao-parado-aparecer');
                    
                    document.getElementById("pos-terra").classList.add('direcao-desaparecer');
                    
                    document.getElementById("pos-lua").classList.add('direcao-desaparecer');
                    
                    document.getElementById("pos-marte-parado").classList.add('direcao-parado-aparecer');
                    document.getElementById("pos-marte").classList.add('direcao-desaparecer');
                    document.getElementById("pos-jupiter-parado").classList.add('direcao-parado-aparecer');
                    document.getElementById("pos-jupiter").classList.add('direcao-desaparecer');
                    document.getElementById("pos-saturno-parado").classList.add('direcao-parado-aparecer');
                    document.getElementById("pos-saturno").classList.add('direcao-desaparecer');
                    document.getElementById("pos-urano-parado").classList.add('direcao-parado-aparecer');
                    document.getElementById("pos-urano").classList.add('direcao-desaparecer');
                    document.getElementById("pos-netuno-parado").classList.add('direcao-parado-aparecer');
                    document.getElementById("pos-netuno").classList.add('direcao-desaparecer');
                    
                    for(var i = 0; i < listaClassesInfo.length; i++)
                    {
                        listaClassesInfo[i].classList.add('escala-reduzida');
                    }
                }
                else
                {
                    document.getElementById('galaxia').classList.remove('galaxia-2x-escala');
                    
                    document.getElementById("pos-mercurio-parado").classList.remove('direcao-parado-aparecer');
                    document.getElementById("pos-mercurio").classList.remove('direcao-desaparecer');
                    document.getElementById("pos-venus-parado").classList.remove('direcao-parado-aparecer');
                    document.getElementById("pos-venus").classList.remove('direcao-desaparecer');
                    document.getElementById("pos-terra-parado").classList.remove('direcao-parado-aparecer');
                    
                    document.getElementById("pos-lua-parado").classList.remove('direcao-parado-aparecer');
                    
                    document.getElementById("pos-terra").classList.remove('direcao-desaparecer');
                    
                    document.getElementById("pos-lua").classList.remove('direcao-desaparecer');
                    
                    document.getElementById("pos-marte-parado").classList.remove('direcao-parado-aparecer');
                    document.getElementById("pos-marte").classList.remove('direcao-desaparecer');
                    document.getElementById("pos-jupiter-parado").classList.remove('direcao-parado-aparecer');
                    document.getElementById("pos-jupiter").classList.remove('direcao-desaparecer');
                    document.getElementById("pos-saturno-parado").classList.remove('direcao-parado-aparecer');
                    document.getElementById("pos-saturno").classList.remove('direcao-desaparecer');
                    document.getElementById("pos-urano-parado").classList.remove('direcao-parado-aparecer');
                    document.getElementById("pos-urano").classList.remove('direcao-desaparecer');
                    document.getElementById("pos-netuno-parado").classList.remove('direcao-parado-aparecer');
                    document.getElementById("pos-netuno").classList.remove('direcao-desaparecer');
                    
                    for(var i = 0; i < listaClassesInfo.length; i++)
                    {
                        listaClassesInfo[i].classList.remove('escala-reduzida');
                    }
                }
            }
            
            function changeScale(tipoEscala)
            {                
                if(tipoEscala == 0)
                {
                    document.getElementById('sol').classList.add('sol-orbita-nova');
                    document.getElementById('img-sol').classList.add('sol-planeta-novo');
                    
                    document.getElementById('img-saturno-anel-1').classList.add('saturno-anel-1-planeta-novo');
                    document.getElementById('img-saturno-anel-2').classList.add('saturno-anel-2-planeta-novo');
                    
                    document.getElementById('img-saturno-anel-1-parado').classList.add('saturno-anel-1-planeta-novo');
                    document.getElementById('img-saturno-anel-2-parado').classList.add('saturno-anel-2-planeta-novo');
//                    
                    for(var i = 1; i < listaIdsOrbitas.length; i++)
                    {
                        var orbitaID = listaIdsOrbitas[i];
                        var orbitaIDParado = listaIdsOrbitas[i] +'-parado';
                        
                        var planetaID = 'img-' + listaIdsOrbitas[i];
                        var planetaIDParado = 'img-' + listaIdsOrbitas[i] +'-parado';
                        
                        document.getElementById(orbitaID).classList.add(listaIdsOrbitas[i] +'-orbita-nova');
                        document.getElementById(orbitaIDParado).classList.add(listaIdsOrbitas[i] +'-orbita-nova');
                        
                        document.getElementById(planetaID).classList.add(listaIdsOrbitas[i] +'-planeta-novo');
                        document.getElementById(planetaIDParado).classList.add(listaIdsOrbitas[i] +'-planeta-novo');
                    }
                }
                else{
                    document.getElementById('sol').classList.remove('sol-orbita-nova');
                    document.getElementById('img-sol').classList.remove('sol-planeta-novo');
                    
                    document.getElementById('img-saturno-anel-1').classList.remove('saturno-anel-1-planeta-novo');
                    document.getElementById('img-saturno-anel-2').classList.remove('saturno-anel-2-planeta-novo');
                    
                    document.getElementById('img-saturno-anel-1-parado').classList.remove('saturno-anel-1-planeta-novo');
                    document.getElementById('img-saturno-anel-2-parado').classList.remove('saturno-anel-2-planeta-novo');
//                    
                    for(var i = 1; i < listaIdsOrbitas.length; i++)
                    {
                        var orbitaID = listaIdsOrbitas[i];
                        var orbitaIDParado = listaIdsOrbitas[i] +'-parado';
                        
                        var planetaID = 'img-' + listaIdsOrbitas[i];
                        var planetaIDParado = 'img-' + listaIdsOrbitas[i] +'-parado';
                        
                        document.getElementById(orbitaID).classList.remove(listaIdsOrbitas[i] +'-orbita-nova');
                        document.getElementById(orbitaIDParado).classList.remove(listaIdsOrbitas[i] +'-orbita-nova');
                        
                        document.getElementById(planetaID).classList.remove(listaIdsOrbitas[i] +'-planeta-novo');
                        document.getElementById(planetaIDParado).classList.remove(listaIdsOrbitas[i] +'-planeta-novo');
                    }
                }
            }