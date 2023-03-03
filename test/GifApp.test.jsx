import { GifApp } from '../src/GifApp';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe('Test on <GifApp />', ()=> {

    test('should have only one h1 tag', ()=> {

        render(<GifApp />);

        const headings = screen.getAllByRole('heading');
        let h1_counter = 0;

        for (let heading of headings) {
            for (let key in heading) {
                if (key.includes('reactFiber')) {
                    if (heading[key].elementType == 'h1') {
                        h1_counter = h1_counter + 1;
                    }
                }
            }
        }

        expect(h1_counter).toBe(1);
    });

    test('should have h1 tag with the page name', ()=> {

        render(<GifApp />);

        const h1 = screen.getByTestId('heading_h1');

        expect(h1.innerHTML).toBe('GifApp');
    });

    test('should have one GifGrid tag in the initial state', async ()=> {

        render(<GifApp />);

        await waitFor(()=> {
            const GifGrids = screen.queryAllByTestId('GifGrid');
            expect(GifGrids.length).toBe(1);
        }, {timeout: 7000});

    });

    test('should clean all when the user cliks on button', async ()=> {

        render(<GifApp />);

        await waitFor(()=> {
            const GifGrids = screen.queryAllByTestId('GifGrid');
            expect(GifGrids.length).toBe(1);
        }, {timeout: 7000});

        const clean_all_button = screen.getByTestId('clean_all_button');

        fireEvent.click(clean_all_button);

        const GifGrids = screen.queryAllByTestId('GifGrid');

        expect(GifGrids.length).toBe(0);
    });
});