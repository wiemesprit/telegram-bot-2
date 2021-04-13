const { Telegraf } = require('telegraf')
const express = require('express')
const mongoose = require('mongoose')

const router = express.Router();

const app = express();

mongoose.connect('mongodb://localhost/uploadimages', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Schema = mongoose.Schema;

const noteSchema = new Schema({
  username: String,
  appname: String,
  chat_id: Number, 
  user_id: Number,
  templname: String,
  teachername: String,
  lessonname: String,
  eventname: String,
  news:String,
});
const Note = mongoose.model('Note', noteSchema);



const bot = new Telegraf('1757050601:AAGGcR3JK18-Y3Ef6BKkBlkM14eaaJVfrLw')

//var text = ctx.update.message.text;
//var username = ctx.from.username;


bot.start((ctx)=>{
  var username = ctx.from.username;
  //console.log(ctx)
ctx.reply("Welcome @"+username+" !\n Please enter your application's name")

});
bot.help((ctx)=>{


  ctx.reply("this bot can perform the following commandes\n -/start\n -/help\n -/info")
  
  })
  bot.hears("/info",(ctx)=>{

    var username = ctx.from.username;
    var chat_id =ctx.chat.id;
    var message_id = ctx.update.message.message_id;
    console.log(ctx)
  ctx.reply("username: " + username);
  ctx.reply("chat id: " + chat_id);
  ctx.reply("message id: " + message_id);
    
    })
   
    bot.hears("about us",(ctx)=>{
      const myNote = new Note({
        templname: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
        console.log('about us Saved!!!!!!');
       });
       ctx.reply(username + "would you setup the items of the template please!!");
    });
    
    bot.hears("events",(ctx)=>{
      const myNote = new Note({
        templname: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
        console.log('events Saved!!!!!!');
       });
       ctx.reply(username + "would you setup the items of the template please!!");
    });
    bot.hears("main1",(ctx)=>{
      ctx.reply("please type teachers's name!!");
      const myNote = new Note({
        templname: ctx.update.message.text,
        teachername: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
         
        console.log('main1 & teacher Saved!!!!!!');
      
       });
          });
    bot.hears("lesson",(ctx)=>{
      const myNote = new Note({
        templname: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
        console.log('lesson Saved!!!!!!');
       });
       ctx.reply(username + "would you setup the items of the template please!!");
    });
    
    bot.hears("main2",(ctx)=>{
      const myNote = new Note({
        templname: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
        console.log('main2 Saved!!!!!!');
       });
       ctx.reply(username + "would you setup the items of the template please!!");
    });
    
    bot.hears("news",(ctx)=>{
      const myNote = new Note({
        templname: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
        console.log('news Saved!!!!!!');
       });
       ctx.reply(username + "would you setup the items of the template please!!");
    });
    bot.hears("sport",(ctx)=>{
      const myNote = new Note({
        templname: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
        console.log('sport Saved!!!!!!');
       });
       ctx.reply(username + "would you setup the items of the template please!!");
    
    });
    bot.hears("teachers",(ctx)=>{
      const myNote = new Note({
        templname: ctx.update.message.text,
       });
     
       myNote.save((err, mess) => {
        console.log('teachers Saved!!!!!!');
       
    });
    
       
    });
 
bot.on("message",(ctx)=>{
  var text = ctx.update.message.text;
  var username = ctx.from.username;
    var chat_id =ctx.chat.id;
  if (text == "/start" && text !=="/help" &&  text !=="/info" &&  text !=="about us" && text !== "events" && text !== "main1" && text !=="main2" && text !=="lesson" &&text !== "news" && text !=="sport" && text !=="teachers"){
  ctx.telegram.sendMessage(ctx.chat.id,'your appliaction name "'+ text +'" setted successfully! ')
  
  const myNote = new Note({
   username: username,
    appname: text,
    chat_id: chat_id,
    user_id: ctx.from.id,
  });

  myNote.save((err, mess) => {
   console.log('Saved! ✅');
  });

//}});
//bot.on('photo',(ctx)=>{
    ctx.telegram.sendMessage(ctx.chat.id,'Please choose the category of your project',{
    
    reply_markup :{
    
    inline_keyboard :[
    
    
      [{text:"Education",callback_data:"A1"}],
    
      [{text:"Shopping & events",callback_data:"A2"}],

      [{text:"Buisiness & Finacial",callback_data:"A3"}],
    
      [{text:"Healthcare,Fitness & Wellness",callback_data:"A4"}]
    
    ]
  
  }
  
  }) 
    
bot.action('A1',(ctx)=>{

  ctx.reply("Please choose a template for your "+'Education'+" project");

  ctx.reply(". Main1");
  ctx.replyWithPhoto({source:'images/main.png'}),
  ctx.reply(". Main2");
  ctx.replyWithPhoto({source:'images/image.png'})
 
 


})
bot.action('A2',(ctx)=>{
 
 ctx.reply("Please choose a template for your 'Shopping & events' project")
 ctx.reply(". Main1");
 ctx.replyWithPhoto({source:'images/image.png'})
 ctx.reply(". Main2");
 ctx.replyWithPhoto({source:'images/main.png'})
 ctx.reply(". Events");
ctx.replyWithPhoto({source:'images/events.png'})

})
bot.action('A3',(ctx)=>{
 ctx.reply("Please choose a template for your 'Buisiness & Finacial' project")
 ctx.reply(". Main1");
 ctx.replyWithPhoto({source:'images/image.png'})
 ctx.reply(". Main2");
 ctx.replyWithPhoto({source:'images/main.png'})
 ctx.reply(". Events");
ctx.replyWithPhoto({source:'images/events.png'})
ctx.reply(". News");
ctx.replyWithPhoto({source:'images/news.png'})
ctx.reply(". About us");
ctx.replyWithPhoto({source:'images/about us.png'})

})

bot.action('A4',(ctx)=>{
 ctx.reply("Please choose a template for your 'Healthcare,Fitness & Wellness' project")
 ctx.reply(". Main1");
 ctx.replyWithPhoto({source:'images/image.png'})
 ctx.reply(". Main2");
 ctx.replyWithPhoto({source:'images/main.png'})
 ctx.reply(". Events");
ctx.replyWithPhoto({source:'images/events.png'})
ctx.reply(". News");
ctx.replyWithPhoto({source:'images/news.png'})
ctx.reply(". About us");
ctx.replyWithPhoto({source:'images/about us.png'})
ctx.reply(". Sport");
ctx.replyWithPhoto({source:'images/Sport.png'})

});


}});



  
  
  

bot.command('add_data',(ctx)=>{



router.post()




})

bot.launch()










app.listen(3000,()=>console.log('sever started ...'));


