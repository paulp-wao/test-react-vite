export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
        throw new Error("Failed to fetch todos");
    }

    const json = response.json();

    return json.slice(0, 10)
};