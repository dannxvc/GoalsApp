import Goal from "./Goal";
const listMock =[{
    "id":"1",
    "details":"Correr por 30 minutos",
    "period":"day",
    "events":1,
    "icon":"✈️",
    "goal":365,
    "term":"2030-01-01",
    "completed":"100"
},
{
    "id":"2",
    "details":"Leer libros",
    "period":"year",
    "events":6,
    "icon":"📖",
    "goal":60,
    "term":"2030-01-01",
    "completed":"50"
}];

function List() {
    return ( 
        //renderizar the goals
        listMock.map(goal =><Goal{...goal}></Goal>)
    );
}

export default List;

