//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2009 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------



function preSubmitHandler(){
	submitFinishHandler();
}


function submitFinishHandler (submitFinishMessage) {

	submitCancelHandler();
}

function submitCancelHandler(){

	top.goBack();
}




  