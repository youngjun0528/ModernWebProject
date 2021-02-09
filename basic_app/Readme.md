1. <!DOCTYPE html>
   1. DTD(Document Type Definition)
   2. HTML이 지켜야할 표준 명시

2. CSS 초기화
   1. 각 브라우저가 가지고 있는 기본 속성을 초기화 하여
   2. 브라우져별로 달라지는 CSS 값을 재설정한다.
   3. 에릭마이어 CSS 초기화

3. Box-model
   1. margin 
      1. 바깥쪽 여백
   2. padding
      1. 안쪽 여백
   3. border
      1. 테두리 속성
   4. block
      1. 줄바꿈되는 요소
      2. 부모 요소의 width를 상속받는다.
   5. inline
      1. 태그 안의 콘텐츠 만큼 width를 차자히고 줄바꿈되지 않고 오른쪽에 붇는다.
      2. 사용자가 width와 hwight를 지정해도 반영되지 앟는다.

4. 시맨틱 레이아웃 태그들
   1. header 태그
      1. 웹페이지를 나타내는 로고 또는 소개글
   2. nav 태그
      1. navigation
      2. 웹페이지에서 다른 페이지로 이동하는 메뉴 바
   3. section / article
      1. 웹페이지 내용
   4. footer
      1. 웹페이지와 관련된 정보
5. 검색엔진 최적화(SEO)
   1. title tag
   2. description tag
   3. h tag
   4. acshor text tag
   5. alt tag


6. opacity 나 z-index는 숫자의 단위를 적지 않는다.
7. margin/padding/right/left/bottom의 경우 속성값이 0일때 단위를 반드시 적을 필요는 없다.

8. text 중앙정렬은 test-align
9.  레이아웃 태그정렬은 margin
   1. margin : top -> right -> bottom -> left 순

10. data-rol 속성은 화면에는 안보이게 글이나 추자정보를 태그에 담아 놓는다.

11. translate3d 는 X축이동, Y축 이동, Z축이동 순
12. transtion 은 속성이 변경되는 시간
13. transtion-delay 는 속성이 변경되기 전에 기다리는 시간

14. float 속성 
    1.  문서의 오른쪽이나ㅏ 왼쪽으로 요소를 배치한다.
    2.  부모 요소의 float를 해제해야 다음 요소의 영향이 가지 않는다.
    3.  해제할때에는 overflow나 clear 속성을 사용하거나, 가상요소를 사용하여 해제하기도 한다.
    4.  사용시 width 와 함께 사용하는 것이 좋다.
    5.  만약 width 가 없다면 부모 영역을 넘어서게 된다.
    6.  


15. CSS 우선순위
   2. 속성값 뒤에 !important를 붙인 속성
   3. HTML에 직접 style 을 지정한 속성
   4. #id로 지정한 속성
   5. class, 추상클래스로 지정한 속성
   6. 태그 이름으로 지정한 속성
   7. 상위 객체에 의해 상속된 속성
16. 자바스크리비트 브라우저 랜더링에 대해서
17. 가상클래스란?
    1.  가상클래스
        1.  태그의 특별한상태를 지정하는 선택자
            1.  hover - 특정태그 마우스 오버
            2.  nth-child(n) - 형제 요소중 n번째 요소
            3.  nth-of-type(n) - 특정 요소를 기준으로 현제요소의 n번째 요소
            4.  first-child - 첫번째 자식 요소
            5.  last-child - 마지막 자식 요소
            6.  nth-last-child() - 형제요소 중 마지막 요소
            7.  nth-last-of-type() - 특정 요소를 기준으로 현제요소의 n번째 요소
            8.  not(E) - 해당 요소중 제외하고 나머지
    2.  가상요소
       1. 가상요소는 화면을 꾸미기 위햇 의미없는 태그를 추가해야할때 태그 대신 사용
       2. CSS3 에서는 더블콜론(::) 으로 표시 가능
       3. after / before
          1. :before – 실제 내용 바로 앞에서 생성되는 자식요소
          2. :after – 실제 내용 바로 뒤에서 생성되는 자식요소​
          3. 목록형 꾸밈 요소(불릿 화살표)
          4. 버튼 꾸밈 요소(그림자 효과, 버튼에 들어가는 아이콘 등)
          5. 간닪나 아이콘
          6. 이미지 아이톤
          7. 가상요소는 content:"" 반드시 필요하며, 아이콘을 표현할 때에는 꼭 너비와 높이를 지정해야 한다.
          8. 폼태그(input, form, img 태그 등) 은 가상요소가 적용되지 않는다.
       4.  nth-last-child 마지막 태그부터 순서를 찾는 가상 클래스 선택자

18. a 태그에서 현재창에서 바로 이동할 때에는 target 속성을 self
    1.  default 값은 같은 사이트 내에서는 self, 다른 사이트 이동시 blank
19. 보통 링크 이동이나 팝업창은 a 태그 / form 이 데이터를 가지고 전송될때네는 button 태그나 input 태그

https://developer.mozilla.org/ko/docs/Web/CSS/Child_combinator

20. <fieldset> 태그는 폼 요소들을 그룹화 하는데 사용하고, 해당 그룹의 이름은 legend 태그를 사용