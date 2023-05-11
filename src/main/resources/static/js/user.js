let index = {
	init: function(){
		$("#btn--save").on("click", () => {
			this.save();		
		});		
		$("#btn--login").on("click", () => {
			console.log("12");
			this.login();
			
		});
	},
	save: function(){
	// 회원가입
	 let data = {
		 username: $("#username").val(),
		 password: $("#password").val(),
		 email: $("#email").val()		 
	 };
	 $.ajax({
		 type: "POST",
		 url: "/api/user",
		 contentType: "application/json; charset=utf-8",
		 data: JSON.stringify(data), // HTTP BODY
		 dataType: "json" // 응답시 데이터 타입
	 }).done(function(res){
		 console.log(res);
		 if(res.status == "OK"){
			 alert("회원가입 성공");
			 // 화면 이동 - 로그인 페이지
			 location.href= "/loginPage";
		 }		 		 
	 }).fail(function(error){
		 console.log(error);
	 });
	},
	login: function(){
		let data = {
			username: $("#username").val(),
			password: $("#password").val()
		}
		
		$.ajax({
			type: "POST",
			url: "/api/user/login",
			contentType: "application/json; charset=utf-8",
			data: JSON.stringify(data),
			dataType: "json"
		}).done(function(res){
			// if(res) 로그인 처리 
			console.log(res);
			alert("로그인 완료되었습니다");
			location.href= "/";
		}).fail(function(error){
			console.log(error);
			alert("로그인에 실패하였습니다")
		});
	}
	
};

index.init();

