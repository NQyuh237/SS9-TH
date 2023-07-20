// let x = 1;
// let y = 1;
// let z = '1';
// //toán tử so sánh "=="
// let rs = (x == y) // true
// let rs2 = (x == z) // true
// console.log(rs, rs2);
// // so sánh "==" so sánh cả giá trị lẫn so sánh kiểu dữ liệu
// let rs3 = (x === y) // true
// let rs4 = (x === z) // false

// console.log(rs3, rs4);
// // so sánh khác nhau "!=" hoặc "!=="
// console.log(x != y) // false
// console.log(x != z) // false
// console.log(x !== y) // false
// console.log(x !== z) // true

// console.log(2 >= 2);
// // 1 so chia het cho 3
// let condition1 = Number % 3 == 0;
// // 1 so chia het cho 5
// let condition2 = Number % 5 == 0;
// // vua chia het cho 3 vua chia het cho 5
// let condition3 = condition1 && condition2;
// // hoac chia het cho 3 hoac chia het cho 5
// let condition4 = condition1 || condition2;

// console.log("condition1" + condition1);

// console.log("condition2" + condition2);

// console.log("condition3" + condition3);

// console.log("condition4" + condition4);

// console.log(!condition1);
// console.log(!condition3);
// console.log(typeof (Number));

// let condition = (4 || 3 % 5 == 0 && 4 > 3 || 5 - 6 > 0)

// console.log(condition);
// nêu x%2 == 0 thì x chia het cho 2
// nếu không thì x không chia het cho 2
// cú pháp
// if (x % 2 == 0) {
//     // nếu điều kiện đúng
//     console.log(x + " chia het cho 2");
//     console.log(` ${x} chia het cho 2`);
// } else {
//     //nếu điều kiện sai
//     console.log(`${x} khong chia het cho 2`);
// }
// // tính diện tích hình trọn dựa vào bán kính hình tròn
// let radius = prompt("nhap vao ban kinh")
// if (radius>0){
//     let area= Math.PI * Math.pow(radius, 2);
//     document.write(`dien tich hinh tron co ban kinh la${radius} la ${Math.round(area)}`);
// }
let a, b, c;
const check1 = a > 0 && b > 0 && c > 0; // 3 canh phai lon hon 0
//let check 2 = (a+b>c) && (b+c>a) && (c+a>b); // tong 2 canh phai lon honw canh con lai
//if( check 1 && check2)







// // cau lenh long
// if (x % 3==0) {
//     // chia het cho 3
//     if (x % 5 == 0) {
//         //chia het cho 3 vua chia het cho 5
//     } else {
//         // chia het cho 3 nhung khong chia het cho 5
//     }
// } else {
//     //khong chia het cho 3
//     if (x % 5 == 0) {
//         //khong chia het cho 3 vua chia het cho 5
//     } else {
//         //chia het cho 5 nhung khong chia het cho 3

//         // vua khong chia het cho 3 vua khong chia het cho 5
//     }
// }
//danh gia xep loai cua hoc sinh dua vao dime trung binh
// if (dtb >= 8.0 && dtb <= 10) {
//     //hoc sinh gioi
// } else if (dtb >= 7.0) {
//     // hoc sinh kha
// } else if (dtb >= 6.5) {
//     //hoc sinh tb
// } else {
//     //hoc sinh yeu
// }

// let checkage = age >= 18;// true or false
// if (checkage) {
//     console.log("if dc thuc thi");
// }
// let weight = prompt("Hãy nhập cân nặng thật sự của bạn");
// let height = prompt("Hãy nhập chiều cao thật sự của bạn");
// let age = prompt("Hãy nhập độ số tuổi của bạn");
// let bmi = weight / (height * height);
// if (bmi < 18.5) {
//     document.write('Hiện tại bạn đang rất gầy cần chú ý vào việc ăn uống')
// } else if (bmi <25) {
//     document.write('Với số đo chiều cao và cân nặng hiện tại thì body của bạn rất chuẩn')
// } else if (bmi >= 25) {
//     document.write('Hiện tại với số đo chiều cao và cân nặng này thì bạn đang hơi béo một chút')
// } else if (bmi <30) {
//     document.write('Bạn đang tiền béo phì rồi đấy hãy chú ý ăn uống và sinh hoạt đê điều chỉnh lại cơ thể ngay nào')
// } else if (bmi <35) {
//     document.write('Bạn đã béo phì cấp độ 1 rồi đó hãy đi khám và ăn uống sinh hoạt tập thể dục một cách điều độ')
// } else if (bmi <40) {
//     document.write('Bạn đã béo phì cấp độ 2 rồi đó hãy ăn kiêng ngay và đi khám để có được một kế hoạch rõ ràng để được đưa về trạng thái cân ổn định ')
// } else if (bmi >=40) {
//     document.write('Bạn đã béo phì cấp độ 3 rồi phải nói là bạn sắp xuống lỗ nếu vẫn duy trì thói quen sinh hoạt và ăn uống như vậy mà')
// }


// nhap gia tri a,b,c
// vd a lon  nhat
// so sanh a vs b va c


// so sanh bang switch case
// let choice = +prompt("hay nhap mot so bat ki");
// switch (choice) {
//     case 1:
//         document.write("so khong");
//         break;
//     case 2:
//         document.write("so 2");
//         break;
//     case 3:
//         document.write("so 3");
//         break;
//     case 4:
//         document.write("so 4");
//         break;
//     case 5:
//         document.write("so 5");
//         break;
//     case 6:
//         document.write("so 6");
//         break;
//     case 7:
//         document.write("so 7");
//         break;
//     case 8:
//         document.write("so 8");
//         break;
//     case 9:
//         document.write("so 9");
//         break;
//     default:
//         document.write("khong hop le");
// }

// let choice = +prompt("hay nhap thang");

// switch (choice) {
//     case 1:
//         document.write("31days");
//         break;
//     case 2:
//         document.write("28days");
//         break;
//     case 3:
//         document.write("31days");
//         break;
//     case 4:
//         document.write("30days");
//         break;
//     case 5:
//         document.write("31days");
//         break;
//     case 6:
//         document.write("30days");
//         break;
//     case 7:
//         document.write("31days");
//         break;
//     case 8:
//         document.write("31days");
//         break;
//     case 9:
//         document.write("30days");
//         break;
//     case 10:
//         document.write("31days");
//         break;
//     case 11:
//         document.write("30days");
//         break;
//     case 12:
//         document.write("31days");
//         break;
//     default:
//         document.write("khong hop le");
// }


// kiem tra nam nhuan
let year = +prompt(" hay nhap so nam");
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 != 0) {
            isleefyear= false
        }
    } else {
        isleefyear= true;
    }
}