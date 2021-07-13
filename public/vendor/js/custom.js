
window.onclick = page_click;
function page_click(e) {
    if (e.path[1].parentElement.classList[0] === 'widget-cart-item') {
      let myText = e.path[1].parentElement.innerText;
      let newText = myText.split('₦');
      let nameOfItem = newText[0].substring(2);
      console.log(nameOfItem)
  }
}

