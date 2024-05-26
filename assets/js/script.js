
const gameContainer = document.querySelector('.container');
userResult = document.querySelector('.user_result img');
cpuResult = document.querySelector('.cpu_result img');
result = document.querySelector('.result');
optionImages = document.querySelectorAll('.option_image');

// loop through each option image element
optionImages.forEach((image,index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

    userResult.src = cpuResult.src = './assets/images/rock.png';
    result.textContent = 'Rock, Paper or Scissors?';

        //loop through each option image element again
        optionImages.forEach((image2,index2) => {
         //if current index doesnt match the index of the clicked image, remove the active class from the other option images
         index !== index2 && image2.classList.remove('active');
        });

        gameContainer.classList.add('start');
         // set a timeout to delay the result calculation
         let time = setTimeout(() => {
            gameContainer.classList.remove('start');
             //Get the source of the clicked option image
             let imageScr = e.target.querySelector('img').src;
             userResult.src = imageScr;
          
             //generate a random number between 0 and 2
             let randomNumber = Math.floor(Math.random() * 3);
             //create an array of CPU options
             let cpuImages = ['./assets/images/rock.png', './assets/images/paper.png', './assets/images/scissors.png'];
             //display the CPU image based on the random number generated
             cpuResult.src = cpuImages[randomNumber];
 
             // assign a letter value to the CPU Option ( R for Rock, P for Paper, S for Scissors)
             let cpuValue = ["R", "P", "S"][randomNumber];
             // assign a letter value to the User Option ( R for Rock, P for Paper, S for Scissors)
             let userValue = ["R", "P", "S"][index];
 
 
             // create an object with all the possible outcomes of the game
             let outcomes = {
                 "RR": "Match Drawn",
                 "RP": "CPU Won",
                 "RS": "User Won",
                 "PR": "User Won",
                 "PP": "Match Drawn",
                 "PS": "CPU Won",
                 "SR": "User Won",
                 "SP": "User Won",
                 "SS": "Match Drawn"
 
             }
             
             // look up the outcome value based on user and cpu values
             let outComeValue = outcomes[userValue + cpuValue];
 
 
             //display the outcome value
             result.textContent = userValue === cpuValue ? "It's a tie" : `${outComeValue}`;

         

            },2500);
        
           
            
    });
});