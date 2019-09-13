 function doPost(e){
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1G4vFgtKRzhZieK571v0WZedCCZ8YY8xJXUBFFYKWYwE/edit#gid=0");
  var sheet = ss.getSheetByName("data"); //data q-a
  var xregis = ss.getSheetByName("userregis"); //data user+ref
  var data = JSON.parse(e.postData.contents)
  var userMsg = data.originalDetectIntentRequest.payload.data.message.text;
  var userId = data.originalDetectIntentRequest.payload.data.source.userId;

  //auth
  var regisx = xregis.getRange(2, 2, xregis.getLastRow(),xregis.getLastColumn()).getValues(); //check regis
  var ref = xregis.getRange(2, 1, xregis.getLastRow(),xregis.getLastColumn()).getValues(); //ref id

  //login pass
  for(var i = 0;i<regisx.length; i++){
     if(userId == regisx[i][0]){
     var login = true;
     //sheet func here
}
}
//Q-A here
if(login){
  var q = sheet.getRange(2, 1, sheet.getLastRow(),sheet.getLastColumn()).getValues(); //check regis
  for(var i = 0;i<q.length; i++){
     if(userMsg == q[i][0]){
      var ans = true;
var a = sheet.getRange(i+2,2).getValue();
       var result = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line":  {
  "type": "text",
  "text": a
}
   }
  }
 ]
}

     }
   }
   if(!ans){
        var result = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line":  {
  "type": "text",
  "text": "ไม่พบคำตอบ"
}
   }
  }
 ]
}   
   }
}

//register & check
for(var i = 0;i<ref.length; i++){
   if(userMsg == ref[i][0]){
     var checkcode = xregis.getRange(i+2,3).getValue();

     for(var x = 0;x<regisx.length; x++){
        if(userId == regisx[x][0]){
          var checkxregis = "already exists";
          }
         }
   if(checkcode !== "pass" && checkxregis !== "already exists" ){
     var login = true;
     xregis.getRange(i+2,2).setValue(userId);
     xregis.getRange(i+2,3).setValue("pass");
              var result = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line":  {
  "type": "text",
  "text": "ลงทะเบียนสำเร็จ"
    }
        
   }
  }
 ]
}
}
else{
            var result = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line":  {
  "type": "text",
  "text": "รหัสนี้มีการลงทะเบียนแล้วหรือท่านลงทะเบียนซ้ำ"
    }
        
   }
  }
 ]
}
}
}
}

if(!login){
         var result = {
    "fulfillmentMessages": [
  {
    "platform": "line",
    "type": 4,
    "payload" : {
    "line":  {
  "type": "text",
  "text": "ท่านยังไม่ได้ลงทะเบียน\nกรุณาพิมพ์รหัสลงทะเบียน"
}
   }
  }
 ]
}
}


      var replyJSON = ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    return replyJSON;
 }