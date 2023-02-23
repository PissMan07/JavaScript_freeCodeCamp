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
    if (val == 12){
        return "EQUAL";
    } else{
        return "UNEQUAL";
    }
}
b(12) //will return "EQUAL"
b(10) //will return "UNEQUAL"
b("12") //will return "EQUAL" (Cool how you can have strings)

//Cool Syntax
    //'&&': represents and
    //'||': represents or
