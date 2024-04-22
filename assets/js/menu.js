document.addEventListener('mouseover', event => {
    if (event.target.classList.contains('toogleLink')) {
        event.preventDefault();

        var parentTarget = document.querySelector('.nav-subLink').children;
            for (const navChildren of parentTarget) {
                const classChildren = navChildren.classList;
                if(classChildren !== targetId){
                /* console.log(classChildren);*/
                    classChildren.remove('nav-open');
                }
                    
            }
        
        var targetId = event.target.getAttribute('data-target');
        console.log(targetId);        
        document.querySelector("."+ targetId).classList.toggle('nav-open');  
    }    
    document.addEventListener('mouseout', event => { 
        const navSubLink = document.querySelector('.nav-subLink');
        if (event.target.nodeName === 'DIV') {  
            const navLinks = navSubLink.querySelectorAll('div');
            //console.log(navLinks);
            for (const navLink of navLinks) {
                navLink.classList.remove('nav-open');
                //console.log(navLink);
            }
        }
    });   

});

const navSubLink = document.querySelector('.nav-subLink');
//console.log(navSubLink);
navSubLink.addEventListener('mouseout', event => {
    if (event.target.nodeName === 'DIV') {  
        const navLinks = navSubLink.querySelectorAll('div');
        //console.log(navLinks);
        for (const navLink of navLinks) {
            navLink.classList.remove('nav-open');
            //console.log(navLink);
        }
    }
});

