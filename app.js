let num = 5;
// array მასივი
const myArr = [100, "test", true, 400, , null, num, undefined];
// console.log(myArr);

const productPrices = [100, 200, 300, 400, 500, 600, 700];
// console.log(productPrices);
const sum = productPrices[0] + productPrices[1];
// console.log(sum);
const productsQ = productPrices.length;
// console.log(productsQ);
const lastEl = productPrices[productPrices.length - 1];
const lastElAt = productPrices.at(-1);
// console.log(lastEl);

const elAtNum = productPrices[num];
// console.log(elAtNum);

const myArr2 = ["text", [100, 200, 300, 400, [1, 2, 3]], "test", true];
// console.log(myArr2[1][4][2]);
const newLength = productPrices.push(90);
const removedLast = productPrices.pop();
const removedFirstEl = productPrices.shift();
productPrices.unshift(300);
// console.table(productPrices);
const stores = [
	{
		location: "test1, tbilisi",
		coordinates: {
			lat: 41.1,
			lng: 43.1,
		},
		label: "test1",
	},
	{
		location: "test2, tbilisi",
		coordinates: {
			lat: 41.1,
			lng: 43.1,
		},
		label: "test2",
	},
	{
		location: "test3, tbilisi",
		coordinates: {
			lat: 41.1,
			lng: 43.1,
		},
		label: "test3",
	},
];

const newStores = [...stores];
// object
const product = {
	model: "Iphone",
	isAvailable: true,
	availableAt: stores,
	price: 1000,
};
product.isAvailable = false;
// console.log(product.availableAt[0].coordinates.lat);

const getValue = "model";
// console.log(product[getValue]);

product.price = 1200;

// product.color = "black";

// delete product.isAvailable;

// console.log(product);

// stores = [];

let num2 = num;

// console.log(num, num2);

num = 10;

// console.log(num, num2);

const product2 = { ...product };
// console.log(product, product2);

product.colors = ["black", "white", "red"];

// console.log(product, product2);
