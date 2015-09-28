angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
			$scope.app = "Lista Telefonica";
			$scope.contatos = [];
			$scope.operadoras = [];
			$scope.adicionarContato = function(contato){
				//$scope.contatos.push(angular.copy(contato));
				$http.post("http://localhost:3412/contatos", contato).success(function(data){
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					carregarContatos();
				});
			};
			$scope.apagarContatos = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado) return contato;
				});
			};
			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			};
			$scope.ordenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
			}
			var carregarContatos = function(){
				$http.get("http://localhost:3412/contatos").success(function(data){
					$scope.contatos = data;
				});
			}
			var carregarOperadoras = function(){
				$http.get("http://localhost:3412/operadoras").success(function(data){
					$scope.operadoras = data;
				});
			}
			carregarContatos();
			carregarOperadoras();
});