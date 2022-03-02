const baaperTaka = 100000;
function patriChai(age, earnings){
    console.log(age);
    console.log(earnings);
    // console.log(trueAge);
    const decision = canMarry(15000);
    console.log(decision);

    var trueAge = age + 7;

    function canMarry(expense){
        const remaining = baaperTaka + earnings - expense;
        if(remaining > 1000){
            const show = 500;
            console.log(show);
            return true;
        }
        return false;
    }
}
patriChai(22, 50000);