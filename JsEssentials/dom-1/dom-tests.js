/* JavaScript Dom insertion and performance tests

The functions below will:
Generate and array of 1500 paragraphs and then call for a function to append paragraphs
on the page with each array number.
domTestOne = Low performance function (too many reflows)
domTestTwo = moderate performance (less reflows - but a not needed new div in the DOM)
domTestThree = high performance (uses document fragment - performance similar to 2, but no new div)

*/

// Dom global variables:
const domTestDiv = document.querySelector('#dom-test');
const testBtn1 = document.querySelector('#test-one-btn');
const testBtn2 = document.querySelector('#test-two-btn');
const testBtn3 = document.querySelector('#test-three-btn');
const resetBtn = document.querySelector('#test-reset-btn');
const perfDisplay1 = document.querySelector('#perf-display-one');
const perfDisplay2 = document.querySelector('#perf-display-two');
const perfDisplay3 = document.querySelector('#perf-display-three');

// Function to generate an array with 1500 elements to be added to the paragraphs:
const arrayGenerator = (funcCalled) => {
  const num = 1500;
  const genArr = [];
  for (let i = 1; i <= num; i += 1) {
    genArr.push(i);
  }
  // return genArr;
  if (funcCalled === 'domTestOne'){
    domTestOne(genArr);
  } else if (funcCalled === 'domTestTwo') {
    domTestTwo(genArr);
  } else if (funcCalled === 'domTestThree') {
    domTestThree(genArr);
  }
};

const domTestOne = (arr) => {
  // Reset the paragraphs if there is any:
  reset();
  // Get the div container:
  const container = document.getElementById('dom-test');
  // Generate the paragraphs and start the performance test:
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('dom-test-par');
    paragraph.textContent = `This is the paragraph number: ${arr[i]}`;
    container.appendChild(paragraph);
  }
  // End the performance test and display the time:
  const endTime = performance.now();
  perfDisplay1.textContent = `First test: ${endTime - startTime} milliseconds.`;
}

const domTestTwo = (arr) => {
  // Reset the paragraphs if there is any:
  reset();
  // Get the div container:
  const container = document.getElementById('dom-test');
  // This time, create another div, to append only the div to the dom, instead of one p, one by one:
  const parContainer = document.createElement('div');
  parContainer.setAttribute('id', 'to-remove');
  // Generate the paragraphs and start the performance test:
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('dom-test-par');
    paragraph.textContent = `This is the paragraph number: ${arr[i]}`;
    parContainer.appendChild(paragraph);
  }
  container.appendChild(parContainer);
  // End the performance test and display the time:
  const endTime = performance.now();
  perfDisplay2.textContent = `Second test: ${endTime - startTime} milliseconds.`;
}

const domTestThree = (arr) => {
  // Reset the paragraphs if there is any:
  reset();
  // Get the div container:
  const container = document.getElementById('dom-test');
  // No need to create another div this time, we will use a document fragment.
  const fragment = document.createDocumentFragment();
  // Generate the paragraphs and start the performance test:
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('dom-test-par');
    paragraph.textContent = `This is the paragraph number: ${arr[i]}`;
    fragment.appendChild(paragraph);
  }
  container.appendChild(fragment);
  // End the performance test and display the time:
  const endTime = performance.now();
  perfDisplay3.textContent = `Third test: ${endTime - startTime} milliseconds.`;
}

// Reset button function:
const reset = () => {
  // Remove the div of the paragraphs if they were created:
  if (document.querySelector('#to-remove')) {
    const toRemove = document.querySelector('#to-remove');
    // Asking to remove itself? YES! It works.
    // It uses the element to traverse for its parent and the parent removes the child.
    toRemove.parentElement.removeChild(toRemove);
    // In case there is no 'to-remove' divs, remove the paragraphs:
  } else if (document.querySelectorAll('.dom-test-par')) {
    const paragraphs = document.querySelectorAll('.dom-test-par');
    paragraphs.forEach(par => {
      par.parentElement.removeChild(par);
    });
  }
}

// Function to call the tests:
/* This function was needed to solve a problem:
By adding the event listener on each button and passing the argument needed, the function
to gerenate the paragraphs will run on document load. This way it prevents the behavior. */
domTestDiv.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target === testBtn1) {
    arrayGenerator('domTestOne')
  } else if (e.target === testBtn2) {
    arrayGenerator('domTestTwo');
  } else if (e.target === testBtn3) {
    arrayGenerator('domTestThree');
  } else if (e.target === resetBtn) {
    reset();
  }
})



