import axios from "axios";

export const api = axios.create(
    {
        baseURL: `https://firestore.googleapis.com/v1/projects/projeto2-infinity/databases/(default)/documents/detalhes/`

    }
    )