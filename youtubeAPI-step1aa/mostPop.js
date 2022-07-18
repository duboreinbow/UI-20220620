const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB16KlW2FS34UYvKDtx8FMP1wyZWz9iNSY"
ajax.open("GET", MOST_URL, false);
ajax.send();

//console.log(ajax.response);
const result = JSON.parse(ajax.response);
const items = result.items;
console.log(items.length);
for(let i=0;i<items.length;i++){
    console.log(items[i].s)
}