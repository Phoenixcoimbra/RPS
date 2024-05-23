
const gameContainer = document.querySelector('.container');
userResult = document.querySelector('.userResult img');
cpuResult = document.querySelector('.cpuResult img');
result = document.querySelector('.result');
optionImages = document.querySelectorAll('.option_image');

// loop through each option image element
optionImages.forEach((image,index) => {
    image.addEventListener('click', () => {
        image.classList.add('active');

        //loop through each option image element again
        optionImages.forEach((image2,index2) => {
          console.log(index, index2);
        });

    });
});