const menu = {
    _courses:  {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
     get mains() {
      return this._courses.mains;
    },
     get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    
    addDishToCourse(courseName,dishName,dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
  
    },
  
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your order is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is ${totalPrice}$.`;
    },
  }
  
  menu.addDishToCourse('appetizers','Salad', 4.00);
  menu.addDishToCourse('appetizers','Wings',3.00);
  menu.addDishToCourse('appetizers','Fries',3.50);
  
  menu.addDishToCourse('mains','Steak',8.00);
  menu.addDishToCourse('mains','Tofu',7.00);
  menu.addDishToCourse('mains','Fish',7.50);
  
  menu.addDishToCourse('desserts','Cake',2.00);
  menu.addDishToCourse('desserts','Ice Cream',2.00);
  menu.addDishToCourse('desserts','Coffee',1.50);
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal);
  