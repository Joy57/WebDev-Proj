package Assignment1;

import java.util.*;

class Info{
	String name;
	String phone;
 
 
Info(String name, String phone) {
	this.name = name;
	this.phone = phone;
}

}



public class ArrayListImp {
	static ArrayList<Info> list = new ArrayList<Info>();
	static Scanner reader = new Scanner(System.in);
public static void main(String[] args) {
// ArrayList<String> list = new ArrayList<String>();
	
	
	int choice = 0; 
	
	do {
		printArray();
		System.out.println();
		System.out.println("Please choose from bellow");
		System.out.println("1. Insert");
		System.out.println("2. Display");
		System.out.println("3. Delete");
		System.out.println("4. EXIT");
		String temp = reader.nextLine();
		 
		choice = Integer.parseInt(temp);//scan

		switch (choice){
		case 1: insert();
		break;
		case 2: display();
		break;
		case 3: delete();
		break;
		case 4: update();
		default:
		System.out.println("Program terminated");
		}
		}while (choice !=5);
		 
	

}
static void printArray(){
	//System.out.println("Here's the list:'\n'");
	if(list.size()>0){
		System.out.println("Here's the list:\n--------------------");	
	}
	for (int i = 0; i < list.size(); i++) {
	System.out.print(i+". "+list.get(i).name + " | " + list.get(i).phone+"\n");
	}
	if (list.size() >0){
		System.out.println("--------------------");		
	}
}
static void insert(){

	 
	Scanner scanner = new Scanner(System.in);
	 
	for (int i = 0; i < 1; i++) {
	String name, phone;
	System.out.println("Insert Name : ");
	name = scanner.nextLine();
	System.out.println("Insert Phone : ");
	phone = scanner.nextLine();
	 
	Info info = new Info(name, phone);
	list.add(info);
	 
	}
	 
	 
//	for (int i = 0; i < list.size(); i++) {
//	System.out.println(list.get(i).name + " " + list.get(i).phone);
//	}
//	 
//	int index = scanner.nextInt();
//	list.remove(index);
//	 
//	for (int i = 0; i < list.size(); i++) {
//	System.out.println(list.get(i));
//	}
}

static void display(){
	Scanner scanner = new Scanner (System.in);
	System.out.print("Insert the index to display: ");

	int index = scanner.nextInt();
	System.out.println(list.get(index).name+" "+list.get(index).phone);
	System.out.println();
//	for (int i = 0; i < list.size(); i++) {
//	System.out.println(list.get(i));
//	}
//	
	
	
}
static void delete(){
	Scanner scanner = new Scanner (System.in);
	System.out.println("Tell me the index num you want to remove: ");
	int index = scanner.nextInt();
	list.remove(index);
}

static void update(){
	
}



}
