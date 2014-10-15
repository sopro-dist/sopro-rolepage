function init () {
    source(findFile("scripts", "config.js"));
    getHtmlApp();
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main () {
    
    hoverMenuTests();
}

function hoverMenuTests() {
    
    // hover menu is not visible until the mouse hovers over the card
    test.compare(object.exists(':qt_splithandle_.hoverBar-0_HTML_Object'), false);
    test.compare(findObject(':qt_splithandle_.hoverBar-0_HTML_Object').visible, false);
    mouseMove(":qt_splithandle_.roleCard-0_HTML_Object");
    test.compare(findObject(':qt_splithandle_.hoverBar-0_HTML_Object').visible, true);    
    
    // hover menu has an overflow menu button
    test.compare(object.exists(':qt_splithandle_.Overflow Menu_HTML_Object'), true);
    test.compare(findObject(':qt_splithandle_.Overflow Menu_HTML_Object').visible, true);
    
    // clicking the overflow menu button opens the overflow menu
    waitFor("object.exists(':qt_splithandle_.overflowMenu-0_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.overflowMenu-0_HTML_Object").visible, false);     
    clickButton(waitForObject(":qt_splithandle_.Overflow Menu_HTML_Object"));
    snooze(1);
    test.compare(findObject(":qt_splithandle_.overflowMenu-0_HTML_Object").visible, true);    
    
    // overflow menu has a 'delete' action
    test.compare(object.exists(":qt_splithandle_.Delete Role_HTML_Object"), true);
    test.compare(findObject(":qt_splithandle_.Delete Role_HTML_Object").visible, true);
    
    // overflow menu has a 'role settings' action
    // test.compare(object.exists(":qt_splithandle_.Role Settings_HTML_Object"), true);
    // test.compare(findObject(":qt_splithandle_.Role Settings_HTML_Object").visible, true);
    
}