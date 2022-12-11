        if (typeof(localStorage.getItem("visité"))!="string"){localStorage.setItem("visité", "0");}
        if (parseInt(localStorage.getItem("visité"))<2){localStorage.setItem("visité", "0");}
        else {localStorage.setItem("visité", parseInt(localStorage.getItem("visité"))+1);}
        console.log(localStorage.getItem("visité"));
