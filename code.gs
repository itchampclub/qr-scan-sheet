var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/edit#gid=0");
var sheet = ss.getSheetByName("Sheet1"); //sheet name

function doGet(e) {
  if(e.parameter.hasOwnProperty('code')){
var bc = e.parameter.code;
sheet.appendRow([bc]);
  return ContentService.createTextOutput(JSON.stringify(
    {"res": "บันทึกสำเร็จ",}) ).setMimeType(ContentService.MimeType.JSON); 
  }else{
  return HtmlService.createHtmlOutputFromFile('index');
  }
}
