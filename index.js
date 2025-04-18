function MysteryNumber() { 
    var MysteryNumber = Math.floor(Math.random() * 10);

    //affichage de la console
    console.log(MysteryNumber);
    
let guess = prompt("trouve le nombre entre 0 et 10: ");
//console.log( "et le chiffre et " + guess);

if (guess < MysteryNumber) 
    alert("tu est trop bas !");

else if (guess > MysteryNumber)
    alert("tu est trop haut !");

else if (guess == MysteryNumber) {
    alert("Bravo ! tu as trouvé le bon chiffre !");
} else 
    alert("Ce n'est pas un nombre valide !");

}