$(function(){

    let canvas=document.getElementById("canvas");
    let ctx=canvas.getContext("2d");
    let lastX;
    let lastY;
    let strokeColor="black";
    let strokeWidth=2;
    let canMouseX;
    let canMouseY;
    let canvasOffset=$("#canvas").offset();
    let offsetX=canvasOffset.left;
    let offsetY=canvasOffset.top;
    let isMouseDown=false;
    let imageObj=new Image();
    imageObj.onload=function(){
        ctx.save();
        ctx.globalAlpha=.3;
        ctx.drawImage(this,0,0,canvas.width,canvas.height);
        ctx.restore();
    }
    imageObj.src="#";


    function handleMouseDown(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);

      // Put your mousedown stuff here
      lastX=canMouseX;
      lastY=canMouseY;
      isMouseDown=true;
    }

    function handleMouseUp(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);

      // Put your mouseup stuff here
      isMouseDown=false;
    }

    function handleMouseOut(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);

      // Put your mouseOut stuff here
      isMouseDown=false;
    }

    function handleMouseMove(e){
      canMouseX=parseInt(e.clientX-offsetX);
      canMouseY=parseInt(e.clientY-offsetY);

      // Put your mousemove stuff here
      if(isMouseDown){
          ctx.beginPath();
          ctx.lineWidth=5;
          ctx.strokeStyle="#000000";
          ctx.moveTo(lastX,lastY);
          ctx.lineTo(canMouseX,canMouseY);
          ctx.stroke();     
          lastX=canMouseX;
          lastY=canMouseY;
      }
    }

    $("#canvas").mousedown(function(e){handleMouseDown(e);});
    $("#canvas").mousemove(function(e){handleMouseMove(e);});
    $("#canvas").mouseup(function(e){handleMouseUp(e);});
    $("#canvas").mouseout(function(e){handleMouseOut(e);});

}); // end $(function(){});
