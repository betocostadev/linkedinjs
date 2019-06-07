const loopsContainer = document.querySelector('#loops');
// Links UL
const linkList = document.querySelector('#link-list');
// Start function BTN
const renderLinksBtn = document.querySelector('#displayLinks');
// Get all the links that START with http ... (href^=)
const extLinks = document.querySelectorAll('a[href^=http]');

const renderLinkList = () => {
  if (linkList.childElementCount > 0) {
    let kids = Array.from(linkList.children);
    console.log(kids)
    kids.forEach(li => {
      li.parentElement.removeChild(li);
    });
    console.log('HELP!')
  } else {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < extLinks.length; i++) {
      const listItem = document.createElement('li');
      listItem.innerText = extLinks[i].textContent;
      fragment.append(listItem);
    }
    linkList.append(fragment);
  }
}

renderLinksBtn.addEventListener('click', renderLinkList);

