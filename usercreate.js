function userCreate() {

    const fname = document.getElementById("inp_firstname").value;
    
      const lname = document.getElementById("inp_lastname").value;
    
      const address = document.getElementById("address").value;
    
      const blood_group = document.getElementById("blood_group").value;
    
      const gender = document.getElementById("gender").value;
    
      const contact_no = document.getElementById("contact_no").value;
    
      const depart=document.getElementById("department").value;
      
    const http = new XMLHttpRequest();
    
    http.open("POST", "https://personal-vtuksnns.outsystemscloud.com/BasicConcepts_CS/rest/Studends/EditRestApi");
    http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    http.send(JSON.stringify({
      "FirstName": fname,
      "LastName": lname,
      "Address": address,
      "BloodGroup":blood_group,
      "Gender":gender,
      "ContactNo":contact_no,
      "Department":depart
    }));
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      const userData = JSON.parse(this.response);
      Swal.fire(userData['message']);
      //getUser();
      }
    };
    }