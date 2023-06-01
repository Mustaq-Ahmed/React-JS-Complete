import "@testing-library/jest-dom"

import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import Body from "../Body"
import store from "../../store/store"
import { MENU_DATA } from "../../mocks/menuData"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_DATA)
        },
    })
})

test("Add Items to cart", async () => {
    const menuHeader = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaurantMenu />
                <Header />
            </Provider>
        </StaticRouter>
    );

    await waitFor(() => expect(menuHeader.getByTestId("menu")));

    const addBtn = menuHeader.getAllByTestId("add-btn");
    // menu contains lots of childrens each children contains a button and clicking on first children button   
    fireEvent.click(addBtn[0]);
    // fireEvent.click(addBtn[1]);

    const cartItems = menuHeader.getByTestId("cart");

    expect(cartItems.innerHTML).toBe("Cart-1 items")
})