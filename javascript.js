
    $(document).ready(function () {
      var slide = $(".slide");
      var index = 0;
      slide.hide();
      slide.eq(index).show();

      $(".btnNext").click(function ()  {
        slide.eq(index).hide();
        index++;
        if (index >= slide.length){
            index = 0;
        }
        slide.eq(index).show();
      });
        $(".btnBack").click(function () {
            slide.eq(index).hide();
            index--;
            if (index < 0) {
            index = slide.length - 1;
            }
            slide.eq(index).show();
        });
    });
