//기존 es5(에크마5)에서의 배열합치기
let a = [1,2,3];
let b = [3,4,5];
const ab = a.concat(b);
console.log(ab);

//배열의 중복값을 제거하고 싶을때

const numberss = [1, 1, 2, 2, 3, 4, 5];

const newNember = numberss.filter((el, index)=>{
    //필터에 의해서 밑에 있는  return numberss.indexOf(el) === index; true값으로
    //반환되는 값만 모아서 새로운 배열을 만들어주는 것
    return numberss.indexOf(el) === index;
})

console.log(newNember)

/*
filter(); 메소드는 주어진 배열의 값들이 순차적으로 접근하여 콜백함수를 통해
          true값을 반환하는 요소들을 기준으로 신규 배열을 만들어 반환합니다

map(); 메소드(내장함수 메소드) = 콜백함수를 순차적으로 모든 요소에 적용합니다(반복문) 

reduce(); 배열의 각요소를 순차적으로 접근해서 콜백함수의 실행값을 누적해서 결과를 도출합니다 

map()은 5개의 요소를 판단한다면 결과로 5개의 결과값을 도출됩니다
반변 reduce()는 5개의 요소를 판단한다면 결과로 5개이하의 값을 도출합니다
도출하는 갯수는 콜백함수의 내용에 따라서 달라집니다

이 세 메소드는 기본적으로 순차적으로 해당 값에 접근하는 방식으로 일을 처리합니다
*/

let dup = [1,2,2,3];

const dup2 = dup.reduce((arr, cur) => arr.includes(cur) ? arr : [...arr, cur], []);

console.log(dup2)

// arr = []
// cur = 1

// arr [1]

// arr [1]
// cur = 2

// arr [1,2]

// arr = [1,2]
// cur = 2

// arr = [1,2]
// 2는 탈락

// arr = [1,2]
// cur = 3
// arr = [1,2,3]


/*
set 객체는 중복되지 않는 유일한 값들의 집합입니다
set 객체는 동일한 값을중복해서 포함할수 없으며, 요소 순서는 의미가 없습니다
인덱스로 요소를 접근할수 없고, 따라서 수학적인 집합을 구현하기 위한 자료구조입니다.
*/

const set = new Set();
console.log(set);

const set1 = new Set([1, 2, 3, 3, 3, 4, 4, 4])
console.log(set1);

//배열로 값을 중복해서 제공하였더니, 중복된 값을 제거한 고유값으로 정렬함과 동시에
//객체로 반환합니다 => set은 객체로 만드는 메서드 입니다


const set2 = new Set("hello");
console.log(set2);

//문자열도 객체로 반환 가능

const set3 =[...new Set([1, 2, 2, 3, 4, 4])];
console.log(set3);

//set 은 객체로만 반환이 되지만 값을 배열로 담아야 할때 사용하는 방법은
//전개연사자 입니다 
//중복을 제거할 해당 배열을 set으로 반환한뒤 전개연사자를 이용하여 값을
//풀어준뒤 다시 []으로 감싸 배열로 할당한 것입니다


//전개 연산자를 통한 객체의 통합

const obj1 = {name : "임땡칠", age: 15};
const obj2 = {name : "임똥칠", address: "bucheon"};
const com = {...obj1, ...obj2};
console.log(com);

/*
객체의 key값은 유니크한 값으로 중복을 허용하지 않습니다
따라서 객체가 병합될때 뒤에 병합되는 값으로 앞에 값이 덮어써지면서
병합됩니다
즉  key 값의 고유성을 지켜집니다
*/