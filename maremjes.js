    $("#but-gal-sec").click(function() {
        $(".second").show( "slow" )
        $("#but-gal-sec").hide();
      });

      $("#but-gal-third").click(function() {
        $(".third").show( "slow" )
        $("#but-gal-third").hide();
      });
      $("#but-gal-fourth").click(function() {
        $(".fourth").show( "slow" )
        $("#but-gal-fourth").hide();
      });
      $("#but-gal-fifth").click(function() {
        $(".fifth").show( "slow" )
        $("#but-gal-fifth").hide();
      });
      $("#but-gal-sixth").click(function() {
        $(".sixth").show( "slow" )
        $("#but-gal-sixth").hide();
      });
      $("#but-gal-seventh").click(function() {
        $(".seventh").show( "slow" )
        $("#but-gal-seventh").hide();
      });
      $("#but-gal-eighth").click(function() {
        $(".eighth").show( "slow" )
        $("#but-gal-eighth").hide();
      });
      $("#but-gal-ninth").click(function() {
        $(".ninth").show( "slow" )
        $("#but-gal-ninth").hide();
      });


      if (window.matchMedia("(min-width: 1000px)").matches) {
        document.querySelectorAll("#container img").forEach(img => {
          img.onclick = () => {
            document.querySelector(".popup-img").style.display = "block";
            document.querySelector(".popup-img img").src = img.getAttribute("src");
          }
        })
  
        document.querySelector(".popup-img span").onclick = () => {
          document.querySelector(".popup-img").style.display = "none";
        }
      }
     












      /*
      $('.card').on('click', function (){
        $('body').append('<div id="dialog" title="Image"><img src="' + $(this).attr('src') + '" width="300" /></div>');
        $('#dialog').dialog();
    });

    $(document).ready(function() {
        $("#top-img").click(function(){
          $.modal("<img src=\"https://i.pinimg.com/736x/36/57/b7/3657b789eb0c634712899fc94d196d9a.jpg\" style=\"\"/>");
        });
   });

   */