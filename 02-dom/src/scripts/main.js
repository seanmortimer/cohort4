import functions from './functions.js'


const ul = document.querySelector("ul");
let cardNumber = 4;


const buttonHandler = (event) => {

  if (event.target.tagName === 'BUTTON') {

    const targetParent = event.target.parentNode;
    const className = targetParent.getElementsByClassName('cardTitles')[0];
    const listItem = idUserInput.value;

    switch (event.target.textContent) {
      // Card function buttons
      case "Insert after":
        functions.addAfterCard(targetParent, "Card " + cardNumber);
        idOutputLog.textContent =
          `Card ${cardNumber} was added after ${className.textContent}`;
        cardNumber++;
        break;

      case "Insert before":
        functions.addBeforeCard(targetParent, "Card " + cardNumber);
        idOutputLog.textContent =
          `Card ${cardNumber} was added before ${className.textContent}`;
        cardNumber++;
        break;

      case "Delete card":
        functions.deleteCard(targetParent);
        idOutputLog.textContent = `${className.textContent} was deleted`;
        break;

      // List button functions
      case "Add to top":
        if (listItem) {
          ul.insertBefore(functions.createListItem(listItem), ul.firstElementChild)
          idOutputLog.textContent = `${listItem} was added at the top of the list`;
          idUserInput.value = "";
        }
        break;

      case "Add to bottom":
        if (listItem.length > 0) {
          ul.appendChild(functions.createListItem(listItem));
          idOutputLog.textContent = `${listItem} was added at the bottom of the list`;
          idUserInput.value = "";
        }
        break;

      case "Delete":
        idOutputLog.textContent =
          `${targetParent.textContent.slice(0, -6)} was deleted from the list`;
        functions.deleteCard(targetParent);
        break;
    }
  } else if (event.target.tagName === 'LI') {
    event.target.classList.toggle("clListDone")
  }
};

document.body.addEventListener('click', buttonHandler);
