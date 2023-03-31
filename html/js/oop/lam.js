let lamborghini = [
    {
        name : 'Lamborghini Aventador',
        image :'https://img.tinbanxe.vn/thumb/300/images/Lamborghini/Lamborghini%20Aventador%20SVJ/ANHDAIDIEN-lamborghini-aventador-do.jpg',
        origin: 'italy',
        price : '60,000,000,000 VND',
        color : 'red'
    },
    {
        name : 'Lamborghini Urus ',
        image :'https://img.tinbanxe.vn/thumb/300/images/Lamborghini/Lamborghini%20Urus/ANHDAIDIENlamborghini-urus-2020.png',
        origin: 'italy',
        price : '10,900,000,000 VND ',
        color : 'red'
    },
    {
        name : 'Lamborghini Huracan Evo',
        image :'https://img.tinbanxe.vn/thumb/300/images/Lamborghini/Lamborghini%20Huracan%20Evo/ANHDAIDIEN-Lamborghini-Huracan_EVO-.png',
        origin: 'italy',
        price : '18,000,000,000 VND',
        color : 'bạc'
    },{
        name : 'Lamborghini Veneno',
        image :'https://img.tinbanxe.vn/thumb/300/images/Lamborghini/Lamborghini%20Veneno/ANHDAIDIEN--Lamborghini-Veneno.png',
        origin: 'italy',
        price : '9,000,000 USD',
        color : 'kem'
    }
]
for (let i = 0; i < lamborghini.length; i++) {
    // document.getElementById('tbStudent').innerHTML +=
        // `
        // <tr>
        //     <td>${lamborghini[i].name}</td>
        //     <td><img src = "${lamborghini[i].image}"</td>
        //     <td>${lamborghini[i].origin}</td>
        //     <td>${lamborghini[i].price}</td>
        //     <td>${lamborghini[i].color}</td>
        // </tr>
        // `
        document.body.innerHTML +=
        `
        
    <div class="product">
        <img src="${lamborghini[i].image}" alt="">;
        <h3 class="name">${lamborghini[i].name}</h3>
        <h3>Xuất xứ : ${lamborghini[i].origin}</h3>
        <h3 id="gia">Giá : ${lamborghini[i].price}</h3>
        <h3>Màu : ${lamborghini[i].color}</h3>
    </div>
        `
}