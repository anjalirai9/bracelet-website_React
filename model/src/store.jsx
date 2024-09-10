
import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store=configureStore({

    reducer:{
        todo:todoReducer
    }
})
export default store;
































// import {configureStore} from "@reduxjs/toolkit";
// import colorReducer from "./colorSlice";
// const store=configureStore({

//     reducer:{
//         bgcolor:colorReducer
//     }
// })
// export default store;


















// import {configureStore} from "@reduxjs/toolkit";
// import cntReducer from "./counterSlice";

// const store=configureStore({
//     reducer:{
//         mycounter:cntReducer,
//     }
// })
// export default store;