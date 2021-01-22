var product = [
    {
        type: "stupffed animal",
        name: "STRIPED BUFFALO SHIRT",
        img: "image/gauTrauAoKe1.jpg",
        img2: "image/gauTrauAoKe2.jpg",
        img3: "image/gauTrauAoKe3.jpg",
        // img4:"image./gauTrauAoke4.jpg",
        price: 170000,
        price2: 250000,
        pric3: 340000,
        size1: 55,
        size2: 75,
        size3: 85
    },
    {
        type: "stupffed animal",
        name: "BUFFALO NECK PILLOWS",
        img: "image/gauCoTrau.jpg",
        img2: "image/gauCoTrau2.jpg",
        img3: "image/gauCoTrau3.jpg",
        price: 150000,
        size3: 35
    },
    {
        type: "stupffed animal",
        name: "dinosaur teddy bear",
        img: "image/khungLong1.jpg",
        img2: "image/khungLong2.jpg",
        img3: "image/khungLong3.jpg",
        // img4: "image./doremonDetail2.jpg",
        // img5: "image./doremonDetail3.jpg",
        price: 390000,
        price2: 550000,
        pric3: 585000,
        size1: "1 mét",
        size2: "1 mét 3",
        size3: "50cm"
    },
    {
        type: "teddy",
        name: "TEDDY BEAR CREAM CAKE",
        img: "image/teddy.jpg",
        img2: "image/teddy2.jpg",
        img3: "image/teddy3.jpg",
        price: 490000,
        price2: 750000,
        pric3: 985000,
        size1: "1 mét",
        size2: "1 mét 3",
        size3: "1 mét 6"
    },
    {
        type: "teddy",
        name: "TEDDY ANGEL PINK",
        img: "image/teddyHong1.jpg",
        img2: "image/teddyHong2.jpg",
        img3: "image/teddyHong3.jpg",
        price: 290000,
        price2: 550000,
        pric3: 585000,
        size1: "1 mét",
        size2: "1 mét 3",
        size3: "1 mét 6"
    },
    {
        type: "Cat",
        name: "cute cat",
        img: "image/meo2.jpg",
        img2: "image/meo4.jpg",
        img3: "image/meo5.jpg",
        img1: "image/meo3.jpg",
        price: 290000,
        price2: 550000,
        pric3: 585000,
        size1: "1 mét",
        size2: "1 mét 3",
        size3: "1 mét 6"
    },
    {
        type: "doremon",
        name: "cute doremon",
        img: "image/doremon1.jpg",
        img2: "image/bigDoremon.jpg",
        img3: "image/doremonDetail.jpg",
        price: 290000,
        price2: 550000,
        pric3: 585000,
        size1: "1 mét",
        size2: "1 mét 3",
        size3: "1 mét 6"
    },

   

]

function Save() {
    localStorage.setItem('listProduct', JSON.stringify(product));
}


function load() {
    product = JSON.parse(localStorage.getItem('listProduct'));
}

if (localStorage.getItem('listProduct') != null) {
    load();
}
var listLocal = function () {
    var listproduct = "";
    for (var i in product) {
        var data = JSON.parse(JSON.stringify(product[i]));
        var listproduct = '<div class="col-lg-3 col-md-6 col-sm-6 col-6 mt-3">';
        listproduct += '<div class="card product p-2" style="width:auto">';
        listproduct += '<img class="card-img-top" src="' + data.img + '" alt="..">';
        listproduct += '<div class="card-title product-title text-center h5">' + data.name + '</div>';
        listproduct += '<div class="price text-center h6">' + data.price + 'đ</div>';
        listproduct += '<button class="btn btn-primary" onclick="Chitiet(' + i + ')">Chi tiet</button>';
        listproduct += '<span class="text-center add-to-cart btn btn-outline-warning add-cart" data-id="' + data.name + '" data-img="' + data.img + '" data-img2="' + data.img2 + '" data-price="' + data.price + '"data-size="' + data.size + '>';
        listproduct += '<a>';
        listproduct += '<i class="fas fa-cart-plus" ></i>';
        listproduct += '</a>';
        listproduct += '</span>';
        listproduct += '</div>';
        listproduct += '</div>';
        document.getElementById("all-product").innerHTML += listproduct;
    }
    Save();
}

// listLocal();
function Chitiet(i) {
    document.getElementById("detail-product").style.display="block";
    document.getElementById("all-product").style.display="none";
    var html = '';
    for (var key in product) {
        if (key == i) {
            var data = product[i];
            html+= '<div >'
            html += '<form>';
            html += '<div class="col-lg-12 col-md-6 col-sm-6 col-6 mt-3">';
            html += '<div class = "card" style = "width: auto" >';
            html +=`   ${html}<div class="preview col-md-6">
        <!-- chèn hình sản phẩm -->
        <div class="preview-pic tab-content">
          <div class="tab-pane active"    id="pic-1"><img src="${data.img}" /></div>
          <div class="tab-pane"  id="pic-2"><img src="${data.img2}" /></div>
          <div class="tab-pane"  id="pic-3"><img src="${data.img3}" /></div>
        </div>
        <ul class="preview-thumbnail nav nav-tabs style="size:40%"">
          <li class="active" style="size:40%"><a data-target="#pic-1" data-toggle="tab"><img src="${data.img}" /></a></li>
          <li><a data-target="#pic-2" data-toggle="tab"><img src="${data.img2}" /></a></li>
          <li><a data-target="#pic-3" data-toggle="tab"><img src="${data.img3}" /></a></li>   

        </ul>
    </div> <br> ${data.price} <br>  <br>  <b>Giá: ${data.size}</b><br>
    <div class="boSung">
    <ul class="list-unstyled mb-4"><li class="fas fa-thumbs-up">
        <i class="ion-checkmark text-muted mr-2"></i>Gói Quà - Nén Nhỏ Gấu - Tặng Thiệp Miễn Phí</li><li class="fas fa-thumbs-up">
        <i class="ion-checkmark text-muted mr-2"></i>Giao Hàng Nội Thành Siêu Tốc -  Giao Đúng Giờ & Tận Tay</li><li class="fas fa-thumbs-up">
        <i class="ion-checkmark text-muted mr-2"></i>Giao Hàng Toàn Quốc 2 - 5 Ngày - Nhận Hàng Mới Phải Trả Tiền<br></li><li class="fas fa-thumbs-up">
        <i class="ion-checkmark text-muted mr-2"></i>Bảo Hành Đường Chỉ Vĩnh Viễn - Bảo Hành Bông Gấu 1 năm</li><li class="fas fa-thumbs-up">
        <i class="ion-checkmark text-muted mr-2"></i>Dịch Vụ Giặt Gấu & Vệ Sinh Gấu Tại Nhà Giá Rẻ</li><li class="fas fa-thumbs-up">
        <i class="ion-checkmark text-muted mr-2"></i>Địa Chỉ Shop Dễ Tìm - Có Chỗ Để Xe Ô Tô Miễn Phí</li></ul>
       
</div>`
            // html = `${html} <img src="${data.img}" style = "width: 100%"> <h4><b>${data.name}</b></h4> <br> ${data.price} <br>  ${data.img2} <br>  <b>Giá: ${data.size} <br>`
            // html += '<span class="text-center add-to-cart btn btn-outline-warning add-cart">';
            // html += '<button class="btn">' + '<i class="fa fa-cart-plus"> </i>' + '</button> </span>';
            html += '</form>';
            break;
        }
    }
    document.getElementById('detail-product').innerHTML = html;
}
function returnHome(){
    document.getElementById("detail-product").style.display="none";
    document.getElementById("all-product").style.display="block";
}
