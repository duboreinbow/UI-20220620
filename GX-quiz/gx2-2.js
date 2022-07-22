//해커뉴스 1단계 5단계 수업 리뷰

//ul안에 li태그 추가하기
const items = document.querySelector('.items'); // ul태그
// 사용자가 입력한 운동명을 받기 위한 객체 찾기
const input  = document.querySelector('.footer_input');
// 버튼 이벤트 처리
const btn_add = document.querySelector('.btn_add') // + 추가버튼

function addItem(){
   //추가하기
   const text = input.value;
   if(text === ""){
      input.focus();
      return;
   }
   //아이템 만들기
   const item = createItem(text);
   items.appendChild(item);
   item.scrollIntoView({block:'center'});
   input.value='';
   input.focus();
}

function createItem(text){
   const itemRow = document.createElement('li');
   itemRow.setAttribute('class','item_row');
   const item = document.createElement('div');
   item.setAttribute('class','item');
   const name = document.createElement('span');
   name.setAttribute('class','item_name');
   // 클릭 후 innerHTML, or innerText or textContent
   name.innerText = text; //name.textContent = text;
   const deleteBtn = document.createElement('button');
   deleteBtn.setAttribute('class', 'item_delete');
   deleteBtn.innerHTML = '<i class = "fas fa-trash-alt"></i>';
   deleteBtn.addEventListener('click',()=> {
      items.removeChild(itemRow)
   });
   const itemDivider = document.createElement('div');
   name.setAttribute('class','item_divider');
   //div에 name넣기
   item.appendChild(name);
   // div에 삭제버튼 넣기 
   item.appendChild(deleteBtn);
   // li태그에 div넣기
   itemRow.appendChild(item);
   // li 태그에 구분선 추가하기
   itemRow.appendChild(itemDivider);
   return itemRow;
}

///////////////////  추가 버튼 눌렀을 때 item 추가하기  //////////////////
btn_add.addEventListener('click',()=>{
   addItem();
})

// 엔터했을 경우도 동일하게 처리하기
input.addEventListener('keypress', (e)=>{
   console.log('key ==>'+e.key);
   if(e.key === 'Enter'){
      addItem();
   }
});