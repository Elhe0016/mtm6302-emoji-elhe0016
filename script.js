let containerDiv = document.getElementsByClassName("grid-container")[0];

let emojiCode = 128512;


for(let i = emojiCode; i < 128580; i++)
{
    let gridItem = document.createElement("DIV");
    gridItem.classList.add("grid-item");

    let innerItem = document.createTextNode( String.fromCodePoint( i ) );

    let codeContainer = document.createElement("P");

    let codeChild = document.createTextNode(i);

    codeContainer.appendChild(codeChild);

    gridItem.appendChild(innerItem);

    gridItem.appendChild(codeContainer);

    containerDiv.append(gridItem);
}