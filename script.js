let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0

let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")

while (choix == ! "mots" && choix == ! "mots") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}


if (choix === "mots") {
    for (let i = 0; i < listeMots.length; i++) {

        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])

        if (motUtilisateur === listeMots[i]) {
            score++
        }
    }

console.log("Votre score est de : " + score)
} 

else {

    if (choix === "phrases") {
        for (let i = 0; i < listePhrases.length; i++) {

            let phraseUtilisateur = prompt("Entrez la phrases : " + listePhrases[i])

            if (phraseUtilisateur === listePhrases[i]) {
                score++
            }

        }

        console.log("Votre score est de : " + score)
    }
}




