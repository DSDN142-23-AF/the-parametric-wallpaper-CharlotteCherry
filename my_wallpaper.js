//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let headX = 100;
let headY = 120;

let eyesizeX = 10;
let eyesizeY = 9;
let eyeY = headY +5;
let handsH = 20 ;
let handsW = 15 ;
let M = 10;
let earY = headY - 60;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(300); //light honeydew green colour
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  
  //ear
  fill(71, 102, 155)
  stroke (71, 102, 155)
  ellipse(headX - 35, earY, 30, 70); // left ear
  ellipse(headX + 35,earY, 30, 70);//right ear
  
  //ear highlight
  stroke(253,130,140,180);
  fill (253,130,140,180);
  ellipse(headX + 35,earY,20,50);
  ellipse(headX - 35,earY,20,50);

  //head
  fill(300)
  stroke(71, 102, 155); 
  ellipse (headX, headY,105,100);
  
// nose and eye/highlights
  fill(71, 102, 155);
  stroke (71, 102, 155);
  ellipse (headX,headY + 15,9,5);// nose 
 ellipse (headX - 20,eyeY,eyesizeX,eyesizeY);//left eye 
 ellipse (headX + 20,eyeY,eyesizeX,eyesizeY); //right eye 
 
 fill(300);
stroke (300,155);
ellipse (headX - 20,eyeY,eyesizeX - 9,eyesizeY - 8);//left eye highlight
ellipse (headX + 20,eyeY,eyesizeX - 9,eyesizeY - 8); //right eye highlight

 //blush
 stroke(300);
 fill (253,130,140,100);
 ellipse (headX + 30,headY + 20,30,20);
ellipse (headX - 30,headY + 20,30,20);// blush 

// hands and mouth
  fill(300);
  stroke(71, 102, 155); 
  ellipse (headX + 30,headY + 40,handsH,handsW);// hands 
  ellipse (headX - 30,headY + 40,handsH,handsW);
  ellipse (headX,headY + 30,M,M);// mouth 

}


  







