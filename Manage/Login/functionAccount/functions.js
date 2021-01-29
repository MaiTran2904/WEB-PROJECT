function pushAccount(list) {
    localStorage.setItem('listAccount', JSON.stringify(list));
    console.log(list);
}
function loadAccount() {
    return JSON.parse(localStorage.getItem('listAccount'));
}
const account={
    fullName:'',
    email:'',
    password:'',
    phone:'Not set up!',
    gender:'Not set up!',
    constructor(name,email,password){
        this.fullName=name;
        this.email=email;
        this.password=password;
    }
}
createAccount=()=>{
    var fullName=document.getElementById('').value;
    var email=document.getElementById('').value;
    var password=document.getElementById('').value;
    var newAcc=new account(fullName,email,password);
    pushAccount(newAcc);
}
compareCode=(code)=>{
    if(code==codeemail)
    return true;
}
function haha(){
    Email.send({
        SecureToken : "66b15075-afc1-4d7d-8ade-8ba5082a827c",
        To : 'lilpham987@gmail.com',
        From : "maitran29042001@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("THANK U")
    );
}


