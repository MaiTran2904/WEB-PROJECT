
    function onChangeText(value){
        const text=document.getElementById(value).value;  
        if(value=="password"){
          console.log(text);
        if(validatePassword(text)){
          document.getElementById(value+"-error").style.display="none"}
        else{
        document.getElementById(value+"-error").style.display="block"
        }}else{     
        if(text==""){
          document.getElementById(value+"-error").style.display="block"
        }else{
          document.getElementById(value+"-error").style.display="none"
        }
      } }
      function onChangeEmail(){
        const email=document.getElementById('email').value;
        if(validateEmail(email)){
          document.getElementById("email-error").style.display="none"
        }else{
          document.getElementById("email-error").style.display="block"
        }
      }
      
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    } 
    function validatePassword(pass){
      var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})");
       return pass.match(strongRegex);
    }




    var user = [
  {
      id: "User-1",
      name: "Gỉa Cao Bằng",
      username: 'caobang',
      phone: '0123456789',
      email: 'caobang@gmail.com',
      address: 'Quảng binh',
      role: 'user'
  },

]
// đẩy mảng user vào clocal
function save() {
  localStorage.setItem('listUser', JSON.stringify(user))
}
// lấy lis user
function load() {
  user = JSON.parse(localStorage.getItem('listUser'))
}

if (localStorage.getItem('listUser') != null) {
  load();
}
// cập nhật thông tin người dùng
function updateUser(i) {
  var d = user[i];
  document.getElementById("id").value = d.id;
  document.getElementById("named").value = d.name;
  document.getElementById("usernamed").value = d.username;
  document.getElementById("phoned").value = d.phone;
  document.getElementById("emaild").value = d.email;
  document.getElementById("addressd").value = d.address;
  document.getElementById("roled").value = d.role;
}
// gửi cập nhật thông tin người dùng

function submitUpdate() {
  var id = document.getElementById("id").value;
  for (var i in user)
      if (id == user[i].id) {
          var d = user[i];
          user[i].name = document.getElementById("named").value;
          user[i].username = document.getElementById("usernamed").value;
          user[i].phone = document.getElementById("phoned").value;
          user[i].email = document.getElementById("emaild").value;
          user[i].address = document.getElementById("addressd").value;
          user[i].role = $("#roled").find(":selected").val();
          localStorage.setItem('listUser', JSON.stringify(user));
          window.location.reload();
          break;
      }
}

function deleteUser(i) {
  document.getElementById("idDelete").innerHTML = user[i].id;
}

function submitDelete() {
  var id = document.getElementById("idDelete").innerHTML;
  for (var i in user) {
      var d = JSON.parse(JSON.stringify(user[i]))
      if (id == d.id) {
          load();
          user.splice(i, 1);
          save();
          window.location.reload();
      }
  }
}

function show() {
  var listUSer = '';
  for (i in user) {
      var data = JSON.parse(JSON.stringify(user[i]))
      listUSer += "<tr>";
      listUSer += "<td>" + data.id + "</td>";
      listUSer += "<td>" + data.username + "</td>";
      listUSer += "<td>" + data.name + "</td>";
      listUSer += "<td>" + data.phone + "</td>";
      listUSer += "<td>" + data.email + "</td>";
      listUSer += "<td>" + data.address + "</td>";
      listUSer += "<td>" + data.role + "</td>";
      listUSer += "<td>" + '<button class = "btn btn-danger" data-toggle = "modal"data-target = "#updateUser" onclick="updateUser(' + i + ')">';
      listUSer += '<a href="#"> <i class="fa fa-cogs"> </i> </a>' + '</button>';
      listUSer += '<button class = "btn btn-warning" data-toggle = "modal" data-target="#deleteUser" onclick="deleteUser(' + i + ')"> <a href="#"> <i class="fa fa-trash"> </i>  </a> </button>' + "</td>";
      listUSer += "</tr>";
  }
  document.getElementById("user-manager").innerHTML = listUSer;
  save();
}
// thêm user
function addUser() {
  var pro = {
      id: "User-" + parseInt(user.length + 1),
      name: document.getElementById('name').value,
      username: document.getElementById('username').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      role: $("#role").find(":selected").val()
  }
  alert (" đăng kí thàng công");
  load();
  user.push(pro);
  save();
  window.location.reload();
}