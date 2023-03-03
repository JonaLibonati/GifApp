import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('test en getgifs', ()=> {

    test('should return the gifs list', async () => {
        const gifs = await getGifs('Cats');

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});