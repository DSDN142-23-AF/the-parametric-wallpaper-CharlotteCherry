//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
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
  ellipse(65, 40, 30, 70); // left ear
  ellipse(135,40, 30, 70);//right ear
  
  //ear highlight
  stroke(253,130,140,180);
  fill (253,130,140,180);
  ellipse(135,40,20,50);
  ellipse(65,40,20,50);

  //head
  fill(300)
  stroke(71, 102, 155); 
  ellipse (100,100,105,100);
  
// nose and eye
  fill(71, 102, 155);
  stroke (71, 102, 155);
  ellipse (100,115,9,5);// nose 
 ellipse (80,105,10,9);//left eye
 ellipse (120,105,10,9); //right eye 
 
 fill(300);
stroke (300,155);
ellipse (80,105,1,1);//left eye highlight
ellipse (120,105,1,1); //right eye highlight

 //blush
 stroke(300);
 fill (253,130,140,100);
 ellipse (130,120,30,20);
ellipse (70,120,30,20);// blush 

// hands and mouth
  fill(300);
  stroke(71, 102, 155); 
  ellipse (130,140,20,15);// hands 
  ellipse (70,140,20,15);
  ellipse (100,130,10,10);// mouth 

}
