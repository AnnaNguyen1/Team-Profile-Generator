const { describe, it, expect } = require('@jest/globals');
const Intern = require('./lib/Intern');

describe('Intern', () => {
    it('sets school via contructor', => {
        const school = "Melb Uni";
        const emp = new Intern("Anna", "1234", "a@test.com", school);
        expect(emp.school).toEqual(school);
    });

    describe('getSchool', () => {
        it('Retrieve school via getSchool()', () => {
            const schoolVal = "Melb Uni";
            const emp = new Intern("Anna", "1234", "a@test.com", schoolVal);
            expect(emp.getSchool()).toEqual(schoolVal);    
        });
    });

    describe('getRole', () => {
        it('Retrieve role via getRole()', () => {
            const roleVal = "Intern";
            const emp = new Intern("Anna", "1234", "a@test.com", "Melb Uni");
            expect(emp.getRole()).toEqual(roleVal);
        });
    });
});