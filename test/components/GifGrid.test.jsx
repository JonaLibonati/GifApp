import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock("../../src/hooks/useFetchGif");

describe('Test on GifGrid', () => {

    const category = 'cats';
    const setCategories = jest.fn()

    test('should show "loading..."', ()=> {

        useFetchGif.mockReturnValue({
            gifs: [],
            loading: true,
        });

        render(
            <GifGrid
                category = {category}
                setCategories = {setCategories}
            />
        );

        expect(screen.getByText('loading...').innerHTML).toBe('loading...');
    });

    test('should load the gifs when useFetchGif() is called', ()=> {
        useFetchGif.mockReturnValue({
            gifs:
            [
                {id:'1', title:'title1', url:'url1'},
                {id:'2', title:'title2', url:'url2'}
            ],
            loading: false,
        });

        render(
            <GifGrid
                category = {category}
                setCategories = {setCategories}
            />
        );

        expect(screen.getAllByRole('heading')[0].innerHTML).toBe('cats');
        expect(screen.getAllByRole('img').length).toBe(2);
    })
});