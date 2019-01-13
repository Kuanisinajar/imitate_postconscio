let retreivedData;

const handleSubmit = (e) => {
    const textInput = document.getElementById('textInput');

    // request the data
    const http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if (http.readyState == 4 && http.status == 200) {
            console.log(JSON.parse(http.response));
        } else {
            console.log(http.readyState);
        }
    }
    http.open('GET', '/search/' + textInput.value, true);
    http.send();
}

