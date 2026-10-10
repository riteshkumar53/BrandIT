export const initialShops = [
  { id:'sharma', name:'Sharma General Store', category:'Grocery & General Store', location:'Jaipur, Rajasthan', description:'Your neighbourhood stop for everyday essentials, pantry staples and household needs.', contact:'shop.sharma@example.test', owner:'Ramesh Sharma', accent:'mint' },
  { id:'city-stationery', name:'City Stationery', category:'Stationery', location:'Malviya Nagar, Jaipur', description:'School, college and office supplies for every idea.', contact:'city.stationery@example.test', owner:'Neha Verma', accent:'peach' },
  { id:'fresh-mart', name:'Fresh Mart', category:'Fresh Produce', location:'Mansarovar, Jaipur', description:'Fresh fruits, vegetables and daily grocery essentials.', contact:'fresh.mart@example.test', owner:'Aman Khan', accent:'yellow' },
  { id:'student-supplies', name:'Student Supplies', category:'Books & Stationery', location:'Jagatpura, Jaipur', description:'Student essentials, project material and practical files at fair prices.', contact:'student.supplies@example.test', owner:'Priya Mehta', accent:'blue' }
];
export const initialProducts = [
  {id:'p1',shopId:'sharma',name:'Rice 5 kg',category:'Grocery',price:320,quantity:18,image:'🌾',available:true,updatedAt:Date.now()},
  {id:'p2',shopId:'sharma',name:'Cooking Oil 1 L',category:'Grocery',price:145,quantity:4,image:'🫗',available:true,updatedAt:Date.now()},
  {id:'p3',shopId:'sharma',name:'Sugar 1 kg',category:'Grocery',price:48,quantity:0,image:'🧂',available:false,updatedAt:Date.now()},
  {id:'p4',shopId:'sharma',name:'Bath Soap',category:'Personal Care',price:38,quantity:12,image:'🧼',available:true,updatedAt:Date.now()},
  {id:'p5',shopId:'sharma',name:'Tea 250 g',category:'Beverages',price:125,quantity:7,image:'🍵',available:true,updatedAt:Date.now()},
  {id:'p6',shopId:'city-stationery',name:'Notebook A4',category:'Notebooks',price:55,quantity:25,image:'📓',available:true,updatedAt:Date.now()},
  {id:'p7',shopId:'city-stationery',name:'Ball Pen',category:'Writing',price:10,quantity:40,image:'🖊️',available:true,updatedAt:Date.now()},
  {id:'p8',shopId:'city-stationery',name:'Practical File',category:'Files',price:35,quantity:3,image:'📁',available:true,updatedAt:Date.now()},
  {id:'p9',shopId:'fresh-mart',name:'Apples 1 kg',category:'Fruits',price:160,quantity:8,image:'🍎',available:true,updatedAt:Date.now()},
  {id:'p10',shopId:'fresh-mart',name:'Potatoes 1 kg',category:'Vegetables',price:30,quantity:0,image:'🥔',available:false,updatedAt:Date.now()},
  {id:'p11',shopId:'fresh-mart',name:'Tomatoes 1 kg',category:'Vegetables',price:42,quantity:6,image:'🍅',available:true,updatedAt:Date.now()},
  {id:'p12',shopId:'student-supplies',name:'Engineering Drawing Sheet',category:'Drawing Supplies',price:25,quantity:15,image:'📐',available:true,updatedAt:Date.now()},
  {id:'p13',shopId:'student-supplies',name:'Geometry Box',category:'Stationery',price:85,quantity:2,image:'📏',available:true,updatedAt:Date.now()},
  {id:'p14',shopId:'student-supplies',name:'Practical File',category:'Files',price:35,quantity:11,image:'🗂️',available:true,updatedAt:Date.now()}
];
