export async function requestGoals() {
   const response = await fetch ( '/goals.json' );
   const goals = await response.json();
 //  const response = await fetch ( '/api/goals' );
  // const goals = await response.json();
   return goals;
}
export async function requestGoal() {
   const response = await fetch ( '/goal.json' );
   const goal = await response.json();
   return goal;
}
export async function createGoal() {
   const response = await fetch ( '/goal.json' );
   const goalCreated = await response.json();
   console.log("Goal created: ",goalCreated);
   return goalCreated;
}
export async function updateGoal() {
   const response = await fetch ( '/goal.json' );
   const goalUpdated = await response.json();
   console.log("Goal updated: ",goalUpdated);
   return goalUpdated;
}
export async function deleteGoal() {
   const response = await fetch ( '/goal.json' );
   const goalDeleted = await response.json();
   console.log("Goal deleted: ",goalDeleted.id);
   return goalDeleted.id;
}
