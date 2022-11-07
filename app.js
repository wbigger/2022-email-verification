
let writeSpan = function (dataJson) {
    console.log(dataJson);
    if (dataJson.format) {
        $("span.valid").text("sì");
    } else {
        alert("Hai messo un indirizzo con formato non valido 😡")
        $("span.valid").text("no");
    }
    if (dataJson.disposable) {
        alert("C'hai provato!!!")
        $("span.disposable").text("sì");
    } else {
        $("span.disposable").text("no");
    }
    
}

let onError = function() {
    console.log(":(");
}

let verify = function(){
    let email = $("input").val();
    console.log(email);
    $.getJSON("https://www.disify.com/api/email/"+email)
    .done(writeSpan)
    .fail(onError);
}