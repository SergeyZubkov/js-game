<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Крестики-нолики</title>
	<link rel="stylesheet" href="css/styles.css">
</head>
<body>
	<h1>Игра крестики-нолики</h1>
	<h2>Только настоящий интеллектуал сможет одержать победу</h2>
	<table class="field">
		<tr>
			<td id="a1"></td>
			<td id="a2"></td>
			<td id="a3"></td>
		</tr>
		<tr>
			<td id="a4"></td> 
			<td id="a5"></td>
			<td id="a6"></td>
		</tr>
		<tr>
			<td id="a7"></td>
			<td id="a8"></td>
			<td id="a9"></td>
		</tr>
	</table>
	<script>
(function game() {

var t = new Array(9);
//Определяем кто ходит первым

tossUp()


function tossUp() {
    var a = Math.random() > 0.5 ? moveComputer() : movePlayer();
}

function movePlayer() {
    
      document.onclick = function(e) {
        var target = e.target;
        
        if (target.tagName != "TD") return;
        var choice = target.getAttribute('id');
        notesOnThePlayingField(choice, 0);
        choicePlayer.push(choice);       
        if (checkWinning(choicePlayer, "Player")) {
            clearBoard();
            return game();
        }
        moveComputer();        
    }
}

function compChoice() {
    var a = Math.ceil(Math.random()*9);
    t[a] ? compChoice : move(a, com);
}

function move(id, typePlayer) {
    t[id] = typePlayer;
    document.getElementById('id').className = ''
}
//---------------------7. Проверка на выигрыш -----------------------------
function checkWinning(arr, name) {
    var arr2 = [
    ["a1","a2","a3"],
    ["a4","a5","a6"],
    ["a7","a8","a9"],
    ["a1","a5","a9"],
    ["a2","a5","a8"],
    ["a1","a4","a7"],
    ["a7","a5","a3"],
    ["a3","a6","a9"],
    ];

    var count = 0;
        
    for (var i=0; i<3; i++) {
        if (arr.indexOf(arr2[count][i]) ==  -1) {
            count++;
            if (count==8) {
                return false
            }
            i= -1 
        }       
    }
    alert("Победа " + count+ name);
    return true
}

})();




	</script>
</body>
</html>
