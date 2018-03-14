//import 'package:flutter/material.dart';
import 'package:flutter/material.dart';

void main(){
  runApp(new ChatBox());
}
class ChatBox extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return new MaterialApp(
      title: "ChatBox",
      home: new ChatScreen(),
    );
  }
}
//modify ChatScreen class definition to extend StatefulWidget
class ChatScreen extends StatefulWidget{
  @override
  State createState() => new ChatScreenState();
}
class ChatScreenState extends State<ChatScreen>{
  @override
  Widget build(BuildContext context){
  return new Scaffold(
    appBar: new AppBar(
      title: new Text("ChatBox"),
    )
  );
}
}
