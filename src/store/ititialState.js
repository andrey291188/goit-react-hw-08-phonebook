export const initialState = {
    phonebook: { contactList: [], isLoading: false, error: "" },
    filters: { filter: "" },
    auth: { user: "", access_token: "", isLoadingAuth: false, error: "", isLoggedIn: false, isRefreshing: false},
}