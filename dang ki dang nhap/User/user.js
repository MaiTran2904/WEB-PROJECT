var User{
    
    constructor(phone,email,firstName,lastName,password){
        this.phone=phone;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
        this.fullName=firstName + lastName;
        this.password=password;
    }
}
