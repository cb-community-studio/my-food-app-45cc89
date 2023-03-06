import React from "react";
import { render, screen } from "@testing-library/react";

import RestaurantsPage from "../RestaurantsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders restaurants page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RestaurantsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("restaurants-datatable")).toBeInTheDocument();
    expect(screen.getByRole("restaurants-add-button")).toBeInTheDocument();
});
