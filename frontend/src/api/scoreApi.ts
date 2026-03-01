export async function fetchScores(userId: number, token: string) {
    const response = await fetch(`http://localhost:3000/scores/${userId}`, {
        headers: {
            Authorization: token,
        },
    });
    return response.json();
}