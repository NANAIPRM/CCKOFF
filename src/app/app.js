import { ComponentService } from "../services/component.service";
import { ErrorService } from "../services/error.service";
import { parseInput } from "../utils/parse-input";
import { validateInputs } from "../utils/validate-inputs";


export const app = () => {
    const componentService = new ComponentService;
    const errorService = new ErrorService;

    errorService.hideError()
    const calTotal = () => {
    errorService.hideError();

    const inputs = componentService.getInputs()
    const numbers = parseInput(...inputs);
    console.log(numbers);
    const valid = validateInputs(...numbers);

    // pass : caltotal
    // fail : show Error
    if(valid){
        const [price,quantity,shipping] = numbers;
        // const totalPrice = price * quantity + shipping;
        const totalPrice = price * quantity + shipping
        componentService.setPrice(totalPrice);
    }else{
        errorService.showErrorMessage(inputs, numbers);
    }
    
};
componentService.onClick(calTotal);
}

app()
