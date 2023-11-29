//your parameter variables go here!

let bodyX = 90;
let bodyY = 115;




function setup_wallpaper(pWallpaper) {
  
   //pWallpaper.output_mode(DEVELOP_GLYPH );
   pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(195,221,243); //light honeydew green colour
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  
  


  //head 
  fill(0);
  stroke(0);
  ellipse (120,90, 50,50);
 

  //body
  fill(241, 94, 87)
  stroke(241, 94, 87); 
  ellipse (bodyX, bodyY,80,80);

  // spots 
  fill (0);
  stroke (0);
  ellipse ( 90, 100, 10,10);
  ellipse (115, 110, 15, 15);

  // leafs 

fill (150, 173, 127);
stroke (150, 173, 127);
ellipse (40, 0, 50, 35);// left upper corner 
  
 
fill (150, 173, 127);
stroke (150, 173, 127);
ellipse (200,44,35,50);// righ upper corner

 fill (107,144,119);
stroke (107,144,119);
  ellipse (155,200,50,35);// righ botom corner 

// left bottom corner
ellipse (0,155,35,50)
  
fill (300);// circle 
stroke (300);
ellipse (0,0,20,20);
 
fill (0);
line (70,150,70,150);
 



}


  







