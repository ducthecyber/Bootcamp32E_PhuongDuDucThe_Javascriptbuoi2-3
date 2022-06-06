/**
BAI TAP 1: Tinh tien luong nhan vien
-Dau vao
    +Luong 1 ngay: salary
    +So ngay lam: day
-Xu ly
    +Tao bien salary có id="salary"
    +Tao bien day có id="day"
    +Tao bien income có id="income"
    +income = salary x day
-Dau ra = 
    +Tien luong nhan vien = income
 */
document.getElementById("btnIncome").onclick = function () {
    var salary = 100000;
    var day = document.getElementById("day").value;
    var income = 0;
    income = salary * day;
    document.getElementById("income").innerHTML = income + "VND";
}

/**
Tinh gia tri trung binh 5 so thuc
-Dau vao
    +Nhap So thuc thu 1
    +Nhap So thuc thu 2
    +Nhap So thuc thu 3 
    +Nhap So thuc thu 4 
    +Nhap So thuc thu 5 
-Xu ly
    +Tao bien so thuc 1 có id = "soThuc1"
    +Tao bien so thuc 2 có id = "soThuc2"
    +Tao bien so thuc 3 có id = "soThuc3"
    +Tao bien so thuc 4 có id = "soThuc4"
    +Tao bien so thuc 5 có id = "soThuc5"
    +Tao bien trung binh la trungBinh gan gia tri 0
    +trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 )/5
-Dau ra
    +Average = ?
 */
document.getElementById("btnTrungBinh").onclick = function () {
    var soThuc1 = document.getElementById("soThuc1").value;
    var soThuc2 = document.getElementById("soThuc2").value;
    var soThuc3 = document.getElementById("soThuc3").value;
    var soThuc4 = document.getElementById("soThuc4").value;
    var soThuc5 = document.getElementById("soThuc5").value;
    var trungBinh = 0;
    soThuc1 = Number(soThuc1);
    soThuc2 = Number(soThuc2);
    soThuc3 = Number(soThuc3);
    soThuc4 = Number(soThuc4);
    soThuc5 = Number(soThuc5);
    trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    document.getElementById("trungBinh").innerHTML = trungBinh;
}
/**
Bài tập 3: Quy doi tien
-Dau vao
    +Ty gia USD so voi dong VND:23.500
    +So tien USD can quy doi
-Xu ly
    +Tao bien ty gia quy doi có id = "exchange"
    +Tao bien so luong có id = "quantity"
    +Tao bien so tien sau quy doi có id = "money" gan gia tri la 0
    +money = exchange x quantity
-Dau ra
    +money = ?
 */
document.getElementById("btnMoney").onclick = function () {
    var exchange = 23500;
    var quantity = document.getElementById("quantity").value;
    var money = 0;
    money = exchange * quantity;
    document.getElementById("money").innerHTML = money + "VND";
}

/**
Bài tập 4: Tinh chu vi va dien tich hinh chu nhat
-Dau vao
    +Length
    +Width
-Xu ly
    +Tao bien chieuDai id = "chieuDai"
    +Tao bien chieuRong id  = "chieuRong"
    +Tao bien dienTich gan gia tri la 0
    +dienTich = ChieuDai * chieuRong
    +Tao bien chuVi gan gia tri la 0
    +perimeter = (chieuDai + chieuRong) x 2
-Dau ra
    +dienTich = ?
    +chuVi = ?
 */
document.getElementById("btnChuNhat").onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong = document.getElementById("chieuRong").value;
    chieuDai = Number(chieuDai);
    chieuRong = Number(chieuRong);
    // KHÔNG ÉP KIỂU NUMBER THÌ PHÉP CỘNG RA KẾT QUẢ GHÉP KÝ TỰ
    // CÒN PHÉP NHÂN CHẠY BÌNH THƯỜNG
    var chuVi = 0;
    var dienTich = 0;
    chuVi = (chieuDai + chieuRong) * 2;
    dienTich = chieuDai * chieuRong;
    document.getElementById("chuVi").innerHTML = chuVi + " cm";
    document.getElementById("dienTich").innerHTML = dienTich + " cm2";
}

/**
Tinh tong 2 ky so
-Dau vao 
    + Nhap vao So co 2 chu so id = "numNum"
-Xu ly
    +So hang don vi có id = "so_hang_dv" bằng công thức Math.floor(numNum % 10)
    +Tach lay hang chuc có id = "so_hang_chuc" bằng công thức Math.floor(numNum % 100 /10)
    +Tong = so_hang_dv + so_hang_chuc
-Dau ra
    +Tong 2 ky so = ?

 */
document.getElementById("btnTong").onclick = function () {
    var numNum = document.getElementById("numNum").value;
    so_hang_dv = Math.floor(numNum % 10);
    so_hang_chuc = Math.floor(numNum % 100 / 10);
    var tong = 0;
    tong = so_hang_chuc + so_hang_dv;
    document.getElementById("tong").innerHTML = tong;
}
