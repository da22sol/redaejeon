   // 메뉴 이벤트
      // function addon() {
      //   var onbtns = document.querySelectorAll(
      //     '#AllMenu .SubMenu > [class^="sub"] li a'
      //   );
      //   onbtns.forEach(function (onbtn) {
      //     onbtn.addEventListener('mouseover', function (event) {
      //       event.preventDefault();
      //       onbtn.classList.add('on');
      //     });

      //     onbtn.addEventListener('mouseout', function (event) {
      //       onbtn.classList.remove('on');
      //     });
      //   });
      // }

      // window.onload = function () {
      //   addon();
      // };

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

      window.onload = function () {
        menubtn();
      };

$(document).ready(function () {
  

    function gnb() {
        var parent = $("#gnb");
        var dep1 = parent.find(">li>a");
        var sub = parent.find(">li>.sub");
        var bg = $(".subM_Bg");
        var last = parent.find(">li:last .sub ul li:last a");
        bg.css({ height: 0, display: "none" });

        dep1.on("mouseover focusin", function () {
            var t = $(this);
            var menuH = t.next().outerHeight();

            if (t.next().length) {
                dep1.removeClass("on");
                sub.stop().hide();
                t.addClass("on");
                t.next().stop().show();
                bg.show().stop().css({ height: menuH });
            } else {
                gnbHide();
            }
        });

        last.on("focusout", function () {
            gnbHide();
        });

        parent.on("mouseleave", function () {
            gnbHide();
        });

        function gnbHide() {
            dep1.removeClass("on");
            sub.stop().hide();
            bg.hide();
        }
    }
    gnb();
});
