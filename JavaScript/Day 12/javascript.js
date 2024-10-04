// function addNew(){
//     var hob=document.getElementById("hobie")
//     if (hob.value=="other"){
//         inputField()
//     }
// }

// function inputField(){
//     var form=document.getElementById("formid");
//     var x= document.createElement("INPUT");
//     x.setAttribute("type","text");
//     x.setAttribute("name","other");
//     form.appendChild(x);

// }


const imgUrlsArr = [
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_01.jpg",
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_02.jpg",
    "https://raw.githubusercontent.com/Dimterion/PoTW-GO/master/src/assets/images/start_screen_image_03.jpg"
  ];
  
  const articleContainer = document.getElementById("article-container");
  
  articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;
  
  let imgIndex = 0;
  
  function previousImg() {
    if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
      imgIndex--;
    } else {
      imgIndex = imgUrlsArr.length - 1;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }
  
  function nextImg() {
    if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
      imgIndex++;
    } else {
      imgIndex = 0;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }