let app = angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
        $routeProvider.when("/",{templateUrl:"home.html"
		}).when("/about",{templateUrl:"about.html"
		}).when("/facilities",{templateUrl:"facilities.html"
		}).when("/gallery",{templateUrl:"gallery.html"
		}).when("/contact",{templateUrl:"contact.html"
		}).when("/room_services",{templateUrl:"room_services.html"
		}).when("/ac_service",{templateUrl:"ac_service.html"
		}).when("/internet",{templateUrl:"internet.html"
		}).when("/tour_guide",{templateUrl:"tour_guide.html"
		}).when("/medical_support",{templateUrl:"medical_support.html"
		}).when("/food_service",{templateUrl:"food_service.html"
		}).otherwise({redirectTo:"/"});
       });

	   app.controller("myctrl",function($scope,$http){
		const URL = "http://covid19.mathdro.id/api";

		$scope.title="Stay Safe Stay Healthy ";
		//calling API 
		$http.get(URL).then(
			(response)=>{
				console.log(response.data);
				$scope.all_data=response.data;
		
		},
		(error)=>{
			console.log(error);
		}
		);

		// get country data
			$scope.get_C_Data= () => {
			let country=$scope.cout;
			console.log(country);
			 if(country=="")
			{
				//$scope.cout_data = undefined;
				return;
			}
			//https://covid19.mathdro.id/api/countries/india/
			//'${URL}/countries/${country}'
			
			 $http.get('${URL}/countries/${country}')
			.then((response)=>{
				console.log(response.data);
				$scope.cout_data=response.data;
			},(error)=>{
				console.log(error);
			});
		};

		$scope.username = 'abc';
		$scope.email = '';


		$scope.disteneyimages=[{sno:1,b_title:"Hotel Raj",imgpath:"d1.jpg",category:"cafeteria",discription:"This is amost rated hotel in the world"},
		{sno:2,b_title:"Hotel Urvi",imgpath:"d2.jpg",category:"cafeteria",discription:"This is amost popular hotel in the world"},
		{sno:3,b_title:"Tour Baloli",imgpath:"d3.jpg",category:"cafeteria",discription:"Amazing thought gotting during exploration"},
		{sno:4,b_title:"Hotel Satvik",imgpath:"d4.jpg",category:"cafeteria",discription:"This is amost rated hotel in the world"},
		{sno:5,b_title:"Tour Guhati",imgpath:"d5.jpg",category:"cafeteria",discription:"This is amost joyfull "},
		{sno:6,b_title:"Hotel Rudra",imgpath:"d6.jpg",category:"cafeteria",discription:"This is amost rated hotel in india"},
		{sno:7,b_title:"Hotel Radishan",imgpath:"d7.jpg",category:"cafeteria",discription:"This is amost rated hotel in the world"},
		{sno:8,b_title:"Tour Jaipur",imgpath:"d8.jpg",category:"cafeteria",discription:"it's historical hotel in the world"},
		{sno:9,b_title:"Tour Ambala",imgpath:"g1.jpg",category:"garden",discription:"This is amost rated hotel in the world"},
		{sno:10,b_title:"Tour Rajasthan",imgpath:"g2.jpg",category:"garden",discription:"it's a most popular place"},
		{sno:11,b_title:"Hotel Dinkar",imgpath:"g3.jpg",category:"garden",discription:"This is amost rated hotel in the world"},
		{sno:12,b_title:"Rupali Laj",imgpath:"g4.jpg",category:"garden",discription:"Great envirment in evening session"},
		{sno:13,b_title:"Krishna Kunj",imgpath:"g5.jpg",category:"garden",discription:"This is amost reached hotel in the India"},
		{sno:14,b_title:"Hotel Bindiram ",imgpath:"g6.jpg",category:"garden",discription:"This is amost rated hotel in the world"},
		{sno:15,b_title:"Hotel Ram-Kripa",imgpath:"g7.jpg",category:"garden",discription:"This is a most popular hotel in the world"},
		{sno:16,b_title:"Hotel Ganech",imgpath:"g8.jpg",category:"garden",discription:"Management are to good and decoration also"},
		{sno:17,b_title:"Brajrani Guest House",imgpath:"h1.jpg",category:"hill",discription:"This is amost rated hotel in the world"},
		{sno:18,b_title:"Radha Laaj",imgpath:"h2.jpg",category:"hill",discription:"This is amost rated hotel in the world"},
		{sno:19,b_title:"Patel Guest House",imgpath:"h3.jpg",category:"hill",discription:"it's well organiged for each facalities"},
		{sno:20,b_title:"Hotel Laylord ",imgpath:"h4.jpg",category:"hill",discription:"This is amost rated hotel in the world"},
		{sno:21,b_title:"Hotel Mubarak",imgpath:"h5.jpg",category:"hill",discription:"This is Sweet and simple envirment Quntam place"},
		{sno:22,b_title:"Hotel Namah",imgpath:"h6.jpg",category:"hill",discription:"This is amost rated hotel in the world"},
		{sno:23,b_title:"Hotel ChinChual",imgpath:"h7.jpg",category:"hill",discription:"This is five star rated hotel in the world"},
		{sno:24,b_title:"Hotel Taj",imgpath:"h8.jpg",category:"hill",discription:"This is amost rated hotel in the world"},
		{sno:25,b_title:"Tour Hawamahal",imgpath:"k1.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"},
		{sno:26,b_title:"Hotel Afsana",imgpath:"k2.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"},
		{sno:27,b_title:"Hotel Giri",imgpath:"k3.jpg",category:"bedroom",discription:"it's historical place and  managed sciencetifically"},
		{sno:28,b_title:"Tour Brindawan",imgpath:"k4.jpg",category:"bedroom",discription:"This is historical place in the world"},
		{sno:29,b_title:"Hotel Brajwashi",imgpath:"k5.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"},
		{sno:30,b_title:"Hotel Goulier",imgpath:"k6.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"},
		{sno:31,b_title:"Tour Delhi",imgpath:"k7.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"},
		{sno:32,b_title:"Hotel Bachha",imgpath:"k8.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"},
		{sno:33,b_title:"Hotel Shyam Darbar",imgpath:"k9.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"},
		{sno:34,b_title:"Tour Mahali",imgpath:"k10.jpg",category:"bedroom",discription:"This is amost rated hotel in the world"}];
		
            $scope.tourplan=[{p_sn:101,planname:'Supreme',planduretion:5,allowmember:01,planprice:'7000-9000'},
			{p_sn:102,planname:'Silver',planduretion:10,allowmember:02,planprice:'14000-21000'},
			{p_sn:103,planname:'Gold',planduretion:10,allowmember:02,planprice:'17000-24000'},
			{p_sn:104,planname:'Prime',planduretion:10,allowmember:03,planprice:'21000-27000'}];
		
			$scope.facilities=[{f_sn:201,fname:'Room_Services',discription:"We are proiding 'Single,Double' bed set and addon as per your requirment",more:"More" },
			{f_sn:202,fname:'AC_Service',discription:"we are providing AC and Non-AC services ",more:"More"},
			{f_sn:203,fname:'Internet',discription:"wWe developed our scope level intranet ",more:"More"},
			{f_sn:203,fname:'Tour_Guide',discription:"Tour Gauidence are Most advencture ",more:"More"},
			{f_sn:204,fname:'Medical_Support',discription:"We are with you on any way 24/7 Medical Support ",more:"More"},
			{f_sn:205,fname:'Food_Service',discription:"Tea,coffee,Breackfast,Lunch,Dinner,Starter,Snacks,etc",more:"More"}];
		});
		
	
	