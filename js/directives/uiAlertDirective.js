angular.module("listaTelefonica").directive("uiAlert", function(){
	return {
		templateUrl : "view/alert.html",
		scope: {
			title : "@",
			message : "="
		}
	}
})