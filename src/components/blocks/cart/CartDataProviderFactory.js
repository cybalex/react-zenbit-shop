import { StubCartDataProvider } from "./StubCartDataProvider"

export const CartDataProviderFactory = {
    /**
     * Supported types: stub
     *
     * @param type
     * @returns {{get(): *}}
     */
    create(type) {
        switch (type) {
            case 'stub':
                return Object.create(StubCartDataProvider);
            default:
                return Object.create(StubCartDataProvider);
        }
    }
}
