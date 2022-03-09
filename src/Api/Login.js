import axios from 'axios';

export default function loginApi(body){
    axios.post('https://assignment-venturepact.herokuapp.com/login ', body).then((response) =>{
        console.log(response);
        localStorage.setItem("email",response.Data.email);
        // localStorage.setItem("id",response.Data.id);
        // localStorage.setItem("firstName",response.Data.firstName);
        // localStorage.setItem("lastName",response.Data.lastName);
        // localStorage.setItem("mobileNumber",response.Data.mobileNumber);
        // localStorage.setItem("Organization",response.Data.Organization.name);
        // localStorage.setItem("Organization",response.Data.Organization.id);
        // localStorage.setItem("Organization",response.Data.Organization.name);
        // localStorage.setItem("Organization",response.Data.Organization.logoUrl);
    })
}