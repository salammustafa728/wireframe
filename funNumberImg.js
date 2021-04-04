function funNumberImg(s,numCountt){
    for(var i = s;  i < numCountt ; i++){
        if(deviceType == 'laptop'){
            console.log(i);
            document.write('<img src="https://cdn.mos.cms.futurecdn.net/6t8Zh249QiFmVnkQdCCtHK.jpg"/>');
        }else {
            document.write('<img src="https://static.toiimg.com/photo/73078527.cms"/>');
        }

    }
}