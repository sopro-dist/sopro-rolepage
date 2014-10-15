function init () {
    source(findFile("scripts", "config.js"));
    getHtmlApp();
}

// close the open tab at the end of testing
function cleanup () {
    clickButton(waitForObject(":Container_CloseButton"));    
}

function main () {
    
    roleCardTests();
}

function roleCardTests() {
    waitFor("object.exists(':qt_splithandle_.roleName-0_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.roleName-0_HTML_Object").visible, true); 
    test.compare(findObject(":qt_splithandle_.roleName-0_HTML_Object").innerText, "VOODOO");
    test.compare(object.exists(':qt_splithandle_.roleAvatar-0_HTML_Object'), true);
    waitFor("object.exists(':qt_splithandle_.roleAvatar-0_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.roleAvatar-0_HTML_Object").visible, true);  
    
    /* test to be implemented if/when description is spec'd
    waitFor("object.exists(':qt_splithandle_.roleDescription-0_HTML_Object')", 20000);
    test.compare(findObject(":qt_splithandle_.roleDescription-0_HTML_Object").visible, true);
    */
}
