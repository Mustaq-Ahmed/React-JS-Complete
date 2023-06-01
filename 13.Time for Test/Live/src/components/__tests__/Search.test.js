import "@testing-library/jest-dom"

import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import Body from "../Body"
import store from "../../store/store"
import { RESTAURANT_DATA } from "../../mocks/dummyFetchData"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAURANT_DATA)
        },
    })
})

test("Shimmer should load on Homepage", () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    )

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer.children.length).toBe(14);
})

test("Restaurants should load on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn"))); // waits until search button loaded on Screen

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);
    // console.log(shimmer);
})


test("Search for Food(string) on Homepage", async () => {
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("search-input");

    fireEvent.change(input, {
        target: {
            value: "food",
        }
    })

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(2);
})