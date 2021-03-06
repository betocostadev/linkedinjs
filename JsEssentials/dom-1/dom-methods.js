/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* Use the element has attribute and set attribute to change the anchor and make it open in another tab */

console.log('Anchor fixes:');
const anchor = document.querySelector('#datalink');

const addBlank = (link) => {
  // check for href attribute
  if ( link.hasAttribute('href') ) {
    console.log(`Looks like this anchor has an attribute. It is: ${link.getAttribute('href')}`);
  } else {
    console.log('Well, look\'s like this element doesn\'t have an href');
  }

  // check for a target attribute
  if ( link.hasAttribute('target') ) {
    console.log(`It does have a target! It's target is: ${link.getAttribute('target')}`);
  } else {
    // Add target _blank
    link.setAttribute('target', '_blank');
  }
};

addBlank(anchor);
console.log('The anchor is fixed now. You can check with addBlank(anchor)');

const figure1 = document.querySelector('.main-fig');

const addCaption = (figname) => {
  // Create the container for the caption <figcaption>
  const container = document.createElement('figcaption');
  // Get the alt from the first child of the figure (the image)
  const alt = figname.firstElementChild.getAttribute('alt');
  // Create a textNode using the alt text of the image
  const caption = document.createTextNode(alt);
  // Append the text to figcaption
  container.appendChild(caption);
  // Append the figcaption as the last child (just after the image tag, since it's the last)
  figname.appendChild(container);

  // Its good by now, but we can remove the alt from the image. This is better because
  // screen readers will read the figcaption AND the alt, and that can be boring.
  figname.firstElementChild.setAttribute('alt', '');
};

const codefigure =
`const addCaption = (figname) => {
  // Create the container for the caption <figcaption>
    const container = document.createElement('figcaption');
  // Get the alt from the first child of the figure (the image)
    const alt = figname.firstElementChild.getAttribute('alt');
  // Create a textNode using the alt text of the image
    const caption = document.createTextNode(alt);
  // Append the text to figcaption
    container.appendChild(caption);
  // Append the figcaption as the last child (just after the image tag, since it's the last)
    figname.appendChild(container);

  // Its good by now, but we can remove the alt from the image. This is better because
  // screen readers will read the figcaption AND the alt, and that can be boring.
    figname.firstElementChild.setAttribute('alt', '');
}`;

const renderAddCaption = (funName) => {
  const mainContainer = document.querySelector('.renderfigcode');
  const code = document.createElement('code');
  const pre = document.createElement('pre');
  // Add the text to the pre tag:
  document.createTextNode(funName);
  // Add the text (the function text) to the pre tag.
  // It is not possible using only appendChild here.
  pre.append(funName);
  // Add the pre tag to the code tag
  code.appendChild(pre);
  // Add the code tag to the container
  mainContainer.appendChild(code);
};

// renderAddCaption(codefigure);

// Ask for user name
const userBtn = document.querySelector('.user-btn');

const displayUserName = () => {
  let message = prompt('Hello! What\'s your name?');
  const displayNamePar = document.querySelector('.user-name');
  if (message === '' || message === null) {
    displayNamePar.textContent = 'Hello, user! Sorry about the annoying prompt window 🍹';
  } else {
    displayNamePar.textContent = `Hello, ${message}! Sorry about the annoying prompt window 🍹`;
  }
};

userBtn.addEventListener('click', displayUserName, false);
userBtn.addEventListener('click', () => { console.log('The button was clicked!');});

const cTextBtn = document.querySelector('#change-text-btn');
const changeText = (text) => {
  text.innerHTML === 'Help!' ? text.innerHTML = 'Thanks!' : text.innerHTML = 'Help!';
};
cTextBtn.addEventListener('click', function() { changeText(this); });