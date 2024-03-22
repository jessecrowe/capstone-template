module.exports ={
    app:{
        name: "That's Another story",
        
        apiEndpoint: process.env.API_URL ? `/${process.env.API_URL}` : "/api",
    },
    database:{
        DB_URL: process.env.DB_URL || "mongodb+srv://jaimenickels:jaimenickels@cluster0.unnvhti.mongodb.net/thatsanotherstory?retryWrites=true&w=majority",
        
        name: process.env.MONGODB_NAME || "That's Another Story",

    },
    jwt: {
        secret: process.env.JWT_SECRET || "jwt-secret",
        
        tokenLife: "7d",
    },
}