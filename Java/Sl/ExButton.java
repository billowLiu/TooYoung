package Sl;

/*
This class defines a class that contains some useful
attributions and some methods to set or get these attributions
*/
import javax.swing.JButton;
public class ExButton extends JButton{
	//if the button is a mine,the isMine will be true
	private boolean isMine;
	//to check if a button has been visited is useful
	//when using the recursion in the Game class
	private boolean isVisited;
	//the row number of the button
	int btnRowNumber;
	//the column number of the button
	int btnColumnNumber;
	//the mines around a button
	int minesAround=0;
	public void setIndex(int btnRowNumber,int btnColumnNumber)
	{
	this.btnRowNumber=btnRowNumber;
	this.btnColumnNumber=btnColumnNumber;
	}
	public int getRowNumber()
	{
	return this.btnRowNumber;
	}
	public int getColumnNumber()
	{
	return this.btnColumnNumber;
	}
	public void setVisited(boolean isVisited)
	{
	this.isVisited=isVisited;
	}
	public boolean getVisited()
	{
	return this.isVisited;
	}
	public void setMine(boolean isMine)
	{
	this.isMine=isMine;
	}
	public boolean getMine()
	{
	return this.isMine;
	}
	//the attribute of minesAround add one each
	//time a mine is put down around the button
	public void addMinesAround()
	{
	this.minesAround++;
	}
	public int getMinesAround()
	{
	return this.minesAround;
	}
}