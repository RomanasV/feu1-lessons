let obj = {
  name: 'John',
  age: 28,
  nextAge: 28 + 1,
  children: ["Child 1", "Child 2"],
  address: {
    street: 'Vilniaus st.',
    city: 'Vilnius',
    country: 'Lithuania',
  },
  married: true,
  getAddressInfo() {
    return `Address is ${this.address.street} ${this.address.city}, ${this.address.country}.`;
  },
  education: undefined,
}

console.log(obj);

let convertedObjToJSON = JSON.stringify(obj);
console.log(convertedObjToJSON);

let convertedJSONtoObj = JSON.parse(convertedObjToJSON);
console.log(convertedJSONtoObj);

let jsonObj = {
	"name": "John",
	"age": 28,
	"nextAge": 29,
	"children": ["Child 1", "Child 2"],
	"address": {
		"street": "Vilniaus st.",
		"city": "Vilnius",
		"country": "Lithuania"
	},
	"married": true
}

console.log(jsonObj);
console.log(jsonObj.name);
console.log(jsonObj.age);
console.log(jsonObj['nextAge']);
console.log(jsonObj.children);
console.log(jsonObj.children[0]);
console.log(jsonObj.children[1]);


// FETCH metodas

// fetch('./users.json').then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// })

fetch('./users.json')
  .then(response => response.json())
  .then(users => {
    console.log(users);

    users.map(user => {
      console.log(user);
      console.log(user.name);
      console.log(user.age);
      console.log(user.children);

      user.children.map(child => {
        console.log(child);
      })
    })
  });