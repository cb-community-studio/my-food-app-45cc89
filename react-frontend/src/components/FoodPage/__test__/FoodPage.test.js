import React from "react";
import { render, screen } from "@testing-library/react";

import FoodPage from "../FoodPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders food page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FoodPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("food-datatable")).toBeInTheDocument();
    expect(screen.getByRole("food-add-button")).toBeInTheDocument();
});
