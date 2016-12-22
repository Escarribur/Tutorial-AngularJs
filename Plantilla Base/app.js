angular.module('proyectoTest', [])    //nombre de la aplicacion en angular "proyectoTest"
	.controller('MainCtrl', ['$scope',	//nombre del controlador MainCtrl e injeccion de componentes de ng $scope

function($scope){			//  funcion que utiliza scope  
	$scope.test = 'Hello world!';	//definicion de variable con $scope accesible para la template
	$scope.posts = [				//definicion de array con diccionarios? llave:valor 
		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 2},
		{title: 'post 3', upvotes: 15},
		{title: 'post 4', upvotes: 9},
		{title: 'post 5', upvotes: 4}
	];

	$scope.addPost = function(){		//funcion accesible desde la template addPost
		if(!$scope.title || $scope.title === '') { return; }  //se revisa que exista titulo de no ser asi no hace nada y retorna
		$scope.posts.push({				//agrega (push) un post con los datos de la template
			title: $scope.title,
			link: $scope.link,
			upvotes: 0					//valor agregado por defecto
		});
		$scope.title = '';				//importante limpiar formulario :)
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {	//funcion accesible desde template con parametro
		post.upvotes += 1;						//accede a variable dentro del parametro
	};

}
]);
