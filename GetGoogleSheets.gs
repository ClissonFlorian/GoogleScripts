
function GetGoogleSheets() {
  
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = spreadsheet.getSheets()
    var array = [];
    
    for(i in sheets){
         
        var sheet = sheets[i]
        var sheetName = sheet.getSheetName();
        var sheetId = sheet.getSheetId();
      
        // get sheet url        
        var url = '';
        url += spreadsheet.getUrl();
        url += '#gid=';
        url += sheet.getSheetId();
      
        var datasheet = [sheetName,url,sheetId];
        array.push(datasheet);
       
    }
    
    Logger.log(array);
    
    // Set data to "Resume" Sheet
    var ResumeSheet = spreadsheet.getSheetByName("Resume");
    var range = ResumeSheet.getRange("A1:C"+array.length);
    range.setValues(array);
}
