const colorButton = document.getElementById('colorBtn')
const colorText = document.getElementById('colorText')

const charArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];

const randomColorCode = () => {
  let hexCode = "#"
  for(let i=0; i<6; i++){
    hexCode += charArray[Math.floor(Math.random() * charArray.length)];
  }
  return hexCode
}

colorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColorCode();
  colorText.innerHTML = randomColorCode();
})

