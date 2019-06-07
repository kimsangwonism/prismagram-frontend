export const defaults = {
    isLoggedIn: localStorage.getItem("token") !== null ? true : false
};

export const resolvers = {
    Mutation: {
        logUerIn: (_, { token }, { cache }) => {
            localStorage.setItem("token", token);
            cache.writeData({
                data: {
                    isLoggedIn: true
                }
            });
            return null;
        },
        logUserOut: (_, __, { cache }) => {
            localStorage.removeItem("token");
            window.location.reload();
            return null;
        }
    }
};