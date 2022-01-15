import axios from "axios";

export default axios.create({

    baseURL: "http://80.208.225.82:8088/api",
    
    // headers: { "Content-Type": "multipart/form-data" }
});

// сервер
// http://80.208.225.82:8088/api/users

// локальный
// http://127.0.0.1:8088/api