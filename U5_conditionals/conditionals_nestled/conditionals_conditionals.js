alert("you have homework but you really want to play games")

let homework_or_games = prompt("do you (1) do your homework, or do you (2) play games")

if(homework_or_games == 1) {
    let work_or_play = prompt("you sit at your desk and do your homework and pass.do you (1) play games now, or (2) read a book?")
    if(work_or_play==1){
        alert("your now grounded");
    } else {
        alert("your parents are proud and let you play games.")
    }
} else {
    alert("you are failing and are now grounded.")
}
