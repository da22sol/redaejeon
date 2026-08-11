# 대전광역시 사회서비스원

> 대전광역시 사회서비스원 기존 웹사이트를 기반으로  
> 사용자 접근성을 고려하여 UI를 리디자인하고 반응형 웹으로 퍼블리싱한 프로젝트입니다.
## 🔗 프로젝트 링크

- 🌐 [클론 사이트](https://da22sol.github.io/redaejeon/)
- 📑 [프로젝트 상세 문서](https://frosted-brook-b69.notion.site/f07895ae2d24419381a8db180250414f?pvs=74)
---

## 🖥️ 프로젝트 소개

기존 대전광역시 사회서비스원 웹사이트의 콘텐츠 구조를 분석하고  
사용자가 주요 정보를 보다 쉽게 확인할 수 있도록 메인 페이지를 리디자인했습니다.

공지사항, 갤러리, 바로가기 영역의 콘텐츠 배치를 개선하고  
Swiper를 활용하여 반응형 환경에서도 자연스럽게 콘텐츠를 확인할 수 있도록 구현했습니다.

또한 HTML, CSS, JavaScript, jQuery를 활용하여  
페이지의 인터랙션과 GNB 메뉴를 직접 구현했습니다.

---

## 🗓️ 개발 기간

**1주**

---

## 🛠️ 개발 환경

### Language & Library

- HTML5
- CSS3
- JavaScript
- jQuery
- Swiper

### Tools

- VS Code

---

## 👩🏻‍💻 주요 작업

### 01. 메인 페이지 리디자인

기존 사이트의 콘텐츠 배치를 분석하여  
사용자가 주요 정보를 빠르게 확인할 수 있도록 메인 페이지를 리디자인했습니다.

- 기존 공지사항 영역을 메인 페이지에 배치
- 갤러리 영역의 콘텐츠 접근성을 고려하여 UI 재구성
- 바로가기 영역을 사용자가 쉽게 확인할 수 있도록 배치
- 반응형 환경을 고려하여 Swiper 적용

---

### 02. Swiper를 활용한 반응형 슬라이드

Swiper를 활용하여 화면 크기에 따라  
콘텐츠를 슬라이드 형태로 확인할 수 있도록 구현했습니다.

이를 통해 데스크톱뿐만 아니라 다양한 화면 크기에서도  
콘텐츠가 자연스럽게 노출되도록 구성했습니다.

---

### 03. CSS 가상요소를 활용한 Hover 인터랙션

마우스 Hover 시 아이콘 이미지가 변경되는 효과를 구현하기 위해  
`::before`와 `::after` 가상요소를 활용했습니다.

각 상태에 필요한 이미지를 가상요소에 배치한 후  
Hover 상태에 따라 `opacity`를 변경하여 아이콘이 전환되도록 구현했습니다.

```css
.apply .ApplyIcon li > a > span .icon:before {
  opacity: 1;
}

.apply .ApplyIcon li > a > span .icon:after {
  opacity: 0;
}

.apply .ApplyIcon li > a:hover > span .icon:before {
  opacity: 0;
}

.apply .ApplyIcon li > a:hover > span .icon:after {
  opacity: 1;
}
```

아이콘별 이미지는 `data-quick-icon` 속성을 활용하여 관리했습니다.

```css
.apply .ApplyIcon li > a > span .icon[data-quick-icon='01']:before {
  background-image: url(../imgs/image-icon-quick01.svg);
}

.apply .ApplyIcon li > a > span .icon[data-quick-icon='01']:after {
  background-image: url(../imgs/image-icon-quick01-hover.svg);
}
```

---

### 04. CSS 파일 분리를 통한 유지보수

CSS를 여러 파일로 분리하여 관리했습니다.

기능 및 영역별로 스타일을 구분하여  
코드의 구조를 명확하게 하고 수정 및 유지보수가 용이하도록 구성했습니다.

---

### 05. jQuery를 활용한 GNB 구현

jQuery를 활용하여 GNB 메뉴의 마우스 Hover 및 키보드 Focus 이벤트를 구현했습니다.

서브 메뉴의 높이를 동적으로 계산하여  
메뉴 영역의 배경 높이가 서브 메뉴에 맞게 변경되도록 구현했습니다.

```javascript
dep1.on('mouseover focusin', function () {
  var t = $(this);
  var menuH = t.next().outerHeight();

  if (t.next().length) {
    dep1.removeClass('on');
    sub.stop().hide();

    t.addClass('on');
    t.next().stop().show();

    bg.show().stop().css({
      height: menuH
    });
  }
});
```

또한 메뉴 영역을 벗어나거나 마지막 메뉴에서 Focus가 이동하는 경우  
GNB가 정상적으로 닫히도록 이벤트를 처리했습니다.

```javascript
function gnbHide() {
  dep1.removeClass('on');
  sub.stop().hide();
  bg.hide();
}
```

---

## 💡 구현 과정에서 고민한 부분

### 사용자 중심의 콘텐츠 배치

기존 사이트의 콘텐츠 배치를 그대로 구현하기보다  
사용자가 주요 정보를 빠르게 확인할 수 있도록  
공지사항, 갤러리, 바로가기 영역을 중심으로 메인 페이지를 재구성했습니다.

### 반응형 환경을 고려한 콘텐츠 구성

Swiper를 활용하여 화면 크기에 따라  
콘텐츠를 효율적으로 확인할 수 있도록 슬라이드 UI를 구현했습니다.

### 유지보수를 고려한 CSS 구조

CSS를 여러 파일로 분리하여 관리함으로써  
각 영역의 스타일을 쉽게 파악하고 수정할 수 있도록 구성했습니다.

---



## 📚 프로젝트를 통해 배운 점

- 기존 웹사이트를 분석하고 사용자 관점에서 UI를 재구성하는 경험
- Swiper를 활용한 반응형 슬라이드 구현
- CSS `::before`, `::after`를 활용한 인터랙션 구현
- jQuery를 활용한 GNB 및 이벤트 처리
- CSS 파일 분리를 통한 유지보수성 고려
- 마우스뿐만 아니라 키보드 Focus를 고려한 메뉴 인터랙션 구현
