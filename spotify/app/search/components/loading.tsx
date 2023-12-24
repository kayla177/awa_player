"use client"

import Box from "@/components/Box";
import { PacmanLoader } from "react-spinners";

const loading = () => {
    return (
        <div>
            <Box className="h-full flex items-center justify-center">
                <PacmanLoader color="#22c55e" size={40} />
            </Box>
        </div>
    )
}

export default loading;
