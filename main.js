// new the alphaPos Instance
const alphaPos = new AlphaPos()

const addDrinkButton = document.querySelector('[data-alpha-pos="add-drink"]')
addDrinkButton.addEventListener('click', function () {
  // 1. get checked value of options
  const drinkName = alphaPos.getCheckedValue('drink')
  const ice = alphaPos.getCheckedValue('ice')
  const sugar = alphaPos.getCheckedValue('sugar')
  console.log(`${drinkName}, ${ice}, ${sugar}`)
  // 2. show alert if user did not check any drink option
  if (!drinkName) {
    Swal.fire('Please choose at least one item.')
    return
  }
  // 3. use Drink Constructor to create drink instance
  const drink = new Drink(drinkName, sugar, ice)
  console.log(drink)
  console.log(drink.price())
  // 4. add drink instance to left side order list
  alphaPos.addDrink(drink)
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

// addDrink methods: HTML template for add drink to left side order list
const checkoutBtn = document.querySelector('[data-alpha-pos="checkout"]').parentElement
AlphaPos.prototype.addDrink = function (drink) {
  const orderListsCard = `
    <div class="card mb-3">
    <div class="card-body pt-3 pr-3">
      <div class="text-right">
        <span data-alpha-pos="delete-drink">×</span>
      </div>
      <h5 class="card-title mb-1">${drink.name}</h5>
      <div class="card-text">
        <i class="fas fa-cube fa-sm"></i>
        <span data-drink-ice>${drink.ice}</span>
      </div>
      <div class="card-text">
        <i class="fas fa-stroopwafel fa-sm"></i>
        <span data-drink-sugar>${drink.sugar}</span>
      </div>
    </div>
    <div class="card-footer text-right py-2">
      <div class="card-text text-muted">
        $ <span data-drink-price>${drink.price()}</span>
      </div>
    </div>
  </div>
  `

  checkoutBtn.insertAdjacentHTML('beforebegin', orderListsCard)
}

// deleteDrink methods: remove the orderListsCard when clicking delete icon
const orderLists = document.querySelector('[data-order-lists]')
orderLists.addEventListener('click', function (event) {
  const isDeleteButton = event.target.matches('[data-alpha-pos="delete-drink"]')
  if (!isDeleteButton) {
    return
  }
  alphaPos.deleteDrink(event.target.parentElement.parentElement.parentElement)
})
AlphaPos.prototype.deleteDrink = function (target) {
  target.remove()
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
