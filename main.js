
	
		function() {}function startGame(){
			document.turn = "X";

			setmessage(document.turn + "starts first");
		}

		function setmessage(message) {
			document.getElementById('message').innerText =message;
		}
		function nextMove(square){
			square.innerText = document.turn; 
			switchTurn();
		}

		function switchTurn() {
			if (document.turn == "X") {
				document.turn = "O";
			} 	
			else {
				document.turn == "X";

			}
		}

	