/* package whatever; // don't place package name! */
 
import java.util.*;
import java.lang.*;
import java.io.*;
import java.util.Random;
/* Name of the class has to be "Main" only if the class is public. */
class Goods
{
	int v;
	int p;
}

 class Backpack 
{
    int BackpackV = 100;
    
	public static void main (String[] args) throws java.lang.Exception
	{
		Goods[]  goods = new Goods[10];
		Random randomGenerator = new Random();
		for(int i = 0; i < goods.length; i++){
			goods[i] = new Goods();
            goods[i].v = randomGenerator.nextInt(100);
            goods[i].p = randomGenerator.nextInt(100);
		}
	}
    public static init BestPrice(int n1, init arr){}
}
