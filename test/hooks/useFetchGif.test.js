import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe('Test on hook', ()=> {
    test('should return the initial state', ()=> {
        const {result} = renderHook(()=> useFetchGif('cats'));

        console.log(result.current);

        expect(result.current).toMatchObject(
            {
                gifs: [],
                loading: true,
            }
        );
    });

    test('should return the gifs', async ()=> {
        const {result} = renderHook(()=> useFetchGif('cats'));

        await waitFor(()=> {
            const {gifs, loading} = result.current;
            expect(gifs.length).toBeGreaterThan(0);
            expect(loading).toBe(false);
            /* {
                timeout: 2000, //optional
                interval: 500,  //optional
            } */
        });

        console.log(result.current);
    });
});