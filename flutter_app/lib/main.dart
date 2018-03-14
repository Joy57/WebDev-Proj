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
    return new IconTheme(
    data: new IconThemeData(color: Theme.of(context).accentColor),
    child: new Container(
    margin: const EdgeInsets.symmetric(horizontal: 8.0),
    child: new Row(
     children: <Widget>[
       new Flexible(
           child: new TextField(
             controller: _textController,
             onSubmitted: _handleSubmitted,
             decoration: new InputDecoration.collapsed(hintText: "Type a Message"),
           ),
       ),
       new Container(
         margin: new EdgeInsets.symmetric(horizontal: 4.0),
         child: new IconButton(icon: new Icon(Icons.send),
             onPressed: ()=> _handleSubmitted(_textController.text)),
       ),
     ],
    ),
    ),
    );
  }
  void _handleSubmitted(String text){
    _textController.clear();
  }
}

