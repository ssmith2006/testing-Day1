import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { expect, test } from "vitest";


    test("renders hello message", () => {
        render(<App/>);
        expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
})
    
    