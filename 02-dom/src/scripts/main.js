const divs = document.querySelector("div");
const btns = document.querySelector("button");
const ol = document.querySelector("ol");


const divHandler = (event) => {
    console.log('Mouse was clicked on: ' + event.target.textContent );
};

const buttonHandler = (event) => {
    switch (event.target.textContent) {
        case "Insert after":
        console.log('"Insert after" was clicked: ' + event.target.parentElement.textContent);
        break;

        case "Insert before":
            console.log('"Insert before" was clicked: '   );
            ol.appendChild
            break;
    }
};

// divs.addEventListener('click', divHandler);
document.body.addEventListener('click', buttonHandler);