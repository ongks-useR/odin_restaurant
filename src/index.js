import "./template.css"


// Create contents once the DOM is fully loaded
window.addEventListener(
    'load',
    () => {
        const Heading = document.createElement('h1');
        Heading.textContent = 'Manhattan Favourites';

        const Img1 = document.createElement("img");
        Img1.setAttribute('class', 'favourite-pic');
        Img1.setAttribute('src', "https://www.manhattanfishmarket.com/malaysia/wp-content/webpc-passthru.php?src=https://www.manhattanfishmarket.com/malaysia/wp-content/uploads/sites/2/2024/04/The-Manhattan-Star-Platter-3-scaled.jpg&nocache=1");
        Img1.setAttribute('alt', 'Favourites of Manhattan Fish Market');

        const Text1 = document.createElement('p');
        Text1.textContent = "The Manhattan FISH MARKET draws its inspiration from the reputable Fulton Fish Market, which was once located below the iconic Brooklyn Bridge. The fish market was known to house a diverse collection of the freshest catch of the day, catering to seafood fans, far and wide."

        const Text2 = document.createElement('p');
        Text2.textContent = "Affiliating its reputation as a great place for fine seafood, The Manhattan FISH MARKET is dedicated to serving up a storm with its wide variety of American-style seafood choices, all in a fun and warm fast casual dining experience that is bound to excite!"

        const paras = document.createElement('div');
        paras.appendChild(Text1);
        paras.appendChild(Text2);

        const pic_container = document.createElement('div');
        pic_container.setAttribute('class', 'pic_container');
        pic_container.appendChild(Img1);
        pic_container.appendChild(paras);

        const contents = document.querySelector("#content");
        contents.appendChild(Heading);
        contents.appendChild(pic_container);
    }
)
