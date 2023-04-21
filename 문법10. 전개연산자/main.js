let num1 = '4444';
let num2 = num1; 

console.log(num1);
console.log(num2);
//복사대상과 복사된 값이 모두 잘 적용되어있습니다
//정말 잘 적용되었는지를 확인하려면
num1 = '4684864';
//num1을 재정의 하고 콘솔을 찍어보면 num1만 바뀌어 있는 것을 확인할 수 있습니다
//이로 미루어보아 num2는 완전한 복사가 이루어진것으로 알수 있습니다
console.log(num1);
console.log(num2);


let arr1 = [1,2,3];  //배열로 된 자료값
let arr2 = arr1; // 그 자료값을 복사한것

console.log(arr1);
console.log(arr2);

arr1[0] = 0;

console.log(arr1);
console.log(arr2);
/*
자료의 형태는 원시형과 참조형이 있습니다
원시형 = 문자열
참조형 = 배열

참조형의 자료값은 단순복사로는 온전하게 복사할 수가 없습니다
참조형의 자료는 주소의 값만 복사되기 때문에 원본이 변하면 복사된 값도 변하게 됩니다
따라서 다른 복사 방법이 필요합니다

중요!!
불변성 : 기존자료가 복사, 변형, 이동 등의 변화가 있을때 
변화 이전과 변화 이후의 자료가 서로 영향을 미치지 않는 성질
(독립적인 개체가 되어야 한다는 의미)

DOM이란? body안의 내용이 브라우저에 의해서 해석되어져서 구현되는 내용
DOM에는 2가지 종류 : 리얼돔과 가상돔(버츄어돔)
리얼돔 = 진짜 존재하는 돔 , HTML에 작성함으로 구현된 돔, js로 만들어질 돔
버츄어돔(가상돔) = js가 메모리상에서 가상으로 작성하는 돔 
js에서는 이런 자료의 복사와 이동이 빈번하게 발생합니다.
따라서 이 과정에서 이전자료의 불변성은 매우 중요한 개념이 됩니다

결국 복사는 깊이 있는 복사가 필요합니다
*/
// ... == 전개연산자

let arr3 = [1,2,3];
let arr4 = [...arr3]

console.log(arr3);
console.log(arr4);

arr3[0] = 0;
console.log(arr3);
console.log(arr4);


let arr5 = [...arr3, 7];
console.log(arr5);

let arr6 = [...arr3, ...arr4]
console.log(arr6)

/*
배열이란 기존의 값이 패키징 되어있는 상태입니다
전개연산자로 배열을 쓰게 되면 패키징 되어 있는 값을 바로 사용할 수 있도록
패키징으로부터 꺼내 펼쳐 놓음을 의미합니다, 하지만 전개연산자 자체로는 값을 바로
사용할 수 있는 형태는 아니고, 새롭게 옮겨 담을 패키징을 한뒤에 사용할수있습니다
*/

console.log(arr1);
console.log(...arr1); // 전개연산자 == spread 펼쳐놓다


//저ㅗㄴ개연사자로 객체값을 추가할 수 있습니다
const obj = {
    name : "임땡칠",
    age : 15
}

const newObj = {...obj, address : 'bucheon'}
console.log(newObj)

