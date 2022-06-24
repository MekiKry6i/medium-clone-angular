import { createAction , props} from "@ngrx/store";
import { RegisterUserInterface } from "src/app/shared/types/registerRiquest.interface";
import { ActionTypes } from "./action-types";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterUserInterface }>()
)