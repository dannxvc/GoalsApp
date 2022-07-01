import { createContext, useReducer } from "react";
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
const inicialState ={
    order: [],
    objects:{}
};
function reductor(state, action){
    switch(action.type){
        case 'add':{
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({...object, [goal.id]: goal}),{})
            };
            return newState;
        };
        case 'create':{
            const id= Math.random();
            //const id = action.goal.id;
            const newState = {
                order:[...state.order, id],
                objects:{
                    ...state.objects,
                    [id]:action.goal
                }
            };
            return newState;
        };
    }
};

const goals = reductor(inicialState, {type: 'add', goals: listMock});
export const Context = createContext(null);
//component to envolve the app, and give it this context
function Storage({children}) {
    //hook useReduces
    const[state, dispach] = useReducer(reductor ,goals);
    return (
        //to use the context i have to use Context as a component
        //value, attribute to share w all our components
        
        <Context.Provider value={[state, dispach]}>
            {children}
        </Context.Provider>
     );
}

export default Storage;