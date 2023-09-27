# qr-scan-sheet

ไฟล์ index.html

        ค้นหา https://script.google.com/macros/s/AKfycbw5Im-kroA_uFs1ssUdPkVEKQ_GtE6Ircl2Fgt90MEFCyVNB1mbq1X5ki2KF517shct/exec
        * แทนที่ด้วย url webapp ของท่านเอง

      
ไฟล์ code.gs

        var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/xxxxxxxxxxxxxxx/edit#gid=586389379");
        var sheet = ss.getSheetByName("data");
        * แทนที่ด้วย sheet url, sheet name ของท่านเอง
