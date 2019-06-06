/* JavaScript Dom insertion and performance tests

The functions below will:
Generate and array of 1000 elements and then call for a function to append paragraphs
on the page with each array number.
domTestOne = Low performance function (too many reflows)
domTestTwo = moderate performance (less reflows)
domTestThree = high performance (uses document fragment)

*/
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
  }
};

// First test function
// This function will add one by one, all the paragraphs.
const domTestOne = (arrToAdd) => {
  // If the document already have the array of paragraphs, remove it:
  if (document.querySelector('.test-paragraphs')) {
    // Put the div of paragraphs in a variable to be removed
    const die = document.querySelector('.test-paragraphs');
    // Asking to remove itself? YES! It works.
    // It uses the element to traverse for its parent and the parent removes the child.
    die.parentElement.removeChild(die);
  }
  // The paragraph that will display the performance test
  const perfDisplayOne = document.getElementById('perf-display-one');
  // The array div
  const container = document.getElementById('array-test-container');
  // The div created below would not be needed for this test, it will be used
  // only to work with the other functions and to get better results.
  const paragraphsContainer = document.createElement('div');
  paragraphsContainer.classList.add('test-paragraphs');
  container.appendChild(paragraphsContainer);
  // Start performance test
  const startTime = performance.now();
  // Generate the paragraphs with each array element number
  for (let i = 0; i < arrToAdd.length; i++) {
    // const element = array[i];
    const paragraph = document.createElement('p');
    paragraph.textContent = `This is the paragraph number: ${arrToAdd[i]}`;
    paragraphsContainer.appendChild(paragraph);
  }
  // Finish performance test
  const endTime = performance.now();
  perfDisplayOne.textContent = `Total time it took to complete: ${endTime - startTime}`;
}

// Second test function
const domTestTwo = (arrToAdd) => {
  // If the document already have the array of paragraphs, remove it:
  if (document.querySelector('.test-paragraphs')) {
    // Put the div of paragraphs in a variable to be removed
    const die = document.querySelector('.test-paragraphs');
    // Asking to remove itself? YES! It works.
    // It uses the element to traverse for its parent and the parent removes the child.
    die.parentElement.removeChild(die);
  }
  // The paragraph that will display the performance test
  const perfDisplayTwo = document.getElementById('perf-display-two');
  // The array div
  const container = document.getElementById('array-test-container');
  // Create a container with the paragraphs to be placed inside the main container
  const paragraphsContainer = document.createElement('div');
  // Just adding a class
  paragraphsContainer.classList.add('test-paragraphs');
  // Start performance test
  const startTime = performance.now();
  // Generate the paragraphs with each array element number
  for (let i = 0; i < arrToAdd.length; i++) {
    // const element = array[i];
    const paragraph = document.createElement('p');
    paragraph.textContent = `This is the paragraph number: ${arrToAdd[i]}`;
    paragraphsContainer.appendChild(paragraph);
  }
  container.appendChild(paragraphsContainer);
  // Finish performance test
  const endTime = performance.now();
  perfDisplayTwo.textContent = `Test two elapsed time: ${endTime - startTime}`;
}

// TODO : FUNCTION 3, USING DOCUMENT FRAGMENT!!!


// Buttons
const domTestButtons = document.getElementById('dom-test-buttons');
const domTestOneBtn = document.getElementById('dom-test-one-btn');
const domTestTwoBtn = document.getElementById('dom-test-two-btn');
const domTestThreeBtn = document.getElementById('dom-test-three-btn');

/* Event listener for the div of the buttons. This way, it prevents the 'click' to be called as soon as the page is loaded. */
domTestButtons.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target === domTestOneBtn) {
    arrayGenerator('domTestOne')
  } else if (e.target === domTestTwoBtn) {
    arrayGenerator('domTestTwo');
  }
  // Remember to add an else if with the reset button here!
})

const reset = () => {
  // If the document already have the array of paragraphs, remove it:
  if (document.querySelector('.test-paragraphs')) {
    // Put the div of paragraphs in a variable to be removed
    const die = document.querySelector('.test-paragraphs');
    // Asking to remove itself? YES! It works.
    // It uses the element to traverse for its parent and the parent removes the child.
    die.parentElement.removeChild(die);
  }
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', reset);

