function insertData(){

	
	
	//ref.child("new Stuff").set("information");
	var label = document.getElementById("edtLabel").value;
	var topic = document.getElementById("edtTopic").value;
	var subject = document.getElementById("spinSubjects").value;
	var year = document.getElementById("spinYears").value;
	var quesNum = document.getElementById("edtNumber").value;
	var question = document.getElementById("edtQuestion").value;
	var ans1 = document.getElementById("edtAns1").value;
	var ans2 = document.getElementById("edtAns2").value;
	var ans3 = document.getElementById("edtAns3").value;
	var ans4 = document.getElementById("edtAns4").value;
	var ans5 = document.getElementById("edtAns5").value;
	var correct = document.getElementById("edtCorrect").value;
	
	var reff = firebase.database().ref("BECE/Raw/"+subject+"/"+year+"/"+quesNum);
	
	if(topic!=="" && label===""){
		reff.set({
	
	"Topic" : topic,
	"Question" : question,
	"A" : ans1,
	"B" : ans2,
	"C" : ans3,
	"D" : ans4,
	"E" : ans5,
	"Ans" : correct
	
	});
	}else if(topic==="" && label!==""){
		reff.set({
	"Label" : label,
	
	"Question" : question,
	"A" : ans1,
	"B" : ans2,
	"C" : ans3,
	"D" : ans4,
	"E" : ans5,
	"Ans" : correct
	
	});
	}else if(topic==="" && label===""){
		reff.set({
	
	"Question" : question,
	"A" : ans1,
	"B" : ans2,
	"C" : ans3,
	"D" : ans4,
	"E" : ans5,
	"Ans" : correct
	
	});
	}else{
	
	reff.set({
	"Label" : label,
	"Topic" : topic,
	"Question" : question,
	"A" : ans1,
	"B" : ans2,
	"C" : ans3,
	"D" : ans4,
	"E" : ans5,
	"Ans" : correct
	
	});
	}
}