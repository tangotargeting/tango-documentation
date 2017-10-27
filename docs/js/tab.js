var tabs = document.querySelectorAll('.code-nav-container .nav.nav-tabs .nav-item a');

function findContainer(element, className) {
  if(element && element.className !== className) {
    return findContainer(element.parentElement, className);
  }
  return element;
}

function removeActive(elements) {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.className = element.className.replace("active", "");
  }
}

function changeTab(e) {
  var clickedTab = e.target,
      container = findContainer(clickedTab, 'code-nav-container'),
      parent = clickedTab.parentElement,
      activeElements = container.querySelectorAll('.active'),
      targetContent = document.querySelector(clickedTab.getAttribute("href"));

  removeActive(activeElements);
  parent.className += "active";
  targetContent.className += "active";

  e.preventDefault();
  return false;
}

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", changeTab, false);
}
