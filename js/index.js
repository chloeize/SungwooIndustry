$(function(){

     // 마우스 오버시, 이미지 변경
     $('header a[title~=메인]').each(function() {

        var nowImg = $(this).find('img');  //호버한 부분의 img파일 찾기
        var srcName = nowImg.attr('src');  //호버한 부분의 이미지 주소값 src가지고오기
        var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
        //.png , .jpg 와같이 파일명 자르기. 뒤에서부터 시작해서 '.'점있는 곳 까지 컷! 

        //호버이벤트
        $(this).hover(function() { 
            $(this).find('img').attr('src', newSrc+ '_on.' + /[^.]+$/.exec(srcName)); //hover시 _on붙이기
        }, function() {
            $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); //hover시 _on 때기
        });


    });
    
    // header 탑 고정
    $(window).scroll(function(){
        $('div.bg_box').addClass('dn'); // 스크롤하면 bg박스 닫혀야하니까
        $('div.bg_box').removeClass('dih');
        var pos = $(window).scrollTop();
        if(pos>155){
            $('header').css('padding','30px');
            $('div.nav-web>a>img').css('width','60px');
            $('div.nav-web>a>span').fadeOut(500);
            $('div.nav-web a.menu-btn').removeClass('dn');
            $('div.nav-web a.menu-btn').addClass('dih');
            if ($('div.bg_box').hasClass("dih")) { 
                $('a.menu-btn').addClass('hr'); 
                $('nav ul').addClass('vt'); 
            } else {
                $('a.menu-btn').removeClass('hr'); 
                $('nav ul').addClass('dn'); 
            }
        } else {
            if ($('div.bg_box').hasClass("dn")) {
                $('a.menu-btn').removeClass('hr');
            }
            $('header').css('padding','50px');
            $('div.nav-web>a>img').css('width','100px');
            $('div.nav-web>a>span').fadeIn(500);
            $('div.nav-web a.menu-btn').addClass('dn');
            $('div.nav-web a.menu-btn').removeClass('dih');
            $('div.bg_box').removeClass('dih');
            $('div.bg_box').addClass('dn');
            $('div.nav-web ul').removeClass('dn');
            $('div.nav-web ul').removeClass('vt');
        }
    });

    // 메뉴 중 리스트를 클릭했다면, 닫아줄 것
    $('nav ul li a').click(function(){
        $('nav ul').removeClass('dih');
        $('nav ul').addClass('dn');
        $('nav div').removeClass('dih')
        $('nav div').addClass('dn')
        
    });    
    
    

    
    // 메뉴 버튼 클릭시 리스트 오픈!
    $('a.menu-btn').click(function(){
        var ww = $(window).width();
        if($('div.bg_box').hasClass("dn")) {
            $('nav ul').removeClass('dn');
            $('nav ul').addClass('vt');
            $('a.menu-btn').addClass('hr');
            $('div.bg_box').removeClass('dn');
            $('div.bg_box').addClass('dih');
            
        } else {
            $('a.menu-btn').removeClass('hr');
            $('nav ul').addClass('dn');
            $('nav ul').removeClass('vt');
            $('div.bg_box').addClass('dn');
            $('div.bg_box').removeClass('dih');
        }
        return false;
    });
    
    // 사이즈별로 오픈 시
    var ww = $(window).width();

    $('div.bg_box').addClass('dn'); // 리사이즈하면 bg박스 닫혀야하니까
    $('div.bg_box').removeClass('dih');

    // 태블릿 사이즈
    if (ww<1115) {
        $('header').addClass('w1115');
    } else {
        $('header').removeClass('w1115');

    }
    // 모바일 사이즈 
    if (ww<707) {
        $('div.nav-web').fadeOut(200);
        $('div.nav-mobile').fadeIn(200);
    } else {
        $('div.nav-mobile').fadeOut(200);
        $('div.nav-web').fadeIn(200);
    }
    
    
    // 웹 등에서 리사이즈 변동 고려
//리사이즈하면, 메뉴사라져, 근데 BG박스없애도 리스트가 살아있어 (모바일에서 열린채 옮길때)
// 모바일이랑 웹이랑 따로 관리해서 해결해봐

    $(window).resize(function(){
        var ww = $(window).width();
        // 태블릿
        if (ww<1115) {
            $('header').addClass('w1115');
        } else {
            $('header').removeClass('w1115');
        }
        
        
        // 모바일 사이즈 
        if (ww<707) {
            $('div.nav-web').fadeOut(200);
            $('div.nav-mobile').fadeIn(200);
        } else {
            $('div.nav-web').fadeIn(200);
            $('div.nav-mobile').fadeOut(200);
        }
            
            
        
    });




    // header :  li:hover 시, a:텍스트 한/영 변환
    $('header a[href="#main"]').hover(function(){
        $(this).text("성우실업");
    }, function(){
        $(this).text("HOME");
    }); 
    $('header a[href="#wwcd"]').hover(function(){
        $(this).text("제작 가능 목록");
    }, function(){
        $(this).text("WHAT WE CAN DO");
    }); 
    $('header a[href="#contact"]').hover(function(){
        $(this).text("견적문의");
    }, function(){
        $(this).text("CONTACT");
    }); 
    

      
    // WHAT WE CAN DO - 탭메뉴 (상위 리스트 클릭할 때)
    $('div.list-title').click(function(){
        var tab_id = $(this).attr('data-tab');
        
        $('ul.wwcd-list>li').removeClass('on');
        $(this).parent('li').addClass('on');
        
        $('ul.list-item li').removeClass('active');
        $(this).siblings('ul.list-item').find('li:first-child').addClass('active');

        $('ul.list-detail li').removeClass('active');
        $("#"+tab_id).addClass('active');
    });

    // WHAT WE CAN DO - 탭메뉴 (하위 리스트 클릭할 때)
    $('ul.list-item li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.list-item li').removeClass('active');
        $('ul.list-detail li').removeClass('active');
        $('ul.wwcd-list>li').removeClass('on');
        $(this).parents('ul.wwcd-list>li').addClass('on');
        $(this).addClass('active');
        $("#"+tab_id).addClass('active');

    });
   
    // WWCD - 탭 메뉴 하위 리스트 호버 시 > 상위 리스트 컬러 변경
    $('#wwcd ul.wwcd-list li').hover(function(){
        $(this).find('div.list-title').addClass('colored');
    }, function(){
        $(this).find('div.list-title').removeClass('colored');
    });






}); // jQuery END