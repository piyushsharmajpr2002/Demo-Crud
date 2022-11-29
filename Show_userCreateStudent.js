// Show User Create Student 
function showUserCreateBox(){
    Swal.fire({
        title: 'CREATE STUDENT',
        html:

        `<input id="id" type="hidden">
    <input type="text" name="inp_firstname"id="inp_firstname"class="swal2-input"placeholder="First Name">

    <input type="text" name="inp_lastname"class="swal2-input"id="inp_lastname"placeholder="Last Name"> 

    <textarea name="add" id="address" cols="30"class="swal2-input" rows="10"placeholder="Address"></textarea>
    </div>
    <input type="integer"name="contact_no"id="contact_no"class="swal2-input"placeholder="ContactNo">
   <div>
         <label> Blood Group </label>
    <select name="blood_group" id="blood_group"class="swal2-input">
            <option value="A Positive">A Positive</option>
            <option value="B Positive">B Positive</option>
            <option value="AB Positive">AB Positive</option>  
            <option value="AB Positive">O Positive</option>  
        </select>
       </div>
       <div>
            <label>&nbsp;Department </label>
            <select name="department" id="department"class="swal2-input">
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
                <option value="Science">Science</option>
            </select>
             </div>
            <div>
            <br>
            <label>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                Male&nbsp;<input type="radio"name="gender"id="gender"value="Male">
                Female&nbsp;<input type="radio"name="gender"id="gender"value="Female>
                Transgender<input type="radio"name="gender"id="gender"value="Transgender">
              </div>
            `,
        
        focusConfirm: false,
        preConfirm:()=>{
            userCreate();
        }
    })
}