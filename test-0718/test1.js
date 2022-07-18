
   <button id="btn">클릭하세요</button>
   <script>
      const button = document.getElementsById("btn");
      button.addEventListener('click',(e) => {
         console.log('버튼이 클릭되었습니다.');
      });
   </script>