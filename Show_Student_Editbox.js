// Show Student Edit Box 

function Show_Student_Editbox(id){
    const http=new XMLHttpRequest();
    http.open("GET","https://personal-vtuksnns.outsystemscloud.com/BasicConcepts_CS/rest/Studends/GetStudentById?StudentIdentifier="+id);
    http.send();
    http.onreadystatechange= function(){
        if(this.readyState == 4 && this.status == 200){
            //result = await result.json() 
            const userData=JSON.parse(this.response);
            console.log(userData[0]);
            const user=userData[0];
           // const user = Object.assign({}, userData['user']);
           // console.log("hiii");
           

            Swal.fire({
                title: 'EDIT STUDENT',
                html:
            `<input id="id" type="hidden" value="${user['RollNo']}">
<input id="inp_firstname"class="swal2-input"placeholder="First Name" value="${user['FirstName']}">

<input class="swal2-input"id="inp_lastname"placeholder="Last Name" value="${user['LastName']}"> 

<textarea name="add" id="address" cols="30"class="swal2-input" rows="10"placeholder="Address"value="${user['Address']}"></textarea>
</div>
<input name="contact_no"id="contact_no"class="swal2-input"placeholder="ContactNo"value="${user['ContactNo']}">
<div>
     <label> Blood Group </label>
<select name="blood_group" id="blood_group"class="swal2-input"value="${user['BloodGroup']}">
        <option value="A Positive">A Positive</option>
        <option value="B Positive">B Positive</option>
        <option value="AB Positive">AB Positive</option>  
        <option value="AB Positive">O Positive</option>  
    </select>
   </div>
   <div>
        <label>&nbsp;Department </label>
        <select name="department" id="department"class="swal2-input"value="${user['Department']}">
            <option value="Arts">Arts</option>
            <option value="Commerce">Commerce</option>
            <option value="Science">Science</option>
        </select>
         </div>
        <div>
        <br>
        <label>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            Male&nbsp;<input type="radio"name="gender"id="gender"value="Male">
            Female&nbsp;<input type="radio"name="gender"id="gender"value="Female">
            Transgender<input type="radio"name="gender"id="gender"value="Transgender">
          </div>`,

          focusConfirm:false,
          preConfirm:()=>{
            userEdit();
          }
    
            })
            document.getElementById('address').value = user['Address'];
        }
    };
}
// imulator 