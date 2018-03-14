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
  //will  use it for reading the contents of the input field, and for clearing the field after the text message is sent.
  //To manage interactions with the text field
  final TextEditingController _textController = new TextEditingController();
  @override
  Widget build(BuildContext context){
  return new Scaffold(
    appBar: new AppBar(
      title: new Text("ChatBox"),
    ),
    body: _buildTextComposer(),
  );
}
  Widget _buildTextComposer(){
    return new Container(
    margin: const EdgeInsets.symmetric(horizontal: 8.0),
    child: new TextField(
      controller: _textController,
      onSubmitted: _handleSubmitted,
      decoration: new InputDecoration.collapsed(hintText: "Type a message"),
    ),
    );
  }
  void _handleSubmitted(String text){
    _textController.clear();
  }
}

