$(document).ready(function(){
            
        // ====================== SELECTION =============================
            $('h1').css('color', 'blue');
            $('#box1').css('color', 'blue');
            $('.boxes').css('color', 'blue');
            
            $('.boxes:first').css('color', 'red')
            $('.boxes:last').css('color', 'aqua')
            $('.boxes:eq(2)').css('color', 'brown')
            
            
            
            //==================== EVENT =========================
            $('h1').click(function(){
                //     $('h1').css({
                //         'color':'red',
                //         'fontsieze':'20px',
                //         'backgroundColor' : 'lightBlue'
                // });
                  //--------- Remove, Add, dan Toggle
                  /*
                    removeClass = untuk menghilangkan class yang sudah ada
                    addClass = untuk menambahkan class yang belum ada
                    toggleClas = untuk menggabungkan kedua class diatas
    
                  */
                    $('h1').removeClass('change');
                    $('h1').addClass('change');
    
                    $('h1').toggleClass('change');
                    });
    
                $('h1').mouseenter(function(){
                    $('h1').css('background', 'yellow');
                    });
    
                $('h1').mouseleave(function(){
                    $('h1').css('background', 'pink');
                    });
    
                $('.boxes').mouseenter(function(){
                    $(this).css('color', 'blue');
                    });
    
                $('form').submit(function(){
                    var tulisan = $('#inputxt').val();
                    $('h1').text(tulisan);
    
    
                    // Untuk mencegah sifat aslinya
                    event.preventDefault();
                });
    
    
    
                // ===================== MENAMBAH DAN MENGHAPUS ==============================
                    //append dan prepend | after before
                    // append = memunculkan di dalam elemen dibagian akhir
                    // prepend = memunculkan di dalam elemen dibagian awal
                    // after before = memunculkan diluar elemen
                
                $('#boxeswrap').after('<div>Halo</div>');
    
                // remove dan empty
                  // remove = menghapus semuanya dgn elemen yg dipilih
                  // empty = hanya menghapus kontenya, dan elemen masih 
                // $('#boxeswrap').remove();
    
                // ========= Dimension ================
    
                  // ------------- Mengambil nilai dimensi---------------
                  // innerWidth => konten + padding
                  // width => konten 
                  // outerWidth => konten + padding + border
                     // (true) -> + margin
    
                var nilai = $('#boxeswrap').height(130).width(140);
                $('#box1').text(nilai);
    
        // ========= Hide, Show, Toggle ===========
                $('#btn1').click(function(){
                    $('#box1').show();
                });
    
                $('#btn2').click(function(){
                    $('#box1').hide();
                });
    
                $('#btn3').click(function(){
                    $('#box1').toggle();
                });
    
    
            //============ fadeIn, fadeOut, fadeToggle ============
            $('#btn1').click(function(){
                    $('#box1').fadeIn(2000);
                });
    
                $('#btn2').click(function(){
                    $('#box1').fadeOut(2000);
                });
    
                $('#btn3').click(function(){
                    $('#box1').fadeToggle();
                });
    
    
                // ========== SlideDown, slideUp, SlideTogle =============
                $('#btn1').click(function(){
                    $('#box1').slideDown(2000);
                });
    
                $('#btn2').mouseleave(function(){
                    $('#box1').slideUp(2000);
                });
    
                $('#btn3').mouseenter(function(){
                    $('#box1').slideToggle();
                });
    
                // ======== Stop, callBack, chaining =========
                    //  Stop = untuk emnghentikan jalanya animasi
                    //  callBack = Fungsi yang dipanggil setelah fungsi sebelumnya selesai
                    //  Chaining = 
           // ========== Traverring ===========
            $('li').first().css('color', 'red');
            $('li').last().css('color', 'red');
            $('li').eq(1).css('color', 'red');

            $('li').filter('#css').css('fontSize', '25px');
            $('li').not('#css').css('background', 'yellow');
        

    // ========== Siblings, next, nextAll, nextUntil('param') ~ prev ================
        // ------ Next -----
        $('#css').siblings().css('fontSize', '20px');
        $('#css').next().css('color', 'red');
        $('#css').nextAll().css('color', 'red');
        $('#css').nextUntil('#db').css('color', 'red');

    //  ------- Prev ----
    $('#css').siblings().css('fontSize', '20px');
        $('#css').prev().css('color', 'red');
        $('#css').prevAll().css('color', 'red');
        $('#css').prevUntil('#db').css('color', 'red');


        // ============ Childern find Parent parents() parentsUntil
    /*
        Childern = 
        find =
        parent = 1 level diatasnya
        parents = bakal kena semuanya
        parentsUntil = Bisa diatur mau sampai mana 
    */ 
            $('ul').children().css('color','blue');
            $('ul').find('span').css('color','blue');
            $('#css').parent().css('background', 'yellow');
            $('#css').parentsUntil('#tester').css('border','solid yellow 3px');


    
});