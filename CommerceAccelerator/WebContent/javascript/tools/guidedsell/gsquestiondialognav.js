//********************************************************************
//*-------------------------------------------------------------------
//*Licensed Materials - Property of IBM
//*
//* WebSphere Commerce
//*
//* (c) Copyright International Business Machines Corporation. 2002
//*     All rights reserved.
//*
//* US Government Users Restricted Rights - Use, duplication or
//* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
//*
//*--------------------------------------------------------------------

// @deprecated The Product Advisor feature has been deprecated. For more information, see <a href="../../../../../../com.ibm.commerce.productadvisor.doc/concepts/cpaintro.htm">Product Advisor</a>.

function submitErrorHandler(submitErrorMessage,submitErrorStatus){
//	alertDialog(submitErrorMessage);
	if(top.goBack){
		top.goBack();
	}
}

function submitFinishHandler(finishMessage){
	if(top.goBack){
		top.goBack();
	}
}

function submitCancelHandler(){
	if(top.goBack){
		top.goBack();
	}
}