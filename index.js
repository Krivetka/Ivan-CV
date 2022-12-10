let isShowLanguages = true;
let isShowProgram = true;
let activeTab = document.querySelector('.tab_active');
let browser = document.querySelector('.browser__content');
let url = document.querySelector('.search-block');

function time(){
    let date = new Date();
    let timeEl = document.querySelector('.time');
    if(timeEl){
        timeEl.innerHTML = `
        ${setZero(date.getHours())}:${setZero(date.getMinutes())}
        </br>
        ${setZero(date.getDate())}.${setZero(date.getMonth()+1)}.${date.getFullYear()}
        `
    }
    setTimeout(()=>time(),5000);
};

function setZero(data){
    return data<=9 ? '0'+data : data;
}
time();


function setTab(element,link){
    activeTab.nextElementSibling.style.borderRadius = '7px 7px 0 0';
    activeTab.previousElementSibling.style.borderRadius = '7px 7px 0 0';
    activeTab.classList.remove("tab_active");
    element.currentTarget.classList.add("tab_active");
    activeTab = element.currentTarget;
    element.currentTarget.nextElementSibling.style.borderRadius = '7px 7px 0 7px';
    element.currentTarget.previousElementSibling.style.borderRadius = '7px 7px 7px 0';
    if(link){
        setIframe(link)
    }
    else {
        setHistory();
    }
}

function setHistory(){
    url.innerText = 'https://history.com';
    browser.innerHTML = `
     <div class="history-block">
   <h3 class="history__title">Timeline</h3>
   <div class="timeline">
     <div class="timeline__event  timeline__event--type1">
       <div class="timeline__event__icon ">
         <p class="lni-burger">⨊</p>
       </div>
       <div class="timeline__event__date">2019-2022</div>
       <div class="timeline__event__content ">
         <div class="timeline__event__title">BSUIR</div>
         <div class="timeline__event__description">
           <p>The first steps in higher education.The thorny path to the rank of engineer.</p>
         </div>
       </div>
     </div>
     <div class="timeline__event timeline__event--type3">
       <div class="timeline__event__icon">
         <p class="lni-burger">⫸</p>
       </div>
       <div class="timeline__event__date">2021</div>
       <div class="timeline__event__content">
         <div class="timeline__event__title">RSSchool</div>
         <div class="timeline__event__description">
           <p>A year of hard training to improve technical and communication skills.</p>
         </div>
       </div>
     </div>
     <div class="timeline__event timeline__event--type2">
       <div class="timeline__event__icon">
         <p class="lni-burger">⩷</p>
       </div>
       <div class="timeline__event__date">2021-2022</div>
       <div class="timeline__event__content">
         <div class="timeline__event__title">EPAM systems</div>
         <div class="timeline__event__description">
           <p>First job. Serious goals, confident steps and new feelings!</p>
         </div>
       </div>
     </div>
     <div class="timeline__event timeline__event--type1">
       <div class="timeline__event__icon">
         <p class="lni-burger">⩥</p>
       </div>
       <div class="timeline__event__date">2022</div>
       <div class="timeline__event__content">
         <div class="timeline__event__title">WG Forge</div>
         <div class="timeline__event__description">
           <p>Practice in a great team. Improvement in the field of software Engineering.</p>
         </div>
       </div>
     </div>
     <div class="timeline__event timeline__event--type3">
       <div class="timeline__event__icon">
         <p class="lni-burger">⨚</p>
       </div>
       <div class="timeline__event__date">2022</div>
       <div class="timeline__event__content">
         <div class="timeline__event__title">GameDev Academy</div>
         <div class="timeline__event__description">
           <p>A major project on Angular. Greater independence proportional to responsibility.</p>
         </div>
       </div>
     </div>
   </div>
 </div>
    `
}

setHistory();

function setIframe(link) {
    url.innerText = link;
    browser.innerHTML = `<iframe src="${link}" class="iframe-block"></iframe>`
    const card = document.querySelector(".card");
    if (card) card.style.margin = '8vh auto;';
}

function onShowLanguages(){
    let languages = document.querySelector('.languages-block');
    if(isShowLanguages){
        languages.classList.add('hidden');
        isShowLanguages = false
    } else {
        languages.classList.remove('hidden');
        isShowLanguages = true
    }
}

function onShowMenu(){
    let program = document.querySelector('.program-block');
    if(isShowProgram){
        program.classList.add('hidden');
        isShowProgram = false
    } else {
        program.classList.remove('hidden');
        isShowProgram = true
    }
}



