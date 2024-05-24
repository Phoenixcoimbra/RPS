
const gameContainer = document.querySelector('.container');
userResult = document.querySelector('.user_result img');
cpuResult = document.querySelector('.cpu_result img');
result = document.querySelector('.result');
optionImages = document.querySelectorAll('.option_image');

// loop through each option image element
optionImages.forEach((image,index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');

        //loop through each option image element again
        optionImages.forEach((image2,index2) => {
         //if current index doesnt match the index of the clicked image, remove the active class from the other option images
         index !== index2 && image2.classList.remove('active');

         
         
        });
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
                "RR": "It's a tie",
                "RP": "You Lose",
                "RS": "You Win",
                "PR": "You Win",
                "PP": "It's a tie",
                "PS": "You Lose",
                "SR": "You Lose",
                "SP": "You Win",
                "SS": "It's a tie"

            }
            
            // look up the outcome value based on user and cpu values
            let outComeValue = outcomes[userValue + cpuValue];
            console.log(outComeValue);
    });
});