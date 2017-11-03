package Assignment1;

import java.util.*;

class Info{
	String name;
	String phone;
 
 
Info(String name, String phone) {
	this.name = name;
	this.phone = phone;
}
public void setInfo(String name, String phone) {
    this.name = name;
    this.phone = phone;
}

}



public class ArrayListImp {
	static ArrayList<Info> list = new ArrayList<Info>();
	static Scanner reader = new Scanner(System.in);
public static void main(String[] args) {
		
	int choice = 0; 
	
	do {
		printArray();
		System.out.println();
		System.out.println("Please choose from bellow");
		System.out.println("1. Insert");
		System.out.println("2. Display");
		System.out.println("3. Delete");
		System.out.println("4. Update");
		System.out.println("5. EXIT");
		System.out.print("Enter here: ");
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
		break;
		}
		}while (choice !=5);
		 
	

}
static void printArray(){

	System.out.println();
	if(list.size()>0){
		System.out.println("Here's the full list:\n---------------------------");	
	}
	for (int i = 0; i < list.size(); i++) {
	System.out.print(i+". "+list.get(i).name + " | " + list.get(i).phone+"\n");
	}
	if (list.size() >0){
		System.out.println("---------------------------");		
	}
}
static void insert(){

	 
	Scanner scanner = new Scanner(System.in);
	 
	for (int i = 0; i < 1; i++) {
	String name, phone;
	System.out.print("Insert Name : ");
	name = scanner.nextLine();
	System.out.print("Insert Phone : ");
	phone = scanner.nextLine();
	 
	Info info = new Info(name, phone);
	list.add(info);
	 
	}
	 
}

static void display(){
	Scanner scanner = new Scanner (System.in);
	System.out.print("Insert the index to display: ");

	int index = scanner.nextInt();
	if (list.isEmpty()){
		System.out.println("List is empty");
	}
	else{
	System.out.println("---------------------------------");
	System.out.println("-> "+index+". "+list.get(index).name+" "+list.get(index).phone);
	System.out.println("---------------------------------");
	}
	System.out.println();	
	
}
static void delete(){
	Scanner scanner = new Scanner (System.in);
	System.out.println("Tell me the index num you want to remove: ");
	int index = scanner.nextInt();
	list.remove(index);
}

static void update(){

	Scanner scanner = new Scanner(System.in);
	String name, phone;
	
	if (list.isEmpty()){
		System.out.println("List is empty");
	}
	else{
	System.out.println("Update Info");
	
	System.out.print("Insert Name : ");
	name = scanner.nextLine();
	System.out.print("Insert Phone : ");
	phone = scanner.nextLine();
	
	System.out.println("Index: ");
	int index = scanner.nextInt();
	
	Info info = new Info(name, phone);
	list.set(index, info);
	}
 }

}
