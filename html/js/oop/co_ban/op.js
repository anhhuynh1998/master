// let iphone = {
//     name : 'iphone14',
//     colors :[ 'xanh','đỏ','tím','vàng'],
//     memories : ['16gb','32gb','64gb','128gb'],
//     manufarture : ['trung','mỹ'],
//     price : '100$'
// }
// let acer = {
//     name : 'ACER SWIFT 3 SF314 44 R2U3',
//     image : 'https://philong.com.vn/media/product/250-29590-philong1.png',
//     configuration : 'Ryzen 5-5625U',
//     ram : 'Ram 16GB',
//     ssd : '512gb',
//     adm : 'radeon',
//     size : ' 18 inch',
//     win : ' 11pro',
//     color : 'pink',
//     dicout : '21%',
//     price : '17.900.000',
//     hashtag : 'khuyến mãi',
//     promosion: 'balo'
// }
// console.log(acer);
// c0223g2 : gồm có 3 học viên , mỗi học viên có thuộc tính , ngày sinh, số điện thoại,giới tính , email.
let c0223g2 = [
    {
        name: 'Phúc',
        dob: '12/3/1989',
        gender: true,
        phone: 097481712,
        email: 'phuc@gmail.com',
    },
    {
        name: 'Khoa',
        dob: '12/3/1999',
        gender: true,
        phone: 097484832,
        email: 'khoa@gmail.com',
    },
    {
        name: 'Trường',
        dob: '25/3/1999',
        gender: true,
        phone: 097481712,
        email: 'truong@gmail.com',
    }
]
for (let i = 0; i < c0223g2.length; i++) {
    document.getElementById('tbStudent').innerHTML +=
        `
        <tr>
            <td>${c0223g2[i].name}</td>
            <td>${c0223g2[i].dob}</td>
            <td>${c0223g2[i].gender == true ? 'Nam' : 'Nữ'}</td>
            <td>${c0223g2[i].phone}</td>
            <td>${c0223g2[i].email}</td>
        </tr>
        `
}
// quản lý áo quần : hình ảnh, size,giá,
