package Sl;

/*
File Name: Game.java
Author: Tian Wei Student Number: Email: xiangchensuiyue@163.com
Assignment number: #4
Description: In this program ,a frame will be created which contains
ten "mines".When you click a button ,it will present the
number of mines around or a message of losing the game
(if the button is a mine).You can make a right click to
sign a dengerous button as well.When all the mines have
been signed ,a message box of winning the game will jump
to the screen.And the the message of the time you used in
the game.More over,you can click the button on the bottom
to restart the game.
*/
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.util.*;
import java.util.Random;
import java.util.Timer;
public class Game extends JFrame{
//define some menber variables
private long minute=0,second=0;//take down time used int the game
private ExButton[][] btn;//two-dimension array present the buttons
private JLabel label;
private JButton restart;//restart button
private int minesRemained;//remained mines that you have not signed
private boolean thisTry=true;
private JLabel timeUsed=new JLabel ();
private Random rand=new Random();
private final int ROWS,COLUMNS;
private final int MINES;
// the constuctor
public Game(int rows,int columns,int mines)
{
super("Find mines");
this.ROWS=rows;
this.COLUMNS=columns;
this.MINES=mines;
minesRemained=MINES;
Timer timer=new Timer();//Timer's object to timer the game
timer.schedule(new MyTimer(), 0, 1000);//do the function every second
Container container=getContentPane();
container.setLayout(new BorderLayout());
//Jpanel in the Container
JPanel jpanel=new JPanel();
jpanel.setLayout(new GridLayout(ROWS,COLUMNS));
restart=new JButton("click me to restart the game");
JPanel jpanel2=new JPanel();
//Another JPanel in the Container
jpanel2.setLayout(new FlowLayout());
jpanel2.add(timeUsed);
jpanel2.add(restart);
ButtonListener restartHandler=new ButtonListener();
restart.addActionListener(restartHandler);
container.add(jpanel2,BorderLayout.SOUTH);
btn=new ExButton[ROWS+2][COLUMNS+2];
//initialize the buttons
for(int i=0;i<=ROWS+1;i++)
{
for(int j=0;j<=COLUMNS+1;j++)
{
btn[i][j]=new ExButton();
btn[i][j].addMouseListener(new MouseClickHandler());
btn[i][j].setIndex(i,j);
btn[i][j].setVisited(false);
}
}
for(int i=1;i<=ROWS;i++)
for(int j=1;j<=COLUMNS;j++)
jpanel.add(btn[i][j]);
container.add(jpanel,BorderLayout.CENTER);
JPanel jpanel3=new JPanel ();
label=new JLabel();
label.setText("Mines remaining "+MINES);
jpanel3.add(label);
container.add(jpanel3,BorderLayout.NORTH );
this.addMines();
this.addMinesAround();
}
//randomly put ten mines
private void addMines()
{
for(int i=1;i<=MINES;i++)
{
int raInt1=rand.nextInt(ROWS);
int raInt2=rand.nextInt(COLUMNS);
if((raInt1==0)||(raInt2==0)||btn[raInt1][raInt2].getMine())
i--;
else
btn[raInt1][raInt2].setMine(true);
}
}
//take down the mines around a button
private void addMinesAround()
{
for(int i=1;i<=ROWS;i++)
{
for(int j=1;j<=COLUMNS;j++)
{
if(btn[i][j].getMine())
{
btn[i][j-1].addMinesAround();
btn[i][j+1].addMinesAround();
btn[i-1][j-1].addMinesAround();
btn[i-1][j].addMinesAround();
btn[i-1][j+1].addMinesAround();
btn[i+1][j-1].addMinesAround();
btn[i+1][j].addMinesAround();
btn[i+1][j+1].addMinesAround();
}
}
}
}
//if a button clicked is a empty one,then use a recursion
//to find all the empty buttons around
private void checkEmpty(ExButton button)
{
button.setVisited(true);
int x=button.getRowNumber();
int y=button.getColumnNumber();
button.setBackground(Color.white);
if((button.getMinesAround()==0)&&(x>=1)&&(x<=ROWS)
&&(y>=1)&&(y<=COLUMNS))
{
if(!btn[x][y-1].getVisited())
checkEmpty(btn[x][y-1]);
if(!btn[x][y+1].getVisited())
checkEmpty(btn[x][y+1]);
if(!btn[x-1][y].getVisited())
checkEmpty(btn[x-1][y]);
if(!btn[x+1][y].getVisited())
checkEmpty(btn[x+1][y]);
if(!btn[x-1][y-1].getVisited())
checkEmpty(btn[x-1][y-1]);
if(!btn[x-1][y+1].getVisited())
checkEmpty(btn[x-1][y+1]);
if(!btn[x+1][y-1].getVisited())
checkEmpty(btn[x+1][y-1]);
if(!btn[x+1][y+1].getVisited())
checkEmpty(btn[x+1][y+1]);
}
else if(button.getMinesAround()>0)
button.setText(""+button.getMinesAround());
}
//the main function
public static void main(String args[])
{
String rows,columns,mines;
int rowNumber,columnNumber,mineNumber;
rows=JOptionPane.showInputDialog("Enter the rows of the game");
columns=JOptionPane.showInputDialog("Enter the columns of the game");
mines=JOptionPane.showInputDialog("Enter the mines of the game");
rowNumber=Integer.parseInt(rows);
columnNumber=Integer.parseInt(columns);
mineNumber=Integer.parseInt(mines);
Game frame=new Game(rowNumber,columnNumber,mineNumber);
frame.setTitle("Find Mines");
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
frame.setLocation(220, 80);
frame.setSize(600, 600 );
frame.setVisible(true);
}
//there are three inner class below
//The first inner class is used to do the mouse listener's
//function.When you click a button ,it will present the
//number of mines around or a message of losing the game
//(if the button is a mine).You can make a right click to
//sign a dengerous button as well.When ten mines have been
//signed,it will check whether all the signed ones are mines
private class MouseClickHandler extends MouseAdapter
{
public void mouseClicked(MouseEvent event)
{
//get the button that been clicked
ExButton eventButton=new ExButton();
eventButton=(ExButton)event.getSource();
eventButton.setVisited(true);
//when it is a right click
if(event.isMetaDown())
{
if(eventButton.getText()=="À×")
{
minesRemained++;
eventButton.setText("");
}
else
{
if((eventButton.getBackground()==Color.white)||
(eventButton.getText()!=""))
{
//do nothing
}
else
{
minesRemained--;
eventButton.setText("À×");
}
}
label.setText("Mines remaining "+minesRemained);
//check if all the signed buttons are mines
if(minesRemained==0)
{
for(int i=1;i<=ROWS;i++)
for(int j=1;j<=COLUMNS;j++)
{
if(btn[i][j].getMine()&&btn[i][j].getText()!="À×")
thisTry=false;
if(!btn[i][j].getMine()&&btn[i][j].getText()=="À×")
thisTry=false;
}
if(thisTry)
{
//win the game
JOptionPane.showMessageDialog(null, "You succeed" +
" in this experience!");
JOptionPane.showMessageDialog(null, "Time used:"+
timeUsed.getText());
}
else//you have wrongly signed one or more mines
JOptionPane.showMessageDialog(null, "You have wrongly " +
"signed one or more mines,please check it and go on!");
}
}
else if(event.isAltDown())
{
//do nothing
}
else
{//normally click(left click)
if(eventButton.getText()=="À×")
{
//do nothing
}
else if(eventButton.getMine())
{
//lose the game
JOptionPane.showMessageDialog(null, "What a pity!" +
"You failed!" );
//show all the mines to the loser
for(int i=1;i<=ROWS;i++)
for(int j=1;j<=COLUMNS;j++)
{
if(btn[i][j].getMine())
btn[i][j].setBackground(Color.BLACK);
}
JOptionPane.showMessageDialog(null, "Time used: 0"+
minute+":"+second);
}
else
{
if(eventButton.getMinesAround()==0)
{
//call the function to find all the empty buttons around
checkEmpty(eventButton);
}
else
eventButton.setText(""+eventButton.getMinesAround());
}
}
}
}
//The second class is to listen to the button which used to
//restart the game.In this class,it will dispose the old frame
//and create a new one(Of course,the mines's position have
//been changed).
private class ButtonListener implements ActionListener
{
public void actionPerformed (ActionEvent e)
{
//what to dispose is the object of Game class
Game.this.dispose();
//the same code as in the main function
Game frame=new Game(ROWS,COLUMNS,MINES);
frame.setTitle("Find Mines");
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
frame.setSize(600, 600 );
//make sure the frame is at the center of the screen
frame.setLocation(220, 80);
frame.setVisible(true);
}
}
//The last class is the class that will be used in the
//Timer's object timer.It should inherit the class TimerTask
//It is the task that the Timer will do every second
private class MyTimer extends TimerTask
{
public void run()
{
second+=1;
minute+=second/60;
second=second%60;
//change the text of the time used in the game
timeUsed.setText("Time used 0"+minute+":"+second);
}
}
}//end of the class Game
