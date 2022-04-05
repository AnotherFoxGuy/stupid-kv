import http from "k6/http";

export default function () {
    const rand = Math.random();
    if (rand > 0.5) {
        http.get(`http://127.0.0.1:8080/get/${random_string(2)}`);
        //http.get(`http://127.0.0.1:8080/get/aa`);
    } else {
        http.put(`http://127.0.0.1:8080/set/${random_string(2)}`, random_string(5));
        //http.put(`http://127.0.0.1:8080/set/aa`, random_string(5));
    }
};


function random_string(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}