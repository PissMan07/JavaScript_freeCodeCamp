//If Statements
function a(val){
    if (val){
        return "TRUE";
    } else{
        return "FALSE";
    }
}
a(true) //will return "TRUE"
a(false) //will return "FALSE"

//Having  "===" will have the system only accept exact type like 2 = "2" will not work
//Having "!==" wil be the reverse of "==="
function b(val){
    if (val === 12){
        return "ABSOLUTE EQUAL";
    } else if (val==12){
        return "EQUAL";
    } else {
        return "UNEQUAL";
    }
}
b(12); //will return "ABSOLUTE EQUAL"
b(10); //will return "UNEQUAL"
b("12"); //will return "EQUAL" (Cool how you can have strings)

//Cool Syntax
    //'&&': represents and
    //'||': represents or

//Switch, Case, and Default
function c(val){
    let a = ""
    switch(val){ //switch is simplified if
        case 12: //will act as val === 12
            a = "EQUAL";
            break;
        default: //will act as a final else or everything elese
            a = "UNEQUAL"
            break;
    }
    return a;
}
c(12); //will return "EQUAL"
c(10); //will return "UNEQUAL"
c("12"); //will return "UNEQUAL"

function d(val){
    switch(val){ //If break not present in case then it will go to next case
        case 1: //Will go here first
        case 2: //will go here second
        case 3: //will go here third and stop
            break;
        case 4:
        case 5:
        case 6:
            break;
    }
    return a;
}
d(1) //will break at 3
d(4) //will break at 6
d(7) //nothing will happen