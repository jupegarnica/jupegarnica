export default {
  "if it returns an array,\n the first value is the radius": "[.3, 'purple']",
  "the second one\nis the color for positive values": "[.6, 255]",
  "the third one\nis  for negative values": "[sin(t), 192, 'cyan']",
  "the fourth one\nis the background": "[\nsin(t),\n'#fc0',\n'rgba(255,255,55)',\n'white'\n]",
  "you can represent a color\nas a number or string\n": "[tan(t), 55, '#0cf']",
  "as string any valid css color\n works, even gradients": "[1, 'hsl(200,100%,50%)']",
  "as number there are 256 colors\na 0 to 255 rainbow palette": "[1, i]",
  "have fun!": "[\nt-x-y,,,\n`linear-gradient(${sin(t/3)*360}deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)`]",

  "for every dot return 0 or 1 \nto change the visibility": "Math.random() < 0.1",
  "use a float between 0 and 1\n to define the size": "Math.random()",
  "parameter `t` is \nthe time in seconds": "Math.sin(t)",
  "param `i` is the index \nof the dot (0..255)": "i / 256",
  "`x` is the column index\n from 0 to 15": "x / 16",
  "`y` is the row\n also from 0 to 15": "y / 16",
  "positive numbers are white,\nnegatives are red": "y - 7.5",
  "use the time\nto animate values": "y - t",
  "multiply the time\nto change the speed": "y - t*4",
  "create patterns using \ndifferent color": "[1, 0, -1][i%3]",
  "skip `Math.` to use methods \nand props like `sin` or `PI`": "sin(t-sqrt((x-7.5)**2+(y-6)**2))",



  "more examples ...": "sin(y/8 + t)",
  "simple triangle": "y - x",
  "quarter triangle": "(y > x) && (14-x < y)",
  "pattern": "i%4 - y%4",
  "grid": "x%4 && y%4",
  "square": "x>3 & y>3 & x<12 & y<12",
  "animated square": "-(x>t & y>t & x<15-t & y<15-t)",
  "mondrian squares": "(y-6) * (x-6)",
  "moving cross": "(y-4*t|0) * (x-2-t|0)",
  "sierpinski": "4 * t & i & x & y",
  "binary clock": "(t*10) & (1<<x) && y==8",
  "random noise": "random() * 2 - 1",
  "static smooth noise": "sin(i ** 2)",
  "animated smooth noise": "cos(t + i + x * y)",
  "waves": "sin(x/2) - sin(x-t) - y+6",
  "bloop bloop bloop\nby @v21": "(x-8)*(y-8) - sin(t)*64",
  "fireworks\nby @p_malin and @aemkei": "-.4/(hypot(x-t%10,y-t%8)-t%2*9)",
  "ripples\nby @thespite": "Math.sin(t-Math.sqrt(x*x+y*y))",
  "scrolling TIXY font\nby @atesgoral": "[5463,2194,2386][y+t*9&7]&1<<x-1",
  "3d checker board\nby @p_malin": "(((x-8)/y+t*5)&1^1/y*8&1)*y/5",
  "sticky blood\nby @joeytwiddle": "y-t*3+9+3*cos(x*3-t)-5*sin(x*7)",
  "3d starfield\nby @p_malin": "d=y*y%5.9+1,!((x+t*50/d)&15)/d",
  "dialogue with an alien\nby @chiptune": "1/32*tan(t/64*x*tan(i-x))",
  "space invader\nby @keithclarkcouk + @zozuar": "'p}¶¼<¼¶}p'.charCodeAt(x)&2**y",
  "hungry pac man\nby @p_malin and @aemkei": "hypot(x-=t%4*5,y-=8)<6&&x<y|y<-x",
  "spectrum analyser\nby @joeytwiddle": "x&y<9&y>4+sin(8*t+x*x)+x/4",
  "diagonals": "y == x || -(15-x == y)",
  "frame": "x==0 | x==15 | y==0 | y==15",
  "drop": "8*t%13 - hypot(x-7.5, y-7.5)",
  "rotation": "sin(2*atan((y-7.5)/(x-7.5))+5*t)",
  "wipe": "(x-y) - sin(t) * 16",
  "soft wipe": "(x-y)/24 - sin(t)",
  "disco": "sin(t*5) * tan(t*7)",
  "input is limited \nto 32 characters!": "(x-5)**2 + (y-5)**2 - 99*sin(t)",
  "click here to \ncreate your own": "'HAVE FUN!'"
}