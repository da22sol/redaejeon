//  메뉴 이벤트

function menubtn() {
  const openbtn = document.querySelector('.SiteMapBtn');
  const closebtn = document.querySelector('.CloseBtn');
  const sietwrap = document.querySelector('.SubWrap');
  const all = document.querySelector('#header');
  const htmlElement = document.documentElement;

  const lastMenuItem = document.querySelector('#AllMenu>li .sub>ul>li:last-child');

  openbtn.addEventListener('click', (event) => {
    event.preventDefault();
    openMenu();
  });

  closebtn.addEventListener('click', (event) => {
    event.preventDefault();
    closeMenu();
  });

  function openMenu() {
    openbtn.style.display = 'none';
    closebtn.style.display = 'block';
    sietwrap.style.display = 'block';
    all.classList.add('all');
    htmlElement.classList.add('all');
    lastMenuItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function closeMenu() {
    closebtn.style.display = 'none';
    openbtn.style.display = 'block';
    sietwrap.style.display = 'none';
    document.documentElement.classList.remove('all');
    all.classList.remove('all');
    htmlElement.classList.remove('all');
    allMenuBtn.focus();
  }
}

// 메뉴바
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

// 공지사항
document.addEventListener('DOMContentLoaded', function () {
  const onbtns = document.querySelectorAll('.NoticeBtn');
  const descs = document.querySelectorAll('.NoticeDesc');

  onbtns[0].classList.add('on');
  descs[0].style.display = 'block';

  onbtns.forEach(function (onbtn) {
    onbtn.addEventListener('click', function () {
      const tabNumber = this.getAttribute('data-tab-number');

      onbtns.forEach(function (btn) {
        btn.classList.remove('on');
      });

      descs.forEach(function (desc) {
        desc.style.display = 'none';
      });

      this.classList.add('on');

      const selectedDesc = document.querySelector('.NoticeDesc[data-tab-number="' + tabNumber + '"]');
      selectedDesc.style.display = 'block';
    });
  });
});
window.onload = function () {
  menubtn();
};

// function addRess() {
//   $(".footer_top .select_box .select").click(function () {
//       var bt = $(this);
//       var adDiv = bt.next("ul");

//       if (adDiv.is(":hidden")) {
//           adDiv.slideDown();
//           bt.addClass("on");
//       } else {
//           adDiv.slideUp();
//           bt.removeClass("on");
//       }
//   });

//   /*
//   $(".select_box").mouseleave(function () {
//         $(".footer_top .select_box>ul").stop().slideUp();
//         if ($(this).find(">button").hasClass("on")) {
//             $(this).find(">button").removeClass("on")
//         }

//     });
//   */

//   $(".select_box ul li a").click(function () {
//       $(".footer_top .select_box>ul").stop().slideUp();

//   });

// }

// 모바일

// 모바일 검색
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = () => {
    document.querySelector('.mo_search').addEventListener('click', () => {
      document.querySelector('.search').classList.toggle('on');
      document.querySelector('.mo_search').classList.toggle('on');
    });
  };

  searchBtn();
});

