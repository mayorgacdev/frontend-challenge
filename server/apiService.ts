
import axios, { AxiosResponse } from "axios";

interface Element {
    createdAt: string;
    name: string;
    avatar: string;
    id: string;
}

export async function fetchData(): Promise<Element[]> {
    try {
        const response: AxiosResponse<Element[]> = await axios.get('https://6172cfe5110a740017222e2b.mockapi.io/elements');
        const data: Element[] = response.data;
        return data;
    } catch (error) {
        throw error;
    }
}
