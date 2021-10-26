// new the alphaPos Instance
const alphaPos = new AlphaPos()

const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click', function () {
  // 1. 取出店員選擇的飲料品項、甜度、冰塊選項內容
  const drinkName = alphaPos.getCheckedValue('drink')
  const ice = alphaPos.getCheckedValue('ice')
  const sugar = alphaPos.getCheckedValue('sugar')
  console.log(`${drinkName}, ${ice}, ${sugar}`)
  // 2. 如果沒有選擇飲料品項，跳出提示
  if (!drinkName) {
    Swal.fire('Please choose at least one item.')
    return
  }
  // 3. 建立飲料實例，並取得飲料價格
  const drink = new Drink(drinkName, sugar, ice)
  console.log(drink)
  console.log(drink.price())
  // 4. 
})

// Constructor function for Alpha Pos System
function AlphaPos () { }
AlphaPos.prototype.getCheckedValue = function (inputName) {
  let selectedOption = ''
  document.querySelectorAll(`[name=${inputName}]`).forEach(function (item) {
    if (item.checked) {
      selectedOption = item.value
    }
  })
  return selectedOption
}

// Constructor function for Drinks
function Drink (name, sugar, ice) {
  this.name = name
  this.sugar = sugar
  this.ice = ice
}

// price methods: get price according to the drink
Drink.prototype.price = function () {
  switch (this.name) { // 根據飲料的品項名稱來判斷
    case 'Black Tea':
    case 'Oolong Tea':
    case 'Baozong Tea':
    case 'Green Tea':
      return 30
    case 'Bubble Milk Tea':
    case 'Lemon Green Tea':
      return 50
    case 'Black Tea Latte':
    case 'Matcha Latte':
      return 55
    default:
      alert('No this drink')
  }
}
