import http from "k6/http";

export default function () {
    const rand = Math.random();
    if (rand > 0.5) {
        http.get(`http://127.0.0.1:7020/get/${random_string(2)}`);
    } else {
        http.put(`http://127.0.0.1:7020/set/${random_string(2)}`, random_string(5));
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