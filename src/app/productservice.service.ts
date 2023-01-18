import { Product } from "./product";

export class productservice{
  public getproduct(){
	let products:Product[];
	products =[
		new Product('Apple','an organic fruit with rich vitamins',120),
		new Product('Orange','an juisy fruit with rich proteins',80),
		new Product('Banana','an tasty fruit with rich ions',60)
	]
	return products;
  }
}