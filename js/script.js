$(document).ready(function(){

  function changeState(color){
    if($("#orb").hasClass("grey-inside")){
      $("#orb").removeClass("grey-inside").addClass(color+"-inside");
    }
    else if($("#orb").hasClass("red-inside")){
      $("#orb").removeClass("red-inside").addClass(color+"-inside");
    }
    else if($("#orb").hasClass("orange-inside")){
      $("#orb").removeClass("orange-inside").addClass(color+"-inside");
    }
    // else if($("#orb").hasClass("yellow-inside")){
    //   $("#orb").removeClass("yellow-inside").addClass(color+"-inside");
    // }
    else if($("#orb").hasClass("green-inside")){
      $("#orb").removeClass("green-inside").addClass(color+"-inside");
    }
    else if($("#orb").hasClass("blue-inside")){
      $("#orb").removeClass("blue-inside").addClass(color+"-inside");
    }
    else if($("#orb").hasClass("purple-inside")){
      $("#orb").removeClass("purple-inside").addClass(color+"-inside");
    }
    else if($("#orb").hasClass("silver-inside")){
      $("#orb").removeClass("silver-inside").addClass(color+"-inside");
    }

    if($("#background").hasClass("grey-background")){
      $("#background").removeClass("grey-background").addClass(color+"-background");
    }
    else if($("#background").hasClass("red-background")){
      $("#background").removeClass("red-background").addClass(color+"-background");
    }
    else if($("#background").hasClass("orange-background")){
      $("#background").removeClass("orange-background").addClass(color+"-background");
    }
    // else if($("#background").hasClass("yellow-background")){
    //   $("#background").removeClass("yellow-background").addClass(color+"-background");
    // }
    else if($("#background").hasClass("green-background")){
      $("#background").removeClass("green-background").addClass(color+"-background");
    }
    else if($("#background").hasClass("blue-background")){
      $("#background").removeClass("blue-background").addClass(color+"-background");
    }
    else if($("#background").hasClass("purple-background")){
      $("#background").removeClass("purple-background").addClass(color+"-background");
    }
    else if($("#background").hasClass("silver-background")){
      $("#background").removeClass("silver-background").addClass(color+"-background");
    }
  };

  $(window).keypress(function(letter) {
    var key = letter.keyCode
    if (key === 97 || key === 65)
    {
      changeState("red");
    }
    else if (key === 115 || key === 83)
    {
      changeState("orange");
    }
    else if (key === 100 || key === 68)
    {
      changeState("blue");
    }
    else if (key === 102 || key === 70)
    {
      changeState("purple");
    }
    else if (key === 103 || key === 71)
    {
      changeState("green");
    }
    else if (key === 104 || key === 72)
    {
      changeState("red");
    }
    else if (key === 48)
    {
      changeState("grey");
    }
    // else if (key === 106 || key === 74)
    // {
    //   changeState("pink");
    // }
  });

});
