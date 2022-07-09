export async function requestGoals() {
   const response = await fetch ( '/goals.json' );
   const goals = await response.json();
 //  const response = await fetch ( '/api/goals' );
  // const goals = await response.json();
   return goals;
}
