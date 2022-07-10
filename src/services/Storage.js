import { createContext, useReducer } from "react";

// const memory = localStorage.getItem('goals');
// const inicialState = memory
//     ? JSON.parse(memory)
//     : {
//         order: [],
//         objects:{}
//     };

const inicialState = {
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
          //  localStorage.setItem('goals',JSON.stringify(newState));
      //    console.log(newState);
            return newState;
        };
        case 'create':{
            //const id= String(Math.random());
            const id = action.goal.id;
            const newState = {
                order:[...state.order, id],
                objects:{
                    ...state.objects,
                    [id]: action.goal
                }
            };
         //   localStorage.setItem('goals',JSON.stringify(newState));
            return newState;
        };
        case 'update':{
            const id = action.goal.id;
            state.objects[id] = {
                    ...state.objects[id],
                    ...action.goal
            };
            const newState = {...state};
         //   localStorage.setItem('goals',JSON.stringify(newState));
            return newState;
        };
        case 'deletegoal':{
            const id = action.id;
            const newOrder = state.order.filter(item => item!==id);
            delete state.objects[id];
            const newState = {
                order: newOrder,
                objects: state.objects
            };
           // localStorage.setItem('goals',JSON.stringify(newState));
            return newState;
        };
        default:
            throw new Error();
    }
};

//reductor(inicialState, {type: 'add', goals: listMock});
export const Context = createContext(null);
//component to envolve the app, and give it this context
function Storage({children}) {
    //hook useReduces
    const[state, dispach] = useReducer(reductor ,inicialState);
    return (
        //to use the context i have to use Context as a component
        //value, attribute to share w all our components
        
        <Context.Provider value={[state, dispach]}>
            {children}
        </Context.Provider>
     );
}

export default Storage;