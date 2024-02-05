let active = true;
const navigation = document.getElementById('navi');
const main = document.getElementById('mainCont');


function activeNavBar(){
    if(active === true){
        navigation.style.display = 'flex';
        navigation.style.gridArea = '2 / 1'
        main.style.gridArea = '2 / 2'
        active = !active;
    }else{
        navigation.style.display = 'none';
        main.style.gridArea = '2 / 1 / 2 / 3'
        active = !active;
    }
    
    
}
