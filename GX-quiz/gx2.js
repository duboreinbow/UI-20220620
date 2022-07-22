const btn_add = document.querySelector('btn_add');
btn_add.addEventListener('onclick', (e)=> {
   console.log(e);
})

//ul안에 추가하기
const items = document.querySelector('.items');
// 사용자가 입력한 운동명을 받기 위한 객체 찾기
const input  = document.querySelector('footer_input');
// 버튼 이벤트 처리
const btn_add = document.querySelector('.btn_add')

//추가하기
const text = input.Value;
//아이템 만들기
const item = createItem(text);

function createItem(text){
   const itemRow = document.createElement('li');
   itemRow.setAttribute('class','item_row');
   const item = document.createElement('div');
   item.setAttribute('class','item');
   const name = document.createElement('span');
   name.setAttribute('class','item_name');
   name.innerText = text; //name.textContent = text;
   const deleteBtn = document.createElement('button');
   deleteBtn.setAttribute('class', 'item_delete');
   deleteBtn.innerHTML = '<i class = "fas fa-trash-alt"></i>';
   deleteBtn.addEventListener('click',()=> {
      items.removeChild(itemRow)
      
   });
   const itemDivider = document.createElement('div');
   itemDivider.setAttribute('class','item_name');
   //div에 name넣기
   item.appendChild(name);
   // div에 삭제버튼 넣기 
   item.appendChild(deleteBtn);
   // li태그에 div넣기
   itemRow.appendChild(item);
   // li 태그에 구분선 추가하기
   itemRow.appendChild(temDivider);
   return itemRow;
}

///////////////////  추가 버튼 눌렀을 때 item 추가하기  //////////////////
btn_add.addEventListener('click',())




///////////////////////////////////////////////////////

createItem(스피닝:사용자가 입력한 운동명)
<li class="item_row">
<div class="item">
   <span class="item_name">????????</span>
   <button class="item_delete">
      <i class="fas fa-trash-alt"> </i>
   </button>
</div>
<div class="item_devider"></div>
</li>