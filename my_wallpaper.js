//your parameter variables go here!

//Lady Bug
let bodyX = 90;
let bodyY = 115;
let spot1 = 13;
let spot2 = 10;
let spot3 = 15;

//Flower
let circleX = 200;
let circleY = 200;
let size = circleX - 180;

let petalW = 35 // 35
let petalH = 50 // 50


function setup_wallpaper(pWallpaper) {
  
   //pWallpaper.output_mode(DEVELOP_GLYPH );
   pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(195,221,243); //light blue 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  
  
//line 
fill (0);
stroke (0);
line (bodyX - 40,bodyY +5,bodyX + 55,bodyY - 55);
line (bodyX - 20, bodyY + 20, bodyX + 70, bodyY - 35);

// circle ontop of line 
ellipse (bodyX + 69, bodyY - 35,5,5);
ellipse (bodyX + 55, bodyY - 55, 5, 5);

  //head 
  fill(0);
  stroke(0);
  ellipse (bodyX + 30,bodyY - 20, 50,50);
 

  //body
  fill(241, 94, 87)
  stroke(241, 94, 87); 
  ellipse (bodyX, bodyY,90,90);

  // spots 
  fill (0);
  stroke (0);
  ellipse ( bodyX - 10, bodyY - 15, spot1);
  ellipse (bodyX + 20, bodyY + 2, spot2);
  ellipse (bodyX - 5,bodyY + 20 , spot3);
  

  
  // petals

fill (150, 173, 127);// light green
stroke (150, 173, 127);
ellipse (40, 0, petalH, petalW);// left upper  
ellipse (200,44, petalW,petalH);// righ upper 
ellipse (200, 155, petalW, petalH);
 
fill (107,144,119);// dark green
stroke (107,144,119);
  ellipse (155,200,petalH,petalW);// righ botom 
  ellipse (0, 45, petalW,petalH);// right upper
  ellipse (0,155,petalW,petalH)// left bottom
  
  fill (300);// circle for flower
stroke (300);
ellipse (circleX - 200, circleY - 200,size,size);
ellipse (circleX,circleY,size,size);
 

 



}


  







