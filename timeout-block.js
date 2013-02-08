/*
Lucid Generated Code
*/
function lucidDebug(uid,event) {
	try{
event.allAttributes_Lucid = "";
 for(var propertyName in event) {event.allAttributes_Lucid += propertyName+",";}		window.LucidWebPreviewDelegate.javascriptFunctionEntered_withEvent_(uid,event);
	} catch(err) { }
}


function lucidLog(uid,value) {
	try{
		console.log(value);
		window.LucidWebPreviewDelegate.lucidLog_withValue_(uid,value);
	} catch(err) { }
}




$(document).ready(function() {


//Lucid_LucidBinding_0_23_11205028931008022108329077973
/*lucidcode*/
$(/*luc!d_element*/document/*luc!d_element_end*/).bind(/*luc!d_event*/'ready'/*luc!d_event_end*/, function(event) {    
/*luc!d_debug*/	lucidDebug('11205028931008022108329077973',event);/*luc!d_debug_end*/
	/*luc!d_function*/myTimer_1(this,event)/*luc!d_function_end*/;    });
/*lucidcode_end*/
//EndLucid


});

//Lucid_LucidCreateElementAction_14_218_1436059265279358222774384812
function createGreenBox(senderObject, event) {
	lucidDebug('1436059265279358222774384812',event);
/*lucidcode*/
var temp = document.createElement(/*luc!d_tagname*/'DIV'/*luc!d_tagname_end*/);
/*luc!d_variable*/var chooseGreen/*luc!d_variable_end*/ = temp;
temp.setAttribute(/*luc!d_attr_0*/'style'/*luc!d_attr_0_end*/, /*luc!d_val_0*/'position:absolute;top:390px;left:9px;width:100px;height:100px;background-color:green'/*luc!d_val_0_end*/);
/*luc!d_element*/document.body/*luc!d_element_end*/.appendChild(temp);
/*lucidcode*/

/*luc!d_callback*/myTimer(senderObject,event);/*luc!d_callback_end*/

}
//EndLucid

//Lucid_LucidCreateElementAction_14_366_13467901710247478111759373
function createBlueBox(senderObject, event) {
	lucidDebug('13467901710247478111759373',event);
/*lucidcode*/
var temp = document.createElement(/*luc!d_tagname*/'DIV'/*luc!d_tagname_end*/);
/*luc!d_variable*/var chooseBlue/*luc!d_variable_end*/ = temp;
temp.setAttribute(/*luc!d_attr_0*/'style'/*luc!d_attr_0_end*/, /*luc!d_val_0*/'position:absolute;top:390px;left:121px;width:100px;height:100px;background-color:rgb(0,0,255)'/*luc!d_val_0_end*/);
/*luc!d_element*/document.body/*luc!d_element_end*/.appendChild(temp);
/*lucidcode*/

}
//EndLucid

//Lucid_LucidTimeoutAction_14_304_18064837104479126841138297253
function myTimer(senderObject, event) {
	lucidDebug('18064837104479126841138297253',event);
/*lucidcode*/
    var delayFunction = function() { /*luc!d_callback*/createBlueBox(senderObject,event);/*luc!d_callback_end*/ };
    setTimeout(delayFunction,/*luc!d_delay*/1000/*luc!d_delay_end*/);
/*lucidcode_end*/

}
//EndLucid

//Lucid_LucidTimeoutAction_14_153_53207523146650130924705166
function myTimer_1(senderObject, event) {
	lucidDebug('53207523146650130924705166',event);
/*lucidcode*/
    var delayFunction = function() { /*luc!d_callback*/createGreenBox(senderObject,event);/*luc!d_callback_end*/ };
    setTimeout(delayFunction,/*luc!d_delay*/1000/*luc!d_delay_end*/);
/*lucidcode_end*/

}
//EndLucid

