


Product = {
    id: 10,
    type: "",
    name: "",
    img: "",
    img2: "",
    img3: "",
    size1: "1 mét",
    size2: "1 mét 3",
    size3: "1 mét 6",
    price: 0,
    price2: 0,
    pric3: 0,
    like: 0,
    sold: 0,
    stocking: 0,
}
function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    });
}



