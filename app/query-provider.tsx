'use client'

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function TanstackQueryProvider({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            { children }
        </QueryClientProvider>
    )
}