const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
/*
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
    */

  fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const ul = document.createElement("ul");
      for(let i=0; i<=10; i++){
          const div = document.createElement("div");
          div.innerHTML = `
            <li>
              <a href='#${result[i].id}'>
                ${result[i].title} (${result[i].comments_count});
              </a>
            </li>
          `;
          ul.appendChild(div.firstElementChild);
          document.getElementById("root").appendChild(ul);
          //document.getElementById("root").appendChild(ul);
      }
      document.getElementById("root").appendChild(ul);
      document.getElementById("root").appendChild(content);
    })
    .catch(error => console.log('error', error));
    
    const requestOptions2 = {
      method: 'GET',
      redirect:'follow'
    };

    window.addEventListener("hashchange",() => {
      console.log(location.hash);
      const id = this.location.hash.substring(1); // #31914288에서 첫번째 #은 잘라내고 사용
      fetch("http://api.hnpwa.com/v0/item/@id.json".replace("@id", id), requestOptions2)
      .then(response => response.json())
      // callback
      //.then(result => console.log(result))
      .then(result => {
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error));
    });

  /*
    글 목록의 링크는 # 이었음 그러면 location.hash에 #이 들어왓음
    그러면 이것으로 어떤 참 거짓을 나눌 수 있지? 0이면 false 나머지는 모두 true
    location.hash에 #만 들어오면 빈값을 반환함 ""
    첫 진입일때는 getNewsList 호출하고 
    해쉬값이 존재하면 getNewContent 호출한다
  */

  function router(){
    //console.log(location.hash);#3214567
    const hashvalue = location.hash;
    //첫 진입이면 
    if(hashvalue === ""){
      getNewsList();
    }else{
      getNewsContent();
    }
  }//////////////end of router

  window.addEventListener("hashchange", router);
  router();