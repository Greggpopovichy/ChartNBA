import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for

export default {
    getPlayers: function() {
        return axios.get("/api/players");
    },
    getPlayer: function(id) {
        return axios.get("/api/player", id);
    }
};
