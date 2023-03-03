import { getUpper, getUser } from "./demoFunct";

describe('test demo', () => {

    test('test 1 - Numbers', () => {
        expect(1 === 1).toBe(true)
    });
    test('test 2 - Strings', () => {
        //Arrange
        const message1 = 'hola';

        //Act
        const message2 = message1.trim();

        //Assert
        expect(message1).toBe(message2)
    });

    test('test 3 - funciones', () => {
        //Arrange
        const entry = 'Hola';

        //Act
        const result = getUpper(entry);

        //Assert
        expect(result).toBe('HOLA')
    });

    test('test 4 - funciones y objetos', () => {
        //Arrange
        const testUser = {
            id: 1234,
            name: 'pepe'
        };

        //Act
        const user = getUser(testUser);

        //Assert
        expect(testUser).toEqual(user)
    });
});