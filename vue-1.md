```
export default {
  // 이 안의 내용은 모두 Vue Instance 에 포함되어 생성된다.
  // new Vue({})
  // data는 반드시 함수다.
  // 만약 data: { name: 'hesung'} 하면, 콘솔에서 경고가 나온다.
  data: () => ({
    name: 'hesung yoon',
   })
}
```
```
data: function() {
  return {
    name: 'hesung yoon'
  }
}
```
```
enhanced object prototype (메소드 축약 표현)
data() {
  return {id: 1,
          name: 'hesung yoon',
          phone: '1234'}
}
```
```
// arrow function 이 제일 간결
// () => { return { a: 1 }; }
// () => ({ a: 1 }) // 위에랑 똑같음
data: () => ({
  id:1,
  name: 'hesung yoon',
  phone: '1234'
})
```
