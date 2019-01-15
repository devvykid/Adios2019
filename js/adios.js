function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
setTimeout(function() {


    function changeDisplay(divname) {
        var foo = document.getElementById(divname);
        if (foo.style.display == 'none') {
            foo.style.display = 'block';
        } else {
            foo.style.display = 'none';
            //console.log("Fuck!");
        }
    }
    console.log("fireworks start!");
    startfireworks();

    console.log("clock display!");
    changeDisplay("loading")
    changeDisplay("clockdiv");


    // 3초 빠르게 OffSet 설정
    var countDownDate = new Date("Jan 01, 2020 00:00:00").getTime();
    // 0.01 초마다 업데이트
    var x = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        var centisec = Math.floor(((distance % (1000 * 60)) / 10) % 100);
        // Output the result in an element with id="demo"
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = pad(hours, 2);
        document.getElementById("minutes").innerHTML = pad(minutes, 2);
        document.getElementById("seconds").innerHTML = pad(seconds, 2);
        document.getElementById("centiseconds").innerHTML = pad(centisec, 2);
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "EXPIRED";
        }
    }, 10);
}, 2000);