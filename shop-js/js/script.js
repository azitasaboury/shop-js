

const navEl=document.querySelector('#nav-searsh')
const setone=document.querySelector("#set-one")
// const setslider=document.querySelector("#set-slider")
const setproduct=document.querySelector("#set-product")
const parentt=document.querySelector("#parent")


//1 START nav fixed درست
window.addEventListener("scroll", () => {
    const top = parentt.getBoundingClientRect().top;
    top <=2? navEl.classList.add("fixed") : navEl.classList.remove("fixed");});
  
// end nav fixed
// 2start slaider درست
const imgEls=document.querySelectorAll('#baner img')
const nextArrowEl=document.querySelector('#next-arrow')
const prevArrowEl=document.querySelector('#perov-arrow')
let sliderActiveIndex=0
nextArrowEl.addEventListener('click',()=>{
  imgEls[sliderActiveIndex].classList.remove('show-img')  
    sliderActiveIndex++
    if(sliderActiveIndex===imgEls.length){
      sliderActiveIndex=0 
    }
    imgEls[sliderActiveIndex].classList.add('show-img') 
    })
    prevArrowEl.addEventListener('click',()=>{
      imgEls[sliderActiveIndex].classList.remove('show-img')  
        sliderActiveIndex--
        if( sliderActiveIndex<0){sliderActiveIndex=imgEls.length-1
        }
       
        imgEls[sliderActiveIndex].classList.add('show-img') ;
        },2000);
// slaider otoma

setInterval(()=>{
  imgEls[sliderActiveIndex].classList.remove("show-img");
  sliderActiveIndex++;
  if(sliderActiveIndex===imgEls.length){
    sliderActiveIndex=0 
  }
  imgEls[sliderActiveIndex].classList.add('show-img');
  },4000);
// end slaider

// end baner


// اسلایدر فلکس
// const flexslider=document.querySelectorAll('#flex-slider div')
// const removeActiveClass=()=>{
//     for(let i=0;i<sliderItems.length;i++){
//       flexslider[i].classList.remove('active')
//     }
// }
// for(let i=0;i<sliderItems.length;i++){
//   flexslider[i].addEventListener('click',()=>{
//         removeActiveClass()
//         flexslider[i].classList.add('active');
//     })
// };


// end slider flex


// 3 گرفتن المان با اسکرول درست
const itemsEl=document.querySelectorAll('.items')

const checkBox=()=>{
    const trigger=window.innerHeight * 0.8
    for(let i=0;i<itemsEl.length;i++){
        const boxTop=itemsEl[i].getBoundingClientRect().top
        if(trigger>boxTop){
            itemsEl[i].classList.add('show-s')
        }else{
            itemsEl[i].classList.remove('show-s')

        }
    }
}
checkBox()
window.addEventListener('scroll',checkBox);




// time درست

const timeEl=document.querySelector('time');
const logoneEl=document.querySelector('logone');
function updateTime(){
  timeEl.textContent=new Date().toLocaleTimeString();
  console.log(new Date().toLocaleTimeString())

}

setInterval(updateTime,1000);

// /password text & icinدرست شد 
const passinp=document.querySelector('#pass')
const  passicon=document.querySelector('#icone')

passicon.addEventListener('click',()=>{
  const attr= passinp.getAttribute('type')==='text'?'password':'text'
  passinp.setAttribute('type',attr)
  attr==='text'? passicon.classList.replace('bx-show','bx-hide'): passicon.classList.replace('bx-hide','bx-show')

});


// ورود خوش امد کویی خودکار

// setTimeout(()=>{document.querySelector('.pe').classList.add('show-pe')
// },1000)
// setTimeout(()=>{document.querySelector('.pe').classList.remove('show-pe') 
// },100);



// form login modal درست شد


const modalEl=document.getElementById('modal')
const openBtnEl=document.querySelector('#openform')
const closeBtnEl=document.querySelector('#closeform')
openBtnEl.addEventListener('click',()=>{
  modalEl.classList.add('show-modal')

})
closeBtnEl.addEventListener('click',()=>{
  modalEl.classList.remove('show-modal') 
});
// فچ لاگین
const loginshowEl=document.querySelector('.loginshow')
const submitEl=document.querySelector('#submit')
const comEl=document.querySelector('com')
const usernameInp=document.querySelector('#use')
const passwordInp=document.querySelector('#pass')

modalEl.addEventListener("submit", async(e) => {
  e.preventDefault();
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: usernameInp.value,
      password: passwordInp.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
    
      modalEl.classList.remove('show-modal')
   
      alert("login successfully:)")

    })
    .catch((err) => alert(err));

  });

 






























// menu hambergry روش ی دیکه

// const menuBurger=document.querySelector('#menuham');
// const list=document.querySelector('.list');
// const bool=true;
// menuBurger.addEventListener('click',()=>{
//   if(bool==true){
//     list.classList.add('open');
//     list.style.left=0;
//     bool=false;
//   }else{
    
//     list.classList.remove('open');
//     list.style.left='-10%';
//     bool==true;
//   }

// });

//  خلاصه ترمنو همبرگری
const menuBurger=document.querySelector('#menuham');
const list=document.querySelector('.list');
menuBurger.addEventListener('click',()=>{
  list.classList.toggle('open');
})

























// اضافه ست تا اخر از همین جا
// دریافت دیتا
const productinpu=document.querySelector('#product-inpu')

const product=document.querySelector('#product-pr')
productinpu.addEventListener("change",(e)=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${productinpu.value}`)
  .then((res)=>res.json())
  .then((data)=>{
      product.innerHTML=`<div class="card">
      <h1>${e.id}</h1>
      <h2>${data.title.slice(0,18)}...</h2>
      <p>${data.body}</p>
    </div>`;
})
    .catch(err=>console.log(err))
  });

  // نمایش دیتا محصولات کد زیر
  const productppr=document.querySelector('#allproducts')
// fetch('https://jsonplaceholder.typicode.com/posts')
 fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>res.json())
.then(data=>{
  data.map(e=>{
    product.innerHTML+=`<div class="allproduct">
    <h1>${e.id}</h1>
    <h2>${e.title.slice(0,18)}...</h2>
    <p>${e.body.slice(0,60)}...</p>
  </div>`;

  })
  .catch(err=>console.log(err))
});




// تغییر رنگ
const yt=document.querySelector('.card-producte')
const btnel=[...document.querySelectorAll('.p-product')]
console.log(btnel)
btnel.map(e=>{e.addEventListener('',()=>{
  e.closest('.card-producte').style.backgroundColor='red'
})});
//
