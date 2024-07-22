document.addEventListener('DOMContentLoaded', function () {
    let tabla = [];
    let multiplo = [];
    let iteracionTabla;
    let iteracionMultiplo;
    let resultado;
    let numeroTabla;
    let numeroMultiplo;
    let print = '';
    let numerorojo;
    let iteracion;
    let random=[];

    for (iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        numeroTabla = iteracionTabla + 1;
        multiplo = [];
        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numeroMultiplo = iteracionMultiplo + 1;
            resultado = numeroTabla * numeroMultiplo;
            multiplo.push(resultado);
        }
        tabla.push(multiplo);
    }
    console.log(tabla);

    for (iteracionTabla = 0; iteracionTabla < 5; iteracionTabla++) {
        print += `<div class="targeta">
                    <div class="sub-caja">
                        <div class="titulo">
                            <div class="separacion_letra">
                                <h1>B</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>I</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>N</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>G</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>O</h1>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <div class="parte_numerica" id="numerico">`;

        for (iteracionMultiplo = 0; iteracionMultiplo < 25; iteracionMultiplo++) {
            numerorojo = iteracionMultiplo%5;
            if (numerorojo === iteracionTabla) {
                claseRojo='rojo'
            }  else{
                claseRojo=""
            }      
            print += `<div class="separacion_numero `+claseRojo+`"><h1>`+tabla[iteracionTabla][iteracionMultiplo]+`</h1></div>`;
        }

        print += `</div>
                </div>
                </div>`;
    }
    for (let index = 0; index < 5; index++) {
        let iteracion = [];
        for (let i = 0; i < 5; i++) {
            let resultado = Math.floor(Math.random() * 100);
            iteracion.push(resultado);
        }
        random.push(iteracion);
    }
    
    console.log(random);

    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        print += `<div class="targeta">
                    <div class="sub-caja">
                        <div class="titulo">
                            <div class="separacion_letra">
                                <h1>B</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>I</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>N</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>G</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>O</h1>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <div class="parte_numerica" id="numerico">`;
                        for (let i = 0; i <5; i++) {
                            for (iteracionMultiplo = 0; iteracionMultiplo < 5; iteracionMultiplo++) {
                                if (i === iteracionMultiplo || iteracionMultiplo+i===4) {
                                    claseRojo='rojo'
                                }  else{
                                    claseRojo=""
                                }      
                                print += `<div class="separacion_numero `+claseRojo+`"><h1>`+random[i][iteracionMultiplo]+`</h1></div>`;
                            }                          
                        }


        print += `</div>
                </div>
                </div>`;
    }
    random=[];
    for (let index = 0; index < 5; index++) {
        let iteracion = [];
        for (let i = 0; i < 5; i++) {
            let resultado = Math.floor(Math.random() * 100);
            iteracion.push(resultado);
        }
        random.push(iteracion);
    }
    console.log(random);
    for (iteracionTabla = 0; iteracionTabla < 1; iteracionTabla++) {
        print += `<div class="targeta">
                    <div class="sub-caja">
                        <div class="titulo">
                            <div class="separacion_letra">
                                <h1>B</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>I</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>N</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>G</h1>
                            </div>
                            <div class="separacion_letra">
                                <h1>O</h1>
                            </div>
                        </div>
                        <div class="hr"></div>
                        <div class="parte_numerica" id="numerico">`;
                        
                        for (let i = 0; i <5; i++) {
                            for (iteracionMultiplo = 0; iteracionMultiplo < 5; iteracionMultiplo++) {
                                if (iteracionMultiplo+i==2||iteracionMultiplo===i||i+iteracionMultiplo==(i+1)*2 || i+iteracionMultiplo==4) {
                                    claseRojo='rojo'
                                }  else{
                                    claseRojo=""
                                }      
                                print += `<div class="separacion_numero `+claseRojo+`"><h1>`+random[i][iteracionMultiplo]+`</h1></div>`;
                            }                          
                        }


        print += `</div>
                </div>
                </div>`;
    }

    document.getElementById('pagina').innerHTML = print;
});


