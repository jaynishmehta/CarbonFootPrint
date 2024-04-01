
    //all the functions
    const saveToLocalstorage1 = (url)=>{
    const petrol = document.getElementById("petrol").value;
    localStorage.setItem("petrol",petrol)
    
    console.log("Price saved to local storage");
    window.location.href = url
}
    const saveToLocalstorage2 = (url)=>{
        const electricity=document.getElementById("electricity").value;
        localStorage.setItem( "electricity" , electricity);
        console.log("price saved to local storage");
        window.location.href=url;
    }

    const saveToLocalstorage3 =(url)=> {
        const two_Wheels = document.getElementById('2-Wheels').value;
        localStorage.setItem("two_Wheels",two_Wheels);
        console.log("2 wheels saved to local storage");
        window.location.href=url;
    }
    
//final result
    const petrol = localStorage.getItem('petrol');
    const electricity=localStorage.getItem('electricity'); 
    const  two_Wheels=localStorage.getItem('two_Wheels');
    result.innerHTML= `petrol ${petrol} , electricity ${electricity},2-wheels ${two_Wheels} `;