function afficherResultat(score, nbMotsProposes){

    let balisezoneScoreSpan = document.querySelector(".zoneScore span")
    
    let affichageScore = `${score} / ${nbMotsProposes} `
   
    balisezoneScoreSpan.innerText = affichageScore
}


function afficherProposition(proposition){
    let balisezoneProposition = document.querySelector(".zoneProposition");

    balisezoneProposition.innerText = proposition
}

function lancerLeJeu(){
    let score = 0
    let i = 0

    
    let btnValidation = document.getElementById("btnValiderMot")
    let zoneEcriture = document.getElementById("inputEcriture")
    afficherProposition(listeMots[i])
    btnValidation.addEventListener("click", () => {
        if ( zoneEcriture.value === listeMots[i] ){
            score ++
            console.log=(score)
        }
        i++
        afficherResultat(score,i)
        zoneEcriture.value = ''
        if (listeMots[i] === undefined) {
            afficherProposition("Le jeu est fini")
            btnValidation.disabled = true
        } else {
            afficherProposition(listeMots[i])
        }

    })

    afficherResultat(score,i)
}


console.log(zoneEcriture)

