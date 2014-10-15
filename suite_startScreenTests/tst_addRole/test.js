function init () {
    source(findFile("scripts", "config.js"));
    getHtmlApp();
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main () {
    
    addRoleTests();
}

function addRoleTests() {
    
    // clicking the add card opens the add role dialog
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);
    mouseClick(waitForObject(":qt_splithandle_.Add Role_HTML_Object"), 10, 10, 0, Qt.LeftButton);
    snooze(1);
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.closeButton_HTML_Object")); 
    snooze(1);
    
    // clicking the fab opens the add role dialog
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);
    mouseClick(waitForObject(":qt_splithandle_.fab_HTML_Object"), 10, 10, 0, Qt.LeftButton);
    snooze(1);
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.closeButton_HTML_Object"));    
    
    // add role dialog has a close button
    mouseClick(waitForObject(":qt_splithandle_.Add Role_HTML_Object"), 10, 10, 0, Qt.LeftButton);
    snooze(1);
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.closeButton_HTML_Object")); 
    snooze(1);
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);     
    
    // add role dialog has a save button
    mouseClick(waitForObject(":qt_splithandle_.Add Role_HTML_Object"), 10, 10, 0, Qt.LeftButton);
    snooze(1);
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), true);    
    clickButton(waitForObject(":qt_splithandle_.saveButton_HTML_Object")); 
    snooze(1);
    test.compare(object.exists(":qt_splithandle_.roleNameInput_text"), false);      

}
