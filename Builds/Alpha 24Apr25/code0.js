gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDBkgObjects1= [];
gdjs.MenuCode.GDBkgObjects2= [];
gdjs.MenuCode.GDPlay_9595btnObjects1= [];
gdjs.MenuCode.GDPlay_9595btnObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlay_95959595btnObjects1Objects = Hashtable.newFrom({"Play_btn": gdjs.MenuCode.GDPlay_9595btnObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlay_95959595btnObjects1Objects = Hashtable.newFrom({"Play_btn": gdjs.MenuCode.GDPlay_9595btnObjects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play_btn"), gdjs.MenuCode.GDPlay_9595btnObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPlay_9595btnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_9595btnObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_btn"), gdjs.MenuCode.GDPlay_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlay_95959595btnObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPlay_9595btnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlay_9595btnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_9595btnObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_btn"), gdjs.MenuCode.GDPlay_9595btnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlay_95959595btnObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPlay_9595btnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlay_9595btnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlay_9595btnObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBkgObjects1.length = 0;
gdjs.MenuCode.GDBkgObjects2.length = 0;
gdjs.MenuCode.GDPlay_9595btnObjects1.length = 0;
gdjs.MenuCode.GDPlay_9595btnObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
gdjs.MenuCode.GDBkgObjects1.length = 0;
gdjs.MenuCode.GDBkgObjects2.length = 0;
gdjs.MenuCode.GDPlay_9595btnObjects1.length = 0;
gdjs.MenuCode.GDPlay_9595btnObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
