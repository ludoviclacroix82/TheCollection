document.addEventListener('mouseover', function(event) {
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
           
    document.addEventListener('mouseout', function(event){
        const subLink = document.querySelector('nav-subLink');
        //const subLinkChildren = document.querySelector('.nav-subLink').children;
        subLink.remove('nav-open');
        console.log(subLinkChildren);
    });
    
});


