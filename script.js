


let photo = ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg",]
console.log(photo);


let img = document.querySelector('img');

img.classList.add('slide')


const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let count = 0;


prev.addEventListener('click',function(){
    count--;
    
    if(count < 0){
        count = photo.length-1;
        img.src = photo[count];
    }else{
        img.src = photo[count]
    }
    
})
next.addEventListener('click',function(){
    count++;
    
    if(count >= photo.length){
        count = 0;
        img.src = photo[count];
    }else{
        img.src = photo[count]
    }
    
})


