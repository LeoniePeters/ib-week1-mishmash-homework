//I feel like this could be shorter. Didn't figure out how yet.

function groupAges(object,person){
    if(person.age <=20){
        if(!object['20 and younger']){
            object['20 and younger'] = [];
        } 
        object['20 and younger'].push(person);
        return object; 
        }
    if(person.age <= 30){
        if(!object['21-30']){
            object['21-30'] = [];
        } 
        object['21-30'].push(person);
        return object;
        }
    if(person.age <= 40){
        if(!object['31-40']){
            object['31-40'] = [];
        }
        object['31-40'].push(person);
        return object;
        }
    if(person.age <= 50){
        if(!object['41-50']){
            object['41-50'] = [];
        }
        object['41-50'].push(person);
        return object;
        }
    if(person.age > 50){
        if(!object['51 and older']){
            object['51 and older'] = [];
        } 
        object['51 and older'].push(person);
        return object;
        }
}

function groupAdultsByAgeRange(array){
    return array.filter(person => person.age >= 18).reduce(groupAges, {})
}

module.exports = {groupAdultsByAgeRange}