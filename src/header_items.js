
const displayMenu = function () {

    // Remove border bottom of Contact
    const contact_btn = document.querySelector('#contact');
    contact_btn.style.cssText = "border-bottom: 3px solid white;"

    // Set border bottom of Menu
    this.style.cssText = "border-bottom: 3px solid burlywood;"

    // Create elements for Menu

    const title = document.createElement('h2');
    title.textContent = 'Single Platters';

    const single_plattern_img = document.createElement('img');
    single_plattern_img.setAttribute('id', 'single-platters');
    single_plattern_img.setAttribute('src', "https://www.manhattanfishmarket.com/malaysia/wp-content/webpc-passthru.php?src=https://www.manhattanfishmarket.com/malaysia/wp-content/uploads/sites/2/2024/04/Single_Platters_Web_Banner_Raw_20240424-1000x600.png&nocache=1");
    single_plattern_img.setAttribute('alt', 'Ala Carte menu photo');

    // Item 1
    const item1 = document.createElement('div');
    item1.setAttribute('class', 'item');

    const img1 = document.createElement('img');
    img1.setAttribute('src', 'https://www.manhattanfishmarket.com/malaysia/wp-content/webpc-passthru.php?src=https://www.manhattanfishmarket.com/malaysia/wp-content/uploads/sites/2/2024/04/The-Manhattan-Flaming-Prawns-1-scaled.jpg&nocache=1');
    img1.setAttribute('alt', 'Manhattan Flaming Prawns');

    const name_desc1 = document.createElement('div');
    name_desc1.setAttribute('class', 'name-desc');

    const name1 = document.createElement('p');
    name1.innerHTML = "<span>The Manhattan Flaming Prawns</span>..........<span>RM 45.90</span>";

    const desc1 = document.createElement('p');
    desc1.innerHTML = "Grilled Prawns topped with flaming sauce and flamed! Served with a side of hot veggies, fries, and Garlic Herb Rice.";

    name_desc1.appendChild(name1);
    name_desc1.appendChild(desc1);

    item1.appendChild(img1);
    item1.appendChild(name_desc1);


    // Item 2
    const item2 = document.createElement('div');
    item2.setAttribute('class', 'item');

    const img2 = document.createElement('img');
    img2.setAttribute('src', 'https://www.manhattanfishmarket.com/malaysia/wp-content/webpc-passthru.php?src=https://www.manhattanfishmarket.com/malaysia/wp-content/uploads/sites/2/2024/04/Scallop-Fish-Chicken-1-scaled.jpg&nocache=1');
    img2.setAttribute('alt', 'Scallop Fish Chicken');

    const name_desc2 = document.createElement('div');
    name_desc2.setAttribute('class', 'name-desc');

    const name2 = document.createElement('p');
    name2.innerHTML = "<span>Scallop Fish Chicken</span>..........<span>RM 45.90</span>";

    const desc2 = document.createElement('p');
    desc2.innerHTML = "A mixed single serving of hand-battered scallops, fish fingers, grilled chicken, hot veggies, fries, and Garlic Herb Rice";

    name_desc2.appendChild(name2);
    name_desc2.appendChild(desc2);

    item2.appendChild(img2);
    item2.appendChild(name_desc2);


    // Item 3
    const item3 = document.createElement('div');
    item3.setAttribute('class', 'item');

    const img3 = document.createElement('img');
    img3.setAttribute('src', 'https://www.manhattanfishmarket.com/malaysia/wp-content/webpc-passthru.php?src=https://www.manhattanfishmarket.com/malaysia/wp-content/uploads/sites/2/2024/04/Small-Flame-2-scaled.jpg&nocache=1');
    img3.setAttribute('alt', 'Small Flame');

    const name_desc3 = document.createElement('div');
    name_desc3.setAttribute('class', 'name-desc');

    const name3 = document.createElement('p');
    name3.innerHTML = "<span>Small Flame</span>..........<span>RM 45.90</span>";

    const desc3 = document.createElement('p');
    desc3.innerHTML = "Grilled Dory with Garlic Herb Sauce, and The Manhattan Flaming Prawns. Served with a side of hot veggies, fries, and Garlic Herb Rice.";

    name_desc3.appendChild(name3);
    name_desc3.appendChild(desc3);

    item3.appendChild(img3);
    item3.appendChild(name_desc3);


    // Item 4
    const item4 = document.createElement('div');
    item4.setAttribute('class', 'item');

    const img4 = document.createElement('img');
    img4.setAttribute('src', 'https://www.manhattanfishmarket.com/malaysia/wp-content/webpc-passthru.php?src=https://www.manhattanfishmarket.com/malaysia/wp-content/uploads/sites/2/2024/04/FY23MFM-Grab-Small-Grill-1-2.jpg&nocache=1');
    img4.setAttribute('alt', 'Small Grill');

    const name_desc4 = document.createElement('div');
    name_desc4.setAttribute('class', 'name-desc');

    const name4 = document.createElement('p');
    name4.innerHTML = "<span>The Manhattan Flaming Prawns</span>..........<span>RM 45.90</span>";

    const desc4 = document.createElement('p');
    desc4.innerHTML = "Grilled prawns, calamari, and dory. Served with a side of hot veggies, fries, and Garlic Herb Rice";

    name_desc4.appendChild(name4);
    name_desc4.appendChild(desc4);

    item4.appendChild(img4);
    item4.appendChild(name_desc4);


    // Left Column
    const col_left = document.createElement('div');
    col_left.setAttribute('class', 'col');

    col_left.appendChild(item1)
    col_left.appendChild(item2)

    // Right Column
    const col_right = document.createElement('div');
    col_right.setAttribute('class', 'col');

    col_right.appendChild(item3)
    col_right.appendChild(item4)


    const menu = document.createElement("div");
    menu.setAttribute('id', "single-platters-menu");
    menu.appendChild(col_left)
    menu.appendChild(col_right)

    const contents = document.querySelector("#content");
    contents.textContent = ""; // Clear the contents in Home page
    contents.appendChild(title);
    contents.appendChild(single_plattern_img);
    contents.appendChild(menu);
};


const displayContact = function () {

    // Remove border bottom of Menu
    const menu_btn = document.querySelector('#menu');
    menu_btn.style.cssText = "border-bottom: 3px solid white;"

    // Set border bottom of Contact
    this.style.cssText = "border-bottom: 3px solid burlywood;"

    const contents = document.querySelector("#content");
};


export { displayMenu, displayContact };