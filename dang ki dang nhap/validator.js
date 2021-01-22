function Validator(option) {
    var formElement = document.querySelector(option.form);
    if (formElement) {//nếu tồn tại cái form đó *rules là mảng được khai báo ở bên kia
        option.rules.forEach(function (rule) {// tách từng đối tượng ra của mảng đối tượng rules
            var inputElement = formElement.querySelector(rule.selector);//lấy thẻ input(inputElement)
            if (inputElement) {//bắt sự kiện khi inputElement tồn tại
                inputElement.onblur = function () {
                    
                    var errorMessage = rule.test(inputElement.value);//chạy hàm của object rule được truyền vào ở trên
                    console.log(errorMessage);
                }
            }
        })
    }
}

// Định nghĩa các rule
Validator.isRequired = function (selector) {
    return {//return 1 object
        selector: selector,

        test: function (value) {
            return value.trim ? undefined : 'Vui lòng nhập trường này'; //trim để loại dấu cách
            // sử dụng toán tử ba ngôi
            // nếu có lỗi hàm trả về tin nhắn lỗi
            // nếu đúng thì trả về undefined
        }
    };
}
Validator.isEmail = function (selector) {
    return {//return 1 object
        selector: selector,
        test: function () {

        }
    };
}