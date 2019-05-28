$(document).ready(function(){

    // setInterval()
    // setTimeout()
    // setTimeout(function() {
    //   console.log("this has happen after five seconds");
    // }, 5000);
    // setTimeout(function() {
    //   console.log("this has happened after six seconds");
    // }, 6000);

    // var int = setInterval(function() {
    //   console.log('this is happening every two seconds');
    // }, 2000);
    //
    // setTimeout(function() {
    //   clearTimeout(int);
    //   console.log('timeout has been cleared');
    // }, 10000);
    //
    // var myTimer = setInterval(function() {
    //   console.log('this is happening every two seconds');
    // }, 2000);


    $('#start').click(function(){
        var seconds = 0;
        var minutes = 0;
        setInterval(function(){
            // console.log('this is happening every second');
            seconds++;

                    if (seconds == 60) {
                      minutes ++;
                      seconds = 0;
                    }

            console.log(seconds);
            $('#seconds').text(seconds);
        }, 100);

    });

});
