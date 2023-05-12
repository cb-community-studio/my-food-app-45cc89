import React from "react";
import { render, screen } from "@testing-library/react";

import RestaurantsEditDialogComponent from "../RestaurantsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders restaurants edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RestaurantsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("restaurants-edit-dialog-component")).toBeInTheDocument();
});
