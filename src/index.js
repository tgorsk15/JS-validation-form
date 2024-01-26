import './styles.css';
import { formValidation } from './formLogic';
import { messageController } from './messageInterface';


export const initialValidationRun = formValidation()
// eslint-disable-next-line import/prefer-default-export
export const initialMessageRun = messageController();
