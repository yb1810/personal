$(function(){
	$("#phone").on("blur",function(){
		let reg = /^1[^0126]\d{9}$/;
		let v=$("#phone").val();
		if($("#phone").val()==""){
			alert("亲，密码不能为空")
		}else if (!reg.test(v)){
			alert("亲，密码格式不正确")
		}
		else{
			$.get("php/check02.php",{userphone:$("#phone").val()},function(data){
		  		// if (data=="1"){
		  		// 	alert("亲，该账户可以使用");
		  		// }else (data=="0"){
		  		// 	alert("亲，该账户已被使用");
		  		// }
		// }
		// $.ajax({
		// 	type:"GET", 
		// 	url:("php/check02.php",{userphone:$("#phone").val()},
		// 		dataType:"json",
		// 		scuccess:function(data){
		// 		      console.log(data)
		// // 		}
		// })
		// }
	})
})
