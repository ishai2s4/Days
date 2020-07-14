function ageInDays(){

    var year= prompt("When you were born?");
    var result = (2020-year)* 365;
    
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '  +result+  ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    }
    
    
    function reset(){
    
        document.getElementById('ageInDays').remove();
    
    
    
    }