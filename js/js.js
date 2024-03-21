//  메뉴 이벤트

function menubtn() {
  const openbtn = document.querySelector('.SiteMapBtn');
  const closebtn = document.querySelector('.CloseBtn');
  const sietwrap = document.querySelector('.SubWrap');
  const all = document.querySelector('#header');
  const htmlElement = document.documentElement;

  const lastMenuItem = document.querySelector(
    '#AllMenu>li .sub>ul>li:last-child'
  );

  openbtn.addEventListener('click', (event) => {
    event.preventDefault();
    openbtn.style.display = 'none';
    closebtn.style.display = 'block';
    sietwrap.style.display = 'block';
    all.classList.add('all');
    htmlElement.classList.add('all');
    lastMenuItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  closebtn.addEventListener('click', (event) => {
    event.preventDefault();
    closebtn.style.display = 'none';
    openbtn.style.display = 'block';
    sietwrap.style.display = 'none';
    document.documentElement.classList.remove('all');
    all.classList.remove('all');
    htmlElement.classList.remove('all');
    allMenuBtn.focus();
  });
}

$(document).ready(function () {
  function gnb() {
    var parent = $('#gnb');
    var dep1 = parent.find('>li>a');
    var sub = parent.find('>li>.sub');
    var bg = $('.subM_Bg');
    var last = parent.find('>li:last .sub ul li:last a');
    bg.css({ height: 0, display: 'none' });

    dep1.on('mouseover focusin', function () {
      var t = $(this);
      var menuH = t.next().outerHeight();

      if (t.next().length) {
        dep1.removeClass('on');
        sub.stop().hide();
        t.addClass('on');
        t.next().stop().show();
        bg.show().stop().css({ height: menuH });
      } else {
        gnbHide();
      }
    });

    last.on('focusout', function () {
      gnbHide();
    });

    parent.on('mouseleave', function () {
      gnbHide();
    });

    function gnbHide() {
      dep1.removeClass('on');
      sub.stop().hide();
      bg.hide();
    }
  }
  gnb();
});
document.addEventListener('DOMContentLoaded', function() {
  const onbtns = document.querySelectorAll('.NoticeBtn');
  const descs = document.querySelectorAll('.NoticeDesc');

  // 첫 번째 버튼과 해당하는 Description에 'on' 클래스 추가
  onbtns[0].classList.add('on');
  descs[0].style.display = 'block';

  onbtns.forEach(function(onbtn) {
      onbtn.addEventListener('click', function() {
          const tabNumber = this.getAttribute('data-tab-number');

          // 모든 버튼에서 'on' 클래스 제거
          onbtns.forEach(function(btn) {
              btn.classList.remove('on');
          });

          // 모든 Description 영역 숨기기
          descs.forEach(function(desc) {
              desc.style.display = 'none';
          });

          // 선택된 버튼에 'on' 클래스 추가
          this.classList.add('on');

          // 해당하는 Description 영역 보이기
          const selectedDesc = document.querySelector('.NoticeDesc[data-tab-number="' + tabNumber + '"]');
          selectedDesc.style.display = 'block';
      });
  });
});
window.onload = function () {
  noticeon();
  menubtn();
};
