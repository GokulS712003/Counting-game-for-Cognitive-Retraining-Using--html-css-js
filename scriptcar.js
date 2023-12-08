// Questions that will be asked

const Questions = [{
	q: "How many tiles are there in the first segment?",
	a: [{ text: "1", isCorrect: false },
	{ text: "5", isCorrect: false },
	{ text: "4", isCorrect: true },
	{ text: "3", isCorrect: false }
	]

},
{
	q: "How many tiles are there  in the second segment?",
	a: [{ text: "7", isCorrect: false, isSelected: false },
	{ text: "4", isCorrect: false },
	{ text: "2", isCorrect: false },
	{ text: "3", isCorrect: true }
	]

},
{
	q: "How many tiles are there  in the third segment?",
	a: [{ text: "8", isCorrect: false },
	{ text: "7", isCorrect: false },
	{ text: "6", isCorrect: true },
	{ text: "9", isCorrect: false }
	]

},
{
	q: "How many tiles are there in the 4th segment?",
	a: [{ text: "4", isCorrect: false },
	{ text: "3", isCorrect: false },
	{ text: "1", isCorrect: true },
	{ text: "2", isCorrect: false }
	]

},
{
	q: "How many tiles are there in the 5th segment?",
	a: [{ text: "6", isCorrect: false },
	{ text: "7", isCorrect: false },
	{ text: "8", isCorrect: true },
	{ text: "9", isCorrect: false }
	]

},
{
	q: "How many tiles are there in the 6th segment?",
	a: [{ text: "7", isCorrect: false },
	{ text: "5", isCorrect: false },
	{ text: "6", isCorrect: true },
	{ text: "8", isCorrect: false }
	]

}
]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
    console.log(currQuestion);
	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}







        
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height= innerHeight
const gravity =0.5
class Player{
    constructor(){
        this.position = {
            x:100,
            y:100
        }
        this.velocity={
            x:0,
            y:0
        }
        this.width=40
        this.height=40
    }
    draw(){
        c.fillStyle='red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.draw()
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        

        if (this.position.y + this.height + this.velocity.y<= canvas.height)
        this.velocity.y+=gravity
        
        
    }
}
 
class Platform{
    constructor({x,y}){
        this.position={
            x,
            y
        }
        this.width=200
        this.height=250
    }
        draw(){
            c.fillStyle='#454545'
            c.fillRect(this.position.x,this.position.y,this.width,this.height)
        }
    }


     winner=0
     const player = new Player()
     const platforms = [new Platform({x:0,y:500}), new Platform({x:625,y:500}),
        new Platform({x:1145,y:500}),
        new Platform({x:1980,y:500}),
        new Platform({x:2290,y:500}),
        new Platform({x:3340,y:500}),
        new Platform({x:4155,y:500})
    ]
    
     class step{
        constructor({x,y}){
            this.position={
                x,
                y
            }
            this.width=100
            this.height=20
        }
            draw(){
                c.fillStyle='yellow'
                c.fillRect(this.position.x,this.position.y,this.width,this.height)
            }
        }
     const steps = [new step({x:205,y:500}), new step({x:310,y:500}),new step({x:415,y:500}),new step({x:520,y:500})
        ,new step({x:830,y:500}),new step({x:935,y:500}),new step({x:1040,y:500})
        ,new step({x:1350,y:500}),new step({x:1455,y:500}),new step({x:1560,y:500}),new step({x:1665,y:500}),new step({x:1770,y:500}),new step({x:1875,y:500})
        ,new step({x:2185,y:500})
        ,new step({x:2495,y:500}),new step({x:2500,y:500}),new step({x:2605,y:500}),new step({x:2710,y:500}),new step({x:2815,y:500}) ,new step({x:2920,y:500}),new step({x:3025,y:500}),new step({x:3130,y:500}),new step({x:3235,y:500})
        ,new step({x:3535,y:500}),,new step({x:3640,y:500}),,new step({x:3745,y:500}),new step({x:3850,y:500}),new step({x:3955,y:500}),new step({x:4060,y:500})
    ]
    
     const keys ={
        right:{
            pressed:false
        },left:{
            pressed:false
        }
    }
    
    
    function animate(){
      
       
        requestAnimationFrame(animate)
        c.clearRect(0,0,canvas.width,canvas.height)
        player.update()
        steps.forEach((step)=>{
            step.draw()
        })


        platforms.forEach((platform)=>{
            platform.draw()
        })
        
       
        if (keys.right.pressed && player.position.x<400 && winner<3712){
            player.velocity.x=+5
            }
            else if (keys.left.pressed && player.position.x>100 && winner<3712){
                player.velocity.x=-5
            }else {
                player.velocity.x=0
            if(keys.right.pressed  && winner<3712){
                winner+=5
                
                steps.forEach((step)=>{
                    step.position.x -=5
                    
    
                })
                platforms.forEach((platform)=>{
                    platform.position.x -=5
                    
                    
    
                })
            } else if(keys.left.pressed  && winner<3712){
                winner-=5
                steps.forEach((step)=>{
                    step.position.x+=5
                })
                platforms.forEach((platform)=>{
                    platform.position.x+=5
                })
            }
        }
        
    //platform collision detection
    platforms.forEach((platform) => {
        if(player.position.y+player.height <= platform.position.y && player.position.y + player.height + player.velocity.y>=platform.position.y
            && player.position.x+player.width>=platform.position.x&& player.position.x<=platform.position.x+platform.width){
            player.velocity.y=0
        }
    })
    steps.forEach((step) => {
        if(player.position.y+player.height <= step.position.y && player.position.y + player.height + player.velocity.y>=step.position.y
            && player.position.x+player.width>=step.position.x&& player.position.x<=step.position.x+step.width){
            player.velocity.y=0
        }
    })
        if (winner>3712){
            c.font = "60px Arial";
            c.fillText("YOU WON !",580,250);
            console.log("you win!")
        }
        //lose condition
        if(player.position.y>canvas.height){
            console.log("lose")
        }
    }
    
    
    animate()


addEventListener("keydown", ({keyCode}) => {
 console.log('keyCode')
 switch(keyCode){
    case 65:
        console.log('left')
        keys.left.pressed=true
        break
    case 83:
        console.log('down')
        break
    case 68:
        console.log('right')
        keys.right.pressed=true
        break
    case 87:
        console.log('up')
        break
 }
 


});

addEventListener("keyup", ({keyCode}) => {
    console.log('keyCode')
    switch(keyCode){
       case 65:
           console.log('left')
           keys.left.pressed=false
           break
       case 83:
           console.log('down')
           break
       case 68:
           console.log('right')
           keys.right.pressed=false
           break
       case 87:
           console.log('up')
           break
   
    }
    
   });





