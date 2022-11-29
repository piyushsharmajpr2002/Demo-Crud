// Delete - User 

function userDelete(id){
    const http=new XMLHttpRequest();
    http.open("DELETE","https://personal-vtuksnns.outsystemscloud.com/BasicConcepts_CS/rest/Studends/RestApiDelete?StudentIdentifier="+id);
    http.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    http.send(JSON.stringify({"RollNo":id}));

    http.onreadystatechange=function (){
        if(this.readyState==4){
            const userData=JSON.parse(this.response);
            Swal.fire(userData['message']);
            //getUser();
            //alert("Deleted Successsfully!!");
        }
     };
 }