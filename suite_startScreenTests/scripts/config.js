var applicationPath = "file:///home/voodoo/cprojects/sopro-rolepage/index.html";

//open the application in the current browser tab
var getHtmlApp = function () {
    startApplication("SocietyPro");
    waitForObjectItem(":Navigation_QTreeWidget", "Web Browser");
    clickItem(":Navigation_QTreeWidget", "Web Browser", 71, 9, 0, Qt.LeftButton);
    while (findObject(":Container_QTabBar").count > 2) {
        clickButton(waitForObject(":Container_CloseButton"));
    }
    if (findObject(":_QLineEdit").displayText == "") {
        mouseClick(waitForObject(":_QLineEdit"), 294, 15, 0, Qt.LeftButton); 
    } else {
        openContextMenu(waitForObject(":_QLineEdit"), 275, 12, 0);
        activateItem(waitForObjectItem(":SocietyPro v*.qt_edit_menu_QMenu", "Select All"));
    }; 
    type(waitForObject(":_QLineEdit"), applicationPath);
    type(waitForObject(":_QLineEdit"), "<Return>");    
}

