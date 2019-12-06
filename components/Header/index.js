// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create
    const headerDiv = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerH1 = document.createElement('h1');
    const headerTemp = document.createElement('span');
    //assign
    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerDate.textContent = "MARCH 28, 2019";
    headerH1.textContent = "Lambda Times";
    headerTemp.textContent = "98°"
    //assemble
    headerDiv.appendChild(headerDate);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerTemp);
    return headerDiv
}

const headerContainer = document.getElementsByClassName('header-container').item(0);


headerContainer.appendChild(Header());