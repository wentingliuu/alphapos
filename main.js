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
