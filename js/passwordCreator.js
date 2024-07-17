
function generarPassword(longitud) {

    const longitudMinima = 12;
    const longitudMaxima =50;

    if (longitud < longitudMinima || longitud > longitudMaxima) {
        throw new Error(`La longitud de la contraseña debe ser entre ${longitudMinima} y ${longitudMaxima} caracteres.`);
    }

    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()-_=+";
    
    const arrayMayusculas = mayusculas.split("");
    const arrayMinusculas = minusculas.split("");
    const arrayNumeros = numeros.split("");
    const arraySimbolos = simbolos.split("");
    
    // console.log(arrayMayusculas);
    // console.log(arrayMinusculas);
    // console.log(arrayNumeros);s
    // console.log(arraySimbolos);
    
    // let randomMayusculas = Math.floor(Math.random() * arrayMayusculas.length);
    // let randomMinusculas = Math.floor(Math.random() * arrayMinusculas.length);
    // let randomNumeros = Math.floor(Math.random() * arrayNumeros.length);
    // let randomSimbolos = Math.floor(Math.random() * arraySimbolos.length);

    // let randomPassword = arrayMayusculas[randomMayusculas] +  arrayMinusculas[randomMinusculas] + arrayNumeros[randomNumeros] + arraySimbolos[randomSimbolos];
    // console.log(randomPassword);
    const allCharacters = [...arrayMayusculas, ...arrayMinusculas, ...arrayNumeros, ...arraySimbolos];

    let password = "";
    for (let i = 0 ; i  < longitud; i++) {
        const randomPassword = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomPassword];
        
    }
    return password;
}

console.log(generarPassword(12))

function generarYMostrarContrasena() {
    const longitud = document.getElementById('inputLongitud').value;
    try {
        const password = generarPassword(parseInt(longitud));
        document.getElementById('password').textContent = `Contraseña generada: ${password}`;
    } catch (error) {
        console.error(error.message);
        document.getElementById('password').textContent = "";
        alert(error.message); // Muestra un mensaje de alerta en caso de error
    }
}


// const mayusculas = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
// const minusculas = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
// const numeros = [0,1,2,3,4,5,6,7,8,9];
// const simbolos = [!,@,#,$,%,^,&,*,(,),-, _ , =,+];  

