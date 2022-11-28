const prompt = require("prompt-sync")();

let nom1 = prompt("Entrez le premier nom : ")
let nom2 = prompt("Entrez le deuxième nom : ")
console.log("Salut " + nom1)

similitude(nom1,nom2)

function similitude(nom1, nom2){
    lowerNom1 = nom1.toLowerCase(); lowerNom2 = nom2.toLowerCase();
    let similitude = 0
    for (i=0; i < nom1.length;i++){
        for (j=0; j < nom2.length; j++){
            if (lowerNom1[i]===lowerNom2[j]){
                i==j ? similitude+=2 : similitude+=1
                break
            }    
        }
    }
    
    const diffLength = Math.abs(nom1.length-nom2.length)

    diffLength < 10 ? similitude+=10 - diffLength : similitude;
    similitude *= 10

    console.log(similitude)
}