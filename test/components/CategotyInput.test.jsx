import { fireEvent, render, screen } from "@testing-library/react";
import { CategoryInput } from "../../src/components/CategoryInput";

describe ('test in CategoryInput', () => {

    test('should change the input value', ()=> {
        render(
            <CategoryInput
                type={'text'}
                id={'gif-category'}
                name={'gif-category'}
                placeholder={'Which gif do you want?'}
                setCategories = {()=>{}}
            />
        );

        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: 'dog'}});

        expect(input.value).toBe("dog")
    });

    test('should call setCategories() if it has a value', ()=> {

        const inputValue = "Goku";

        const setCategories = jest.fn();

        render(
            <CategoryInput
                type={'text'}
                id={'gif-category'}
                name={'gif-category'}
                placeholder={'Which gif do you want?'}
                setCategories = {setCategories}
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); // should have aria-label='form'

        fireEvent.change(input, {target: {value: inputValue}});

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(setCategories).toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalledTimes(2);
        //expect(setCategories).toHaveBeenCalledWith(Args);
    });

    test('should not call setCategories() if it has not value', ()=> {

        const inputValue = "     ";

        const setCategories = jest.fn();

        render(
            <CategoryInput
                type={'text'}
                id={'gif-category'}
                name={'gif-category'}
                placeholder={'Which gif do you want?'}
                setCategories = {setCategories}
            />
        );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); // should have aria-label='form'

        fireEvent.change(input, {target: {value: inputValue}});

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(setCategories).toHaveBeenCalledTimes(0);
        //expect(setCategories).not.toHaveBeenCalled();
    });
});