let vinniuserForm=document.getElementById("form");
const dhurgare =() => {
    let dhurga123= localStorage.getItem("ent");
    if(dhurga123){
        dhurga123=JSON.parse(dhurga123);

    }else{
        dhurga123=[];
    }
    return dhurga123;
}

let vinniue12 =dhurgare();
const dhurgadisp =() =>{
    const e1=dhurgare();
    const siddte=e1.map((entry) => {
        const namesidd= `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailsidd= `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordsidd= `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobsidd= `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermssidd= `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rowsidd= `<tr>${namesidd} ${emailsidd} ${passwordsidd} ${dobsidd} ${acceptTermssidd}</tr>`;
        return rowsidd;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${siddte} </table>`;
    let details=document.getElementById("ent");
    details.innerHTML = table;
}
const siddsaveUserForm = (event) => {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;
    const acceptedTermsAndConditions=document.getElementById("acceptTerms").checked;
    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions
    };
    vinniue12.push(entry);
    localStorage.setItem("ent",JSON.stringify(vinniue12));
    dhurgadisp();
}
vinniuserForm.addEventListener("submit",siddsaveUserForm);
dhurgadisp();


   
        function valcal()
        {   let ele= document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let d=new Date(dob);
            var tdd = new Date(); 
            var age=parseInt(tdd.getFullYear()) - parseInt(d.getFullYear());
            if (tdd.getMonth() < d.getMonth() || (tdd.getMonth() === d.getMonth() && tdd.getDate() < d.getDate())) age--;
            if(!(age>18 && age <55))
            {
                ele.setCustomValidity("age should between 18 and 55");
                ele.reportValidity();
            }
            else{
            ele.setCustomValidity("");
            }
        }

