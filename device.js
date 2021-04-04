var deviceType = prompt("Please enter your favorite device:  ; 'laptop or mobile'");

while(deviceType !== 'laptop' && deviceType !== 'mobile'){
    deviceType = prompt("please enter laptop or mobile ");
}

var userInput = prompt('please enter the number of devices');

funNumberImg(0,userInput);

/*for(var i = 0;  i < userInput ; i++){
    if(deviceType == 'laptop'){
        document.write('<img src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg"/>');
    }else {
        document.write('<img src="https://static.toiimg.com/photo/73078527.cms"/>');
    }

}*/