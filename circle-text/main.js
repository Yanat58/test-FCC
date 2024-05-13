// const text = document.querySelectorAll(".text");

// for (let item of text) {
//   const height = getComputedStyle(item, null).height;
//   item.style.lineHeight = height;
// }



// function rotateMain(value) {
//   const circleInner = document.querySelectorAll(".circle_inner") ;
  
//   deg = 0;
//   for(let item of circleInner) {
//     item.style.transform = `rotate(${deg}deg)`
//     deg += value;
//   }
//   return value;
 
// }

// let rotateValue = rotateMain(90);
//  console.log(rotateValue)
// function rotateOuther(value) {
//     const circleContent = document.querySelectorAll('.circle_content') ;
  
//   deg = 0;
//   for(let item of circleContent) {
//     item.style.transform = `rotate(${deg}deg)`
//     deg += value;
//   }
 
// }

// rotateOuther(-rotateValue)

// ----------

function rotateText(value) {
    const textCircle = document.querySelectorAll(".text_in_circle");

   let angle =-45;

    for (let item of textCircle) {
        item.style.transform = `rotate(${angle}deg)`;
        angle += value;
    }
    return value;

}

rotateText(8);


function rotateLetters(value) {
    const letter = document.querySelectorAll('.letter') ;
  
let angle = 0;
  for(let item of letter) {
    item.style.transform = `rotate(${angle}deg)`
    angle += value;
  }
 
}

rotateLetters(6);

function rotateImages(value) {
      const circleImage = document.querySelectorAll(".img_in_circle") ;
      
      let deg = -73;
      for(let item of circleImage) {
        item.style.transform = `rotate(${deg}deg)`
        deg += value;
      }
      return value;
     
    }
    
    let rotateValue = rotateImages(30);

     
    function rotateOuther(value) {
        const imageAround = document.querySelectorAll('.img_around') ;
      
     let deg = 75;
      for(let item of imageAround) {
        item.style.transform = `rotate(${deg}deg)`
        deg += value;
      }
     
    }
    
    rotateOuther(-rotateValue)