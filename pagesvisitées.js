        if (typeof(localStorage.getItem("visité"))!="string"){localStorage.setItem("visité", "0");}
        if (localStorage.getItem("visité")=="3"){localStorage.setItem("visité", "0");}
        else {localStorage.setItem("visité", parseInt(localStorage.getItem("visité"))+1);}
        console.log(localStorage.getItem("visité"));
