let AddPower = function(config:any){
    return function(targetClass:any){
        return class{
            title = new targetClass().title;
            power = config.power;
            city = config.city;
        }
    }
}


@AddPower({
    power : 6,
    city : 'Gotham'
})
class CommonMan{
    title='Bruce Wayne';
};

let batman = new CommonMan()

console.log(batman);