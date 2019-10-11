
//player object
let player = {
	character: $("#player"),
	playerPos: 0
}
console.log(player)
//ai object

const ai = {
	character : $("#ai"),
	aiPos : 0
}

console.log(ai)

let playerPosition = 0;
let aiPosition = 0;

//move the player function
player.character.click(function(){
	console.log($(this))
	$(this).animate({
		'left' : (playerPosition+=100)+'px'
	})
	console.log('this is the current value of player position:'+ playerPosition)
	player.playerPos = playerPosition;

	console.log(player)

	result()
})


const aiMove = () =>{
	if(ai.aiPos <1000){
		ai.character.animate({
			'left' : (aiPosition+=50) + "px"
		})
	}else{

		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMove, 1000)
}

const aiMove2 = () =>{
	if(ai.aiPos <1000){
		ai.character.animate({
			'left' : (aiPosition+=100) + "px"
		})
	}else{

		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMove2, 1000)
}

const aiMove3 = () =>{
	if(ai.aiPos <1000){
		ai.character.animate({
			'left' : (aiPosition+=140) + "px"
		})
	}else{

		return true
	}
	console.log(ai.aiPos)
	ai.aiPos = aiPosition
	result()
	setTimeout(aiMove3, 1000)
}







//move the ai
$("#start1").click(function(){
aiMove()
})

$("#start2").click(function(){
aiMove2()
})

$("#start3").click(function(){
aiMove3()
})


const result = () => {
	if(player.playerPos === 1000){
		alert('player won!')
		return true
	}

	if(ai.aiPos === 1000){
		alert("ai won!")
		return true
 
}

}

// $(".btn").click(function(){
// 	console.log($(this).attr('id')=='1')

// 	if($(this).attr('id')=='1'){
// 		aiMove(20)	
		
// 	}
// 	if($(this).attr('id')=='2'){
// 		aiMove(40)
// 	}
// 	if($(this).attr('id')=='3'){
// 		aiMove(100)
// 	}

// })