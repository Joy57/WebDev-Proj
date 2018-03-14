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
  final List<Message> _messages = <Message>[];
  //will  use it for reading the contents of the input field, and for clearing the field after the text message is sent.
  //To manage interactions with the text field
  final TextEditingController _textController = new TextEditingController();
  @override
  Widget build(BuildContext context){
  return new Scaffold(
    appBar: new AppBar(
      title: new Text("ChatBox"),
    ),
    body: new Column(
      children: <Widget>[
        new Flexible(child: new ListView.builder(
          padding: new EdgeInsets.all(8.0),
          reverse: true,
          itemBuilder: (_, int index) => _messages[index],
          itemCount: _messages.length,
          ),
        ),
        new Divider(height: 1.0),
        new Container(
          decoration: new BoxDecoration(
            color: Theme.of(context).cardColor),
            child: _buildTextComposer(),
          ),
      ],
    ),
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
    Message msg = new Message(
      text: text,
    );
    //to modify _messages and to let the framework know this part of the widget tree has changed and it needs to rebuild the UI.
    setState((){
     _messages.insert(0, msg);
    });
  }
}

class Message extends StatelessWidget{
  Message({this.text});
  final String text;
  static const String _name = "Your name";
  @override
  Widget build(BuildContext context){
    return new Container(
      margin: const EdgeInsets.symmetric(vertical: 10.0),
      child: new Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          new Container(
            margin: const EdgeInsets.only(right:16.0),
            child: new CircleAvatar(child: new Text(_name[0])),
          ),
          new Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              new Text(_name, style: Theme.of(context).textTheme.subhead,),
              new Container(
                margin: const EdgeInsets.only(top: 5.0),
                child: new Text(text),
              )
            ],
          )
        ],
      ),
    );
  }
}