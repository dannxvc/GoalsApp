export async function requestGoals() {
  const response = await fetch("/api/goals");
  const goals = await response.json();
  return goals;
}
export async function requestGoal(id) {
  const response = await fetch(`/api/goals/${id}`);
  const goal = await response.json();
  return goal;
}
export async function createGoal(goal) {
  const response = await fetch("/api/goals", {
    method: "POST",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });

  const goalCreated = await response.json();
  console.log("Goal created: ", goalCreated);
  return goalCreated;
}
export async function updateGoal(goal) {
  const response = await fetch(`/api/goals/${goal.id}`, {
    method: "PUT",
    body: JSON.stringify(goal),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });
  const goalUpdated = await response.json();
  console.log("Goal updated: ", goalUpdated);
  return goalUpdated;
}
export async function deleteGoal(id) {
  await fetch(`/api/goals/${id}`, {
    method: "DELETE",
  });
  console.log("Goal deleted: ", id);
}
