# NodeJs
<h3> 1. npm </h3>
<p> npm install (      ) </p>
- express <br>
- figlet(아스키 아트)

<h3> 2. port </h3>
- 포트마다 다른 프로그램 실행
- 한 서버 내에서 여러 개 수행 가능

<h3> 3. code </h3>
<h4> app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})</h4>

- port : 몇 번 포트에 대해 듣고 있는지
- console.log : 글 출력

<h4> HTTP 메소드 </h4>
- Get : 주소창 <br>
    - params, query
- Post : 주소창 X <br>

<h4> 라우팅 </h4>
- 라우팅에 따라 보여지는 페이지 달라짐

<h4> 콜백함수(callback) </h4>
- 함수(끝나고 실행할 함수) <br>
- 다른 코드의 인수로서 넘겨주는 실행 가능한 코드

<h4> 예제 API </h4>
- Get방식(예시)<br>

```
    - app.get('/dog', (req, res) => {}..} <br>
    - app.get('/cat', (req, res) => {}..} <br>
```


<hr>
<h4>1) index.js </h4>
=> express 기본 동작 

<h4>2) ParamRouting.js </h4>
=> 파라미터 값으로 라우팅

<h4>3) exampleAPI.js </h4>
=> 예제 API 만들어보기 <br>
ex) app.get('/dog', ...)

<h4>4) Animal Sound </h4>
- 동물 소리 API 서버 만들기 실습 <br>

``` 
app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == 'dog'){
        res.json({'sound':'멍멍'})
    } else if (name == 'cat'){
        res.json({'sound':'야옹'})
    } else if (name == 'pig'){
        res.json({'sound':'꿀꿀'})
    } else{
        res.json({'sound':'알수없음'})
    }
    console.log(name)
}) 
```
<h4> 5) Practice.js / Practice.html </h4>
- fetch 함수 사용 <br>
- 서버 실행한 상태에서 html 파일 열기 <br>

<h5> ++ CORS 이슈 </h5>

```
- npm install cors
```

- cors 에러 : 다른 출처의 자원에 접근해서 리소스를 사용
