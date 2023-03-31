
class food{
    constructor(photo,name,combo,price){
        this.photo = photo;
        this.name = name ;
        this.combo = combo;
        this.price = price;
    }
}
let foods = [
    new food("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/p/r/pr_combo_33k.png","Combo đặt biệt",["gà rán 1 miếng","1 mỳ ý"],79000),
    new food("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/p/r/pr-03_1.png","Combo Tứ vị",["gà sốt HS 1 miếng","Gà sốt đậu 1 miếng"],129000),
    new food("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/p/r/pr-04_1.png","Combo LChicken",["gà rán 1 miếng","1 Burger LChicken "],99000),
    new food("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/p/r/pr-02.png","Combo Mala",["gà sốt mala 1 miếng","1 Burger Bulgogi "],99000),
    new food("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/g/a/ga_tuyet_vang_68k.png","Combo 40,000đ",["1 gà tuyết vàng","1 pepsi "],40000),
    new food("https://dscnnwjxnwl3f.cloudfront.net/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/s/n/snow_chicken.jpg","Combo 68,000đ",["1 gà tuyết vàng","1 khoai tây lắc "],99000),
]
function renderFood(){
    let row = document.querySelector('.row');
//     for(let i = 0; i < foods.length; i++){
//         product.innerHTML +=`
//         <div class="product">
// //             <a href="https://www.lotteria.vn/category/product/229220-ONLINE">
// //             <img src="${foods[i].photo}" alt="">;
// //             </a>;
// //             <a href="https://www.lotteria.vn/category/product/229220-ONLINE">${foods[i].name}</a>;
// //             <p>${foods[i].combo}</p>
// //             <p id="gia">giá : ${formatCurrency(foods[i].price)}</p>
// //             <div class="by">
// //                 <a href="https://www.lotteria.vn/category/product/229220-ONLINE">
// //                     <button onclick="by()">Thêm vào giỏ hàng</button>
// //                 </a>
// //         </div>
// //        </div>
//         `
//     }
    for (let food of foods){
        row.innerHTML +=`
        <div class="product">
            <a href="https://www.lotteria.vn/category/product/229220-ONLINE">
            <img src="${food.photo}" alt="">
            </a>
            <a  href="https://www.lotteria.vn/category/product/229220-ONLINE">${food.name}</a>
            <p>${food.combo}</p>
            <p id="gia">giá : ${formatCurrency(food.price)}</p>
            <div class="by">
                <a href="https://www.lotteria.vn/category/product/229220-ONLINE">
                    <button id="backg" onclick="by()">Thêm vào giỏ hàng</button>
                </a>
        </div>
       </div>
        `
    }
 }
function formatCurrency(number){
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}
renderFood();