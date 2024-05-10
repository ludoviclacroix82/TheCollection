const main = document.querySelector('main');
const elemsection = document.createElement('section');
const elemCards = document.createElement('div');


main.appendChild(elemsection);
elemsection.appendChild(elemCards);
elemCards.className = "cards"

// Récupérer le paramètre de requête du genre dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const posteParam = urlParams.get('poste');
const teamParam = urlParams.get('team');
const playerParamName = urlParams.get('name');
const playerParamFName = urlParams.get('firstName');

const jsonData = "assets/js/libs/collection.json";

fetch(jsonData)
    .then((response) => response.json())
    .then(data => {
        const paramFilter = data.collection.filter(paramPlayers => {
            if (posteParam) {
                return paramPlayers.poste === posteParam;
            } else if (teamParam) {
                return paramPlayers.team === teamParam;
            } else if (playerParamName && playerParamFName) {
                return paramPlayers.name === playerParamName && paramPlayers.firstName === playerParamFName;
            } else {
                return true;
            }
        }).forEach(players => {
        
            /* Creation div Cards */
            const elemCard = document.createElement('div');
            elemCards.appendChild(elemCard);
            elemCard.className = "card";
            elemCard.id = players.name + players.firstName;
        
            /* Creation zone Image Card */
            const cardImage = document.createElement('div');
            const imageFigure = document.createElement('figure');
            const figureImg = document.createElement('img');
            const imageTeams = document.createElement('img');
        
            elemCard.appendChild(cardImage);
            cardImage.appendChild(imageTeams);
            cardImage.appendChild(imageFigure);
            imageFigure.appendChild(figureImg);
        
        
            cardImage.className = "image";
            imageTeams.className = "logo-team"
            figureImg.src = "assets/images/players/" + players.image;
            imageTeams.src = "assets/images/teams/" + players.team + ".svg";
        
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
            const footerDelete = document.createElement('a');
        
            elemCard.appendChild(elemFooter);
            elemFooter.appendChild(footerStat);
            elemFooter.appendChild(footerDelete);
        
            elemFooter.className = "footer";
            footerStat.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  class="bi bi-info-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>';
            footerStat.href = players.link;
            footerStat.target = "_blank";
        
            footerDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-window-x" viewBox="0 0 16 16"><path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/><path d="M0 4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4a.5.5 0 0 1-1 0V7H1v5a1 1 0 0 0 1 1h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-2zm1 2h13V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/><path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0"/></svg>';
            footerDelete.title = 'Suprimer Carte'
        
            footerDelete.addEventListener('click', function (event) {
        
                cardDelete(players.name, players.firstName);
        
            });
        });
        
        data.teams.forEach(team => {
            const elemNavteams = document.querySelector(".nav-team");
            const navteam = document.createElement('a');
            elemNavteams.appendChild(navteam);
            navteam.href = "index.html?team=" + team.name;
            navteam.innerHTML = team.name;
        });
        
        data.postes.forEach(poste => {
            const elemNavPost = document.querySelector(".nav-poste");
            const navPost = document.createElement('a');
            elemNavPost.appendChild(navPost);
            navPost.href = "index.html?poste=" + poste.name;
            navPost.innerHTML = poste.name;
        });
        
        data.collection.forEach(players => {
            const elemNavPlayers = document.querySelector(".nav-players");
            const navPlayer = document.createElement('a');
            elemNavPlayers.appendChild(navPlayer);
            navPlayer.href = "index.html?name=" + players.name + "&firstName=" + players.firstName;
            navPlayer.innerHTML = players.name + " " + players.firstName;
        });
        
    })
    .catch((error) => {
        console.log("There was an error!", error);
    });



/**
 * Supprime la carte 
 * @param {*} name nom du player 
 * @param {*} fName prénom du player 
 */
function cardDelete(name, fName) {
    const divIndex = document.getElementById(name + fName);
    let askDelete = confirm("Voulez-vous supprimer la Carte :" + name + " " + fName)
    if (askDelete === true)
        divIndex.remove();
}