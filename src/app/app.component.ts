import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Product } from './product';
import { productservice } from './productservice.service';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  'NQ5U9V0JL9',
  '8f4a72a5c96f887cfe1e27588b01b357'
);

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent {
  title = 'Santhosh Fruits';
  CopyText:string='';
  config = {
    indexName: 'ecommerce_pro',
    searchClient
  };
  @ViewChild('container') container :any;
  @ViewChild('scroll') scroll :any;
  call(){
    this.container.nativeElement.style.Backgroundcolor = "#212121";
  }
  myfunc(el:HTMLElement){
    el.scrollIntoView();
  }
  products!: Product[];
  productservice:any;
  constructor(){
  this.productservice = new productservice();
  }
  getProduct(){
    this.products= this.productservice.getproduct();
    console.log(this.products)
  }
  goods = [
    {
      name:"Apple",
      img:"https://www.bigbasket.com/media/uploads/p/l/40033819-2_6-fresho-apple-shimla.jpg",
      desc:"Apples are one of the healthiest fruits. Rich in vitamin C and dietary fiber which keep our digestive and immune system healthy.",
      price:114
    },
    {
      name:"Orange",
      img:"https://www.bigbasket.com/media/uploads/p/l/20000909_18-fresho-orange-imported.jpg",
      desc:"Oranges are a good source of vitamin C and B complex. They lower cholesterol and control blood sugar level.",
      price:109
    },
    {
      name:"Strawberry",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000263-3_1-fresho-strawberry.jpg",
      desc:"Strawberries improve heart function.They are rich in antioxidants and detoxifiers, which reduce arthritis and gout pain.",
      price:87
    }, {
      name:"Dragon Fruit",
      img:"https://www.bigbasket.com/media/uploads/p/l/40008982-2_4-fresho-dragon-fruit.jpg",
      desc:"Dragon fruits are oval to oblong in shape and size, with pink peel and green scale-like leaves.named after its resemblance to dragon scales. ",
      price:68
    },
    {
      name:"Banana",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000025-2_3-fresho-banana-robusta.jpg",
      desc:"Banana supplies 30 percent of the daily vitamin B6 requirement and is rich in vitamin C and potassium make use of it.",
      price:37
    }, {
      name:"Guava",
      img:"https://www.bigbasket.com/media/uploads/p/xxl/10000370_14-fresho-guava.jpg",
      desc:"Guavas reduce the risk of diabetes and regulate blood pressure levels.Ripe guavas can be stored in the refrigerator.",
      price:57
    }, {
      name:"Watermelon",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000207-2_11-fresho-watermelon-small.jpg",
      desc:"Watermelons have excellent hydrating properties with 90% water content.Rich in anti-oxidant flavonoids.",
      price:38
    }, {
      name:"Mosambi",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000191-4_2-fresho-mosambi.jpg",
      desc:"Mosambis are a good source of vitamin C and potassium and its high water content is known for its cooling properties.",
      price:69
    }, {
      name:"Blueberry",
      img:"https://www.bigbasket.com/media/uploads/p/l/30009286_7-fresho-blueberry.jpg",
      desc:"Blueberries are rich in antioxidants. They decrease the risk of obesity, diabetes and heart diseases.They decrease the risk of obesity, diabetes.",
      price:187
    }, {
      name:"Pineapple",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000156-4_2-fresho-pineapple.jpg",
      desc:"Pineapples reduce the risk of macular degeneration, a disease that affects the eyes as people age due to vitamin C and antioxidants present in it.",
      price:48
    }, {
      name:"Grapes",
      img:"https://www.bigbasket.com/media/uploads/p/l/20000707-2_1-fresho-grapes-bangalore-blue-with-seed.jpg",
      desc:"Grapes are rich in vitamins A, C & K. They relieve constipation.Fresho Black Grapes are Velvety coloured, deliciously sweet and juicy grapes.",
      price:42
    }, {
      name:"Papaya",
      img:"https://www.bigbasket.com/media/uploads/p/l/40114961-3_4-fresho-papaya-small.jpg",
      desc:"Papayas grow in tropical climates and are also known as papaws. Initially green and somewhat bitter in taste and shaped like a pear.",
      price:49

    }, {
      name:"Ber",
      img:"https://www.bigbasket.com/media/uploads/p/l/20000725_12-fresho-ber.jpg",
      desc:"Ber helps fight cancer. This fruit relieves constipation and treats insomnia. Ber is proven to have calming effects on the brain and the nervous system.",
      price:51

    }, {
      name:"Pomegranate",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000269-2_2-fresho-pomegranate.jpg",
      desc:"Pomegranate is a rich supplier of soluble and insoluble dietary fibers, vitamin K, C, minerals and B-complex vitamins such as B5, B6.",
      price:197

    }, {
      name:"Plum",
      img:"https://www.bigbasket.com/media/uploads/p/l/30007415-4_1-fresho-plum-imported.jpg",
      desc:"Papayas grow in tropical climates and are also known as papaws. Initially green and somewhat bitter in taste and shaped like a pear.",
      price:47

    }, {
      name:"Pear",
      img:"https://www.bigbasket.com/media/uploads/p/l/40174618_4-fresho-pear-beauty.jpg",
      desc:"Superbly crisp, juicy and sweet with the thinnest skin, South African Pears is like the love child of a big green apple and a Bosc pear-round.",
      price:103
    }, {
      name:"Sapota",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000181-2_6-fresho-sapota.jpg",
      desc:"Superbly crisp, juicy and sweet with the thinnest skin, South African Pears is like the love child of a big green apple and a Bosc pear-round.",
      price:24
    }, {
      name:"Custard Apple",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000350-2_5-fresho-custard-apple.jpg",
      desc:"The Custard Apple is rich in Vitamin C and helps to fight free radicals in our body.Fresho is our brand of fresh fruits and vegetables.",
      price:124
    }, {
      name:"Avocado",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000013_24-fresho-avocado.jpg",
      desc:"Avocados are oval shaped fruits with a thick green and a bumpy, leathery outer skin. They have a unique-texture, with a creamy.",
      price:180
    }, {
      name:"Wood Apple",
      img:"https://www.bigbasket.com/media/uploads/p/l/10000583-2_11-fresho-wood-apple-kothbel.jpg",
      desc:"Superbly crisp, juicy and sweet with the thinnest skin, South African Pears is like the love child of a big green apple and a Bosc pear-round.",
      price:10
    }
  ];
  
}
