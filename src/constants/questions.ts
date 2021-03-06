import { CATEGORIES } from './categories';

export interface QuestionData {
  question: string;
  answer: string;
  category: string;
}

export const QUESTIONS = [
  {
    question: 'position에 대해 설명해주세요.',
    answer:
      '\nCSS position은 요소의 위치를 정하는 CSS 속성입니다. 먼저 static은 position의 기본값으로 기본위치를 뜻합니다. relative는 레이아웃을 변경하지 않고 상대적으로 위치를 조정합니다. absolute는 요소가 원래 위치에서 제거되고, 가장 가까운 부모 요소 중 relative, fixed, absolute 속성을 가진 요소 혹은 최상위 요소에 의존하여 위치를 지정합니다. absolute로 배치된 요소는 margin을 가질 수 있으며 이때 다른 margin과 충돌하지 않습니다. fixed는 뷰포트를 기준으로 지정된 위치에 배치되며 스크롤 할 때 이동하지 않습니다. sticky는 relative와 fixed가 융합된 속성으로 지정된 임계 값을 넘을 때까지 relative 처리되며, 특정 지점에서 fixed로 처리됩니다. (박서영)\n',
    category: 'CSS',
  },
  {
    question: 'display에 대해 설명해주세요.',
    answer:
      '\nCSS display 속성은 요소를 어떻게 보여줄지 결정합니다. 4가지 속성값이 쓰이는데,\n첫 번째로 none은 요소를 렌더링하지 않도록 처리하며 visibility:hidden과 다르게 영역도 차지 않습니다.\n두 번째로 block은 가로영역을 모두 채우며, block 요소 다음에 등장하는 태그는 줄 바꿈이 된 것처럼 보입니다. div 태그, p 태그, 헤딩 태그, li 태그 등이 해당합니다.\n세 번째로 Inline 태그는 block 태그와 다르게 줄 바꿈이 되지 않고, width와 height도 지정할 수 없습니다. 주로 문자의 굵기, 기울기, 색상, 크기 등 효과를 주기 위해 존재하는 단위입니다. span 태그, b 태그, a 태그 등이 이에 해당합니다.\n네 번째로 inline-block은 block과 inline의 중간 형태로 줄 바꿈은 되지 않지만 크기를 지정할 수 있습니다.(박서영)\n',
    category: 'CSS',
  },
  {
    question: 'flex 에 대해 설명해주세요.',
    answer:
      '\nflex란, 각 요소를 정렬시키는 CSS 속성 중 하나입니다. 수평이 될 요소들을 감싸는 부모 요소에 display: flex를 적용해 정렬시킵니다. flex-directon으로 정렬의 주축을, justify-content로 주축의 정렬 방법을, align-items과 aline-content로 교차 축의 정렬 방법을 설정할 수 있습니다. 그리고 flex-wrap으로 요소의 줄바꿈 설정을 할 수 있는데 각 요소의 본래 크기를 무시한 채 한 줄로 정렬하는 no-wrap과 줄 바꿈을 유지하는 wrap 옵션 등이 있다. (박서영)\n',
    category: 'CSS',
  },
  {
    question: 'grid에 대해 설명해주세요. -황나희',
    answer:
      '\nGrid는 2차원(가로-세로) 레이아웃 시스템으로, 부모 요소인 Grid Container(그리드 컨테이너) 안에 있는 Grid Item(그리드 아이템)을 정렬해줍니다. 자주 사용하는 것은 grid-template-rows, grid-template-columns, repeat(반복횟수, 반복값)로,  repeat(5, 1fr) 을 사용하여 으로 1fr, 1fr, 1fr, 1fr, 1fr 대신 사용할 수 있습니다.\n',
    category: 'CSS',
  },
  {
    question: 'box model이란 무엇인가요?',
    answer:
      '\nbox model은 HTML 요소들을 사각형 박스 형태의 영역을 차지하도록 모델링하는 것을 말합니다. 각 박스에는 `content` 영역과 `padding`, `border`, `margin` 영역을 선택적으로 사용할 수 있으며, 브라우저는 이를 기준으로 각 요소를 렌더하고 배치합니다. - 이춘구\n',
    category: 'CSS',
  },
  {
    question: 'margin, padding의 차이는 무엇인가요?',
    answer:
      '- `margin`: border를 기준으로 외부의 여백\n- `padding`: border를 기준으로 내부의 여백 -이춘구',
    category: 'CSS',
  },
  {
    question: 'inline, block, inline-block의 차이점은 무엇인가요?',
    answer:
      '- **`block`** : 항상 새로운 라인에 요소가 배치되고 화면의 너비 전체를 가로 영역으로 차지합니다. width 속성 값을 부여하면 그 값만큼의 너비를 차지합니다.\n- **`inline`** : 새로운 라인에 배치되지 않으며 다른 요소들과 같은 라인에 배치될 수 있고 내부 content만큼의 영역을 차지합니다. width, height, margin-top, margin-bottom 속성이 적용이 되지 않습니다.\n- **`inline-block`** : block 요소와 inline 요소의 특징을 모두 가지고 있습니다. inline 요소들과 같은 라인에 배치될 수 있으며, width와 height 속성으로 요소의 크기를 지정할 수도 있습니다. -이춘구',
    category: 'CSS',
  },
  {
    question: 'Reset CSS, Normalize CSS는 무엇인가요?',
    answer:
      '\nReset CSS, Normalize CSS를 사용하는 가장 큰 이유는 크로스 브라우징이다. 브라우저마다 HTML 시맨틱 태그에 대한 기본값이 다르므로 그 차이를 없애는 데 필요하다.\n\n**Reset CSS**\n\n웹 브라우저마다 각기 다른 default 스타일이 지정되어 있는데 해당 값을 초기화함으로써 다양한 웹브라우저에서도 동일한 스타일이 적용되도록 하는 설정 파일이다.\n\nW3C에서 공식적으로 권장하는 기법이라기보다는 실무에서 편의에 의해 임의로 지정하는 설정이다.\n\n**Normalize CSS**\n\n브라우저(모바일 브라우저를 포함하여)를 광범위하게 지원하며, HTML5 요소, 타이포그래피, 목록(lists), embeded 콘텐츠, 폼과 테이블을 일관성있게 통일시키는 CSS를 포함한다.다른 CSS reset과는 달리 사용하기 좋은 기본값들은 유지한다.\n\nHTML 요소의 다양한 스타일을 정규화한다.\n\n버그 및 브라우저 간 차이점을 수정한다.\n\n부분적인 개선과 가용성을 향상시킨다.\n\n코드에 대한 자세한 주석이 달려 이해를 돕는다.\n(정훈)\n',
    category: 'CSS',
  },
  {
    question: 'sass, css module, css in js에 대해, 각각 장단점.',
    answer:
      '\n### **SCSS 개념 및 장점**\n\nCSS는 HTML 태그를 꾸미거나 효과를 넣어 주는 등 디자인 요소를 추가할 때 사용하는 전처리 과정입니다. 프로젝트 규모가 커지면 CSS는 불가피하게 가독성이 떨어지는 등 유지보수의 어려움을 주는 요소가 됩니다. 코드의 재활용성을 올리고, 가독성을 올리는 등 CSS에서 보이던 단점을 보완하고, 개발의 효율을 올리기 위해 등장한 개념이 SASS/SCSS라고 합니다.\n\n### 단점\n\n- css에 비해 줄었다지만, 여전한 코드가 길다.\n- 기능이 많이 들어있어 용량이 크다.\n- SCSS를 CSS로 변환하는 과정을 알기 어렵다.\n\n### CSS module 개념 및 장점\n\nCSS를 사용할 때 클래스 이름을 고유한 값으로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해 주는 기술이다.\n\n- CSS Module을 이용하면 클래스명이 충돌하는 단점을 극복할 수 있다.\n- CSS Module은 컴포넌트 단위로 스타일을 적용할 때 유용하다.\n\n### 단점\n\n- 한 곳에서 모든 것을 작성하지 않기 때문에 별도로 많은 CSS 파일을 만들어 관리해야 하는 단점이 있다.\n\n정훈\n',
    category: 'CSS',
  },
  {
    question: 'CSS를 head 안에 둬야하는 이유는 무엇인가요?',
    answer:
      '\nCSS를 <head>안에 넣는 것은 최적화된 웹사이트를 구출할 때 적절한 스펙이다.\n\n페이지가 처음 로드되면, HTML과 CSS가 동시에 파싱되는데, HTML은 DOM(Document Object Model)을 만들고, CSS는 CSSOM (CSS Object Model) 을 만든다.\n\n2가지 모두 웹 사이트에서 시각적인 부분을 만드는데 필요하므로, 빠른 first meaningful paint를 할 수 있게 해준다.\n\n점진적인 렌더링을 하는 경우 몇몇 브라우저는 스타일이 변경되면 페이지 요소를 다시 그리는 것을 막기위해 렌더링을 차단하는데,\n\n문서 최하단에 stylescheet가 있다면 사용자는 빈화면을 보게될 수 있다.\n\n정훈',
    category: 'CSS',
  },
  {
    question: 'DOCTYPE 이란 무엇인가요?',
    answer:
      '\n일단 DOCTYPE이란 Document Type의 약자로, HTML이 어떤 버전으로 작성되었는지 미리 선언하여 웹브라우저가 내용을 올바로 표시할 수 있도록 해주는 것이다. 줄여말해 DTD(Document Type Definition)라고 불리운다.\n',
    category: 'HTML',
  },
  {
    question: '여러 meta 태그들에 대한 질문',
    answer:
      '\n메타태그란 html 문서가 어떤내용을 담고있고 핵심키워드는 무엇이며 누가만들었는지 어떤 언어코드로 설정되었는지의 정보를 담고있습니다.\n\n메타태그의 종류\n\n1. **MIME 타입(content-type)**\n이 속성은 현재 페이지의 인코딩(문자셋)을 어떠한 방식으로 출력할 지 결정하는 속성입니다. 만약 제작한 웹 페이지의 한글이 깨져 보인다면, 거의 이 메타정보와 실제 페이지의 문자셋이 달라 생긴 문제일 가능성이 매우 큽니다. 주로 UTF-8 를 권장하고 있습니다.\n2. **브라우저호환설정(X-UA-Compatible)**\n이 메타 정보는 IE(인터넷 익스플로러)가 하위 버전 IE모드로 렌더링 하도록 만들어 줍니다. 예를 들어 content속성 값에 "IE=EmulateIE7"로 넣는 경우, IE8 이상의 최신 IE 브라우저라도 IE7 버전처럼 페이지를 렌더링 합니다.\n3. **페이지 리로드(refresh)**\n페이지를 주기적으로 새로고침 하게 만들어줍니다. 예상치못한 새로고침은 사용자로하여금 불편함을 느끼게 할수있습니다. 아래 예시코드는 content 값에 숫자를 입력후 세미콜론(;)으로 구분지어 url 로 주소를 넣어주면 해당 시간 뒤에 지정해준 url로 페이지가 이동된다는 뜻 입니다.\n4. **소개내용(description)**\n정보 같은 경우는 현재 페이지를 간략히 소개하는 문구를 적도록 합니다. 이를 검색엔진이 검색된 페이지에 페이지 제목과 같이 표현하며, \\\'공유하기\\\' 같은 것을 했을 때에 활용이 될 수도 있습니다.\n5. **키워드(Keywords)**\n페이지에 대한 키워드 정보들을 담고 있습니다. 페이지의 주요한 단어들을 콤마(,)로 구분하여 값을 넣어주도록 합니다. 이 키워드 정보는 검색엔진이 보다 검색엔진을 용이하도록 하게 만듭니다만, 이를 악용한 광고성 페이지들은 실제 콘텐츠와는 다른 단어들을 무작위로 넣기도 합니다.\n6. **작성자(author)**\n페이지의 저자를 나타냅니다. content의 값으로 저자를 나타내는 문자열을 써야 합니다. 이 메타정보가 큰 의미를 가지진 않지만, 소스 상에서도 자신이 제작했음을 명시할 수 있습니다.',
    category: 'HTML',
  },
  {
    question: '시맨틱 태그란 무엇인가요?',
    answer:
      '\nHTML5에 도입된 시맨틱 태그는 개발자와 브라우저에게 의미있는 태그를 사용할 수 있게 해주었습니다. 시맨틱 태그를 씀으로써 SEO, 웹 접근성 이점을 가질 수 있으며 그리고 개발자들이 유지보수하기가 더 편해진다 (정민)',
    category: 'HTML',
  },
  {
    question: 'JS를 body 맨 밑에 둬야 하는 이유는 무엇인가요?',
    answer:
      '\n<script>는 다운로드되고 실행되는 동안 html 파싱을 차단한다.\n\n스크립트를 맨 아래에 두면 html를 먼저 파싱하여 사용자에게 노출시킬 수 있다.\n\n스크립트에 document.write()가 있을 때에는 <script>를 아래쪽에 두는 것이 예외적일 수 있으나, 요즘은 document.write를 사용하지 않는 것이 좋다.\n\n또한, <script>를 하단에 위치 시키면, 브라우저가 전체 문서 파싱이 완료될 때 까지 스크립트 다운로드를 할 수 없다.\n\n이를 통해 DOM을 핸들링하는 코드가 오류를 발생시키지 않도록 해준다.\n\n<script>를 <head>에 넣어야 하는 경우엔 defer를 사용하는 방법도 있다.\n\n정훈\n',
    category: 'JS',
  },
  {
    question:
      'JS를 head에 둬야 하는 경우가 있을까요? 어떨 때인가요?(defer async 제외)',
    answer:
      '\n웹 페이지의 모든 내용이 로딩된 후에 document.write() 메소드가 실행되면, 웹 페이지 내에 먼저 로딩된 모든 데이터를 지우고 자신의 데이터를 출력하게 됩니다.\n\n그렇기 때문에 document.write()를 사용하는 경우 head 안에서 script를 작성하는 것을 권장합니다.\n\n정훈\n',
    category: 'JS',
  },
  {
    question: 'var, let, const의 차이는 무엇인가요?',
    answer:
      '\n임준홍\n\nvar는 ES5까지 자바스크립트에서 변수를 선언하는 유일한 방법이었습니다. var는 중복 선언이 가능하고, 함수 레벨 스코프를 따릅니다. 반면에 ES6에서 등장한 let과 const는 중복 선언이 불가능하고, 블록 레벨 스코프를 따릅니다. const는 let과 다르게 선언할 때 반드시 초기화도 같이 해야 하며, 재할당이 불가능합니다.\nvar과 let, const는 변수 호이스팅이 일어날 때에도 차이가 있습니다. var는 선언문 이전에 변수를 참조할 수 있습니다. var로 선언된 변수는 런타임 이전에 선언과 초기화가 동시에 진행되므로, 할당문 이전에 참조하면 undefined를 반환합니다. 그러나 let과 const는 선언문 이전에 참조하면 아직 초기화가 되지 않아 ReferenceError가 발생합니다.\n',
    category: 'JS',
  },
  {
    question: 'block scope란 무엇인가요?',
    answer:
      '\n임준홍\n\n블록 레벨 스코프는 모든 코드 블록 내에서 선언된 변수를 지역 변수로 인정합니다.\n모든 코드 블록 내에서 선언된 변수는 코드 블록 내부에서만 유효하며 코드 블록 외부에서는 참조할 수 없습니다.\n',
    category: 'JS',
  },
  {
    question: '이벤트 버블링, 캡처링, 위임',
    answer:
      '\n**이벤트 버블링 - Event Bubbling**\n\n이벤트 버블링은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미합니다.\n\n**이벤트 캡쳐 - Event Capture**\n\n이벤트 캡쳐는 이벤트 버블링과 반대 방향으로 진행되는 이벤트 전파 방식입니다. 특정 이벤트가 발생했을 때 최상위 요소인 body 태그에서 해당 태그를 찾아 내려갑니다.\n\n**이벤트 위임 - Event Delegation**\n\n이벤트 위임은 실제 바닐라 JS로 웹 앱을 구현할 때 자주 사용하게 되는 코딩 패턴입니다.\n\n이벤트 위임을 한 문장으로 요약해보면 ‘하위 요소에 각각 이벤트를 붙이지 않고 상위 요소에서 하위 요소의 이벤트들을 제어하는 방식’입니다.\n\n정훈\n',
    category: 'JS',
  },
  {
    question: '이벤트 위임의 장점은 무엇인가요?',
    answer:
      '\n화면의 모든 하위 요소에 일일이 이벤트 리스너를 추가하는 대신 상위 요소에 이벤트 리스너를 달아놓고 하위에서 발생한 클릭 이벤트를 감지할 수 있습니다.\n\n정훈\n',
    category: 'JS',
  },
  {
    question: '캡처링은 어떨 때에 쓸 수 있을까요?',
    answer: '\n정훈\n',
    category: 'JS',
  },
  {
    question: '클로저란 무엇인가요? -황나희',
    answer:
      '\n클로저함수란, 함수와 렉시컬 환경의 조합으로 함수가 생성될 당시의 외부 변수를 기억하고, 생성 이후에도 계속 접근 가능한 현상을 말한다.\n\n클로저 함수는 다음과 같은 장점이 있습니다.\n\n1. 데이터를 보존할 수 있다.\n1. 클로저는 특정 데이터를 스코프 안에 가둬 계속 사용할 수 있게하는 폐쇄성을 갖는다.\n2. 이를 통해, 외부 함수의 실행이 끝나더라도 외부 함수 내 변수를 사용할 수 있다.\n2. 정보의 접근을 제한할 수 있다.\n1. 클로저 모듈 패턴을 사용해 객체에 담아 여러 개의 함수를 리턴하도록 만든다.\n2. 이러한 정보의 접근을 제한하는 것을 캡슐화라고 한다.\n3. 모듈화에 유리하다.\n1. 클로저 함수를 각각의 변수에 할당하면 독립적으로 값을 보존할 수 있다.\n2. 이와 같이, 함수의 재사용성을 극대화하여 하나의 독립적인 부품의 형태로 분리하는 것을 모듈화라고 한다.\n3. 클로저를 통해 데이터와 메소드를 묶을 수 있기에 모듈화에 유리하다.\n',
    category: 'JS',
  },
  {
    question: '클로저는 어떨 때에 쓰이나요? -황나희',
    answer:
      '\n상태가 의도치 않게 변경되지 않도록 상태를 안전하게 **은닉(information hiding)하고 특정 함수에게만 상태변경을 허용할 때 사용한다.**\n',
    category: 'JS',
  },
  {
    question: '이벤트 루프란 무엇인가요?',
    answer:
      '\n본래 자바스크립트는 싱글 스레드 기반의 언어라서 한 번에 하나의 작업만 처리할 수 있지만 자바스크립트를 실행하는 환경인 브라우저에서 이벤트 루프를 활용해 비동기 방식으로 동시성을 지원합니다. 이벤트 루프는 callback queue에 task를 적재해놓다가 call stack이 비어있을 경우 callback queue에서 task를 꺼내 call stack에 추가합니다. (박서영)\n',
    category: 'JS',
  },
  {
    question: '프로토타입이란 무엇인가요?',
    answer:
      '\nJS에서 기본 데이터 타입을 제외한 모든 것들은 객체입니다, 객체가 만들어지기 위해서는 자신을 만드는데 사용된 원형인 프로토타입 객체를 이용하여 객체를 만듭니다. 이때 만들어진 객체 안에 __proto__ 속성이 자신을 만들어낸 원형을 의미하는 프로토타입 객체를 참조하는 숨겨진 링크가 있습니다. 이 숨겨진 링크를 프로토타입이라고 정의합니다\n\n어떠한 객체가 만들어지기 위해 그 객체의 모태가 되는 녀석을 프로토타입이라고 합니다.\n자바스크립트에서 **프로토타입의 개념은 프로토타입 객체(Prototype Object), 프로토타입 링크(Prototype Link)**를 통틀어 말합니다.\n',
    category: 'JS',
  },
  {
    question: '프로토 타입의 장단점은 무엇인가요?',
    answer:
      '\n프로토타입 객체를 동적으로 수정이 가능하다는 장점은 때에 따라서 런타임에서 객체를 수정하면서 버그를 유발하기 쉽게 된다는 이면을 가지고 있다.\n\n흔히 trade-off 라고 표현을 많이 하시는데, 다양한 관점에서 프로토타입을 바라보았을 때 프로토타입에서 자랑할 수 있는 장점들이 다른 관점에서는 그에 상응하는 큰 단점으로도 보여질 수 있는 특징이 있는 것 같습니다.\n',
    category: 'JS',
  },
  {
    question:
      '프로토타입을 실제로 사용해볼 일은 잘 없는데 어디에 사용할 수 있을까요?',
    answer: '\n정민 어.. 으음..\n',
    category: 'JS',
  },
  {
    question: '호이스팅이 무엇인가요?',
    answer:
      '\n임준홍\n\n변수 호이스팅은 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징입니다. 호이스팅은 자바스크립트 엔진이 런타임 이전에 모든 선언문을 다른 코드보다 먼저 실행하기 때문에 발생합니다.\nvar로 선언한 변수는 선언과 초기화가 동시에 일어나므로 호이스팅으로 선언 단계가 선언문 이전에 참조할 수 있습니다. 하지만 let, const로 선언한 변수는 선언문 이전에 초기화가 일어나지 않아 참조할 수 없습니다. 이러한 현상은 let, const로 선언한 변수에서 호이스팅이 일어나지 않는 것이 아니라, 호이스팅으로 인해 끌어올려진 선언 단계와 선언문에서의 초기화 단계 사이인 일시적 사각지대(TDZ)에서 변수를 참조했기 때문입니다.\n',
    category: 'JS',
  },
  {
    question:
      '호이스팅은 개발자가 이해하기 어려운데 왜 만들었을까요? 일어나는 이유가 뭘까요?',
    answer:
      '1. 자바스크립트 엔진은 함수선언문 해석 -> 변수 초기화 -> 코드실행 순서로 진행된다.\n2. 코드를 실행할 땐 이미 함수 선언문과 변수가 생성되어있는 상태이기 때문에\n3. 어디에서든 함수나 변수를 호출할 수 있다. (심지어 제일 위에서도!)\n\n나희\n',
    category: 'JS',
  },
  {
    question: '실행 컨텍스트란 무엇인가요?',
    answer:
      '\n임준홍\n\n실행 컨텍스트는 변수, 함수, 클래스 이름 등의 식별자들을 등록하고 관리하는 스코프와 코드 실행 순서 관리를 구현한 내부 메커니즘으로, 모든 코드는 실행 컨텍스트를 통해 실행되고 관리됩니다. 식별자와 스코프는 실행 컨텍스트의 렉시컬 환경으로 관리하고, 코드 실행 순서는 실행 컨텍스트 스택(콜 스택)으로 관리합니다.\n',
    category: 'JS',
  },
  {
    question: '== 과 === 의 차이가 무엇인가요?',
    answer:
      '\n임준홍\n\n동등 비교 연산자(==)는 좌항과 우항의 피연산자의 타입을 암묵적 타입 변환을 통해 일치시킨 후 같은 값인지 비교하는 반면, 일치 비교 연산자(===)는 좌항과 우항의 피연산자가 타입과 값이 모두 같은지 비교합니다.\n',
    category: 'JS',
  },
  {
    question: 'NaN 과 NaN을 비교하면 어떻게 되나요? 어떻게 확인할 수 있나요?',
    answer:
      '\nisNaN()으로 확인할 수 있다.\n\nNaN 은 모든 종류의 값과 비교했을 때 같지 않고, 심지어 또 다른 NaN과도 같지 않음을 출력한다\n',
    category: 'JS',
  },
  {
    question: 'setTimeout(callback, 0) 은 어떻게 동작하나요?',
    answer:
      '\nsetTimeout 메서드는 2번째 인자에 들어오는 시간이 만료된 후 1번째 인자로 들어온 함수나 코드를 실행하는 함수이다.\n\n조금 더 자세하게는 위에 이벤트루프를 같이 설명하면서, 답변을 할 수 있다..\n\n1. setTimeout이 호출되면서 Call Stack에 setTimeout함수가 들어간다.\n2.  setTimeout함수는 자바스크립트 엔진이 처리하지않고 **Web API**가 처리하므로 Callback함수를 전달하고, Call Stack에 setTimeout함수는 삭제되고  setTimeout작업을 요청한다.\n3. 지정한 시간이 지나면 callback을 큐에 전달한다\n4. 호출 스택이 비어있다면 차례대로 큐를 꺼내서 실행한다.',
    category: 'JS',
  },
  {
    question: 'Promise란 무엇인가요? async await 또한, -황나희',
    answer:
      '\n`**프로미스` 는 자바스크립트 비동기 처리에 사용되는 객체다.** `비동기 처리` 란 특정코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 특성을 의미한다. 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다.\n프로미스는 처리 과정으로 `3가지`를 갖는다.\n`1) Pending(대기)` : 비동기 처리 로직이 아직 완료되지 않은 상태\n`2) Fulfilled(이행)` : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태\n`3) Rejected(실패)` : 비동기 처리가 실패하거나 오류가 발생한 상태\n\n**`async` : 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 붙인다.**\n\n주의할 점은 비동기 처리 메서드가 꼭  프로미스 객체를 반환해야 의도한 대로 동작한다.\n\n일반적으로, await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수이다.\n\n`**await` : Promise가 끝날 때까지 기다릴 수 있게 해준다.** 만약 await를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 .then() 등을 사용해야 한다.\n\n`async await 문법` 덕분에 비동기에 대한 사고를 하지 않아도 된다.\n\nES6에 추가된 문법에 대해 말해주세요.\n\nlet/const 키워드, 클래스, 화살표 함수, 템플릿 리터럴, 구조분해 할당, 스프레드 문법, rest 파라미터, Symbol, 프로미스, Map/Set, 이터러블, for of문, 제너레이터, 모듈 import/export, Proxy 등이 새롭게 추가되었습니다.\n',
    category: 'JS',
  },
  {
    question: 'NULL 병합 연산자는 무엇인가요?',
    answer:
      '\n임준홍\n\nNULL 병합 연산자는 좌항의 피연산자가 null 또는 undefined일 때 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환합니다.\nNULL 병합 연산자는 변수의 기본값을 설정할 때 유용합니다. NULL 병합 연산자 도입 이전에는 논리합 연산자를 사용하였는데, 논리합 연산자는 false, 0 등의 Falsy값일 때에도 우항의 피연산자를 반환하지만 NULL 병합 연산자는 오로지 null과 undefined인 경우에만 우항의 피연산자를 반환합니다.\n',
    category: 'JS',
  },
  {
    question: 'optional chaining의 장점은 무엇인가요?',
    answer:
      '\n임준홍\n\n옵셔널 체이닝 연산자가 도입되기 이전에는 객체의 프로퍼티를 참조할 때 객체가 null 이나 undefined이면 TypeError를 발생시키기 때문에 프로퍼티 참조 전에 타입을 확인해야 했습니다.\n하지만 옵셔널 체이닝 연산자를 사용하면 좌항이 null 또는 undefined일 때 우항의 프로퍼티 참조를 하지 않고 즉시 undefined를 반환하기 때문에 에러를 발생하시키지 않습니다.\n',
    category: 'JS',
  },
  {
    question: 'for of 는 어떻게 동작하나요?',
    answer:
      '\nfor of 가장 큰 특징은 iterable 객체를  모두 순회할 수 있는 반복문이다, 해당 iterable객체에 **속성값(value)**을 반복 순회한다.(정민)\n',
    category: 'JS',
  },
  {
    question: 'iterator에 대해 설명해주세요.',
    answer:
      '\nJavaScript에서 객체가 iterable하기 위해서는, object에는 Symbol.iterator라는 메서드가 구현되어 있어야 한다.  iterator는 객체를 next 메서드로 순환 할 수 있는 객체이다.  (next 메서드 부연설명)\n\n즉, Object가 iterator 를 가지고 있다면, iterable 이다.\nObject에서 next 메서드가 값을 반복하면서, {done, value} 를 반환한다면, iterator 이다.(정민)\n',
    category: 'JS',
  },
  {
    question: 'generator에 대해 설명해주세요.',
    answer:
      '\nJavascript에서 iterator 를 쉽게 구현할 수 있는 방법으로 generator 객체가 있다. 이 generator 객체를 생성하는 방법은 **GeneratorFunction**과 **function***이 있다.(정민)\n',
    category: 'JS',
  },
  {
    question: 'JS의 GC는 무엇인가요?',
    answer:
      '\nGC는 garbage collection의 약어로,  메모리 할당을 추적하고 할당된 메모리가 더 이상 필요 없어졌을 때 해체하는 작업을 말합니다. 자바스크립트에서 변수는 참조값을 담고 있지 않고, 해당 값을 메모리에 저장합니다. 참조값을 생성하고 나서 더 이상 참조할 게 없거나 비어지면 가비지 컬렉션이 작동해서 메모리가 반환됩니다. (박서영)P\n',
    category: 'JS',
  },
  {
    question: 'GC의 순환참조 문제를 어떻게 해결할 수 있나요?',
    answer:
      '\n기존 GC는 참조를 기반으로 하는 `Reference-counting` 알고리즘을 사용했습니다. 해당 알고리즘은 더이상 사용되지 않는 값을 순환참조로 인해 메모리에서 해제시키지 못하는 문제가 있었고 누수를 일으키는 원인이 되었습니다. 이는 `Mark-and-sweep` 알고리즘으로 해결할 수 있게 되었습니다.\n\n`Mark-and-sweep` 알고리즘은 자바스크립트의 root라는 글로벌 object에서 시작해서 해당 값까지 도달이 가능한지의 여부인 `Reachability(도달가능성)`을 확인하고 도달이 불가능하면 메모리에서 해제하는 알고리즘입니다. 따라서 참조 관계를 따라 올라가서 root에 닿을 수 없는 순환참조 값들은 `도달할 수 없는 오브젝트`로 표시되고 제거됩니다.\n',
    category: 'JS',
  },
  {
    question: 'this란 무엇인가요?',
    answer:
      '\n임준홍\n\nthis는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수입니다. this를 통해서 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있습니다. this는 따로 선언하지 않아도 자바스크립트 엔진에 의해 암묵적으로 생성되어 코드 어디서든 참조할 수 있으며, 함수가 호출되는 방식에 따라서 this에 바인딩될 값이 동적으로 결정됩니다.\n일반적으로 this는 전역 객체를 가리키지만, 메서드로서 호출되면 메서드를 호출한 객체를 가리키고, new 연산자와 함께 호출하면 생성자 함수의 인스턴스를 가리킵니다. 이 외에도 Function.prototype.apply/call/bind 메서드에 의해 직접 this로 사용할 객체를 지정할 수도 있습니다.\n',
    category: 'JS',
  },
  {
    question: 'apply, call, bind의 차이는 무엇인가요?',
    answer:
      '\n임준홍\n\napply와 call은 함수를 호출할 때 인수를 전달하는 방식만 다르고 동일하게 동작합니다. apply는 호출할 함수의 인수를 배열 또는 유사 배열 객체로 묶어 전달하고, call은 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달한다는 차이점이 있습니다.\napply, call, bind는 모두 첫 번째 인수로 this로 사용할 객체를 전달합니다. 이 중 bind는 apply, call과는 달리 함수를 호출하지 않고 단지 this 바인딩만 변경합니다.\n',
    category: 'JS',
  },
  {
    question: 'bind를 apply, call로 어떻게 구현할 수 있을까요? 구현해보세요.',
    answer:
      '\n임준홍\n\n```jsx\nconst bindByApply = function (thisArg, ...args) {\nreturn (...argsArray) => this.apply(thisArg, [...args, ...argsArray]);\n};\n\nconst bindByCall = function (thisArg, ...args) {\nreturn (...argsArray) => this.call(thisArg, ...args, ...argsArray);\n};\n\nFunction.prototype.bindByApply = bindByApply;\nFunction.prototype.bindByCall = bindByCall;\n\nconst func = function (...argsArray) {\nargsArray.forEach(v => this.sum += v);\n};\n\nconst newThis = { sum: 0 };\nfunc.bindByApply(newThis, 1, 2)(3, 4, 5);\nconsole.log(newThis); // { sum: 15 };\n\nconst newThis2 = { sum: 0 };\nfunc.bindByCall(newThis2, 1, 2)(3, 4, 5);\nconsole.log(newThis2); // { sum: 15 };\n```\n\nbind는 함수를 호출하는 것이 아니라 this 바인딩이 변경된 원본 함수의 복제본을 반환하기 때문에, 바로 apply, call을 호출하지 않고 함수를 반환하여 그 함수 내부에서 apply, call을 적용한 값을 반환하도록 하였습니다.\n',
    category: 'JS',
  },
  {
    question: 'throttle과 debounce에 대해 설명해주세요.',
    answer:
      '- `throttle`은 마지막 함수가 호출된 이후 일정 시간이 지나기 전까진 다시 호출되지 않도록 하는 기법입니다. 예를 들어, scroll 이벤트는 사용자가 스크롤하는 짧은 시간에도 수십번 발생합니다. 이처럼 짧은 시간 간격으로 연속해서 발생하는 이벤트의 과도한 이벤트 핸들러의 호출을 방지하기 위해 throttle 함수를 사용해 호출 주기를 만든다.\n- `debounce`는 짧은 시간 간격으로 이벤트가 연속해서 발생하면 발생한 이벤트이벤트 핸들러를 호출(call)하지 않다가 일정 시간이 경과된 이후에 이벤트 핸들러가 한 번만 호출되도록 한다. 즉 디바운스는 짧은 시간 간격으로 발생하는 이벤트를 그룹화해서 마지막에 한 번만 이벤트 핸들러가 호출되도록 한다. 예를 들어, 텍스트 입력창에서 input 이벤트가 짧은 시간 간격으로 연속해서 발생하는 경우, debounce를 통해 API 등 요청의 빈도를 줄여 서버 부하를 줄일 수 있다. - 이춘구',
    category: 'JS',
  },
  {
    question: 'mutable과 immutable에 대해 설명해주세요.',
    answer: '\n이춘구\n',
    category: 'JS',
  },
  {
    question:
      '불변하게 만들 수 있는 방법은 어떤게 있나요? Object.freeze 말고는 없나요?',
    answer:
      '\nconst도 대표적으로 존재하지만, const 를 객체에 사용할 경우 객체 재할당은 불가능하지만 객체의 속성은 변경이 가능합니다.\n그 반대로 Object.freeze는 객체는 객체의 속성을 변경하는 시도는 불가능합니다. 하지만, 객체의 재할당은 가능한 점이 있습니다\n\n이로써 const 와 Object.freeze를 조합해서 이용하면 불변 객체를 생성할 수도 있습니다!\n',
    category: 'JS',
  },
  {
    question: 'CSS애니메이션과 JS 애니메이션의 차이는 무엇인가요?',
    answer:
      '\n애니메이션 효과를 부여할 때 CSS의 transition 및 animation 속성을 사용할 수 있고 JavaScript의 setInterval 및 requestAnimationFrame을 사용할 수 있습니다. 서로 각각의 장단점이 있는데,\n\n예로 호버 시 정사각형을 약간 오른쪽으로 움직이게 하는 경우 CSS에서는 transform을 이용해서 구현하지만 JS 에서는 setInterval을 통해서 left or right속성을 변화시켜줘야합니다. 해당 속성을 이용해서 구현을 하게된다면 브라우저에 렌더링 과정에서 reflow단계를 발생시켜서 부자연스런운 느낌을 받을 수 있어서 이런 점에서는 JS 애니메이션보다 CSS 구현이 좋다고 생각합니다.\n\nJS 애니메이션경우 요소위치를 재계산하기 때문에 비효율적이지만, 요소의 스타일이 변하는 순간마다 제어할 수 있기 때문에 세밀한 구현이 가능하다고 생각합니다.(정민)\n',
    category: 'JS',
  },
  {
    question: 'requestAnimationFrame이 무엇인가요?',
    answer:
      '\n바닐라 자바스크립트로 구현할 경우 ((위에서 살펴본 바))와 같이 계속해서 요소의 위치를 재계산하기 때문에 비효율적이며 사용자 눈에 가장 부드러운 60fps가 유지되지 않습니다. 이 때문에 RAF(RequestAnimationFrame) API가 등장했고 구현방식은 동일하지만 60fps를 보장할 수 있게 되었습니다.\n',
    category: 'JS',
  },
  {
    question:
      'setTimeout이란 어떤 차이가 있길래 raf는 16fps를 보장할 수 있나요?',
    answer:
      '\n**setTimeout**. 재귀적으로 호출함으로써 애니메이션을 구현할 수 있습니다. 하지만 reflow가 발생해 비효율 끝판왕입니다.\n\n그래서 raf를 효율적인데, 이 함수는 setInterval() 함수에서 언제 호출할지 설정하는 것과는 달리 브라우저에서 다음 repaint가 일어날 때 콜백이 호출되도록 설정합니다.\n\nsetInterval() 함수는 브라우저의 repaint가 일어나는 프레임과는 무관하게 불필요한 호출이나 지연되는 호출이 일어날 수 있지만, RequestAnimationFrame() 함수는 다음 프레임이 repaint될 때 호출하므로 애니메이션 등을 표현할 때 최적화하여 사용할 수 있습니다.\n\n브라우저에서 여러 탭을 띄워놓고 있을 때 현재 웹페이지가 비활성화되어있으면 setInterval 함수는 백그라운드에서 호출되는 순간마다 계속 실행되지만 RequestAnimationFrame 함수는 화면에 repaint가 일어날 때 호출되므로 백그라운드에서 호출되지 않고 대기한다는 것입니다\n',
    category: 'JS',
  },
  {
    question: 'nodejs와 그냥 js의 차이점은 무엇인가요?ㅇㄴㅁㅇ',
    answer:
      '\nJavaScript 는 프로그래밍 언어이고 nodejs 는 Javascript 프로그래밍 기반으로 컴퓨터내에서 구동시켜주는 일종의 프로그램이다. Javascript 는 브라우저에서만 사용가능한데, nodejs를 통해 특정한 브라우저 없이도 실행을 도와줍니다.\n',
    category: 'JS',
  },
  {
    question: '웹팩이 뭔가요? 왜 사용하나요?',
    answer:
      '\n웹팩이란 최신 프론트엔드 프레임워크에서 가장 많이 사용되는 ’모듈 번들러’입니다. 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미합니다.\n\n정훈\n',
    category: 'JS',
  },
  {
    question: '바벨이 뭔가요? 왜 사용하나요?',
    answer:
      '\n바벨은 크로스 브라우징 이슈를 해결하기 위해 생겨난 툴이다.\n\nES6+ 버전의 자바스크립트나 타입스크립트, JSX 등 다른 언어로 분류되는 언어들에 대해서도 모든 브라우저에서 동작할 수 있도록 호환성을 지켜준다. ****\n\n바벨은 이렇게 추상화 수준을 유지한 채로 코드를 변화시키는 트랜스파일러의 역할을 한다.\n\n바벨을 통해 ES6+의 자바스크립트 코드는 하위 버전으로 변환되고, 그로 인해 IE나 다른 브라우저에서 동작할 수 있게 만든다.\n\n정훈\n',
    category: 'JS',
  },
  {
    question: 'polyfill이란 무엇인가요?',
    answer: '\npolyfill은 polyester(폴리에스터)로 만든 fill(충전재)\n',
    category: 'JS',
  },
  {
    question: 'Promise나 async await를 es5로 트랜스파일하면 어떻게 되나요?',
    answer:
      '\nIE 때문에 ES5로 트랜스파일 해줘야하는 경우가 발생한다.\n\npromise 관련된 부분은 ES5때  없던 문법이라 ES5로 트랜스파일하더라도 그대로이다. 그 이유는 babel은 문법 변환만을 지원해주지 없는 것을 추가해주지는 않기 때문이다. 그래서 없던 것을 추가하기 위해서는 polyfill을 이용해서 해결할 수 있다.\n',
    category: 'JS',
  },
  {
    question: '타입스크립트의 장점은 무엇인가요?',
    answer:
      '\ntypescript는 동적타입언어인 javascript의 약점을 보완하기 위해 정적 타입 문법을 추가한 프로그래밍 언어입니다. 정작 타입을 지원하므로 컴파일 단계에서 타입을 체크하고 오류를 포착할 수 있다는 장점, 그리고 개발자의 의도를 명확하게 코드로 기술할 수 있다는 장점이 있습니다.\n(박서영)\n',
    category: 'JS',
  },
  {
    question: 'type과 interface의 차이는 무엇인가요?',
    answer:
      '\ntype과 interface는 객체의 타입 이름을 지정하는 방식입니다. 이 둘의 차이점은 type은 새로운 속성을 추가하기 위해 다시 같은 이름으로 선언할 수 없지만, interface는 같은 이름으로 선언하면 자동으로 확장되는, 선언 병합(선언적 확장, Declaration Merging)이 가능합니다. 다만 TypeScript팀에서 개방-폐쇄 원칙에 따라 javascript 객체의 동작 방식과 비슷하게 설계한 것이 interface이며, 가능한 type보다 interface의 사용을 권장하고 있습니다. (박서영)\n',
    category: 'JS',
  },
  {
    question: '어떨 때에 JS를 쓰고 어떨 때에 TS를 쓰는 것이 좋을까요?',
    answer: '\n이춘구\n',
    category: 'JS',
  },
  {
    question: 'enum은 무엇인가요? object와의 차이점은? 황나희',
    answer:
      '\n객체가 enum의 역할을 수행할 수 있지만, enum을 쓰는 것이 열거형 타입을 쓰는 것을 명확히 알 수 있습니다.\n\nobject는 코드 내에서 새로운 속성을 자유롭게 추가할 수 있지만, enum은 선언할 때 이후에 변경할 수 없습니다.\n\n또한, object의 속성값은 js가 허용하는 모든 타입이 올 수 있지만, enum은 속성값으로 문자열 혹은 숫자만 허용됩니다.',
    category: 'JS',
  },
  {
    question: '여러 프레임워크들이 있는데 왜 React를 쓰셨나요?',
    answer:
      '\n현실적으로 취준생으로서 커뮤니티의 활성화로 정보를 찾기가 수월해서 사용했습니다.\n',
    category: 'React',
  },
  {
    question: 'React의 라이프사이클에 대해 설명해주세요.',
    answer:
      '\n황나희\n\n리액트는 컴포넌트 기반의 View 중심으로 한 라이브러리이다. 그러다보니 각각의 컴포넌트에는 라이프사이클 즉, 컴포넌트의 생명주기가 존재한다. 컴포넌트의 수명은 보통 페이지에서 렌더링되기 전인 준비 과정에서 시작하여 페이지에서 사라질 때 끝이 난다.\n\n라이프사이클은 총 9개가 존재하며 이를 크게 3가지 유형으로 나눌 수 있는데, 생성/ 업데이트 / 제거 할 때이다. 이를 리액트에서는 마운트, 업데이트, 언마운트 라고 한다.\n\n마운트는 DOM이 생성되고 웹 브라우저 상에서 나타나는 것을 뜻하고, 반대로 언마운트는 DOM에서 제거되는 것을 뜻한다.\n',
    category: 'React',
  },
  {
    question: 'React의 장점은 무엇이있나요?',
    answer:
      '\n황나희\n\n웹 페이지를 만들기에는 html, css로도 충분하지만 html, css 만으로 동적인 데이터를 UI에 뿌려주기에는 적합하지 않다. 이 때 리액트를 이용한다면 사용자와 상호작용할 수 있는 UI를 손쉽게 만들 수 있기때문에 리액트를 사용한다.\n',
    category: 'React',
  },
  {
    question: 'virtual Dom에 대해 설명해주세요.',
    answer:
      '\n먼저, DOM(Document Object Model)이란 웹 페이지를 이루는 태그들을 자바스크립트(스크립팅 언어)가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체모델을 의미합니다. DOM에서는 오타 하나를 수정하기 위해 전체 사이트의 렌더트리를 재생성하고 레이아웃을 만들고 페인팅하는 과정이 반복되어, 브라우저에 과부하가 올 수 있습니다. 그러나 Virtual Dom은 DOM이 생성되기 전, 이전 상태 값과 수정사항을 비교하여 달라진 부분만 DOM에 전달하여 딱 한 번만 렌더링을 진행합니다. (박서영)\n',
    category: 'React',
  },
  {
    question: 'virtual dom은 트리가 바뀐지 어떻게 비교하나요?',
    answer: '\n이춘구\n',
    category: 'React',
  },
  {
    question: '함수 컴포넌트의 장점이 무엇인가요?',
    answer:
      '\n황나희\n\n- 클래스의 문법이 어렵다.\n- 축소가 어렵다.\n- reloading의 신뢰성이 떨어진다.\n- 최신 기술의 적용이 효과적이지 않다.\n\n→ 이러한 클래스의 단점들을 함수형 컴포넌트로 커버할 수 있다. 하지만 클래스 컴포넌트의 장점인 state 사용이나 life cycle을 직접 다루는 등의 기능을 사용하지 못한다.\n',
    category: 'React',
  },
  {
    question: 'hook이 뭔가요? 일반 함수랑 어떤차이가 있나요.',
    answer:
      '\n황나희\n\nHooks 는 리액트 v16.8 에 새로 도입된 기능이다.\n\n함수형태의 컴포넌트에서 state 사용과 life cycle을 직접 다루기 위해 Hook이 등장했다.\n\n이제 hook을 통해 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 그리고 렌더링 직후 작업을 설정하는 useEffect 등의 기능 등을 제공한다.\n',
    category: 'React',
  },
  {
    question: 'state를 왜 쓰나요? 그냥 변수를 쓰는 것과 어떤 차이가 있나요?',
    answer:
      '\n**SPA로 웹을 개발하고 싶으면 state를 사용해야 한다.**\n\n**그 이유는 리액트에서는 state 변경을 감지해서 state가 포함된 DOM을 리렌더링해주기 때문이다.**\n\n일반 변수는 값 변경이 발생해도 자동으로 리렌더링해주지 않는다.\n\n황나희\n',
    category: 'React',
  },
  {
    question: 'React의 key는 무엇인가요?',
    answer:
      '\nKey는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다. Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것입니다. 대부분의 경우 데이터의 ID를 key로 사용합니다. 렌더링 한 항목에 대한 안정적인 ID가 없다면 최후의 수단으로 항목의 인덱스를 key로 사용할 수 있습니다.\n\n[https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children](https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children)\n',
    category: 'React',
  },
  {
    question: 'useEffect에 대해 설명해주세요.',
    answer:
      '\nreact 컴포넌트가 화면에 렌더링 된 이후에 비동기로 처리되어야 하는 부수 효과를 side effect라고 부릅니다. useEffect란, react에서 제공하는 내장 API 함수로 side effect를 함수형 컴포넌트에서 사용할 수 있게 하는 react hook입니다. 컴포넌트가 각각 마운트, 업데이트, 언마운트될 때 특정 작업을 수행할 수 있으며 첫 번째 인자로는 callback 함수, 두 번째 인자로는 의존성 배열을 받습니다. (박서영)\n',
    category: 'React',
  },
  {
    question:
      'useEffect의 두번째 인자인 dependecny는 어떻게 바뀌었는지 비교 하나요?',
    answer:
      '\nuseEffect는 의존성 배열이 변경될 때마다 콜백함수가 실행되며, 의존성 배열을 넘겨주지 않으면 매번 렌더링이 일어날 때마다 콜백함수가 실행됩니다. 의존성배열에 Boolean, Number, String 등 원시값을 넣으면 값이 변경될 때마다 실행되고 객체를 넣으면 객체의 참조 값이 변경될 때마다 실행됩니다. 만약 Object의 값이 변경될 때마다 실행시키길 원한다면 useDeepCompareEffect 를 사용할 수 있습니다. (박서영)\n',
    category: 'React',
  },
  {
    question: 'useCallback, useMemo 차이는 무엇인가요?',
    answer:
      '\n임준홍\n\nuseMemo는 연산 속도가 느린 함수의 이전 결과값을 재사용하기 위해 사용하고, useCallback은 함수 자체를 재사용하기 위해 사용합니다.\n',
    category: 'React',
  },
  {
    question: 'React.memo란?',
    answer:
      '\n임준홍\n\nReact.memo는 넘겨받은 props의 변경 여부를 확인하여 변경 사항이 없을 때 가장 최근에 렌더링 된 결과를 재사용하는 고차 컴포넌트(Higer-Order Component)입니다. 이렇게 함으로써 불필요한 렌더링을 방지할 수 있습니다.\nReact.memo의 첫 번째 인자로 컴포넌트를 넘겨주고, 두 번째 인자로는 콜백함수를 넘겨주어 props 변경 여부를 비교하는 방식을 커스텀할 수 있습니다.\n',
    category: 'React',
  },
  {
    question: '리액트의 에러바운더리에 대해 아시나요?',
    answer:
      '\nUI의 일부분에 존재하는 자바스크립트 에러가 전체 애플리케이션을 중단시켜서는 안 됩니다. React 사용자들이 겪는 이 문제를 해결하기 위해 React 16에서는 에러 경계(“error boundary”)라는 새로운 개념이 도입되었습니다.\n\n에러 경계는 하위 컴포넌트 트리의 어디에서든 자바스크립트 에러를 기록하며 깨진 컴포넌트 트리 대신 폴백 UI를 보여주는 React 컴포넌트입니다. 에러 경계는 렌더링 도중 생명주기 메서드 및 그 아래에 있는 전체 트리에서 에러를 잡아냅니다.\n\n정훈\n',
    category: 'React',
  },
  {
    question:
      '함수형 컴포넌트라고 안 부르고 함수컴포넌트라고 부르는데 그 이유가 무엇인가요?',
    answer:
      '\n함수형 컴포넌트를 사용하면 함수형 프로그래밍 방법으로 개발을 하는건가? 라는 혼란을 야기할 수 있을 것 같아서 React 팀에서 명칭을 변경했다. 함수형 프로그래밍의 조건 중 하나인 순수함수를 따지고 React를 보았을 때 우리가 구현하는 컴포넌트나 대표적으로 hook 중 useEffect 는 순수함수라 보기 힘들다.\n',
    category: 'React',
  },
  {
    question: 'SSR과 CSR의 차이는 무엇인가요? 어느 것이 더 속도가 빠른가요?',
    answer:
      '\nSSR은 (새로운 페이지에 대한 요청이 있을 때마다) 서버에서 리소스를 렌더링하여 클라이언트에 반환하는 방식이고, CSR은 리소스를 모두 받아온 뒤 클라이언트에서 렌더링하는 방식입니다. SSR과 CSR의 차이점은 크게 렌더링 속도, SEO, 보안 등 3가지가 있습니다.\n\n첫 번째 렌더링 속도는 CSR은 html, CSS 등 모든 스크립트를 한 번에 불러와야 하기 때문에 초기로딩 속도는 느리지만, 초기로딩 이후에 서버에 요청할 필요 없이 클라이언트 내에서 작업이 이루어지므로 빠른 작업 속도를 유지합니다. 그러나 SSR의 경우 초기에 필요한 부분의 스크립트만 불러오기 때문에 초기로딩 속도는 CSR보다 빠르지만, view 변경 시 서버에 계속 요청을 해야 하기 때문에 서버 부하가 크다는 단점이 있습니다.\n\n두 번째, SEO 이슈가 있는데, CSR 방식으로 이루어진 사이트에서는 view를 생성하기 위해 자바스크립트를 실행시켜야 합니다. 그러나 구글을 제외한 대부분의 웹 크롤러들이 자바스크립트 파일을 해석할 수 없어서 CSR 페이지를 빈 페이지로 받아들입니다. 결국 서버사이드에서 컴파일되어 클라이언트로 넘겨주는 SSR이 SEO 최적화에 용이하다고 볼 수 있습니다.\n\n세 번째, 보안 측면에서, SSR은 사용자 정보를 서버 측에서 session으로 관리하여 보안이 우수하지만, CSR은 cookie로 관리하는 차이가 있습니다. (박서영)\n',
    category: 'React',
  },
  {
    question:
      'Next.js 처럼 서버에서 렌더링을 할 경우 부하가 많아지면 어떻게 해결 할 수 있을까요?',
    answer:
      '\n평소에 서버사이드렌더링을 하다가 서버 부하가 일정 수준을 넘어가면 클라이언트 렌더링을 진행합니다. 예를 들어 데이터 의존성이 낮은 페이지라면, 데이터가 필요한 영역만 클라이언트 사이트 렌더링을 하고 나머지 부분은 서버사이드 렌더링하도록 설계하여 빌드 시 미리 렌더링을 해놓을 수 있습니다. 데이터에 많이 의존적이지만 데이터가 자주 변하지 않는 페이지라면, 서버사이드 렌더링 결과를 캐싱해 서버 부하를 크게 줄일 수 있습니다. (박서영)\n',
    category: 'React',
  },
  {
    question: '상태관리 쓰는이유',
    answer:
      '\nComponent 간의 정보 공유를 할 때, 자식 컴포넌트들 간의 다이렉트 데이터 전달은 불가능 하다.\n\n자식 컴포넌트들 간의 데이터를 주고 받을 때는 `상태를 관리하는 부모 컴포넌트`를 통해서 주고 받는다.그런데 `자식이 많아진다면 상태 관리가 매우 복잡`해진다.\n\n상태를 관리하는 상위 컴포넌트에서 계속 내려 받아야한다. => `Props drilling 이슈`\n\n`전역 상태 저장소(Store)가 있고, 어디서든 해당 저장소에 접근할 수 있다면 해결된다.`\n\n나희',
    category: 'React',
  },
  {
    question: 'URL을 입력했을 때 어떤식으로 동작하게 되나요?',
    answer:
      '\n### 1. 브라우저의 URL 파싱\n\nURL을 입력받은 브라우저는 URL의 구조를 해석합니다. 어떤 프로토콜로 어느 도메인으로 어떤 포트로 보낼지 해석하게 되는 것이죠. 기본적으로 URL의 구조는 아래와 같습니다.\n\n> https://www.google.com:443\n>\n- 어떤 프로토콜을 통해 해당 URL에 요청할 것인지\n- 어떤 URL로 요청할 것인지\n- 어떤 포트로 요청할 것인지\n\n브라우저에서 각각 프로토콜, URL, 포트를 해석하여 분석합니다.\n\n### 2. HSTS 목록 조회\n\nHSTS(HTTP Strict transport security), HTTP를 허용하지 않고 HTTPS를 사용하는 연결만 허용하는 기능입니다. 만약 HTTP로 요청이 왔다면 HTTP 응답 헤더에 "Strict Transport Security"라는 필드를 포함하여 응답하고 이를 확인한 브라우저는 해당 서버에 요청할 때 HTTPS만을 통해 통신하게 됩니다. 그리고 자신의 HSTS캐시에 해당 URL을 저장하는데 이를 HSTS 목록이라고 부릅니다. 이를 통해 브라우저에서는 이 HSTS 목록 조회를 통해 해당 요청을 HTTPS로 보낼지 판단합니다. HSTS목록에 해당 URL이 존재한다면 명시적으로 HTTP를 통해 요청한다 해도 브라우저가 이를 HTTPS로 요청합니다.\n\n### 3. URL을 IP주소로 변환\n\nwww.google.com 이라는 주소로는 컴퓨터끼리 통신할 수 없습니다. 이를 인터넷 상에서 컴퓨터가 읽을 수 있는 IP주소로 변환해야 서로 통신이 가능하게 됩니다. 우선 브라우저에서는 자신의 로컬 hosts 파일과 브라우저 캐시에 해당 URL이 존재하는지 확인합니다. 존재하지 않는다면 도메인 주소를 IP주소로 변환해주는 DNS(Domain Name System) 서버에 요청하여 해당 URL을 IP주소로 변환합니다.\n\n**DNS 서버로 요청하는 과정**\n\n1. 미리 설정 된 Local DNS에 해당 URL 주소의 IP주소를 요청합니다.\n\n2. Local DNS에 해당 IP주소가 존재한다면 이를 응답하고, 없다면 다른 DNS 서버와 통신합니다. root DNS 서버에 해당 URL의 IP주소를 요청합니다.\n\n3. root DNS서버에 해당 IP주소가 없다면 하위 DNS 서버에 요청하라고 응답합니다. 이 응답을 받은 Local DNS는. net 도메인을 관리하는 DNS 서버에  같은 내용을 요청합니다.\n\n4. .net DNS 서버에 해당 IP주소가 없다면 하위 DNS 서버에 요청하라고 응답합니다. 이 응답을 받은 Local DNS는 daum.net 도메인을 관리하는 DNS 서버에 같은 내용을 요청합니다.\n\n5. daum.net DNS 서버에서 IP주소를 응답받은 Local DNS는 해당 IP주소를 캐싱하고 응답합니다.\n\n### 4. 라우터를 통해 해당 서버의 게이트웨이까지 이동\n\nDNS서버에게 IP주소를 받았으니 이제 해당 서버로 요청을 보냅니다. 제가 요청을 보낼 IP주소를 임시로 ***10.20.30.6*** 이라고 가정하겠습니다. 이 IP주소로 가야 하는 것은 알지만 어떻게 가야 할지 경로는 알 수 없습니다. 이 요청이 네트워크를 타고 어떻게 이동할지는 네트워크 장비인 라우터의 라우팅을 통해 이루어집니다. 라우터에서는 라우팅 테이블을 통해 해당 요청이 어떤 경로를 통해 가야할지 경로를 지정해줍니다. 이를 통해 요청은 ***10.20.30.6*** 를 찾아갑니다.\n\n### 5. ARP를 통해 IP주소를 MAC주소로 변환\n\n실질적인 통신을 하기 위해서는 논리 주소인 IP주소를 물리 주소인 MAC 주소로 변환해야 합니다. 이를 위해 해당 네트워크 내에서 ARP를 브로드 캐스팅합니다. 해당 IP주소를 가지고 있는 노드는 자신의 MAC 주소를 응답합니다.\n\n### 6. 대상 서버와 TCP 소켓 연결\n\n이제 대상 서버와 통신하기 위해 TCP 소켓 연결을 진행합니다. 소켓 연결은 3-way-handshake라는 과정을 통해 이루어집니다. 이 과정은 마치 전화를 거는 것과 유사합니다. 서버에게 전화를 걸고, 서버는 해당 전화를 확인하고 전화를 받습니다. 그리고 전화를 건 사람은 말합니다. "여보세요"라고 하는 것처럼요.\n\n하지만 지금 하는 요청은 HTTPS 요청입니다. 그렇기 때문에 서로 암호화 통신을 위한 TLS 핸드쉐이킹이 추가됩니다. 이를 통해 서버와 클라이언트는 암호화 통신을 진행할 수 있습니다.\n\n### 7. HTTP(HTTPS) 프로토콜로 요청, 응답\n\n이제 연결이 확정되었으니 드디어 해당 페이지 google.com를 달라고 서버에게 요청합니다. 서버에서 해당 요청을 받고, 이 요청을 수락할 수 있는지 검사합니다. 그리고 서버는 이 요청에 대한 응답을 생성하여 브라우저에게 전달합니다.\n\n### 8. 브라우저에서 응답을 해석\n\n서버에서 응답한 내용은 HTML, CSS, Javascript 등으로 이루어져 있습니다. 브라우저는 각 파일들을 파싱해서 사용자에게 페이지를 보여주게 됩니다.\n',
    category: 'Web',
  },
  {
    question: 'index.html을 읽어서 그려지는 과정을 설명해주세요.',
    answer:
      '1. 서버에서 응답으로 받은 HTML 데이터를 파싱한다.\n2. HTML을 파싱한 결과로 DOM Tree를 만든다.\n3. 파싱하는 중 CSS 파일 링크를 만나면 CSS 파일을 요청해서 받아온다.\n4. CSS 파일을 읽어서 CSSOM(CSS Object Model)을 만든다.\n5. DOM Tree와 CSSOM이 모두 만들어지면 이 둘을 사용해 Render Tree를 만든다.\n6. Render Tree에 있는 각각의 노드들이 화면의 어디에 어떻게 위치할 지를 계산하는 Layout과정을 거쳐서,\n7. 화면에 실제 픽셀을 Paint한다.\n\n정훈\n',
    category: 'Web',
  },
  {
    question: '해당 과정에서 병목현상이 일어나는 구간이 어디인가요?',
    answer: '\n정훈\n',
    category: 'Web',
  },
  {
    question: 'Reflow, Repaint에 대해 설명해주세요.',
    answer:
      '\n임준홍\n\nReflow는 노드 추가/삭제, 요소의 크기/위치 변경, 윈도우 리사이징 등으로 레이아웃에 영향을 주는 변경이 발생한 경우 렌더 트리를 재구성하는 것입니다.\nReflow 과정을 거쳐 재구성된 렌더 트리를 Repaint를 통해 화면에 다시 그립니다. 만약 opacity, background-color 등과 같이 레이아웃에 영향을 주지 않는 화면 변화의 경우 Reflow 없이 Repaint만 일어납니다.\nReflow와 Repaint는 성능에 악영향을 주므로, 최적화를 통해 발생 빈도를 줄여야 합니다. 그 예시로 인라인 스타일 사용을 자제하기, 클래스를 통한 스타일 변경 시 최대한 말단 노드에 클래스 추가하기, 애니메이션이 있는 노드는 가급적 position: fixed 또는 absolute를 사용하여 전체 노드에서 분리시키기 등의 최적화 방법이 있습니다.\n',
    category: 'Web',
  },
  {
    question: '최적화를 하는 방법에 어떤 것들이 있을까요?-황나희',
    answer:
      '\n프론트엔드 개발자가 할 수 있는 최적화 방법은 다음과 같다.\n\n[제목 없음](Web%20dfc1b/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%20add02.csv)\n',
    category: 'Web',
  },
  {
    question: '이미지 스프라이트란 무엇인가요?',
    answer:
      '\n`이미지 스프라이트(image sprite)`란 여러 개의 이미지를 하나의 이미지로 합쳐서 관리하는 이미지를 의미합니다. 웹 페이지에 이미지가 사용될 경우 해당 이미지를 다운받기 위해 웹 브라우저는 서버에 이미지를 요청하게 됩니다. 하지만 사용된 이미지가 많을 경우 웹 브라우저는 서버에 해당 이미지의 수만큼 요청해야만 하므로 웹 페이지의 로딩 시간이 오래 걸리게 됩니다.\n\n`이미지 스프라이트(image sprite)`를 사용하면 이미지를 다운받기 위한 서버 요청을 단 몇 번으로 줄일 수 있습니다. 모바일 환경과 같이 한정된 자원을 사용하는 플랫폼(platform)에서는 웹 페이지의 로딩 시간을 단축해주는 효과가 있습니다. 또한, 많은 이미지 파일을 관리하는 대신 몇 개의 스프라이트 이미지(sprite image) 파일만을 관리하면 되므로 매우 간편합니다.\n',
    category: 'Web',
  },
  {
    question: '크로스 브라우징이 무엇인가요?',
    answer:
      '\n최대한 많은 종류의 웹 브라우저에서 정상적으로 작동하는 웹페이지를 만드는 방법론 중 하나입니다.\n\n자세히 표현하면 표준 웹기술을 채용하여 다른 기종 혹은 플랫폼에 따라 구현되는 기술을 비슷하게 만듦과 동시에 어느 한쪽에 최적화되어 치우지지 않도록 웹 페이지를 제작하는 기법이다. 또한, 지원할 수 없는 다른 웹 브라우저를 위한 장치를 구현하여 모든 웹 브라우저 사용자가 방문했을 때 정보로서의 소외감을 느끼지 않도록 하는 방법론적 가이드를 의미한다.\n\n정훈\n',
    category: 'Web',
  },
  {
    question: 'http란 무엇인가요?',
    answer:
      '\n황나희\n\nHyper Text Transfer Protocol의 두문자어로, **인터넷에서 데이터를 주고받을 수 있는 프로토콜**\n입니다. 프로토콜은 규칙이라고 생각하시면 됩니다. 이렇게 규칙을 정해두었기 때문에, 모든 프로그램이 이 규칙에 맞춰 개발해서 서로 정보를 교환할 수 있게 된 것이죠. 데이터를 주고 받을 때 흔히 발생하는 **[CORS, CORB](https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a)** 같은 에러들은 HTTP만 잘 알아도 쉽게 해결할 수 있습니다.\n',
    category: 'Web',
  },
  {
    question: 'http method에 대해 설명해주세요.',
    answer:
      '\n먼저,HTTP method란 클라이언트가 웹 서버에게 사용자 요청의 목적이나 종류를 알리는 수단입니다.\n서버에 특정한 소스를 가져오도록 요청하는 GET, 서버에 데이터를 전송하는 POST, 새로운 리소스를 생성하거나 대상 리소스를 대체하는 PUT, 지정하는 리소스를 삭제하는 DELETE, GET메서드를 요청했을 때 돌아올 헤더를 요청하는 HEAD 등이 있습니다. (박서영)\n',
    category: 'Web',
  },
  {
    question: 'REST API란 무엇인가요?',
    answer:
      '\nREST란 HTTP URL을 통해 자원을 명시하고 HTTP Method를 통해 자원을 처리하도록 설계된 아키텍쳐이며 REST API란 REST를 기반으로 구현된 서비스 API입니다.  (박서영)\n',
    category: 'Web',
  },
  {
    question: 'http 1.1 과 http 2.0의 차이는 무엇인가요?-황나희',
    answer:
      '\n가장 큰 차이는 속도이다. 2.0은 헤더를 압축해서 보내기도 하고, 한번의 연결로 동시에 에러메시지를 주고 받을 수도 있다. HTTP2.0은 HTTP1.1을 완전하게 재작성한 것이 아니라 프로토콜의 성능에 초첨을 맞춰 수정한 버전이라고 생각하면 된다. 특히 End-user가 느끼는 Latency나 네트워크, 서버 리소스 사용량 등과 같은 성능 위주로 개선되었다.\n',
    category: 'Web',
  },
  {
    question: '로컬스토리지, 쿠키, 세션스토리지 차이는?',
    answer:
      '\n**로컬 스토리지 (Local Storage)**\n\n- 브라우저를 종료해도 유지되는 데이터로, 명시적으로 지우지 않는 한 영구적으로 저장된다.\n- 도메인별로 생성되며, 다른 도메인의 로컬 스토리지에는 접근이 불가능하다.\n- 서로 다른 브라우저 탭이라도 동일한 도메인이라면 동일한 로컬 스토리지를 사용한다.\n- 지속적으로 필요한 정보를 저장하기에 좋다.\n\n**쿠키**\n\n- 쿠키는 클라이언트(브라우저) 로컬에 저장되는 키와 값이 들어있는 작은 데이터 파일.\n- 사용자 인증이 유효한 시간을 명시할 수 있으며, 유효 시간이 정해지면 브라우저가 종료되어도 인증이 유지됨.\n- 쿠키는 클라이언트의 상태 정보를 로컬에 저장했다가 참조합니다.\n- 클라이언트에 300개까지 쿠키저장 가능, 하나의 도메인당 20개의 값만 가질 수 있음, 하나의 쿠키값은 4KB까지 저장합니다.\n- 쿠키는 사용자가 따로 요청하지 않아도 브라우저가 HTTP Request시에 Request Header를 넣어서 자동으로 서버에 전송\n\n**세션 ( Session )**\n\n- 세션은 쿠키를 기반하고 있지만, 사용자 정보 파일을 브라우저에 저장하는 쿠키와 달리 세션은 서버 측에서 관리\n- 서버에서는 클라이언트를 구분하기 위해 세션 ID를 부여하며 웹 브라우저가 서버에 접속해서 브라우저를 종료할 때까지 인증상태를 유지\n- 물론 접속 시간에 제한을 두어 일정 시간 응답이 없다면 정보가 유지되지 않게 설정이 가능\n- 사용자에 대한 정보를 서버에 두기 때문에 쿠키보다 보안에 좋지만, 사용자가 많아질수록 서버 메모리를 많이 차지하게 됨.\n- 클라이언트가 Request를 보내면, 해당 서버의 엔진이 클라이언트에게 유일한 ID를 부여하는 데 이것이 세션ID\n\n정훈\n',
    category: 'Web',
  },
  {
    question: '쿠키, 세션, JWT, OAUTH에 대한 내용-황나희',
    answer:
      '\n\n인증방식의 종류\n\n1. 쿠키쿠키는 클라이언트에 저장되는 `key`와 `value`로 이루어진 데이터이다.인증 유효 시간을 설정할 수 있고 유효 시간이 정해진다면 클라이언트가 종료되어도 `쿠키`가 유지된다.서버와 요청 응답으로 인해 `쿠키`가 저장되면 다음 요청은 `쿠키`에 담긴 정보를 이용해 참조한다.\n- 쿠키 동작 방식\n1. 클라이언트가 로그인 요청\n2. 서버에서 쿠키 생성 후 클라이언트로 전달\n3. 클라이언트가 서버로 요청을 보낼 때 쿠키를 전송\n4. 쿠키를 이용해 유저 인증을 진행\n\n그러나 문제점으로 사용자 인증에 대한 정보를 모두 클라이언트가 가지고 있게되므로http 요청을 탈취당할 경우 `쿠키` 자체를 탈취당해 사용자 정보를 모두 빼앗길 수 있다.그래서 `쿠키` 자체는 보안과는 큰 상관이 없는 장바구니 혹은 자동로그인 설정 등에 이용할 수 있다고 한다.\n\n1. 세션`세션`은 `쿠키`를 기반으로 하지만 클라이언트에 저장하는 `쿠키`와는 다르게 서버에 저장하여 관리한다.서버에서는 클라이언트를 구별하기 위해 각각의 `세션ID`를 클라이언트마다 부여하게되며 클라이언트가 종료되기 전까지 유지한다.클라이언트에 저장하는 `쿠키`보다는 보안이 좋다.\n- 세션 동작 방식1. 클라이언트가 로그인 요청세션 또한 문제점이 있는데 세션 하이재킹 공격이 가능하니 세션의 유효시간을 만들어 예방할 수 있다.그리고 세션 저장소를 서버에서 관리하기 때문에 사용자가 많아지면 많아질수록 서버에 걸리는 부하가 증가한다.동시 접속자가 많아지면 해결할 방법을 찾아야 될것이다.\n1. 서버에서는 클라이언트에게 고유한 세션ID를 부여하고 세션 저장소에 저장한 후클라이언트에게 발급한다.\n2. 클라리언트는 서버에서 발급받은 세션ID를 쿠키에 저장하게 되고 요청을 보낼 때 마다 쿠키를 보낸다.\n3. 서버는 쿠키에 담겨있는 세션ID와 세션 저장소에 있는 정보와 대조한 후 데이터를 가져온다.\n1. 토큰(JWT)`JWT`는 `Json Web Token`의 약자이고 인증에 필요한 정보들을 암호화시킨 토큰을 말한다.`세션` 방식처럼 `토큰` 자체를 `쿠키`에 담아서 보내줄 수도 있고 HTTP 헤더에 담아서 보내줄 수도 있다.\n\n토큰은 3가지 요소로 구성되어 있다.\n\n- Header: 3가지 요소를 암호화할 알고리즘 등과 같은 옵션이 들어간다.\n- Payload: 유저의 고유 ID 등 인증에 필요한 정보가 들어간다.\n- Verify Signature: Header, Payload와 Secret Key가 더해져 암호화된다.\n- Header.PayLoad.VerifySignature로 만들어진다.Header와 Payload는 누구나 디코딩하여 내용을 확인할 수 있기때문에 유저의 비밀번호 같은 정보는 넣지 않도록 한다.하지만 Secret Key를 알지 못하면 VerifySignature는 복호화할 수 없다.\n\n그렇기 때문에 토큰을 변조하더라도 VerifySignature가 Payload를 기반으로 암호화 되었기 때문에 유효하지 않은 토큰으로검증이 가능하다.\n\n- 토큰 동작 방식\n1. 클라이언트가 로그인 요청\n2. 서버에서 유저의 고유한 ID와 다른 인증 정보들과 함께 Payload에 담는다.\n3. JWT의 유효기간 설정 및 옵션을 설정해준다.\n4. Secret Key를 이용해 토큰을 발급한다.\n5. 발급된 토큰은 클라이언트에 쿠키 혹은 로컬스토리지 등에 저장하여 요청을 보낼 때마다 같이 보낸다.\n6. 서버는 토큰을 Secret Key로 복호화하여 검증하는 과정을 거친다.\n7. 검증이 완료되면 대응하는 데이터를 보내준다.\n\n토큰은 일단 세션보다 훨씬 간편한다.세션처럼 별도의 저장소 관리가 필요하지 않고 토큰을 발급 후 클라이언트에게 전송 후 검증하는 과정만 있으면 된다.그러나 발급된 JWT는 삭제가 불가능하다.세션 같은 경우에는 악의정으로 사용된다면 해당 세션을 삭제하면 된다.토큰은 탈취당하게 되면 유효 시간이 종료되기 전까지는 탈취자가 얼마든지 악의적으로 사용이 가능하다.그래서 Refresh Token이라는 것을 이용해 피해를 조금이라도 줄일 수 있다.\n',
    category: 'Web',
  },
  {
    question:
      '메신저 앱에서 메시지를 보낸 다음 서버에서 어떤 방식으로 모든 방 사람들에게 뿌려줄 수 있는걸까요?',
    answer: '\n정민\n',
    category: 'Web',
  },
  {
    question: 'XSS, CSRF는 무엇인가요?',
    answer:
      '- `XSS (Cross Site Scripting)` - 크로스 사이트 스크립팅은 웹사이트에 악성 스크립트를 주입하는 행위를 말합니다. 해커는 사람들이 친밀하고 안전하다고 생각하는 웹사이트에 악성 스크립트를 주입하고, 악성 스크립트가 포함된 게시글을 열람한 피해자들의 쿠키는 해커에게 전송됩니다. 이를 통해 해커는 피해자의 브라우저에서 스트립트를 실행해 사용자의 세션을 가로채거나, 웹사이트 변조하거나, 악의적인 컨텐츠 삽입하거나, 피싱 공격 등을 시도할 수 있게 됩니다.\n- `CSRF (Cross Site Request Forgery)` - 사이트 간 요청 위조는 웹 어플리케이션 취약점 중 하나로 인터넷 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 만드는 공격입니다.',
    category: 'Web',
  },
  {
    question: '하드웨어 가속이란?',
    answer:
      '\n하드웨어 가속은 그래픽 처리 장치(GPU)를 이용하여 중앙 처리 장치(CPU)의 처리량을 줄이고, 브라우저의 렌더링을 효율화하는 것을 말합니다. CSS 작업에 하드웨어 가속을 활성화하면, 작업 처리가 빨라져서 웹페이지의 렌더링을 보다 빠르게 할 수 있습니다.\n\n[https://d2.naver.com/helloworld/2061385](https://d2.naver.com/helloworld/2061385)\n자기소개\n롤 모델이 있나요? (개발자든 비개발자든 상관없습니다.)\n우리 팀에 들어와서 몇 년뒤 당신의 축하파티가 열렸다면 어떤 일일 것 같나요?\n우리 팀에 들어와서 어떤 일을 하고 싶나요?\n최근에 가장 관심 있는 기술은 무엇인가요?\n팀원 간의 갈등이 있을 때 어떻게 해결할 것인가요?\n다른 팀원의 잘못된 코드를 봤을 때 어떻게 할 것인가요?\n팀원이 계속해서 자기게 맞다고 우기면 어떻게 할 것인가요?\n취미는 무엇인가요?(개발 빼고)\n어떤 분야(핀테크, 소셜, 게임, 커머스 등)에 많이 지원하셨나요?\n다른 회사에도 지원을 하셨나요?\n자신의 장단점에 대해 말해주세요.\n살면서 가장 힘들었던 일이 무엇인가요?\n자신은 누군가에게 도움을 주는 사람이었나요? 어떤 도움을 주었나요?\n반대로 누군가 자신에게 가장 도움이 됐던 일은 무엇인가요?\n커리어의 목표가 무엇인가요?\n왜 프론트엔드 개발자가 되고 싶으신가요?\n프론트엔드 개발자에게 가장 중요한 것은 무엇이라고 생각하시나요?\n빠른 코드와 가독성 높은 코드 중에서 어떤 것을 택하실 건가요?\n어떤 개발자가 좋은 개발자일까요?\n리더형인가요? 팔로우형인가요?\n가장 재밌었던 전공 과목은 무엇인가요?\n페어프로그래밍, 코드리뷰에 대한 생각\n백엔드도 해보셨나요?\n도커, 쿠버네티스 사용해보셨나요?\n함수형 프로그래밍이란 무엇인가요?\n테스트에 대해 어떻게 생각하나요? 꼭 해야 하나요?\n왜 당신을 뽑아야하나요?\n열심히 일하는 편인가요? 영리하게 일하는 편인가요?\n영어 강의를 본적이 있나요? 최근에 본 영어 강의는?\n자바스크립트 어떻게 공부했나요?\n개발이 재밌어서 하는 건가요?\n배포는 해보았나요? 어떤식으로 해봤나요?\n자신이 어느정도의 실력이라고 생각하시나요?\n개발말고 다른 것에 열정적으로 해본 것이 있나요?\n개발자가 사용자의 ux를 향상 시키기 위한 방법은 어떤 것이 있나요?\n왜 해당 기술을 썼나요?\n로그인 처리는 어떻게 하셨나요?\n팀원간의 불화는 없었나요? 갈등은 어떻게 해결했나요?\n어떤 역할을 하셨나요?\n가장 어려웠던 부분은 어디인가요?\n어떤 기술적인 고민을 하셨나요?\n최적화에 대해 신경써보셨나요?\n자신의 기여도가 얼마정도 된다고 생각하는지?\n팀원에게 받은 긍정적/부정적 피드백은?',
    category: 'Web',
  },
];

export const QUESTION_MAP = (() => {
  const map = new Map();
  CATEGORIES.forEach((category) => map.set(category, []));
  QUESTIONS.forEach((question) => map.get(question.category).push(question));
  return map;
})();
