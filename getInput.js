
function getinput(){
    const prompt = require('prompt-sync')();
    text = prompt('Enter items purchased: ');
    return text;
}

exports.getinput = getinput;
