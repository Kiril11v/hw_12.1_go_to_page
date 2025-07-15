const page = document.getElementById('userPageButton');
const openPage = document.getElementById('goToPageButton');

let savedPage = '';

page.addEventListener('click', function () {  // // button save page
    const userPage = prompt('enter your page');
    if (!pageValidation(userPage)) {
        return;
    }
    if (savedPage === userPage) { // deletes the first link if clicked a second time
        savedPage = '';
        alert('link del')
        return;
    }
     savedPage = userPage;
})

openPage.addEventListener('click', function (){ // button open page
    if(!savedPage){
        alert('enter page');
        return;
    }
    window.open(savedPage);
})

function pageValidation(page) {
    try { // construction for error handling
        const url = new URL(page);   
        return url.protocol === 'https:' || url.protocol === 'http:';
    }
    catch(err){
        return false;
    }

} 