const express = require('express');
const app =  express();

app.listen(8080, function(){
        console.log('listening 8080');
}); 

//app.get('/pet',function(요청 , 응답){
// 응답.send('반값습니다');
//})

app.get('/pet',function(reqest , reply){
    reply.send('반값습니다');
});

app.get('/beauty',function(reqest , reply){
    reply.send('my test beauty');
});

app.get('/',function(reqest , reply){
    reply.sendFile(__dirname + '/index.html')
});

//bootstrap 트위터 개발자들이 만든 css 컴포넌트 라이브러리 