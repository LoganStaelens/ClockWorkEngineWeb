import { useState, useEffect } from "react"

import axios from "axios";

class Menu {
    path: string = "";
    directories: Array<Menu> | undefined;
    files: Array<string> | undefined;
}

function App() {
    const [menu, setMenu] = useState<Menu | undefined>();

    const fetchMenu = async () => {
        const response = await axios.get('http://localhost:3001/documentation/menu');
        const responseMenu : Menu = response.data;
        setMenu(responseMenu);
    }

    useEffect(() => {fetchMenu()}, []);

    return (
        <p className="font-bold text-4xl">
            Hello World
        </p>
    )
}

export default App
