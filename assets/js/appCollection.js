const main = document.querySelector('main');
const elemsection = document.createElement('section');
const elemCards = document.createElement('div');


main.appendChild(elemsection);
elemsection.appendChild(elemCards);
elemCards.className = "cards"

// Récupérer le paramètre de requête du genre dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const postParam = urlParams.get('poste');


if (postParam !== "")
{

    creatCard("players.poste ==="+ postParam);
}

function creatCard(param){
    collection.forEach(players => {

        if (param){
           
            /* Creation div Cards */
            const elemCard = document.createElement('div');
            elemCards.appendChild(elemCard);
            elemCard.className = "card";
    
            /* Creation zone Image Card */
            const cardImage = document.createElement('div');    
            const imageFigure = document.createElement('figure');
            const figureImg = document.createElement('img');
            const imageTeams = document.createElement('img');
    
            elemCard.appendChild(cardImage);
            cardImage.appendChild(imageTeams);
            cardImage.appendChild(imageFigure );
            imageFigure.appendChild(figureImg );
            
    
            cardImage.className = "image";
            imageTeams.className = "logo-team"
            figureImg.src="assets/images/players/"+ players.image;
            imageTeams.src="assets/images/teams/"+ players.team + ".svg";
    
            /* Creation zone category */
            const elemCategory = document.createElement('div'); 
            const categoryTeam = document.createElement('div'); 
            const categoryPoste = document.createElement('div');    
            const categoryTeamParagraph = document.createElement('p');
            const categoryPosteParagraph = document.createElement('p'); 
    
            elemCard.appendChild(elemCategory);
            elemCategory.appendChild(categoryTeam);
            elemCategory.appendChild(categoryPoste);
            categoryTeam.appendChild(categoryTeamParagraph);
            categoryPoste.appendChild(categoryPosteParagraph);
    
            elemCategory.className = "category";
            categoryTeam.className = "team";
            categoryPoste.className = "poste";
    
            categoryTeamParagraph.innerHTML = players.team;
            categoryPosteParagraph.innerHTML = players.poste;
    
            /* Creation zone player */
            const elemPlayer = document.createElement('div'); 
            const playerName = document.createElement('h2');
            const playerFirstName = document.createElement('h3');
    
            elemCard.appendChild(elemPlayer);
            elemPlayer.appendChild(playerName);
            elemPlayer.appendChild(playerFirstName);
    
            elemPlayer.className = "name-player";
            playerName.innerHTML = players.name;
            playerFirstName.innerHTML = players.firstName;
    
            /* Creation zone Bio */
            const elemBio = document.createElement('div'); 
            const bioParagraph = document.createElement('p');
    
            elemCard.appendChild(elemBio);
            elemBio.appendChild(bioParagraph);
    
            elemBio.className = "content";
            bioParagraph.innerHTML = players.bio;
            
            /* Creation zone Footer */
            const elemFooter = document.createElement('div'); 
            const footerStat = document.createElement('a');
    
            elemCard.appendChild(elemFooter);
            elemFooter.appendChild(footerStat);
    
            elemFooter.className = "footer";
            footerStat.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>';
            footerStat.href=players.link;
            footerStat.target = "_blank";
    
            }    
    
    });
}



teams.forEach(team => {
    const elemNavteams = document.querySelector(".nav-team"); // Changed "nav-team" to ".nav-team" assuming it's a class
    const navteam = document.createElement('a');
    elemNavteams.appendChild(navteam); // Changed append to appendChild
    navteam.href = "index.html?team=" + team.name;
    navteam.innerHTML = team.name;
});

postes.forEach(poste => {
    const elemNavteams = document.querySelector(".nav-poste"); // Changed "nav-team" to ".nav-team" assuming it's a class
    const navteam = document.createElement('a');
    elemNavteams.appendChild(navteam); // Changed append to appendChild
    navteam.href = "index.html?poste=" + poste.name;
    navteam.innerHTML = poste.name;
});