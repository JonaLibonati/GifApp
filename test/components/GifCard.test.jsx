import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard";

describe('<GifCard /> test', () => {

    const title = 'cats!';
    const url = ';klasdmnaskl';

    /* .toMatchSnapshot(); ---  Useful for static components. The first run time saves a snapshot. If the second time something changed, It will be flagged.

    test('should match with the snapshot', () => {

        const {container} = render( <GifCard title = {title} url = {url} />);

        expect( container ).toMatchSnapshot();
    }) */

    /* To find a specific text in the Component content but NO in its props */
    test('Should find a text', () => {

        const {getByText} = render( <GifCard title = {title} url = {url} /> );

        expect( getByText('cats!') ).toBeTruthy();

    });

    /* To find a specific text in the Component with a specific ID */
    test('Should find a text by test-id', () => {

        const {getByTestId} = render( <GifCard title = {title} url = {url} /> );

        expect( getByTestId('test-title').innerHTML ).toBe('cats!');
        expect( getByTestId('test-title').innerHTML ).toContain('cats');

    });

    /* render and screen are not the same. Render is used to access the element when is rendered. With screen, you can access the current state of the element and it depends of when it is called. */

    test('Should show URL and ALT', () => {

        render( <GifCard title = {title} url = {url} /> );

        /* screen.debug() */

        /*
        expect(screen.getByRole('img').src).toContain(url)
        expect(screen.getByRole('img').alt).toContain(title)
        */

        const {alt, src} = screen.getByRole('img');

        expect(src).toContain(url);
        expect(alt).toContain(title);

    });
});