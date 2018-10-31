const result = document.getElementById('result');
const btn = document.getElementById('btn1');

const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts';

const UNSENT = 0;
const OPENED = 1;
const HEADERS_RECEIVED = 2;
const LOADING = 3;
const DONE = 4;

var updateUI = function(textUpdate){
    result.innerHTML += textUpdate;
};

var callAPi = function(){

    Http.open("GET", url);
    Http.send();
    
    Http.onreadystatechange = function() {

        if(this.readyState = DONE) {
            if (this.status == 200)
            {
                updateUI(Http.responseText);
            } else {
                showErrorCode(Http.status);
            }            
        }        
    };
}

btn.addEventListener("click", callAPi);






