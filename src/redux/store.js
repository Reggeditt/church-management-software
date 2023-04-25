import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "./members/membersSlice";
import accountsReducer from "./accounts/accountsSlice";
import eventsReducer from "./events/eventsSlice";
import ministriesReducer from "./ministries/ministriesSlice";
import groupsReducer from "./groups/groupsSlice";

const store = configureStore({
  reducer: {
    members: membersReducer,
    accounts: accountsReducer,
    events: eventsReducer,
    ministries: ministriesReducer,
    groups: groupsReducer,
  },
});

export default store;
