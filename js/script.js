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
        setInterval(function(){
            // console.log('this is happening every second');
            seconds++;
            console.log(seconds);
            $('#seconds').text(seconds);
        }, 1000);

        if (seconds >= 60) {
          seconds = 1;
          $('#seconds').text(seconds);
        }
    });

});
