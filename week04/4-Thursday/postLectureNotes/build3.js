

function createAnchor(url, text, style) {

    var anchor = document.createElement('a');
    anchor.setAttribute('class', style);
    anchor.setAttribute('href', url);
    anchor.textContent = text;

    return anchor;

}

function buildNavBar(navBGColor, anchorList) {

    // navbar  (attached to main container)

    var nav = document.createElement('nav');
    var bg = 'background-color: ' + navBGColor;

    nav.setAttribute('class', 'navbar navbar-expand navbar-dark p-4');
    nav.setAttribute('style', bg)

    // inner nav div 

    var navDiv = document.createElement('div');
    navDiv.setAttribute('class', 'nav navbar-nav h3');

    for (var index = 0; index < anchorList.length; index++) {
        navDiv.appendChild(anchorList[index]);
    }

    nav.append(navDiv);

    return nav;
}

var anchorList = [];

var a = createAnchor("#", "Hello World!", "nav-item nav-link active");

anchorList.push(a);

a = createAnchor("#", "About Us", "nav-item nav-link active small pl-5");

anchorList.push(a)

a = createAnchor("#", "Houston Staff", "nav-item nav-link small pl-5");

var navbar = buildNavBar("blue", anchorList);

var body = document.querySelector('body');

body.appendChild(navbar);

