function init () {
    source(findFile("scripts", "config.js"));
    getHtmlApp();
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main() {
    
    toolbarTests();
    logoTests();    
       
}

function toolbarTests () {
    // Start Screen tab matches the application title
    waitFor("object.exists(':TabItem')", 20000);
    test.compare(findObject(":TabItem").text, "Choose a Role");
    
    // Start Screen has an application toolbar
    waitFor("object.exists(':qt_splithandle_.appToolbar_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.appToolbar_HTML_Object").visible, true);
    
    // Start Screen toolbar has a menu drawer button
    waitFor("object.exists(':qt_splithandle_.menu-drawer-button_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.menu-drawer-button_HTML_Object").visible, true);
    
    // Start Screen toolbar has a title
    waitFor("object.exists(':qt_splithandle_.appTitle_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.appTitle_HTML_Object").innerText, "Choose a Role");
}

function logoTests () {
    // A big pantheon log exists
    waitFor("object.exists(':qt_splithandle_.bigLogo_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.bigLogo_HTML_Object").visible, true);
}

